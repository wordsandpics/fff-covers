---
layout: default
title: "Chapter-aware and dormant status"
subtitle: "Combine completion, chapter progress, and last-update information"
section: Advanced options
requirements: [Calibre settings, Template code]
guide:
  result: "A status label that can include chapter count and indicate a long gap since an update."
  needs:
    - {label: "Mapped Status, Chapters, and Updated columns", url: "/start/metadata/"}
    - {label: "The basic short-status column", url: "/display/status/"}
  see: "Check #short_status on active, complete, and older test books, then regenerate their covers."
previous: {label: "Ship code generator", url: "/display/ships/code-generator/", section: "Advanced options"}
next: {label: "Precise tag matching", url: "/advanced/tag-matching/", section: "Advanced options"}
---

This optional version of the [basic Status recipe]({{ '/display/status/' | relative_url }}) combines several columns to give your cover a more informative status. It can show chapter progress and whether an unfinished story has gone a long time without an update.

## What it can show

- Complete one-shot → `✅`
- Complete multichapter work → `✅ 9ch`
- Active incomplete work → `8ch`
- Incomplete work not updated for more than a chosen period → `😴 8ch`

## Before you begin

Create and map Status, Chapters, and Updated as described in [Add AO3 metadata]({{ '/start/metadata/' | relative_url }}). You also need the `#short_status` calculated column from the [basic Status recipe]({{ '/display/status/' | relative_url }}).

## What “dormant” means

The sleeping symbol means only that the work has not been updated within your chosen number of days. It cannot tell whether the author has abandoned it, plans to return, or considers it complete without changing the status.

The cover is an image, so its status shows what was true when you last generated it. A fic may become dormant later, or receive a new chapter, without its existing cover changing. Regenerate the cover to update the label; if the story itself has changed, refresh its FanFicFare metadata first.

## Add the template

1. Open the [chapter-aware status template]({{ '/code/calibre-column-templates/short_status_advanced.txt' | relative_url }}) in a plain-text editor.
2. In Calibre, go to **Preferences → Add your own columns** and edit `#short_status`.
3. Replace its **Template** box with everything from `program:` to the end.
4. Near the top, set your preferred dormant period. This line sets it to one year:

   ```
   dormant_days = 365;
   ```

5. Save the column and restart Calibre if asked. Check `#short_status` on a completed work, a recent in-progress work, and an older in-progress work. Then regenerate a test cover that uses `{#short_status}`.

Change `365` if you prefer a shorter or longer period. The template checks completion first, so an old but completed work still shows as complete.

## Limitations

This broadly compatible version shows the current chapter count, not the author's planned total. FanFicFare can save the current chapter count from supported sites, but a separate planned-total value is not consistently available through the standard setup. A missing or incorrect Updated date also prevents reliable dormant detection.
