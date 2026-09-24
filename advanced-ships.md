---
layout: default
title: "Anthology-aware ships"
subtitle: "Preserving author order and handling repeated anthology ships"
permalink: /advanced/anthology-ships/
section: Advanced options
requirements: [Calibre settings, personal.ini, Template code]
previous: {label: "Protect custom covers", url: "/choose/protect-covers/", section: "Choose a cover"}
next: {label: "Ship code generator", url: "/display/ships/code-generator/", section: "Advanced options"}
---

The basic short ship setup reads directly from `#ship`. That works, but Calibre sorts columns like this alphabetically. If a fic has several relationships, the first ship in the column may be the one that comes first in the alphabet, not the one the author listed first.

This step saves the ships in their original order before Calibre can sort them. The cover can then use the first two different slash relationships and turn them into short ship names.

## What you'll end up with

One new column, `#all_slashes`, containing all the romantic relationships in the order FanFicFare received them. We use Calibre's **Long text** column type because Calibre does not alphabetise its contents.

You will also update `#short_ships` so it:

1. reads the full ship list;
2. removes repeated ships without changing the order;
3. takes the first two different ships; and
4. changes their full names into the short names you want on the cover.

For example, after you add the Steddie and Ronance short-name replacements, an anthology containing those relationships several times can produce:

```text
Steddie, Ronance
```

## Setup checklist

1. Create the `all_slashes` long-text column in Calibre.
2. Add the `all_slashes` extraction settings to the `[defaults]` section of `personal.ini`.
3. Add the AO3 mapping that sends `all_slashes` to `#all_slashes`.
4. Refresh one test fic and check that the new column preserved AO3's relationship order.
5. Replace the `#short_ships` template with the advanced version below, or use the Ship code generator after the setup is working.

The sections below walk through each step and explain why it is needed.

## How it works

The key is to save the data from AO3 before we shorten and rearrange it for the cover:

```text
ships from AO3
    ↓
keep the relationships containing a slash (/), in their original order
    ↓
save the full list in #all_slashes
    ↓
remove repeats and choose the first two for #short_ships
    ↓
cover
```

This template shows two ships because that fits neatly on most covers. The full list is still saved in `#all_slashes`, so the other ships are not lost. After completing this setup, you can use the [Ship code generator]({{ '/display/ships/code-generator/' | relative_url }}) if you want to show more ships or avoid editing the repeated ship-name rules by hand.

## Create the Calibre column

In **Preferences → Add your own columns**, add:

| Column heading | Lookup name | Column type |
|---|---|---|
| All Slash Relationships | all_slashes | Long text, like comments, not shown in the Tag browser |

Enter `all_slashes`—without the `#`—in Calibre's **Lookup name** box. Calibre displays it as `#all_slashes` after you save; that is the name used in the template and in the FanFicFare mapping below. Be sure to choose **Long text**. If you choose a comma-separated tag column instead, Calibre will put the ships in alphabetical order and we will once again lose the author's order.

## Update personal.ini

Add the following to the `[defaults]` section of `personal.ini`. The comments beginning with `#` explain what each part does. If your file already contains one of these setting names, add the new value to the existing setting instead of creating a second copy.

```ini
# Tell FFF that all_slashes is a new name we want to use.
# Keep the comma before all_slashes.
add_to_extra_valid_entries: ,all_slashes

# Copy the ship list before its order changes.
include_in_all_slashes: ships

# Tell FFF to keep the original order.
keep_in_order_ships:true
keep_in_order_all_slashes:true

# In all_slashes, keep tags containing / and leave out friendship tags using &.
include_metadata_pre:
    all_slashes=~/
```

Next, tell FFF to put `all_slashes` into the new Calibre column. Add this to your `[archiveofourown.org]` section. If that section already has an `add_to_custom_columns_settings` block, add only the `all_slashes=>#all_slashes` line beneath it.

```ini
[archiveofourown.org]
add_to_custom_columns_settings:
    all_slashes=>#all_slashes
```

Download a new fic or update the metadata for one already in Calibre. To check the result, select the fic and open **Edit metadata**, then find the **All Slash Relationships** custom field. It should contain the fic's slash relationships in the same order as AO3. You can also show the column in your main library view if you want to compare several fics.

### Downloadable copies

If you would rather download the code than copy it from the page, use these files:

