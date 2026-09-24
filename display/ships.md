---
layout: default
title: "Ships"
subtitle: "Turn long AO3 relationship tags into compact cover names"
section: Cover content
requirements: [Calibre settings, Template code]
previous: {label: "Status", url: "/display/status/", section: "Cover content"}
next: {label: "Genres and flags", url: "/display/genres/", section: "Cover content"}
---

AO3 supplies relationship tags. FanFicFare writes them into `#ship`. This page is the simple route: a calculated `#short_ships` column finds one romantic relationship and replaces its full tag with a familiar short name. It is a good starting point for ordinary single works.

On AO3, a `/` in a relationship tag means a romantic or sexual relationship, while `&` means a platonic relationship. **Gen** is AO3's category for works without a romantic or sexual relationship as the main focus. The basic template uses `Gen` as a convenient fallback when it finds no `/` relationship; that is helpful cover text, but it does not prove that AO3 assigned the Gen category.

## Create the calculated column

Create **Cover ship tags**, with lookup name `short_ships`, as **Column built from other columns, behaves like tags**. If you have not created a calculated column before, review the explanation in [Add AO3 metadata]({{ '/start/metadata/' | relative_url }}).

## Basic route

If you do not want to set up the extra anthology source column, use the basic template instead. It reads the first romantic relationship available in `#ship`.

1. Open the [basic ship template]({{ '/code/calibre-column-templates/short_ship_basic.txt' | relative_url }}) in a plain-text editor.
2. Find the two example ship rules between **Translation table** and **Add your ships above this line**. Replace the complete AO3 relationship name and the short cover label with your own. Preserve the participant order exactly as AO3 shows it: `Character A/Character B` does not match `Character B/Character A`. Copy an `elif` block when you need another ship.
3. In Calibre, open **Preferences → Add your own columns**, select **Cover ship tags**, and edit it.
4. In the column's **Template** box, replace the existing contents with everything from the file's `program:` line to the end. Save the column and restart Calibre if asked.

When a relationship is not in your short-name list, the template shows a shortened version of the original AO3 tag instead of leaving the cover blank.

Use `{#short_ships}` in Generate Cover's **Contents → Custom text** field when you are ready to show it on a cover.

## Want more than one ship or better anthology handling?

For a cover that preserves AO3's relationship order, can show several ships, or works better with anthologies, continue to [Anthology-aware ships]({{ '/advanced/anthology-ships/' | relative_url }}). That optional setup adds an `#all_slashes` source column. Its [Ship code generator]({{ '/display/ships/code-generator/' | relative_url }}) then creates the longer `#short_ships` template without asking you to edit repeated code by hand.

## Works without a romantic relationship tag

The basic template displays `Gen` when it finds no relationship containing `/`. That is a convenient fallback, but it is not always the same as AO3's relationship category.

To use AO3's category instead:

1. Create **AO3 relationship category**, with lookup name `ao3_category`, as **Comma separated text, like tags**.
2. In **FanFicFare → Configure FanFicFare → Custom Columns**, map it to **AO3 Categories**.
3. In the `#short_ships` template, replace `if !s0 then return 'Gen' fi;` with:

```
if !s0 then
    category = list_intersection(
        'Gen, F/F, F/M, M/M, Multi, Other',
        field('#ao3_category'),
        ','
    );
    if category then return category else return 'Gen' fi
fi;
```

This uses only the known relationship-category values and keeps them in the displayed order above.

## Limitations

Calibre can alphabetize tag-like columns, so the first value in `#ship` might not be the author's first relationship. This matters most for anthologies and works with several ships. [Anthology-aware ships]({{ '/advanced/anthology-ships/' | relative_url }}) preserves the source order.
