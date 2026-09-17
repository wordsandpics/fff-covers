---
layout: default
title: "3. Add AO3 metadata"
subtitle: "Understand, save, and reuse information from AO3"
permalink: /start/metadata/
section: Start here
requirements: [Calibre settings, FanFicFare]
previous: {label: "Set up your artwork", url: "/start/artwork/", section: "Start here"}
next: {label: "Word and chapter count", url: "/display/length/", section: "Cover content"}
---

Metadata is information about a story: its title, author, tags, relationships, word count, status, and so on. FanFicFare reads this information from AO3 and writes it into your Calibre library.

## What FanFicFare saves automatically

Calibre already has standard columns for common book information. FanFicFare fills these without requiring you to create anything:

- **Title** and **Author(s)**;
- **Tags**, assembled from metadata such as fandoms, relationships, characters, warnings, and status;
- **Comments**, which contain the story summary;
- **Series** and series number, when present;
- **Publisher**, published date, and the story URL identifier.

You can search these values, filter your library with them, and place many of them directly on a cover. The **Standard Columns** tab in FanFicFare's settings controls whether they are updated only for new books or during later updates too.

## What custom columns add

A **custom column** is an extra place in your Calibre library for information that does not have a suitable standard column. For example, you can keep relationships in `#ship`, status in `#status`, and word count in `#words` instead of mixing everything together in Tags.

The name beginning with `#` is the column's **lookup name**. Calibre, FanFicFare, Generate Cover, and the templates in this guide use that name to find the column.

Once metadata has its own column, you can:

- see it in the book list;
- search, sort, and filter with it;
- display it on a generated cover;
- use it to decide which cover preset FanFicFare selects; or
- use it as the input for a calculated column.

A **calculated column** is a custom column whose value is produced from other columns. It does not download new information. For example, the later `#short_words` column reads `#words` and turns `34,291` into `34k`. The optional pages after this step explain each calculated column and provide the code it needs.

### Create and test a calculated column

In **Preferences → Add your own columns**, click **Add custom column** and choose **Column built from other columns** as the type. Calibre then shows a **Template** box: this is where calculated-column code goes. The editor button beside it opens a larger window with a preview.

![Creating a calculated column]({{ '/assets/img/calibre-template-column.png' | relative_url }})

It is helpful to keep a plain-text copy of each template outside Calibre, then paste it into this box when you make changes. You can test code without repeatedly restarting Calibre from **Preferences → Template functions**; paste in the template and Calibre will show errors before you save it as a column.

Everything in this step is configured through Calibre and the FanFicFare settings. You do not need to edit `personal.ini`.

## 1. Create custom columns in Calibre

Open **Preferences → Add your own columns**. Click **Add custom column** at the bottom left.

![Add your own columns]({{ '/assets/img/calibre-add-columns.png' | relative_url }})

For each column you want, fill in the lookup name, a column heading, and the column type. The lookup name becomes the column's identifier — Calibre prefixes it with `#` automatically, so `fandom` becomes `#fandom`.

![Create a custom column]({{ '/assets/img/calibre-create-column.png' | relative_url }})

Here are the columns to create for this step:

| Column heading | Lookup name | Column type |
|---|---|---|
| Fandom | fandom | Comma separated text, like tags, shown in the Tag browser |
| Relationship/s | ship | Comma separated text, like tags, shown in the Tag browser |
| Status | status | Text, column shown in the Tag browser |
| Words | words | Integers |
| Chapters | chapters | Integers |
| Updated | updated | Date |
| Content rating | contentrating | Text, column shown in the Tag browser |

Click **Apply** and restart Calibre when prompted.

## 2. Tell FanFicFare what belongs in each column

Open the FanFicFare plugin settings and go to the **Custom Columns** tab. Your new columns will appear in the list on the left. For each one, select the corresponding AO3 metadata field from the dropdown.

![FFF Custom Columns tab]({{ '/assets/img/fff-custom-columns.png' | relative_url }})

| Column | Map to |
|---|---|
| Fandom(#fandom) | Category |
| Relationship/s(#ship) | Relationships |
| Status(#status) | Status |
| Words(#words) | Words |
| Chapters(#chapters) | Chapters |
| Updated(#updated) | Updated |
| content rating(#contentrating) | Rating |


The **New Only** checkbox next to each column controls whether FFF updates it on metadata refreshes or only populates it on first download. Leave it unchecked for these fields — you want them to stay current.

At the bottom of the tab, make sure **Allow custom_columns_settings from personal.ini to override** is checked. You'll need this in later steps.

## 3. Use saved metadata

Any custom column can be used in FFF's `generate_cover_settings` using its lookup name. The `#fandom` column, for example, contains the same Category data used by [fandom cover rules]({{ '/choose/fandom/' | relative_url }}). As you add more columns, you can use saved ship or genre information to choose more specific cover presets.

![FFF Custom Columns in covers]({{ '/assets/img/gcc-custom-columns.png' | relative_url }})

You can also display column values directly on covers using the `{#custom_column}` syntax in Generate Cover's Contents tab. For example, adding `{#status}` to the custom text field will print the fic's status on the cover.

The next pages create calculated columns that shorten or combine these saved values. Later, [Put it all together]({{ '/display/combining-fields/' | relative_url }}) walks through adding the finished fields to your cover.

## Optional: save a reusable metadata copy

FanFicFare can keep a copy of all the metadata it extracted in one long-text column. If you later add a custom column or change a mapping, you can use **Update Calibre Metadata from Saved Metadata Column** instead of requesting the same metadata from AO3 again.

1. In **Preferences → Add your own columns**, create a column named **Saved metadata** with lookup name `fff_saved_metadata`.
2. Choose **Long text, like comments** as its type and **Plain text** as its interpretation.
3. Restart Calibre, then open **FanFicFare → Configure FanFicFare → Custom Columns**.
4. At **Saved Metadata Column**, select the new column.

This is a backup of metadata, not of the story chapters or images. It begins filling when FanFicFare next downloads or updates each book, and it contains only the information available at that time. Keep your EPUB files backed up separately.

After the Saved metadata column has been filled for a fic, you should be able to use **Update Calibre Metadata from Saved Metadata Column** to reprocess its metadata and generate a cover without connecting to AO3 again.
