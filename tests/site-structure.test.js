const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const ignoredDirectories = new Set(['.git', '_layouts', 'scripts', 'tests']);

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (entry.name.startsWith('.') || ignoredDirectories.has(entry.name)) return [];
    const full = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function frontmatter(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---/);
  return match ? match[1] : '';
}

const markdownFiles = walk(root).filter((file) => file.endsWith('.md') && path.basename(file) !== 'RESTRUCTURE_PLAN.md');
const published = markdownFiles.filter((file) => !/^published:\s*false$/m.test(frontmatter(fs.readFileSync(file, 'utf8'))));
const routes = new Set(['/']);

for (const file of published) {
  if (path.basename(file) === 'README.md') continue;
  const text = fs.readFileSync(file, 'utf8');
  const explicit = frontmatter(text).match(/^permalink:\s*(\S+)/m);
  if (explicit) routes.add(explicit[1]);
  else if (path.basename(file) !== 'index.md') {
    const relative = path.relative(root, file).replace(/\.md$/, '');
    routes.add(`/${relative}/`);
  }
}

const failures = [];
const config = fs.readFileSync(path.join(root, '_config.yml'), 'utf8');
for (const match of config.matchAll(/^\s+url:\s*(\/\S*)$/gm)) {
  if (!routes.has(match[1])) failures.push(`Navigation route does not exist: ${match[1]}`);
}

for (const file of published) {
  if (path.basename(file) === 'README.md') continue;
  const text = fs.readFileSync(file, 'utf8');
  const relativeName = path.relative(root, file);
  const fm = frontmatter(text);

  if (file !== path.join(root, 'index.md')) {
    if (!/^section:\s*.+$/m.test(fm)) failures.push(`${relativeName}: missing section`);
    if (!/^previous:\s*.+$/m.test(fm)) failures.push(`${relativeName}: missing previous page`);
  }
  if (!/^next:\s*.+$/m.test(fm)) failures.push(`${relativeName}: missing next page`);

  for (const match of text.matchAll(/\{\{\s*['"](\/[^'"]+)['"]\s*\|\s*relative_url\s*\}\}/g)) {
    const target = match[1];
    if (target.startsWith('/assets/') || target.startsWith('/code/')) {
      if (!fs.existsSync(path.join(root, target))) failures.push(`${relativeName}: missing file ${target}`);
    } else if (!routes.has(target)) {
      failures.push(`${relativeName}: missing page ${target}`);
    }
  }

  let inFence = false;
  let lastHeading = 1;
  for (const [index, line] of text.split('\n').entries()) {
    if (line.startsWith('```')) { inFence = !inFence; continue; }
    if (inFence) continue;
    const heading = line.match(/^(#{2,6})\s/);
    if (heading) {
      const level = heading[1].length;
      if (level > lastHeading + 1) failures.push(`${relativeName}:${index + 1}: heading skips from h${lastHeading} to h${level}`);
      lastHeading = level;
    }
    const htmlHeading = line.match(/<h([1-6])\b/i);
    if (htmlHeading && Number(htmlHeading[1]) > lastHeading + 1) {
      failures.push(`${relativeName}:${index + 1}: HTML heading skips to h${htmlHeading[1]}`);
    }
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`PASS ${routes.size} routes, navigation links, downloads, and page structure`);
