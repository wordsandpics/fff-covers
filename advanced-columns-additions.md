---
## Short status

**Column name:** Short status — **Lookup name:** `short_status` — **Type:** Column built from other columns

Converts FFF's status values into compact display text.

```
program:
s = lowercase(field('#status'));
if contains(s, 'complet', '1', '') then return '✔'
elif contains(s, 'progress|wip', '1', '') then return 'WIP'
else return field('#status')
fi
```

"Completed" becomes `✔`, anything in-progress becomes `WIP`. The `else` branch passes through any unexpected value rather than swallowing it silently.

---

## Recommended flag

If you tag fics you'd recommend — either using AO3's own tagging or a personal tag — you can surface that in the genre column with a single added line.

Add this to your genre template, anywhere in the list:

```
result = list_union(result, test(contains(tags,
    'recommend|recommends|recommended',
    '1', ''), '🌟', ''), ', ');
```

A fic tagged "Recommended" in your library will show `🌟` alongside its other genre tags.

---

## Likeability

**Column name:** Likeability — **Lookup name:** `likeability` — **Type:** Column built from other columns

A rough popularity score derived from kudos, hits, word count, and chapter count. High kudos relative to hits suggests strong engagement; the word and chapter factors give longer, more complex fics a slight boost.

```
program:
k = field('#kudos');
h = field('#hits');
w = field('#words');
c = field('#chapters');

# Return empty if any value is missing or zero
if or(k == '', h == '', w == '', c == '', k <=# 0, h <=# 0, w <=# 0, c <=# 0)
then ''
else
    # Chapter factor: rewards multi-chapter works
    cf = switch_if(
        c <=# 1,  1,
        c <=# 3,  1.4,
        c <=# 8,  2.2,
        c <=# 20, 3.5,
        5
    );
    # Word factor: rewards longer works
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

This is a blunt instrument. The score isn't meaningful in absolute terms and isn't comparable across fandoms — a niche fandom with 200 readers will score very differently from a mainstream one. It's most useful for relative sorting within a single fandom or pairing. Treat it as a starting point to tweak rather than a finished metric.
