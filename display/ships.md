---
layout: default
title: "Ships"
subtitle: "Turn long AO3 relationship tags into compact cover names"
section: Cover content
requirements: [Calibre settings, Template code]
previous: {label: "Status", url: "/display/status/", section: "Cover content"}
next: {label: "Ship code generator", url: "/display/ships/code-generator/", section: "Cover content"}
---

AO3 supplies relationship tags. FanFicFare writes them into `#ship`. A calculated `#short_ships` column can find the first romantic relationship and replace its full tag with a familiar short name.

## Create the calculated column

Create **Cover ship tags**, with lookup name `short_ships`, as **Column built from other columns, behaves like tags**. If you have not created a calculated column before, review the explanation in [Add AO3 metadata]({{ '/start/metadata/' | relative_url }}).

## Easiest route: use the Ship code generator

The [Ship code generator]({{ '/display/ships/code-generator/' | relative_url }}) is the easiest way to create and maintain a longer list of ship names. You enter each complete AO3 relationship tag and the short name you want on the cover. The generator writes the repetitive Calibre code for you.

The generator uses the more reliable, order-preserving setup described in [Anthology-aware ships]({{ '/advanced/anthology-ships/' | relative_url }}). Complete that setup first so you have an `#all_slashes` source column. Then:

1. Add your ship names in the generator.
2. Select **Generate template**.
3. Copy the generated code.
4. In Calibre, open **Preferences → Add your own columns**, select **Cover ship tags**, and edit it.
5. Paste the code into the column's **Template** box, replacing anything already there. Save and restart Calibre if asked.

Use `{#short_ships}` in Generate Cover's **Contents → Custom text** field. The generated template can show more than one ship, which is particularly useful for anthologies.

## Manual basic route

If you do not want to set up the extra anthology source column, use the basic template instead. It reads the first romantic relationship available in `#ship`.

1. Open the [basic ship template]({{ '/code/calibre-column-templates/short_ship_basic.txt' | relative_url }}) in a plain-text editor.
2. Find the two example ship rules between **Translation table** and **Add your ships above this line**. Replace the complete AO3 relationship name and the short cover label with your own. Copy an `elif` block when you need another ship.
3. In Calibre, open **Preferences → Add your own columns**, select **Cover ship tags**, and edit it.
4. In the column's **Template** box, replace the existing contents with everything from the file's `program:` line to the end. Save the column and restart Calibre if asked.

When a relationship is not in your short-name list, the template shows a shortened version of the original AO3 tag instead of leaving the cover blank.

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
