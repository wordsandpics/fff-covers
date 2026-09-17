---
layout: default
title: "Put it all together"
subtitle: "Add your finished metadata fields to a cover preset"
section: Cover content
requirements: [Generate Cover]
previous: {label: "Genre code generator", url: "/display/genres/code-generator/", section: "Cover content"}
next: {label: "Choose by fandom", url: "/choose/fandom/", section: "Choose a cover"}
---

The earlier pages created short values such as `Johnlock`, `Fluff`, `34k`, and `WIP`. This page places those values on your generated cover.

## Open the cover text settings

1. Open **Generate Cover** from Calibre's toolbar.
2. Select the preset you want to change.
3. Open the **Contents** tab.
4. Find **Custom text**. This is where every example on this page goes.

The starter preset currently uses `{pubdate}` in this box. You can replace it, keep it on another line, or combine it with your new fields.

## Put values on one line

Paste this into **Custom text**:

```
{#short_ships} · {#genre} · {#short_words} · {#short_status}
```

The names inside braces are Calibre lookup names. The middle dots are ordinary visible separators. A cover might show:

```text
Johnlock · Fluff · 34k · WIP
```

You can remove any field you do not want, change their order, or replace the dots with another separator.

## Put values on separate lines

Each line in **Custom text** becomes a separate line on the cover:

```
{#short_ships}
{#genre}
{#short_words} · {#short_status}
```

## Hide labels and separators when a value is empty

An empty field can leave an unwanted separator behind. `{#genre:| · |}` adds <code> · </code> before Genre only when Genre contains something. `{#short_words:|| words|}` adds <code> words</code> after the short word count only when that value exists.

You can add both a label before a value and text after it:

```
{#short_words:|Length: | words|}
```

This shows `Length: 34k words` when the value exists and nothing when it is empty.

## Add a conditional label and line break

The characters `\n` insert a new line. This example displays `Tags:` followed by the genre on the next line, but hides both when Genre is empty:

```
{#genre:|Tags: \n|}
```

## Use a fallback

`{#short_ships:ifempty(Gen)}` displays `Gen` when the ship column is empty. Paste it in **Custom text** wherever you would otherwise use `{#short_ships}`.

## Select the first item

`{#fandom:list_item(0,\,)}` shows only the first value from a comma-separated fandom column. This is useful when a crossover has several fandom values but the cover has room for only one.

## Save and test the preset

Return to Generate Cover's **Settings** tab and save the preset. Test it on several books, including one with a missing value and one with long metadata. When FanFicFare uses this preset on a later download or update, Generate Cover reads the current values from these columns.

## Limitations

Formatting can hide an empty value, but it cannot create metadata that FanFicFare did not save. Test the result with books that have missing fields, long values, and several tags.
