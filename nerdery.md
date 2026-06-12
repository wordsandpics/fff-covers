---
layout: default
title: "Step 6: Tips and tricks"
subtitle: "Independent techniques to extend and refine your setup"
---

The techniques on this page are modular — use any combination, in any order. None of them require the previous steps to be complete.

---

## Metadata normalization

AO3's tagging is freeform, which means the same ship, character, or concept can appear under dozens of slightly different names. `replace_metadata` in `personal.ini` lets you clean this up as data comes in, so your library stays consistent without manual editing.

Add these to the `add_to_replace_metadata` block in your `[defaults]` section. They run in order, so the sequence matters.

**Strip fandom qualifiers from ship names.** AO3 often appends the fandom in parentheses — "jack Abbott (The Pitt)" — which clutters ship tags. This removes anything in parentheses from ship strings:

```ini
ships=> \([^)]+\)=>
```

**Standardize original character tags.** AO3 uses several variants — "Original Male Character", "Original Male Character(s)", "OMC" — for the same thing. These collapse them:

```ini
# For ships (substring match — OC appears inside a ship string)
ships=>(?i)Original Male Character(\(s\)|s|)=>OMC
ships=>(?i)Original Female Character(\(s\)|s|)=>OFC
ships=>(?i)Original Character(\(s\)|s|)=>OC

# For character tags (whole-string match)
characters=>(?i)^Original Male Character(\(s\)|s|)$=>OMC
characters=>(?i)^Original Female Character(\(s\)|s|)$=>OFC
characters=>(?i)^Original Character(\(s\)|s|)$=>OC
```

**Convert friendship tags to a consistent format.** AO3 uses both `&` and `/` for platonic relationships, sometimes with "(Friendship)" appended. This normalizes them:

```ini
ships=>(.*)[/&](.*) \(?[Ff]riendship(?: only)\)?=>\1 & \2
ships=> - Relationship=>
```

---

## Advanced cover rules

### Matching on title length

Long titles can overflow a cover template designed for shorter ones. A dedicated "small text" template handles this cleanly. Place it at the bottom of your `generate_cover_settings` block as a catch-all — anything that has already matched a fandom rule won't reach it, and anything that hasn't will get the small template if its title is long enough:

```ini
generate_cover_settings:
    ${category} => [Ss]herlock => Classics Sherlock
    ${category} => Omens       => Classics Omens
    ${title}    => .{40,}      => Classics Small
```

The `.{40,}` matches any title of 40 or more characters. Adjust the number to suit your template's comfortable title length.

### Protecting custom covers

If you've manually set a cover for a specific fic and don't want FFF to overwrite it on metadata updates, add a URL-based exclusion at the very top of `generate_cover_settings`. The first match wins, so an empty rule stops cover generation entirely for that fic:

```ini
generate_cover_settings:
    ${storyUrl} => works/12345$ =>
    ${storyUrl} => works/67890$ =>
    ${category} => [Ss]herlock  => Classics Sherlock
    ...
```

The `$` anchors the match to the end of the URL, preventing partial matches.

<div class="callout note">
  <h6 class="callout-title">Note</h6>
  <p>This list needs to be maintained manually — add a line whenever you assign a custom cover to a fic.</p>
</div>

---

## Advanced GCC content tags

Generate Cover's Contents tab accepts Calibre's template language in the custom text field, not just plain field references. This lets you build conditional, formatted content blocks.

**Conditional display.** A field reference wrapped in `|prefix|` only renders if the field has a value — nothing appears at all if it's empty. Useful for fields that aren't always populated:

```
{series:|Book {series_index} of |}
```

This shows "Book 2 of Surface Tension" for a fic in a series, and nothing for a standalone.

**Fallback placeholder.** `ifempty()` shows alternative text when a field is empty — useful for keeping layout consistent when some fics have ship data and some don't:

```
{#short_ships:ifempty(Gen)}
```

**Combining fields on one line.** Fields can be concatenated directly:

```
{#short_ships} · {#short_words} · {#short_status}
```

Produces something like `Johnlock · 34k · ✔`.

**Conditional prefix with newline.** The `\n` escape inserts a line break, useful for multi-line content blocks:

```
{#genre:|Tags: \n|}
```

Shows "Tags:" on one line and the genre values below it, but only if genre has a value.

**Adding a prefix or suffix.**

In GCC's template syntax, `|prefix|suffix|` wraps content that only renders if the field has a value — so both the value AND the surrounding text disappear when empty:

```
{#short_words:|| words|}
```

Shows `34k words` when populated, nothing when empty. The double `||` means no prefix, just a suffix. To add both:

```
{#short_words:|Length: | words|}
```

Shows `Length: 34k words` or nothing.
---

## Likeability score

A computed column that estimates a fic's engagement level relative to its length and structure. It's based on the ratio of kudos to hits — high kudos per hit suggests strong reader investment — weighted by word count and chapter count to give longer, more complex fics a slight boost.

**Column name:** Likeability — **Lookup name:** `likeability` — **Type:** Column built from other columns

```
program:
k = field('#kudos');
h = field('#hits');
w = field('#words');
c = field('#chapters');

if or(k == '', h == '', w == '', c == '', k <=# 0, h <=# 0, w <=# 0, c <=# 0)
then ''
else
    cf = switch_if(
        c <=# 1,  1,
        c <=# 3,  1.4,
        c <=# 8,  2.2,
        c <=# 20, 3.5,
        5
    );
    wf = switch_if(
        w <# 5000,   0.8,
        w <# 20000,  1,
        w <# 60000,  1.15,
        w <# 150000, 1.3,
        1.45
    );
    round(divide(multiply(divide(multiply(multiply(k, k), multiply(cf, wf)), h), 100), 1000))
fi
```

Returns empty if any required field is missing or zero, so fics without hit/kudos data don't generate a misleading score.

<div class="callout warning">
  <div class="callout-title">Keep this in perspective</div>
  <p>The score is not meaningful in absolute terms and is not comparable across fandoms: a niche fandom with 200 readers will score very differently from a mainstream one. It's most useful for relative sorting within a single fandom or pairing. Treat it as a starting point to tweak rather than a finished metric.</p>
</div>
