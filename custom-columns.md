---
layout: default
title: "3. Add AO3 metadata"
subtitle: "Understand, save, and reuse information from AO3"
permalink: /start/metadata/
section: Start here
requirements: [Calibre settings, FanFicFare]
guide:
  result: "AO3 information saved in separate Calibre columns, ready to use on covers."
  needs:
    - {label: "A working FanFicFare download", url: "/start/first-cover/"}
  see: "Download a new fic or update the metadata of an existing one, then check its custom fields in Edit metadata."
previous: {label: "Set up your artwork", url: "/start/artwork/", section: "Start here"}
next: {label: "Generate covers with your metadata", url: "/start/generate-covers/", section: "Start here"}
---

Metadata is information about a story: its title, author, tags, relationships, word count, status, and so on. FanFicFare reads this information from AO3 and writes it into your Calibre library. In this step, you'll give a few values their own columns so you can put them on a cover.

For example, AO3 shows a fic's word count. FanFicFare reads it as **Words** and saves it in the Calibre column you name `#words`. Generate Cover can then print that value with `{#words}`. The three names describe the source value, its place in your library, and its place on the cover—not three separate word counts.

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

There are two kinds of custom column in this guide. A **mapped column** receives a value from FanFicFare, such as AO3's word count. A **calculated column** works out a new value from a column already in Calibre, such as turning `34,291` words into `34k`. Calculated columns do not download anything and should not be mapped in FanFicFare. This step creates mapped columns; the optional cover-content recipes create calculated ones when you need them.

Each column has a reader-facing **heading** and a machine-facing **lookup name**. Enter the lookup name without `#` when you create the column: `words`, for example. Calibre then displays and stores it as `#words`. Use `#words` in Calibre templates and Generate Cover fields such as `{#words}`. FanFicFare source metadata is different: `${category}` and `${freeformtags}` are values it has read from the site, not names of your Calibre columns.

Once metadata has its own column, you can:

- see it in the book list;
- search, sort, and filter with it;
- display it on a generated cover;
- use it as the input for a calculated column.

Everything in this step is configured through Calibre and the FanFicFare settings. You do not need to edit `personal.ini`.

## 1. Create custom columns in Calibre

Open **Preferences → Add your own columns**. Click **Add custom column** at the bottom left.

![Add your own columns]({{ '/assets/img/calibre-add-columns.png' | relative_url }})

For each column you want, fill in the lookup name, a column heading, and the column type. Use **comma separated text, like tags** when a story can have several values that you want to browse individually, such as fandoms or relationships. Use **Text** for one short value, **Integers** for whole numbers, and **Date** for dates.

![Create a custom column]({{ '/assets/img/calibre-create-column.png' | relative_url }})

### For the cover in Step 4

Create these three columns now if you want to follow Step 4's example exactly. You can create fewer if you only want one or two values on your cover.

| Column heading | Lookup name | Column type |
|---|---|---|
| Relationship/s | ship | Comma separated text, like tags, shown in the Tag browser |
| Status | status | Text, column shown in the Tag browser |
| Words | words | Integers |

### For optional recipes

Create these only if you want their information or plan to follow the recipe named below:

| Column heading | Lookup name | Column type | Used by |
|---|---|---|---|
| Fandom | fandom | Comma separated text, like tags, shown in the Tag browser | Showing fandom on a cover or browsing it separately; fandom-based cover selection does not require this column |
| Chapters | chapters | Integers | Word and chapter count; chapter-aware status |
| Updated | updated | Date | Chapter-aware and dormant status |
| Content rating | contentrating | Text, column shown in the Tag browser | Optional information for your library |

The **Updated** column is needed only for [Chapter-aware and dormant status]({{ '/advanced/status/' | relative_url }}).

Click **Apply** and restart Calibre when prompted.

## 2. Tell FanFicFare what belongs in each column

Open the FanFicFare plugin settings and go to the **Custom Columns** tab. Your new columns will appear in the list on the left. For each one, select the corresponding AO3 metadata field from the dropdown.

![FFF Custom Columns tab]({{ '/assets/img/fff-custom-columns.png' | relative_url }})

### For the cover in Step 4

| Column | Map to |
|---|---|
| Relationship/s(#ship) | Relationships |
| Status(#status) | Status |
| Words(#words) | Words |

### For optional recipes

| Column | Map to |
|---|---|
| Fandom(#fandom) | Category |
| Chapters(#chapters) | Chapters |
| Updated(#updated) | Updated |
| content rating(#contentrating) | Rating |


The **New Only** checkbox next to each column controls whether FFF updates it on metadata refreshes or only populates it on first download. Leave it unchecked for the columns you create here so existing books can receive updated values. Click **OK** to save the mappings.

## Optional: save raw metadata

FanFicFare can keep a snapshot of the metadata it extracted in one long-text column. If you later add a custom column or change a mapping, you can reuse that snapshot instead of requesting the same metadata from AO3 again.

1. In **Preferences → Add your own columns**, create a column named **Saved metadata** with lookup name `fff_saved_metadata`.
2. Choose **Long text, like comments** as its type and **Plain text** as its interpretation.
3. Restart Calibre, then open **FanFicFare → Configure FanFicFare → Custom Columns**.
4. At **Saved Metadata Column**, select the new column and click **OK**.

The column begins filling when FanFicFare next downloads or updates each book. Check one book's **Edit metadata** window afterward to confirm the **Saved metadata** field is not empty. Older books will not already have a snapshot just because you created the column. This is a saved copy of metadata, not a backup of the story chapters or images; keep your EPUB files backed up separately.

If FanFicFare cannot reach an older story but you still have its EPUB, the optional [Covers from existing EPUBs]({{ '/advanced/existing-epubs/' | relative_url }}) technique may be able to recover a Saved metadata value from the book itself.

## Fill the new columns for books you already have

New columns fill automatically when you download a new fic. For a book already in your library:

1. Select the book in Calibre and open **FanFicFare → Update Existing FanFiction Books**.
2. Choose **Update Calibre Metadata from Website** to get its current metadata from AO3, then run the update. If you already have a filled Saved metadata column for that book and only need to apply a new mapping, you can choose **Update Calibre Metadata from Saved Metadata Column** instead.
3. Open **Edit metadata** for the book and check the columns you mapped. If they are blank, check the FanFicFare mapping and that **New Only** is unchecked before working on the cover.

The saved-copy option cannot provide a value that was not collected when the snapshot was made. Use the website option when you need current information from AO3.

The next step shows how to put these column values on a cover.
