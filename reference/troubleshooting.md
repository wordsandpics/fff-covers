---
layout: default
title: "Troubleshooting"
subtitle: "Find and fix common cover and metadata problems"
section: Reference
previous: {label: "Likeability score", url: "/advanced/likeability/", section: "Advanced options"}
next: {label: "Downloads", url: "/reference/downloads/", section: "Reference"}
---

Start with the problem you can see. If none of these fits, use the [stage-by-stage check](#find-the-first-stage-that-failed) at the end with one test fic.

## I updated a book, but its cover did not change

First, select that book and run **Generate Cover** manually with the preset you expected. If this makes the right cover, the preset works; check when FanFicFare is allowed to call it automatically:

1. In **FanFicFare → Configure FanFicFare → Calibre Cover**, check **Generate Calibre Cover** and that **Plugin Generate Cover** is selected. Confirm the **Default** row points to your saved preset.
2. If **Generate Covers Only for New Books** is checked, FanFicFare will not generate a new cover for this existing book. If you selected **Yes, unless FanFicFare found a cover image**, a cover from the story can also take precedence over your generated design.
3. If you edited the preset, return to its **Settings** tab and click **Save**. Then generate the cover again. Saving the design does not redraw covers already in your library.

If the manual run still gives the wrong result, check the selected preset, its background image, and **Contents → Custom text**. See [Step 4's cover-generation instructions]({{ '/start/generate-covers/' | relative_url }}) for the one-book test. If you want to keep a hand-chosen cover during updates, see [Protect custom covers]({{ '/choose/protect-covers/' | relative_url }}).

## All my covers look the same or show the book symbol

The starter **Classics** preset deliberately has a generic book symbol, and FanFicFare initially uses that one preset for every fic. It does not find fandom artwork automatically. To vary the artwork, [make or choose background images and save separate presets]({{ '/start/artwork/' | relative_url }}), then add [cover-selection rules]({{ '/choose/fandom/' | relative_url }}) if you want FanFicFare to choose among them. Update one matching book to test the automatic choice; existing cover images will not change just because you added a preset or rule.

## The wrong fandom cover was chosen

If manually choosing the intended preset works, check the automatic selection rule in `personal.ini`. The preset name must exactly match a saved Generate Cover preset. FanFicFare uses the **first matching rule**, so put specific ship or tag rules before broader fandom rules. Test with one book that should match and one that should use the default preset. [Choose by fandom]({{ '/choose/fandom/' | relative_url }}) shows the rule order.

For selection, prefer the source metadata FanFicFare has just read. A calculated Calibre column may show the right value *after* the update even though it was not ready when FanFicFare selected the cover. Also check whether a source cover took precedence under **Yes, unless FanFicFare found a cover image**.

## I changed a tag or rule, but the old value remains

Decide what changed before updating again:

- **The story's tags changed on the website:** Use **Update Calibre Metadata from Website** to fetch current information. A Saved metadata column is a snapshot from an earlier download; updating *from* it cannot discover a newly added tag.
- **You changed a FanFicFare mapping or `personal.ini` cleanup rule:** Reprocess one book from the website or its filled Saved metadata column. Then check the destination column in **Edit metadata**.
- **You only changed cover text or artwork:** Save the Generate Cover preset and regenerate the cover. You do not need to fetch story metadata again if the Calibre columns are already correct.

An already-generated cover is an image, not a live view of the book's metadata. Changing a tag, rule, column, or preset does not alter that image until a new cover is generated.

## My cover has empty fields

First, find out whether the *book* has the value or only the cover is missing it. Select one affected book, open **Edit metadata**, and check the column named in the cover text—for example, `{#ship}` reads the `#ship` column.

1. **The Calibre column is blank:** Check whether the story page actually has that information. Some stories and sites do not supply every value. If it is available, check the column's [FanFicFare mapping]({{ '/start/metadata/' | relative_url }}) and make sure **New Only** is unchecked for an existing book. A newly created column does not fill itself for books already in your library: update one book with **Update Calibre Metadata from Website**, or use **Update Calibre Metadata from Saved Metadata Column** if that book already has a saved snapshot containing the value. Then check the column again.
2. **A calculated column is blank, but its input column has a value:** Check that column's template in **Preferences → Add your own columns**. Use the template editor preview on the same book to find where the value disappears.
3. **The column has a value, but the cover is still blank:** Open the intended Generate Cover preset and check **Contents → Custom text** for the right `{#lookup_name}`. Save the preset, then [regenerate the cover]({{ '/start/generate-covers/' | relative_url }}). An existing cover image does not change when a column or preset changes.

If the source genuinely has no value, a metadata update cannot fill it. Remove that field from the cover, or use the [advanced display options]({{ '/display/combining-fields/' | relative_url }}) to hide its label or separator when it is empty. If the story page is unavailable but you still have its EPUB, [recover metadata from the EPUB]({{ '/advanced/existing-epubs/' | relative_url }}) if possible.

## FanFicFare cannot find a story URL

This often happens with a book imported into Calibre from an EPUB downloaded elsewhere. A visible link somewhere in the book is not necessarily a story URL FanFicFare can recognize for an update. First check **Edit metadata → Ids** for a `url:` identifier pointing to the individual story, such as `url:https://archiveofourown.org/works/123456`.

- **The story page still exists:** Copy its address and add it to the book's **Ids** as a `url:` identifier. Save, then retry **Update Calibre Metadata from Website** on that book. Use the individual story URL, not an AO3 fandom, search, or series page.
- **The EPUB might contain the URL, but you do not know it:** Try **FanFicFare → Get Story URLs from Selected Books** to see whether FanFicFare recognizes one. If it finds a URL, you can add it to **Ids** and retry. If it finds none, you will need to locate the story URL yourself or use the EPUB recovery route below.
- **The story page is gone or cannot be reached:** Adding its URL will not make a website update work. If you still have an EPUB, [Extract EPUB Metadata]({{ '/advanced/existing-epubs/' | relative_url }}) may recover metadata into Calibre columns or a Saved metadata snapshot without visiting the site. Check its preview to see what it actually found.

FanFicFare's [FAQ on adding a URL to an existing book](https://github.com/JimmXinu/FanFicFare/wiki/FAQs#how-do-i-add-a-url-to-an-calibre-existing-book) has more background on where it looks for story URLs.

## Find the first stage that failed

Information passes through the source site, FanFicFare, saved Calibre columns, optional calculated columns, and finally Generate Cover. Check one test fic in that order instead of changing several settings at once:

1. **Source:** On the story page, find the value you expect. If it is absent, FanFicFare cannot fetch it. If the page is unavailable, [check the EPUB instead]({{ '/advanced/existing-epubs/' | relative_url }}).
2. **FanFicFare mapping:** In **Configure FanFicFare → Custom Columns**, check that the destination column maps to the intended source field and **New Only** is unchecked for existing books.
3. **Saved Calibre value:** Update the book from the website or a filled Saved metadata column, then check its fields in **Edit metadata**. If FanFicFare cannot start because it lacks a URL, use [the URL checks above](#fanficfare-cannot-find-a-story-url).
4. **Calculated value:** If the saved input is correct but `#short_words`, `#short_ships`, `#genre`, or `#short_status` is wrong, check that column's **Template** in **Preferences → Add your own columns** and preview it with the same book.
5. **Cover text:** If the column is correct, check the intended preset's **Contents → Custom text** for the right `{#lookup_name}`. Save the preset and generate one cover manually.

The first place where the value is missing or wrong tells you which setting to fix.
