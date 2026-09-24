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
  assert.deepEqual(imported.mappings[0].aliases, ['John/Sherlock', 'Sherlock/John']);
});

test('imports templates generated in the old repeated-slot format', function () {
  const source = `program:
ordered_unique = list_remove_duplicates(field('#all_slashes'), ',');
s0 = re(list_item(ordered_unique, 0, ','), '^\\s+|\\s+$', '');
s1 = re(list_item(ordered_unique, 1, ','), '^\\s+|\\s+$', '');
s1_lc = lowercase(s0);
if contains(s1_lc, 'sherlock holmes/john watson|john/sherlock', '1', '') then
    t1 = 'Johnlock'
fi;
s2_lc = lowercase(s1);
if contains(s2_lc, 'sherlock holmes/john watson|john/sherlock', '1', '') then
    t2 = 'Johnlock'
fi`;
  const imported = core.parseTemplate(source);
  assert.equal(imported.limit, 2);
  assert.deepEqual(imported.mappings, [{
    pairing: 'sherlock holmes/john watson',
    shortName: 'Johnlock',
    aliases: ['john/sherlock']
  }]);
});

test('preview preserves order and removes repeated names', function () {
  const input = 'Sherlock Holmes/John Watson, Sherlock Holmes/John Watson, Shane Hollander/Ilya Rozanov, John/Sherlock';
  assert.equal(core.previewValue(input, mappings, 4), 'Johnlock, Hollanov');
});

test('preview ignores case but preserves participant order', function () {
  assert.equal(core.previewValue('SHERLOCK HOLMES/JOHN WATSON, SHANE HOLLANDER/ILYA ROZANOV', mappings, 2), 'Johnlock, Hollanov');
  assert.equal(core.previewValue('John Watson/Sherlock Holmes', mappings, 2), 'John Watson/Sherlock Holmes');
});

test('preview keeps a three-person ship separate from a pairing', function () {
  assert.equal(core.previewValue('A/B/C, A/B', mappings, 2), 'Triad, Pair');
});

test('preview returns Gen when there are no slash relationships', function () {
  assert.equal(core.previewValue('Sherlock Holmes & John Watson', mappings, 2), 'Gen');
});

test('preview uses ordered AO3 categories only when no relationship is found', function () {
  const options = { categoryFallback: true, categoryValue: 'M/M, Gen, Not Rated' };
  assert.equal(core.previewValue('', mappings, 2, options), 'Gen, M/M');
  assert.equal(core.previewValue('Sherlock Holmes/John Watson', mappings, 2, options), 'Johnlock');
  assert.equal(core.previewValue('', mappings, 2, { categoryFallback: true, categoryValue: 'Not Rated' }), 'Gen');
});

test('generated matching treats punctuation literally', function () {
  const generated = core.generateTemplate([
    { pairing: 'Name (TV)/Other.Name', shortName: 'Example', aliases: [] }
  ], 1);
  assert.ok(generated.includes('Name \\(TV\\)/Other\\.Name'));
  assert.match(generated, /\^\(\?:.*\)\$/);
});

test('generated matching is case-insensitive and uses the entered participant order', function () {
  const generated = core.generateTemplate([
    { pairing: 'Steve Harrington/Eddie Munson', shortName: 'Steddie', aliases: ['Steve/Eddie'] }
  ], 1);
  assert.ok(generated.includes("(?i)^(?:Steve Harrington/Eddie Munson|Steve/Eddie)$"));
  assert.ok(!generated.includes('Eddie Munson/Steve Harrington'));
});

test('generated mappings re-import without changing aliases', function () {
  const generated = core.generateTemplate(mappings, 2);
  assert.deepEqual(core.parseTemplate(generated).mappings, mappings);
});

test('category fallback generation normalizes and re-imports its column', function () {
  const generated = core.generateTemplate(mappings, 2, {
    categoryFallback: true,
    categoryColumn: 'relationship_type'
  });
  assert.ok(generated.includes("field('#relationship_type')"));
  assert.ok(generated.includes("'Gen, F/F, F/M, M/M, Multi, Other'"));
  const imported = core.parseTemplate(generated);
  assert.equal(imported.categoryFallback, true);
  assert.equal(imported.categoryColumn, '#relationship_type');
  assert.deepEqual(imported.mappings, mappings);
});

test('category fallback remains off for existing templates without it', function () {
  const imported = core.parseTemplate(core.generateTemplate(mappings, 2));
  assert.equal(imported.categoryFallback, false);
  assert.equal(imported.categoryColumn, '#ao3_category');
});

test('generated template preserves order instead of sorting lists', function () {
  const generated = core.generateTemplate(mappings, 3);
  assert.match(generated, /list_remove_duplicates/);
  assert.match(generated, /list_join/);
  assert.doesNotMatch(generated, /list_union/);
});

test('six-ship output uses one translation table and stays compact', function () {
  const five = core.generateTemplate(mappings, 5);
  const six = core.generateTemplate(mappings, 6);
  assert.match(six, /for ship in selected/);
  assert.equal((six.match(/# Translate each selected relationship\./g) || []).length, 1);
  assert.ok(six.length - five.length < 100);
  assert.ok(six.length < 32767);
});

process.on('exit', function () {
  if (failures) process.exitCode = 1;
});
