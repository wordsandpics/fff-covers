---
layout: default
title: "Ships"
subtitle: "Turn long AO3 relationship tags into compact cover names"
section: Cover content
requirements: [Calibre settings, Template code]
guide:
  result: "A short relationship name, or Gen when no slash relationship is found."
  needs:
    - {label: "A mapped Relationships column", url: "/start/metadata/"}
  see: "Check #short_ships on a test book, save the cover preset after adding it, and regenerate that cover."
previous: {label: "Status", url: "/display/status/", section: "Cover content"}
next: {label: "Genres and flags", url: "/display/genres/", section: "Cover content"}
---

This recipe lets your cover say `Johnlock` instead of `Sherlock Holmes/John Watson`. FanFicFare saves AO3 relationship tags in `#ship`; a calculated `#short_ships` column reads one romantic relationship and turns it into the short name you choose. This simple route is a good starting point for single works.

On AO3, a `/` in a relationship tag means a romantic or sexual relationship, while `&` means a platonic relationship. **Gen** is AO3's category for works without a romantic or sexual relationship as the main focus. The basic template uses `Gen` as a convenient fallback when it finds no `/` relationship; that is helpful cover text, but it does not prove that AO3 assigned the Gen category.

## Create the calculated column

Create **Cover ship tags**, with lookup name `short_ships`, as **Column built from other columns, behaves like tags**. If you have not created a calculated column before, review the explanation in [Add AO3 metadata]({{ '/start/metadata/' | relative_url }}).

## Basic route

If you do not want to set up the extra anthology source column, use the basic template instead. It reads the first romantic relationship available in `#ship`.

1. Open the [basic ship template]({{ '/code/calibre-column-templates/short_ship_basic.txt' | relative_url }}) in a plain-text editor.
2. Find the two example ship rules between **Translation table** and **Add your ships above this line**. Replace the complete relationship name and short cover label with your own. For example, this sample line:

   ```text
   elif contains(lc, 'shane hollander/ilya rozanov', '1', '') then
       return 'Hollanov'
   ```

   could become `elif contains(lc, 'character a/character b', '1', '') then` followed by `return 'My Ship'`. Change only the name between the first pair of quotes and the label after `return`. Keep the rest of the punctuation. Preserve the participant order in the saved relationship: `Character A/Character B` does not match `Character B/Character A`. Copy a whole `elif` block above **Add your ships above this line** for each additional ship.
3. In Calibre, open **Preferences → Add your own columns**, select **Cover ship tags**, and edit it.
4. In the column's **Template** box, replace the existing contents with everything from the file's `program:` line to the end. Save the column and restart Calibre if asked.

Check `#short_ships` on one book after saving the column. A matching relationship should show your short label. A relationship not in your list shows a shortened version of its original tag instead of a blank value.

Use `{#short_ships}` in Generate Cover's **Contents → Custom text** field, save the preset, and regenerate that book's cover.

## Want more than one ship or better anthology handling?

For a cover that preserves AO3's relationship order, can show several ships, or works better with anthologies (EPUBs combining several stories), continue to [Anthology-aware ships]({{ '/advanced/anthology-ships/' | relative_url }}). That optional setup adds an `#all_slashes` source column. Its [Ship code generator]({{ '/display/ships/code-generator/' | relative_url }}) then creates the longer `#short_ships` template without asking you to edit repeated code by hand.

## Works without a romantic relationship tag

The basic template displays `Gen` when it finds no relationship containing `/`. That is a convenient cover fallback, but it does not prove AO3 assigned the work the Gen category. If you want the actual AO3 relationship category instead, see the [optional category setup in Anthology-aware ships]({{ '/advanced/anthology-ships/' | relative_url }}#optional-ao3-category-fallback).

## Limitations

Calibre can alphabetize tag-like columns, so the first value in `#ship` might not be the author's first relationship. This matters most for anthologies and works with several ships. [Anthology-aware ships]({{ '/advanced/anthology-ships/' | relative_url }}) preserves the source order.