- [personal.ini setup for `[defaults]`]({{ '/code/fff-personal-ini/ship-extraction-pipeline.ini' | relative_url }})
- [personal.ini setup for `[archiveofourown.org]`]({{ '/code/fff-personal-ini/ship-column-mappings.ini' | relative_url }})
- [Advanced short ship template]({{ '/code/calibre-column-templates/short_ship_advanced.txt' | relative_url }})

## Update the short ship template

Replace the [basic short ship template]({{ '/display/ships/' | relative_url }}) with the version below. In **Preferences → Add your own columns**, edit `#short_ships` and paste this into its **Template** box. It reads the new `#all_slashes` column, removes repeated ships, and uses the first two different relationships. If an older fic does not have anything in `#all_slashes` yet, the template tries the original `#ship` column instead.

```text
program:
# Shows up to 2 different ships from #all_slashes.

# Read the saved ship list, remove repeats, and take the requested number.
ordered_unique = list_remove_duplicates(field('#all_slashes'), ',');
selected = sublist(ordered_unique, 0, 2, ',');
result = '';

# If this is an older fic with no #all_slashes value, try #ship instead.
if !selected then
    ships_raw = field('#ship');
    if contains(ships_raw, '/', '1', '') then
        fallback = re(ships_raw, '^(?:[^/,]+,\s*)*([^,]+/[^,]+)(?:,.*)?$', '\1');
        if contains(fallback, '/', '1', '') && !contains(fallback, ',', '1', '') then
            selected = fallback
        fi
    fi
fi;

# Translate each selected relationship.
for ship in selected separator ',':
    ship_value = re(ship, '^\s+|\s+$', '');
    translated = '';
    if contains(ship_value, '(?i)^(?:Sherlock Holmes/John Watson|John/Sherlock|Sherlock/John)$', '1', '') then
        translated = 'Johnlock'
    elif contains(ship_value, '(?i)^(?:Shane Hollander/Ilya Rozanov)$', '1', '') then
        translated = 'Hollanov'
    # Add your ships above this line.
    else
        translated = re(ship_value, '(?i)([^/]+)/([^/]+)', '\1/\2')
    fi;
    if translated then result = list_join(', ', result, ',', translated, ',') fi
rof;

if !result then return 'Gen' else return result fi
```

The ship-name replacements work like the ones in the basic Ships recipe. The template uses one translation table for every selected relationship, so add each ship only once. Copy each complete relationship in the same participant order used by AO3: `Character A/Character B` does not match `Character B/Character A`. To add a mapping, copy an `elif` block above the **Add your ships** line.

### Optional AO3 category fallback

The manual template above displays `Gen` when it finds no slash relationship. If you want it to show AO3's saved relationship category instead—such as `M/M`, `F/F`, or `Other`—first complete the [AO3 relationship-category setup]({{ '/display/ships/' | relative_url }}#works-without-a-romantic-relationship-tag). Then use the [Ship code generator]({{ '/display/ships/code-generator/' | relative_url }}) and enable **Use AO3 category when no relationship is found**. The generated template replaces the manual one above and needs the mapped `#ao3_category` column to work.

## A note about anthologies

I have tested several ways of getting slash relationships from anthologies, and none is perfect. This approach gave me the best balance between being easy to set up and usually giving the right result.

For an anthology, FanFicFare joins together the ship lists from all the works it contains. This setup removes ships that appear more than once, keeps the order in which they first appeared, and shows the first two different ships on the cover. It does not count which ship appears most often or try to decide which ships are the most important.

This works well for something like several Steddie works mixed with several Ronance works: the cover can show `Steddie, Ronance` without repeating either name. An anthology with many different background ships may still need a manual choice or a more customised template.

## Using the first ship for cover selection

You can also tell FFF to use a special cover preset when a particular ship appears first. Put ship rules above fandom rules, because FFF uses the first rule that matches:

```ini
generate_cover_settings:
    ${all_slashes} => ^\s*Mycroft Holmes/Greg Lestrade(?:\s*,|$) => Classics Mystrade
    ${category} => [Ss]herlock => Classics Sherlock
```

The symbols around the ship name make the rule check only the first ship in the list. Copy the complete pattern and replace `Mycroft Holmes/Greg Lestrade` with the relationship you want to match.

## If you followed the previous version of this step

Earlier versions of this step created `#primary_slash` and `#secondary_slash`. You can keep them if you use them to search or filter your library, but the new `#short_ships` template does not need them.

Follow the new instructions to create and fill `#all_slashes`, then replace your old `#short_ships` template. If you have a ship-specific cover rule using `${primary_slash}`, replace it with an `${all_slashes}` rule like the example above. You do not need to delete your old columns.
