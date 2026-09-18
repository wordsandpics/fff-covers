---
layout: default
title: "Advanced display options"
subtitle: "Refine cover text with conditional formatting and fallbacks"
section: Cover content
requirements: [Generate Cover]
previous: {label: "Genre code generator", url: "/display/genres/code-generator/", section: "Cover content"}
next: {label: "Choose by fandom", url: "/choose/fandom/", section: "Choose a cover"}
---

The earlier recipes can create short values such as `Johnlock`, `Fluff`, `34k`, and `WIP`. This page refines how those values appear together. For opening a preset, adding ordinary `{#column}` values, and regenerating covers, see [Generate covers with your metadata]({{ '/start/generate-covers/' | relative_url }}).

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
