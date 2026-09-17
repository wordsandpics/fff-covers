---
layout: default
title: "Word and chapter count"
subtitle: "Show a story's length without crowding the cover"
section: Cover content
requirements: [Calibre settings, Template code]
previous: {label: "Add AO3 metadata", url: "/start/metadata/", section: "Start here"}
next: {label: "Status", url: "/display/status/", section: "Cover content"}
---

AO3 supplies the word and chapter counts. FanFicFare reads them and writes them into the `#words` and `#chapters` columns you created in [Add AO3 metadata]({{ '/start/metadata/' | relative_url }}).

## Shorten the word count

A calculated column can turn `34,291` into `34k`, leaving more room on the cover. In **Preferences → Add your own columns**, create a column named **Short wordcount**, with lookup name `short_words`, using **Column built from other columns**. Open the [short-word template]({{ '/code/calibre-column-templates/short_words.txt' | relative_url }}) and copy everything from `program:` to the end into the column's **Template** box.

A 750-word fic becomes `750w`, 6,500 words becomes `6.5k`, and 34,000 words becomes `34k`.

Use `{#short_words}` in Generate Cover's Custom Text field.

## Show chapters

In **Preferences → Add your own columns**, create **Short chapter count**, with lookup name `short_chapters`, as **Column built from other columns**. Open the [short-chapters template]({{ '/code/calibre-column-templates/short_chapters.txt' | relative_url }}) and copy everything from `program:` to the end into its **Template** box.

The template checks the number before adding the label, so it produces `1 chapter` or `12 chapters`. Add `{#short_chapters}` to Generate Cover's Custom Text field.

## Limitations

This basic display shows the current number of downloaded chapters only. It does not show the author's planned total. Continue to [Chapter-aware and dormant status]({{ '/advanced/status/' | relative_url }}) if you also want the completion state and last update date to affect the result.
