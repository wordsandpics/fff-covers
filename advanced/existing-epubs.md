---
layout: default
title: "Covers from existing EPUBs"
subtitle: "Recover cover metadata when FanFicFare cannot fetch a story"
permalink: /advanced/existing-epubs/
section: Advanced options
requirements: [Calibre settings, FanFicFare, Generate Cover, Extract EPUB Metadata]
guide:
  result: "Metadata recovered from an existing EPUB and saved in Calibre columns, ready to use on a cover."
  needs:
    - {label: "The story's EPUB already in Calibre"}
    - {label: "A working Generate Cover preset", url: "/start/first-cover/"}
  see: "Choose Saved metadata plus FanFicFare, or direct Calibre columns; check the recovered values, then generate a cover."
previous: {label: "Metadata cleanup", url: "/advanced/metadata-cleanup/", section: "Advanced options"}
next: {label: "Likeability score", url: "/advanced/likeability/", section: "Advanced options"}
---

If FanFicFare cannot reach a fic's webpage, you may still be able to make a cover from information inside the EPUB you already have. For example, if that EPUB contains its relationships and word count, [Extract EPUB Metadata](https://github.com/wordsandpics/Extract-epub-metadata) can write those values to your Calibre columns, including the Saved metadata column FanFicFare uses for AO3 stories. You can then put them on a generated cover. The plugin does not download a missing story or recover information that is not in the EPUB.

This page covers **one story per EPUB**. The book might have been downloaded from AO3, through fichub.net, or from another source; what matters is whether its metadata is present and readable. You can use the Saved metadata route below, or write directly to standard and custom Calibre columns if you have not set up Saved metadata. Try one book before selecting many, and keep a backup of your library.

## 1. Install the plugin

1. Download the plugin ZIP from the [Extract EPUB Metadata releases](https://github.com/wordsandpics/Extract-epub-metadata/releases). Under **Assets**, choose the file named `extract_epub_metadata-…zip`, not GitHub's **Source code (zip)**.
2. In Calibre, open **Preferences → Plugins → Load plugin from file** and choose that ZIP. Restart Calibre if prompted.

## 2. Choose where the recovered metadata goes

The **Saved metadata route** is the default for this guide. FanFicFare will use its existing column mappings and any `personal.ini` rules when it processes the recovered values.

**You need for this route:** the long-text Saved metadata column selected in both plugins. If you have not set it up yet, follow [Step 3's optional Saved metadata instructions]({{ '/start/metadata/' | relative_url }}) first.

1. Open **Preferences → Plugins → Extract EPUB Metadata → Customize plugin**.
2. Leave **Save all extracted metadata** enabled. Set **Saved Metadata Column** to the *same column* selected in FanFicFare—`#fff_saved_metadata` if you used this guide's example.
3. Leave **Update standard Calibre metadata** and **Update custom columns** off for this route. FanFicFare will fill those fields in step 4.
4. Leave **Preview before writing** and **Add missing story-URL identifier** on. Leave **Overwrite existing Saved Metadata** off unless you deliberately want to replace an existing saved value.

**Direct-column route — no Saved metadata column needed:** Turn on **Update standard Calibre metadata** and/or **Update custom columns** in the plugin's settings. Standard columns already exist; for custom columns, first [create the columns you want]({{ '/start/metadata/' | relative_url }}) and use **Configure column mapping…** to choose which recovered value goes into each one. You can leave **Save all extracted metadata** off. This writes directly to Calibre: FanFicFare does not process those values, so its custom-column mappings and `personal.ini` cleanup or replacement rules will not be applied. You can still use the filled columns in a Generate Cover preset.

If this book already has a filled Saved metadata column and FanFicFare can identify its story URL, you may not need extraction at all: go straight to the FanFicFare update in step 4. If it cannot find the URL, use [the troubleshooting checks]({{ '/reference/troubleshooting/' | relative_url }}#fanficfare-cannot-find-a-story-url).

## 3. Recover metadata from one EPUB

1. Select a book that has an EPUB in Calibre, then choose **Extract Metadata** from the Extract EPUB Metadata toolbar button or its dropdown.
2. Read the preview before confirming. Look for the fields your cover needs, such as relationships, word count, or status. If you chose Saved metadata, also check that the plugin found a story URL and will write Saved metadata. The preview shows when a book will be skipped or an existing value kept.
3. If the needed values are missing, stop here: the plugin cannot make up metadata absent from the EPUB. If Saved metadata will be skipped, that route cannot work for this book; return to the settings in step 2, choose direct columns, and run extraction again. Otherwise, confirm the write. In **Edit metadata**, check the **Saved metadata** field or the standard and custom columns you chose in step 2.

## 4. Use the recovered values on a cover

**If you chose the Saved metadata route:**

1. Select the same book and open **FanFicFare → Update Existing FanFiction Books → Update Calibre Metadata from Saved Metadata Column**. FanFicFare uses the recovered snapshot without fetching the story page.
2. Open **Edit metadata** and check the mapped columns you want on the cover. If one is empty, check whether that value appeared in the extraction preview and whether the column is mapped in FanFicFare.
3. If FanFicFare has not replaced the cover, use [Step 4's manual Generate Cover instructions]({{ '/start/generate-covers/' | relative_url }}) to apply your preset. Automatic replacement also depends on your [existing-cover settings]({{ '/choose/protect-covers/' | relative_url }}).

**If you wrote directly to Calibre columns:** skip the FanFicFare update. Check the new values in **Edit metadata**, then [generate a cover manually]({{ '/start/generate-covers/' | relative_url }}) using your preset. Direct extraction does not trigger FanFicFare's automatic cover selection.
