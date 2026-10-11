---
layout: default
title: "4. Generate covers with your metadata"
subtitle: "Put saved values on a cover and update existing books"
permalink: /start/generate-covers/
section: Start here
requirements: [Calibre settings, FanFicFare, Generate Cover]
guide:
  result: "A cover that shows values you saved in Calibre, such as relationships, words, and status."
  needs:
    - {label: "A saved cover preset", url: "/start/first-cover/"}
    - {label: "Mapped metadata columns from Step 3", url: "/start/metadata/"}
  see: "Save the preset after editing its text, then generate a cover for one test book."
previous: {label: "Add AO3 metadata", url: "/start/metadata/", section: "Start here"}
next: {label: "Word and chapter count", url: "/display/length/", section: "Cover content"}
---

You now have FanFicFare metadata in Calibre columns. This step puts a few of those values on your cover and shows how to make an existing cover reflect changes.

## Open the cover text settings

1. Select a fic with values in the columns you made in Step 3, then open **Generate Cover** from Calibre's toolbar.
2. Select the preset you want to change.
3. Open the **Contents** tab.
4. Find **Custom text**. This is where every example on this page goes.

The starter preset uses `{pubdate}` in this box. You can replace it, keep it on another line, or combine it with saved metadata.

![Generate Cover custom columns in cover text]({{ '/assets/img/gcc-custom-columns.png' | relative_url }})

## Put saved values on a cover

The names inside braces are Calibre lookup names. Replace `{pubdate}` with a simple layout such as:

```
{#ship}
{#words} · {#status}
```

Each line becomes a separate line on the cover. For a fic whose relationship is `Sherlock Holmes/John Watson`, word count is `34,291`, and status is `Completed`, the result would be those names on the first line and `34,291 · Completed` on the second. The middle dot is ordinary visible text, so you can remove it, change the order, or use a different separator. This first version may be long; the next recipes create shorter cover-ready values.

Return to **Settings** and click **Save** so the edited Custom text becomes part of the preset. Saving a preset changes the design; it does not replace covers that were already generated.

## Generate a cover manually

Use manual generation when you want to test a changed preset or refresh the cover of a selected book right away:

1. Select the book in Calibre and open **Generate Cover** from the toolbar.
2. Select the saved preset you want to use. If you changed its design or Custom text, click **Save** on the **Settings** tab first.
3. Click **OK** to generate the cover. Check the result in Calibre's book details panel.

## Let FanFicFare generate covers automatically

In [Step 1]({{ '/start/first-cover/' | relative_url }}), you selected **Classics** as FanFicFare's default Generate Cover preset. On later downloads or updates, FanFicFare uses it when the book needs a generated cover. If you chose to keep covers found on the source site, those source covers will remain. Manual Generate Cover is useful when you want to apply a saved preset to a selected book immediately.

As you add more metadata, the [Choose a cover]({{ '/choose/fandom/' | relative_url }}) recipes can tell FanFicFare to select a different preset for a fandom, ship, or AO3 tag.

## Make an existing cover reflect a change

An already-generated cover is an image; it does not rewrite itself when you change a setting. What you do next depends on what changed:

| What you changed | What to do for an existing book |
|---|---|
| Added a mapped column or changed its FanFicFare mapping | Update the book's metadata from AO3, or from a filled Saved metadata column if the needed value was captured there. Check the column, then regenerate the cover. |
| Changed a calculated-column template | Save the column and restart Calibre if asked. Check its new value, then regenerate the cover. You do not need to fetch metadata from AO3 again just for this change. |
| Changed cover text, fonts, or artwork | Save the Generate Cover preset, then regenerate the cover. You do not need to refresh the book's metadata if its saved values are already correct. |
| Changed a FanFicFare rule that chooses a preset | Save `personal.ini`, then run a FanFicFare update on a matching book. Manual generation uses whichever preset you choose; a FanFicFare update is how you check the automatic choice. |

For the first row, [Step 3]({{ '/start/metadata/' | relative_url }}) gives the exact FanFicFare update choices. A Saved metadata column only helps if it was already filled for that book; use the website option when you need current source-site values.

## Next steps

The optional recipes can shorten [word and chapter counts]({{ '/display/length/' | relative_url }}), [status]({{ '/display/status/' | relative_url }}), and [ships]({{ '/display/ships/' | relative_url }}), or turn [tags into cover labels]({{ '/display/genres/' | relative_url }}). Pick the ones you want. Once their values are working, [Advanced display options]({{ '/display/combining-fields/' | relative_url }}) shows how to hide empty separators, add labels, and build more polished layouts.
