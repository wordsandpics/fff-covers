---
layout: default
title: "Genre code generator"
subtitle: "Turn lists of tag keyphrases into a ready-to-paste Calibre template"
description: "Generate a Calibre genre template from groups of tag keyphrases."
permalink: /display/genres/code-generator/
section: Cover content
requirements: [Template code]
previous: {label: "Genres and flags", url: "/display/genres/", section: "Cover content"}
next: {label: "Put it all together", url: "/display/combining-fields/", section: "Cover content"}
---

This generator creates the `#genre` template described in [Genres and flags]({{ '/display/genres/' | relative_url }}). For each cover label, add the words or phrases that should make it appear.

<div class="callout note">
  <div class="callout-title">Your information stays in your browser</div>
  <p>The generator runs entirely on this page. It does not upload your genre list. It saves a temporary draft in this browser so an accidental refresh does not erase your work.</p>
</div>

<div class="ship-generator" id="genre-generator">
  <section class="generator-panel" aria-labelledby="genre-start-title">
    <div class="generator-panel-heading"><div><span class="generator-step">1</span><h2 id="genre-start-title">Choose a starting point</h2></div><button class="generator-button generator-button-secondary" id="genre-load-examples" type="button">Load examples</button></div>
    <p>Start with an empty list, load the tutorial examples, or paste the tutorial genre template—or code previously made by this generator.</p>
    <details class="generator-import"><summary>Import existing template code</summary>
      <label for="genre-import-code">Paste the complete Calibre template</label><textarea id="genre-import-code" rows="8" spellcheck="false" placeholder="program:&#10;..."></textarea>
      <div class="generator-actions"><button class="generator-button" id="genre-import-template" type="button">Import code</button><button class="generator-button generator-button-secondary" id="genre-clear-import" type="button">Clear</button></div>
      <p class="generator-help">The importer understands the tutorial genre template and templates made by this generator. Other hand-written code might not import correctly.</p><div class="generator-message" id="genre-import-message" role="status" aria-live="polite" hidden></div>
    </details>
  </section>

  <section class="generator-panel" aria-labelledby="genre-settings-title">
    <div class="generator-panel-heading"><div><span class="generator-step">2</span><h2 id="genre-settings-title">Add your genres</h2></div></div>
    <p>Each row creates one label on the cover. Add every tag word or phrase that should produce that label, one per line. The row order is also the order in which matching genres will appear on the cover.</p>
    <div class="generator-limit-setting"><label class="generator-limit" for="genre-source-field">Column containing your tags<input id="genre-source-field" type="text" value="tags" placeholder="tags or #ao3_tags"></label><p class="generator-help">Use <code>tags</code> for Calibre's standard Tags column, or enter the lookup name of your custom column, such as <code>#ao3_tags</code>.</p></div>
    <div class="callout warning generator-inline-warning"><div class="callout-title">Use specific keyphrases</div><p>Keyphrases are matched anywhere in a tag. For example, <code>romance</code> also matches <code>Necromancer AU</code>, while <code>ill</code> can match <code>Villain Redemption</code> or <code>Billy Hargrove</code>.</p></div>
    <div id="genre-mapping-list" class="mapping-list"></div>
    <div class="generator-actions"><button class="generator-button generator-button-danger" id="genre-clear-mappings" type="button">Clear all</button><button class="generator-button" id="genre-add-mapping" type="button">Add genre</button></div>
    <div class="generator-message generator-warning-list" id="genre-validation-message" role="status" aria-live="polite" hidden></div>
  </section>

  <section class="generator-panel" aria-labelledby="genre-preview-title">
    <div class="generator-panel-heading"><div><span class="generator-step">3</span><h2 id="genre-preview-title">Try an example</h2></div></div>
    <label for="genre-preview-input">Sample tags from your chosen column</label><p class="generator-help generator-help-before-field">Separate tags with commas, just as they appear in Calibre. A fic can match several genres, but each cover label is shown only once.</p>
    <textarea id="genre-preview-input" rows="3" placeholder="Fluff, Domestic Bliss, Friends to Lovers"></textarea>
    <div class="generator-preview-result"><span>Cover text</span><output id="genre-preview-output" for="genre-preview-input">No matches</output></div>
  </section>

  <section class="generator-panel" aria-labelledby="genre-output-title">
    <div class="generator-panel-heading"><div><span class="generator-step">4</span><h2 id="genre-output-title">Generate your Calibre template</h2></div></div>
    <p>In Calibre, open <strong>Preferences → Add your own columns</strong>, edit <code>#genre</code>, and replace the contents of its <strong>Template</strong> box with the generated code.</p>
    <div class="generator-actions"><button class="generator-button generator-button-primary" id="genre-generate-template" type="button">Generate template</button></div>
    <div class="generator-output-wrap" id="genre-output-wrap" hidden><label for="genre-generated-code">Generated template</label><textarea id="genre-generated-code" rows="22" readonly spellcheck="false"></textarea><div class="generator-actions"><button class="generator-button" id="genre-copy-template" type="button">Copy code</button><button class="generator-button generator-button-secondary" id="genre-download-template" type="button">Download .txt</button></div><div class="generator-message" id="genre-copy-message" role="status" aria-live="polite" hidden></div></div>
  </section>
</div>

<noscript><div class="callout warning"><div class="callout-title">JavaScript is required</div><p>The generator runs in your browser and needs JavaScript enabled. The downloadable template on the Genres and flags page still works without it.</p></div></noscript>

<script src="{{ '/assets/js/genre-generator.js' | relative_url }}" defer></script>
