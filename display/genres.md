---
layout: default
title: "Genres and flags"
subtitle: "Turn many AO3 tags into a few useful cover labels"
section: Cover content
requirements: [Calibre settings, Template code]
previous: {label: "Ship code generator", url: "/display/ships/code-generator/", section: "Cover content"}
next: {label: "Genre code generator", url: "/display/genres/code-generator/", section: "Cover content"}
---

We get tags from AO3. FanFicFare can modify them—for example, by cleaning up inconsistent names—before writing them into your Calibre library. A calculated genre column then searches those saved tags and produces shorter labels for the cover.

## Create the genre column

Create **Genre**, with lookup name `genre`, as **Column built from other columns, behaves like tags**. If you have not created a calculated column before, review the explanation in [Add AO3 metadata]({{ '/start/metadata/' | relative_url }}).

The easiest option is the [Genre code generator]({{ '/display/genres/code-generator/' | relative_url }}): add your cover labels and matching keyphrases, generate the code, and copy it.

To edit the example by hand instead:

1. Open the [genre template]({{ '/code/calibre-column-templates/genre.txt' | relative_url }}) in a plain-text editor.
2. Replace the sample labels, such as `Fluff`, and the keyphrases beside them. The `|` character means “or”: `fluff|domestic bliss` matches either phrase. Copy a complete block when you need another genre.
3. In Calibre, open **Preferences → Add your own columns**, select **Genre**, and edit it.
4. Paste everything from the file's `program:` line to the end—or paste the code from the generator—into the column's **Template** box. Save the column and restart Calibre if asked.

Each genre has a cover label and a group of matching keyphrases. A story can match several genres. You can also use an emoji as the cover label—for example, `🌟` for a `recommended` tag.

Add `{#genre}` to Generate Cover's **Contents → Custom text** field when you are ready to show it on a cover.

## Use a tag as a simple flag

The same method can show a small flag for a tag you add yourself in Calibre. For example, create a generator row with `Recommended` as the matching keyphrase and `🌟` as its cover label. Any book whose standard Tags column contains “Recommended” can then show the star alongside its genres.

The downloadable template reads Calibre's standard `tags` field. If the tags you want to search are stored in a custom column instead, change `field('tags')` near the top of the template to that lookup name—for example, `field('#ao3_tags')`. The Genre code generator lets you enter the source column directly.

## Limitations

The basic method matches a keyphrase anywhere in the saved tags. For example, `romance` also matches `Necromancer AU`. Use specific phrases, or see [Precise tag matching]({{ '/advanced/tag-matching/' | relative_url }}) for ambiguous short terms.
