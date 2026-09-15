'use strict';
const assert = require('assert').strict;
const fs = require('fs');
const path = require('path');
global.window = {};
global.document = { getElementById: function () { return null; } };
require('../assets/js/genre-generator.js');
const core = window.FFFGenreGeneratorCore;
let failures = 0;
function test(name, fn) { try { fn(); console.log('PASS ' + name); } catch (error) { failures += 1; console.error('FAIL ' + name); console.error(error.stack); } }
const rows = [
  { label: 'Fluff', keywords: ['fluff', 'domestic bliss'] },
  { label: 'Angst', keywords: ['angst', 'grief'] },
  { label: '🌟', keywords: ['recommended'] }
];
test('generates and re-imports rows and source field', function () { const parsed = core.parseTemplate(core.generateTemplate(rows, '#ao3_tags')); assert.equal(parsed.source, '#ao3_tags'); assert.deepEqual(parsed.rows, rows); });
test('imports the tutorial template', function () { const code = fs.readFileSync(path.join(__dirname, '..', 'code/calibre-column-templates/genre.txt'), 'utf8'); const parsed = core.parseTemplate(code); assert.equal(parsed.source, 'tags'); assert.equal(parsed.rows.length, 4); assert.equal(parsed.rows[0].label, 'Fluff'); assert.ok(parsed.rows[0].keywords.includes('domestic bliss')); });
test('preview allows several matches in row order', function () { assert.equal(core.previewValue('Grief, Domestic Bliss', rows), 'Fluff, Angst'); });
test('preview shows a label only once', function () { assert.equal(core.previewValue('Fluff, Domestic Bliss', rows), 'Fluff'); });
test('preview demonstrates broad matching', function () { assert.equal(core.previewValue('Necromancer AU', [{ label: 'Romance', keywords: ['romance'] }]), 'Romance'); });
test('generated matching escapes punctuation', function () { const code = core.generateTemplate([{ label: 'H/C', keywords: ['hurt/comfort', 'AU (Modern)'] }], 'tags'); assert.ok(code.includes('au \\(modern\\)')); });
test('generated template preserves row order', function () { const code = core.generateTemplate(rows, 'tags'); assert.ok(code.includes('list_join')); assert.ok(!code.includes('list_union')); assert.ok(code.indexOf("'Fluff'") < code.indexOf("'Angst'")); });
process.on('exit', function () { if (failures) process.exitCode = 1; });
