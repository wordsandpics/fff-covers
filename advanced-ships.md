---
layout: default
title: "Step 5: Advanced ship tags"
subtitle: "Preserving author order to reliably identify primary and secondary ships"
---

The short ship column in step 4 reads directly from `#ship` — which works, but has a limitation. Calibre's tag columns sort alphabetically, so for fics with multiple pairings the "first" ship in your column is whoever's name comes first in the alphabet, not who the author foregrounded. A Johnlock fic where the author listed Mycroft/Greg too might show it as the main ship because it comes first in the Calibre relationship tags.

If that's good enough for your library (if your fics tend to have only one ship at a time), step 4 is fine as-is. This step sets up a more robust pipeline that captures ships in author order and extracts them into dedicated columns.

I've set it up to capture two ships: the first one in order of appearance I set as primary, the second one as secondary. You could in theory expend this to however many, or remove the secondary and just have one. 

## What you'll end up with

Two new Calibre columns — `#primary_slash` and `#secondary_slash` — each containing a single ship in the order the author listed them. These feed a more accurate short ship template, and because they're tag columns, clicking a ship name in the tag browser shows every fic where that's the primary pairing.

A better `#short_ships` column that combines the primary and secondary ships in short format. Ready to drop into your covers


## How it works

The key problem is timing: by the time data reaches Calibre, sorting has already happened. The solution is to intercept the relationship data inside FFF's processing pipeline, before Calibre touches it, and extract the ships we want into separate variables.

The pipeline does five things in order:

1. Creates three internal FFF scratch variables: `all_slashes`, `primary_slash`, `secondary_slash`
2. Copies the raw ships data — still in author order — into `all_slashes`
3. Filters `all_slashes` down to slash-only relationships, dropping all `&` platonic tags
4. Extracts the first ship into `primary_slash` and the second into `secondary_slash`
5. Writes both to Calibre columns

## Create the Calibre columns

Before editing `personal.ini`, create the two columns in Calibre.

In **Preferences → Add your own columns**, add:

| Column heading | Lookup name | Column type |
|---|---|---|
| Primary Slash | primary_slash | Comma separated text, like tags, shown in the Tag browser |
| Secondary Slash | secondary_slash | Comma separated text, like tags, shown in the Tag browser |


Single-value tag columns don't sort in any meaningful way, so you get the tag browser benefit — clickable ship names — without any sorting side effects.

## Update personal.ini

Add the following to your `[defaults]` section. The order matters — each block depends on the one above it.

```ini
# Create internal scratch variables for the pipeline
add_to_extra_valid_entries: ,all_slashes,primary_slash,secondary_slash

# Copy ships into all_slashes while still in author order
 include_in_all_slashes: ships

# Tell FFF not to alphabetise these fields during processing
 keep_in_order_ships:true
 keep_in_order_all_slashes:true

# Filter all_slashes down to slash-only relationships
 include_metadata_pre:
    all_slashes=~/

# Copy the filtered list into both extraction variables
 include_in_primary_slash: all_slashes
 include_in_secondary_slash: all_slashes
```

Check if you have an `add_to_replace_metadata` block. If you do skip the first line:

```ini
add_to_replace_metadata:
# Extract first ship only into primary_slash
 primary_slash_LIST=>^([^,]+).*$=>\1

# Extract second ship only into secondary_slash
# (clears the field if there is no second ship)
 secondary_slash_LIST=>^[^,]+$=>
 secondary_slash_LIST=>^[^,]+,\s*([^,]+).*$=>\1
```

And add the column mappings to your `[archiveofourown.org]` section:

```ini
add_to_custom_columns_settings:
    primary_slash=>#primary_slash
    secondary_slash=>#secondary_slash
```

## Update the short ship template

Replace your step 4 short ship template with this version, which reads from the new columns and falls back to `#ship` for fics downloaded before the pipeline was set up — or for fics that have since been deleted from AO3.

```
program:
# Read from the dedicated columns
s0 = field('#primary_slash');
s1 = field('#secondary_slash');
result = '';

# Fallback: if both columns are empty, extract from #ship directly
if !s0 && !s1 then
    ships_raw = field('#ship');
    if contains(ships_raw, '/', '1', '') then
        fallback = re(ships_raw, '^(?:[^/,]+,\s*)*([^,]+/[^,]+)(?:,.*)?$', '\1');
        if contains(fallback, '/', '1', '') && !contains(fallback, ',', '1', '') then
            s0 = fallback
        fi
    fi
fi;

# Translate slot 1
t1 = '';
if s0 then
    s1_lc = lowercase(s0);
    if contains(s1_lc, 'sherlock holmes/john watson|john/sherlock|sherlock/john', '1', '') then t1 = 'Johnlock'
    elif contains(s1_lc, 'shane hollander/ilya rozanov', '1', '') then t1 = 'Hollanov'
    # Add your ships here
    else t1 = re(s0, '(?i)([^/]+)/([^/]+)', '\1/\2')
    fi
fi;

# Translate slot 2
t2 = '';
if s1 then
    s2_lc = lowercase(s1);
    if contains(s2_lc, 'sherlock holmes/john watson|john/sherlock|sherlock/john', '1', '') then t2 = 'Johnlock'
    elif contains(s2_lc, 'shane hollander/ilya rozanov', '1', '') then t2 = 'Hollanov'
    # Add your ships here
    else t2 = re(s1, '(?i)([^/]+)/([^/]+)', '\1/\2')
    fi
fi;

# Combine, skip duplicates
if t1 then result = t1 fi;
if t2 then
    if !result then result = t2
    elif lowercase(t2) != lowercase(result) then result = result & ', ' & t2
    fi
fi;

if !result then return 'Gen' else return result fi
```

The ship translation table works exactly the same way as in step 4 — add your ships to both the slot 1 and slot 2 sections following the same pattern.

<div class="callout note">
  <h6 class="callout-title">Anthology Ships</h6>
  <p>Anthology fics on AO3 list relationships for each story in the collection. This pipeline extracts the first and second slash ship across the whole fic, which for an anthology means the first slash ship of the first story. For most anthologies this is accurate enough — the main pairing of the collection tends to appear first. For collections where every story has a different primary ship, the result will be approximate.</p>
</div>

## Using primary ship for cover selection

With `#primary_slash` reliably populated, you can add per-ship rules to `generate_cover_settings`. Ship-specific rules should sit above fandom rules, since the first match wins:

```ini
generate_cover_settings:
    ${primary_slash} => Mycroft Holmes/Greg Lestrade => Classics Mystrade
    ${category} => [Ss]herlock => Classics Sherlock
    ...
```

This is how you get a dedicated cover for a specific pairing regardless of fandom — useful if you read across multiple fandoms that share a ship archetype, or simply because your OTP deserves its own template.


***

<div class="next-step">
  <a href="{{ '/nerdery/' | relative_url }}">
    <span class="next-label">Next</span>
    <span class="next-title">Step 6: Tips & Tricks →</span>
  </a>
</div>
