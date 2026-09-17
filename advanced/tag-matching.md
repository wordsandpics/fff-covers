---
layout: default
title: "Precise tag matching"
subtitle: "Avoid accidental matches from short or ambiguous keyphrases"
section: Advanced options
requirements: [Template code]
previous: {label: "Chapter-aware and dormant status", url: "/advanced/status/", section: "Advanced options"}
next: {label: "Metadata cleanup", url: "/advanced/metadata-cleanup/", section: "Advanced options"}
---

The basic genre recipe looks for a keyphrase anywhere in the complete tags value. That is easy to edit, but `romance` can also match `Necromancer AU`.

## What the precise example does

Calibre's `str_in_list()` checks each item in a comma-separated list separately. This lets you ask for the complete tag `AU`, rather than the letters `au` anywhere inside another tag.

This example assumes that the genre template already reads your Tags column into a value named `tags`. Add the block after the template's `result = '';` line, alongside its other genre checks:

```
result = list_join(', ', result, ',', test(
    str_in_list(tags, ',', 'au', '1', ''),
    'AU', ''
), ',');
```

The parts mean:

- `tags` is the comma-separated source value to search.
- `au` is the complete tag to look for. Replace it with the complete tag you need to match.
- `AU` is the text added to the calculated Genre column when that tag is found. Replace it with the label you want to display.
- The two commas tell Calibre how the source tags and finished Genre value are separated.

For example, source tags of `Fluff, AU, Time Travel` produce `AU`. Source tags of `Fluff, Alternate Universe AU` produce nothing from this rule, because none of those complete tags is exactly `AU`.

Put this code in the **Template** box of the calculated column that produces the value, such as `#genre`. It does not go in `personal.ini` or Generate Cover. You can add a separate rule for a longer tag such as `Alternate Universe AU`, or keep a broader match when several related tags should produce the same label.

## Limitations

Exact matching avoids false positives but misses spelling variants and longer AO3 tags unless you add each one. It also relies on commas separating the source values. Use it for short ambiguous terms, not automatically for every genre keyphrase.
