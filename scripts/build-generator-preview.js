'use strict';

const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const sourcePath = path.join(projectRoot, 'ship-generator.md');
const outputPath = path.join(projectRoot, '.generator-preview.html');
const cssPath = path.join(projectRoot, 'assets/css/style.css');
const javascriptPath = path.join(projectRoot, 'assets/js/ship-generator.js');
const source = fs.readFileSync(sourcePath, 'utf8');
const css = fs.readFileSync(cssPath, 'utf8');
const javascript = fs.readFileSync(javascriptPath, 'utf8');

const generatorStart = source.indexOf('<div class="ship-generator"');
const generatorEnd = source.indexOf('<noscript>');

if (generatorStart < 0 || generatorEnd < 0 || generatorEnd <= generatorStart) {
  throw new Error('Could not find the generator markup in ship-generator.md');
}

const generatorMarkup = source.slice(generatorStart, generatorEnd).trim();

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Short ship generator — fff-covers preview</title>
  <style>${css}</style>
</head>
<body>
  <header class="topbar">
    <span class="topbar-title">fff-covers</span>
    <span class="topbar-sub">Local generator preview</span>
  </header>
  <div class="site-wrap preview-site-wrap">
    <aside class="sidebar preview-sidebar" aria-label="Preview information">
      <div class="nav-section">Preview</div>
      <span class="nav-link">5. Obsessive nerdery 1- Advanced ships</span>
      <span class="nav-link nav-subitem active">Short ship generator</span>
    </aside>
    <main class="content">
      <h1>Short ship generator</h1>
      <p class="page-subtitle">Build the repetitive Calibre template without writing it by hand</p>
      <p>This generator creates the <code>#short_ships</code> template used in step 5. Add the full AO3 relationship name and the shorter name you want on your covers; the generator writes the repetitive Calibre code for you.</p>
      <p>Before using it, complete the <code>#all_slashes</code> setup from step 5. This tool creates the calculated template only—it does not create the Calibre columns or change <code>personal.ini</code>.</p>
      <div class="callout note">
        <div class="callout-title">Your information stays in your browser</div>
        <p>The generator runs entirely on this page. It does not upload your ship list. It saves a temporary draft in this browser so an accidental refresh does not erase your work.</p>
      </div>
      ${generatorMarkup}
    </main>
  </div>
  <script>${javascript}</script>
</body>
</html>
`;

fs.writeFileSync(outputPath, html);
console.log(outputPath);
