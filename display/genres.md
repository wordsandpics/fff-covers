---
layout: default
title: "Genres and flags"
subtitle: "Turn many AO3 tags into a few useful cover labels"
section: Cover content
requirements: [Calibre settings, Template code]
guide:
  result: "Your own short cover labels based on tags, such as Fluff or a star."
  needs:
    - {label: "Tags saved in Calibre", url: "/start/metadata/"}
  see: "Check #genre on a test book, save the cover preset after adding it, and regenerate that cover."
previous: {label: "Ships", url: "/display/ships/", section: "Cover content"}
next: {label: "Genre code generator", url: "/display/genres/code-generator/", section: "Cover content"}
---

This recipe turns a story's tags into short labels on its cover. For example, a `Domestic Bliss` tag could show as `Fluff`. A **flag** is a symbol or emoji you choose to make a tag easy to spot at a glance: `Mpreg` could show as `🫃`, or a personal `Recommended` tag as `🌟`. These are your own display choices, not formal AO3 genres. FanFicFare saves the tags in Calibre, and the recipe checks them for the words or phrases you choose.

## Choose which tags to search

The example template and generator search Calibre's standard **Tags** column by default. That column can contain fandoms, relationships, characters, warnings, and other values as well as AO3 Additional Tags. Check a test book's Tags field before writing your rules. If you have already created a separate custom column for the tags you want, you can use its lookup name instead—for example, `#ao3_tags`. This guide does not create that example column, and you do not need it for the default method. The [Genre code generator]({{ '/display/genres/code-generator/' | relative_url }}) has a box for this choice.

## Create the genre column

Create **Genre**, with lookup name `genre`, as **Column built from other columns, behaves like tags**. If you have not created a calculated column before, review the explanation in [Add AO3 metadata]({{ '/start/metadata/' | relative_url }}).

The easiest option is the [Genre code generator]({{ '/display/genres/code-generator/' | relative_url }}): add your cover labels and matching keyphrases, generate the code, and copy it.

To edit the example by hand instead:

1. Open the [genre template]({{ '/code/calibre-column-templates/genre.txt' | relative_url }}) in a plain-text editor.
2. Replace the sample labels, such as `Fluff`, and the keyphrases beside them. The `|` character means “or”: `fluff|domestic bliss` matches either phrase. Copy a complete block when you need another genre.
3. In Calibre, open **Preferences → Add your own columns**, select **Genre**, and edit it.
4. Paste everything from the file's `program:` line to the end—or paste the code from the generator—into the column's **Template** box. Save the column and restart Calibre if asked.

Each row has a cover label and the tag words or phrases that trigger it. For example, a saved tag `Domestic Bliss` can match the keyphrase `domestic bliss` and produce the cover label `Fluff`. A story can produce several labels. You can also use an emoji as a label—for example, `🌟` for a `Recommended` tag.

Check `#genre` on a book with a matching tag and one without it. Then add `{#genre}` to Generate Cover's **Contents → Custom text** field, save the preset, and regenerate a test cover.

## Use a tag as a simple flag

The same method can show a flag for a tag you add yourself in Calibre. For example, create a generator row with `Recommended` as the matching keyphrase and `🌟` as its cover label. Any book whose standard Tags column contains “Recommended” can then show the star alongside its genres.

If you add `Recommended` to Calibre's standard Tags by hand, check that it remains there after a FanFicFare metadata update. FanFicFare's **Standard Columns** settings control whether that Tags field is updated on existing books.

The downloadable template reads Calibre's standard `tags` field. To use a separate tag column, change `field('tags')` near the top of the template to its lookup name—for example, `field('#ao3_tags')`. The Genre code generator lets you enter the source column directly.

## Limitations

The basic method matches a keyphrase anywhere in the saved tags. For example, `au` can also match `Haunted House`. Use specific phrases, or see [Precise tag matching]({{ '/advanced/tag-matching/' | relative_url }}) for ambiguous short terms.
