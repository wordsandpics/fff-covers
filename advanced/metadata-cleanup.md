---
layout: default
title: "Metadata cleanup"
subtitle: "Make inconsistent source tags more useful before saving them"
section: Advanced options
requirements: [personal.ini]
guide:
  result: "More consistent saved names for fandoms, relationships, or characters."
  needs:
    - {label: "A working FanFicFare metadata setup", url: "/start/metadata/"}
  see: "Save personal.ini, update one test fic, and compare its saved values with the source page."
previous: {label: "Precise tag matching", url: "/advanced/tag-matching/", section: "Advanced options"}
next: {label: "Covers from existing EPUBs", url: "/advanced/existing-epubs/", section: "Advanced options"}
---

This technique makes inconsistent names uniform before FanFicFare saves them in Calibre. For example, you can make both `Sherlock` and `Sherlock (BBC)` appear as `Sherlock (BBC TV 2010)` in your library. The same idea can clean up relationships or characters from AO3 and other supported sites.

Every code block on this page goes in FanFicFare's `personal.ini`. Open **FanFicFare → Edit personal.ini**, find or create an `[archiveofourown.org]` section, and place one `add_to_replace_metadata:` heading beneath it. Add the indented cleanup rules below that heading; do not repeat the heading for every group.

Each rule has three parts: the FanFicFare metadata field to change, the text or pattern to find, and its replacement. The parts are separated by `=>`. These examples use the AO3 section so they do not unexpectedly change metadata from other sites.

## Normalize fandom names

```
add_to_replace_metadata:
    category=>^Sherlock$=>Sherlock (BBC TV 2010)
    category=>^Sherlock \(BBC\)$=>Sherlock (BBC TV 2010)
```

Both rules produce the same name. `Sherlock` becomes `Sherlock (BBC TV 2010)`, and `Sherlock (BBC)` also becomes `Sherlock (BBC TV 2010)`. The `^` and `$` mean that the whole fandom name must match, so a longer, unrelated value containing the word Sherlock is left alone.

## Remove fandom qualifiers from relationships

AO3 sometimes adds a fandom in parentheses after a character name. This removes parenthetical qualifiers from relationship values so they take less room:

```
    ships=> \([^)]+\)=>
```

For example, `Sherlock Holmes (Sherlock)/John Watson (Sherlock)` becomes `Sherlock Holmes/John Watson`. The empty space after the final `=>` means “replace the matched text with nothing.” This rule removes any parenthetical text preceded by a space, not only fandom names, so skip it if that information matters to you.

## Normalize original-character names

```
    ships=>(?i)Original Male Character(\(s\)|s|)=>OMC
    ships=>(?i)Original Female Character(\(s\)|s|)=>OFC
    ships=>(?i)Original Character(\(s\)|s|)=>OC

    characters=>(?i)^Original Male Character(\(s\)|s|)$=>OMC
    characters=>(?i)^Original Female Character(\(s\)|s|)$=>OFC
    characters=>(?i)^Original Character(\(s\)|s|)$=>OC
```

For ships, a value such as `Sherlock Holmes/Original Male Character(s)` becomes `Sherlock Holmes/OMC`. In the Characters field, a complete value such as `Original Female Character` becomes `OFC`. `(?i)` makes the match ignore uppercase and lowercase differences, and the middle part accepts common singular and plural spellings.

## Clean friendship labels

```
    ships=>(.*)[/&](.*) \(?[Ff]riendship(?: only)\)?=>\1 & \2
    ships=> - Relationship=>
```

The first rule changes a value such as `Character A/Character B (Friendship)` to `Character A & Character B`. The second removes the text ` - Relationship` when AO3 includes it in a ship value.

## Apply and test the rules

Save `personal.ini`, then download or update one test fic. Check the columns that receive Fandoms, Relationships, or Characters before applying the rules more widely. If you enabled [saved metadata]({{ '/start/metadata/' | relative_url }}), you can also use **Update Calibre Metadata from Saved Metadata Column** to reprocess a fic without contacting AO3 again.

## Limitations

These rules change values when FanFicFare next processes a book; they do not immediately rewrite existing Calibre rows. A broad rule can alter an unrelated tag, and AO3 may change tag wording. Test a few books before applying a large cleanup list.
