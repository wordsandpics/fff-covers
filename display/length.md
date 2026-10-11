---
layout: default
title: "Word and chapter count"
subtitle: "Show a story's length without crowding the cover"
section: Cover content
requirements: [Calibre settings, Template code]
guide:
  result: "Short cover text such as 34k or 12 chapters."
  needs:
    - {label: "A mapped Words or Chapters column for the option you choose", url: "/start/metadata/"}
  see: "Check the new calculated column, save the cover preset after adding its field, and regenerate one test cover."
previous: {label: "Generate covers with your metadata", url: "/start/generate-covers/", section: "Start here"}
next: {label: "Status", url: "/display/status/", section: "Cover content"}
---

This recipe makes length easier to read on a cover: `34,291` words can become `34k`, or a story can show `12 chapters`. FanFicFare saves AO3's counts in the `#words` and `#chapters` columns from [Add AO3 metadata]({{ '/start/metadata/' | relative_url }}). The two options below are independent; use either one or both.

## Shorten the word count

A calculated column can turn `34,291` into `34k`, leaving more room on the cover.

**You need for this option:** a filled `#words` column. You do not need `#chapters`.

1. Open **Preferences → Add your own columns** and create **Short wordcount**, with lookup name `short_words`.
2. Choose **Column built from other columns** as the column type.
3. Open the [short-word template]({{ '/code/calibre-column-templates/short_words.txt' | relative_url }}) and copy everything from `program:` to the end into the column's **Template** box.
4. Save the column and restart Calibre if asked.
5. Check `#short_words` on a test book: a value such as `34,291` in `#words` should appear as `34k`.
6. Add `{#short_words}` to Generate Cover's **Contents → Custom text** field, save the preset on its **Settings** tab, and regenerate the test book's cover.

A 750-word fic becomes `750w`, 6,500 words becomes `6.5k`, and 34,000 words becomes `34k`.

## Show chapters

**You need for this option:** a filled `#chapters` column. You do not need `#words`.

1. In **Preferences → Add your own columns**, create **Short chapter count**, with lookup name `short_chapters`.
2. Choose **Column built from other columns** as the column type.
3. Open the [short-chapters template]({{ '/code/calibre-column-templates/short_chapters.txt' | relative_url }}) and copy everything from `program:` to the end into its **Template** box.
4. Save the column and restart Calibre if asked.
5. Check `#short_chapters` on a test book, then add `{#short_chapters}` to Generate Cover's **Contents → Custom text** field. Save the preset and regenerate the cover.

The template checks the number before adding the label, so it produces `1 chapter` or `12 chapters`.

## Limitations

This basic display shows the current number of downloaded chapters only. It does not show the author's planned total. Continue to [Chapter-aware and dormant status]({{ '/advanced/status/' | relative_url }}) if you also want the completion state and last update date to affect the result.
