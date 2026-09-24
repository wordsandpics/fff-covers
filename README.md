# fff-covers

![Cover samples](assets/img/fff-covers-social2.png)

If you have opinions about fanfic, a Calibre library that has gotten slightly out of hand, and a ~~nagging~~  persistent feeling that the default grey cover is a crime against aesthetics: this guide is for you.

**fff-covers** is a beginner-friendly guide to automatic covers for fanfiction downloaded with FanFicFare and managed in Calibre. Start with one working cover, then choose which information and automatic cover rules are useful for your own library.

***

## 📖 Read the guide

### **[wordsandpics.github.io/fff-covers](https://wordsandpics.github.io/fff-covers)**

***

## ⬇️ Downloads

**[Classics preset](code/classics_preset.zip)** — the starter Generate Cover preset used throughout the guide.

**[Colour cover backgrounds](code/wordsandpics_classic_covers.zip)** — optional SVG backgrounds in several colours. Extract the ZIP and select an individual SVG in Generate Cover.

***

## What's covered

The required setup is four short parts:

1. Create your first cover.
2. Set up your artwork.
3. Add AO3 metadata to Calibre.
4. Generate covers with your metadata.

After that, the guide is organized by what you want to do:

- **Cover content:** word and chapter count, status, ships, genres, and advanced display options for finished fields.
- **Choose a cover:** select artwork by fandom, ship, genre, or fallback rules.
- **Advanced options:** anthology-aware ships, chapter-aware status, precise matching, metadata cleanup, and the optional likeability score.
- **Reference:** troubleshooting, downloads, changelog, and contact information.

The [Ship code generator](https://wordsandpics.github.io/fff-covers/display/ships/code-generator/) and [Genre code generator](https://wordsandpics.github.io/fff-covers/display/genres/code-generator/) build repetitive Calibre template code without requiring you to write it by hand.

***

## Changelog

### 24 September 2026

- Added an optional AO3 relationship-category fallback to the Ship code generator, with a configurable Calibre column.
- Made generated ship templates compact by evaluating every selected relationship with one translation table, preventing six-ship templates from exceeding Calibre's template-field limit.
- Kept imports compatible with the generator's older repeated-slot template format.
- Updated the manual template and instructions to use the compact structure and clarify that relationship participant order must match the stored AO3 tag.

### 18 September 2026

- Reorganized the guide into a four-step setup with task-focused optional recipes.
- Added cover-selection, advanced metadata and display tools, and code generators.
- Improved navigation, beginner guidance, troubleshooting, downloads, and contact information.

### 15 September 2026

- Reorganized the guide into a three-page setup followed by optional, task-based recipes.
- Added responsive grouped navigation, breadcrumbs, and Previous/Next links.
- Added dedicated pages for chapter display, cover fallbacks, advanced status, precise tag matching, troubleshooting, downloads, and contact information.
- Added a browser-based genre code generator.
- Added a browser-based short ship generator with editable mappings, code import, previews, and templates for one to six ships.
- Corrected the advanced template so removing duplicate relationships keeps their original order.

### 14 September 2026

- Clarified the difference between importing the Generate Cover preset and extracting the optional background-image pack.
- Added guidance for editing the supplied SVGs to create personalised fandom covers.
- Reworked the advanced ship setup to save the full ordered relationship list and handle repeated anthology ships more reliably.
- Updated the downloadable snippets and added clearer migration and troubleshooting instructions.

***

## License

[MIT](LICENSE) — use it, adapt it, share it.
