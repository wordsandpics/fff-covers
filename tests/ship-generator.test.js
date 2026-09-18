'use strict';

const assert = require('assert').strict;
const fs = require('fs');
const path = require('path');

global.window = {};
global.document = { getElementById: function () { return null; } };
require('../assets/js/ship-generator.js');

const core = window.FFFShipGeneratorCore;
let failures = 0;

function test(name, callback) {
  try {
    callback();
    console.log('PASS ' + name);
  } catch (error) {
    failures += 1;
    console.error('FAIL ' + name);
    console.error(error.stack);
  }
}
const mappings = [
  {
    pairing: 'Sherlock Holmes/John Watson',
    shortName: 'Johnlock',
    aliases: ['John/Sherlock', 'Sherlock/John']
  },
  {
    pairing: 'Shane Hollander/Ilya Rozanov',
    shortName: 'Hollanov',
    aliases: []
  },
  {
    pairing: 'A/B/C',
    shortName: 'Triad',
    aliases: []
  },
  {
    pairing: 'A/B',
    shortName: 'Pair',
    aliases: []
  }
];

test('generates and re-imports templates for limits one through six', function () {
  for (let limit = 1; limit <= 6; limit += 1) {
    const generated = core.generateTemplate(mappings, limit);
    const imported = core.parseTemplate(generated);
    assert.equal(imported.limit, limit);
    assert.deepEqual(imported.mappings, mappings);
  }
});

test('imports the tutorial template', function () {
  const source = fs.readFileSync(path.join(__dirname, '..', 'code', 'calibre-column-templates', 'short_ship_advanced.txt'), 'utf8');
  const imported = core.parseTemplate(source);
  assert.equal(imported.limit, 2);
  assert.equal(imported.mappings.length, 2);
  assert.equal(imported.mappings[0].shortName, 'Johnlock');
  assert.deepEqual(imported.mappings[0].aliases, ['john/sherlock', 'sherlock/john']);
});

test('preview preserves order and removes repeated names', function () {
  const input = 'Sherlock Holmes/John Watson, Sherlock Holmes/John Watson, Shane Hollander/Ilya Rozanov, John/Sherlock';
  assert.equal(core.previewValue(input, mappings, 4), 'Johnlock, Hollanov');
});

test('preview matches relationships regardless of case or participant order', function () {
  assert.equal(core.previewValue('JOHN WATSON/SHERLOCK HOLMES, Ilya Rozanov/Shane Hollander', mappings, 2), 'Johnlock, Hollanov');
});

test('preview keeps a three-person ship separate from a pairing', function () {
  assert.equal(core.previewValue('A/B/C, A/B', mappings, 2), 'Triad, Pair');
});

test('preview returns Gen when there are no slash relationships', function () {
  assert.equal(core.previewValue('Sherlock Holmes & John Watson', mappings, 2), 'Gen');
});

test('generated matching treats punctuation literally', function () {
  const generated = core.generateTemplate([
    { pairing: 'Name (TV)/Other.Name', shortName: 'Example', aliases: [] }
  ], 1);
  assert.ok(generated.includes('Name \\(TV\\)/Other\\.Name'));
  assert.match(generated, /\^\(\?:.*\)\$/);
});

test('generated matching is case-insensitive and supports sort_ships order', function () {
  const generated = core.generateTemplate([
    { pairing: 'Steve Harrington/Eddie Munson', shortName: 'Steddie', aliases: ['Steve/Eddie'] }
  ], 1);
  assert.ok(generated.includes("(?i)^(?:Steve Harrington/Eddie Munson|Steve/Eddie)$"));
  assert.ok(generated.includes("(?i)^(?:Eddie Munson/Steve Harrington|Eddie/Steve)$"));
});

test('automatic sort_ships variants do not become imported aliases', function () {
  const generated = core.generateTemplate(mappings, 2);
  assert.deepEqual(core.parseTemplate(generated).mappings, mappings);
});

test('generated template preserves order instead of sorting lists', function () {
  const generated = core.generateTemplate(mappings, 3);
  assert.match(generated, /list_remove_duplicates/);
  assert.match(generated, /list_join/);
  assert.doesNotMatch(generated, /list_union/);
});

process.on('exit', function () {
  if (failures) process.exitCode = 1;
});
