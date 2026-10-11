---
layout: default
title: "Likeability score"
subtitle: "Create an experimental engagement score for sorting your library"
section: Advanced options
requirements: [Calibre settings, Template code]
guide:
  result: "An optional number for sorting similar books in your Calibre library; it need not appear on a cover."
  needs:
    - {label: "Mapped Words and Chapters columns", url: "/start/metadata/"}
    - {label: "Kudos and Hits columns created on this page"}
  see: "Check the calculated score on a book with nonzero kudos and hits after mapping its source columns."
previous: {label: "Covers from existing EPUBs", url: "/advanced/existing-epubs/", section: "Advanced options"}
next: {label: "Troubleshooting", url: "/reference/troubleshooting/", section: "Reference"}
---

This optional column gives each fic a number you can use to sort your Calibre library. It compares kudos with hits, then adjusts slightly for word and chapter count; for example, you could sort a set of similar fics by this score. It does not change their covers unless you choose to put the number there.

## What the score does

The template starts with the fic's kudos-to-hits relationship, then adjusts the result slightly for its length and chapter count. It produces a number that you can display or sort in Calibre. A higher number only means “stronger by this particular formula”; it is not a rating from AO3.

## Create the source columns

The template needs these four Calibre columns. You may already have Words and Chapters from [Add AO3 metadata]({{ '/start/metadata/' | relative_url }}).

| Column heading | Lookup name | Column type | FanFicFare value |
|---|---|---|---|
| Kudos | `kudos` | Integers | Kudos |
| Hits | `hits` | Integers | Hits |
| Words | `words` | Integers | Words |
| Chapters | `chapters` | Integers | Chapters |

For each missing column:

1. Open **Calibre → Preferences → Add your own columns**.
2. Select the green **+** button.
3. Enter the heading and lookup name from the table. Calibre displays a `#` before custom lookup names, so `kudos` becomes `#kudos`.
4. Choose **Integers** as the column type, then save. Restart Calibre if asked.
5. Open **FanFicFare → Configure FanFicFare → Custom Columns** and map the column to the FanFicFare value shown in the table. Leave **New Only** unchecked so updates can refresh the number.

For a book already in your library, the new columns remain blank until FanFicFare processes it again. Select one test book and choose **FanFicFare → Update Existing FanFiction Books → Update Calibre Metadata from Website**. If its filled Saved metadata column already contains all four values, you can update from that column instead. Check **Edit metadata** to confirm that Kudos, Hits, Words, and Chapters are filled before creating or testing the score.

## Create the calculated score column

1. Return to **Preferences → Add your own columns** and select the green **+** button.
2. Enter **Likeability** as the heading and `likeability` as the lookup name.
3. Choose **Column built from other columns** as the column type.
4. Open the [Likeability template]({{ '/code/calibre-column-templates/likeability.txt' | relative_url }}) in a plain-text editor.
5. Copy everything from `program:` to the end into the new column's **Template** box.
6. Save and restart Calibre if asked. Add the Likeability column to your library view if you want to see or sort by it.

The calculated column reads `#kudos`, `#hits`, `#words`, and `#chapters` automatically. Do not map `#likeability` in FanFicFare: Calibre calculates it from the other four values. It also does not need to appear on a cover unless you specifically want it there.

## Limitations

This is a personal sorting aid, not an objective quality measurement. Newer fics and works in small fandoms naturally have fewer readers, and reader behavior varies by pairing, rating, date, and audience size. Missing or zero hits cannot produce a useful score. Compare results only within similar groups and adjust or ignore the formula if it is not useful to you.
