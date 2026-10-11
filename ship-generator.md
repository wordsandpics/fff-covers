---
layout: default
title: "Ship code generator"
subtitle: "Build the repetitive Calibre template without writing it by hand"
description: "Generate a Calibre short-ships template from AO3 relationship names."
permalink: /display/ships/code-generator/
section: Advanced options
requirements: [Template code]
guide:
  result: "Ready-to-paste code for your ordered short-ship column."
  needs:
    - {label: "The #all_slashes setup and #short_ships column", url: "/advanced/anthology-ships/"}
  see: "Paste the generated code into #short_ships, check it on a test book, then regenerate the cover."
previous: {label: "Anthology-aware ships", url: "/advanced/anthology-ships/", section: "Advanced options"}
next: {label: "Chapter-aware and dormant status", url: "/advanced/status/", section: "Advanced options"}
---

This optional generator helps you put several short ship names on a cover without writing the code yourself. For example, enter `Shane Hollander/Ilya Rozanov` and `Hollanov` to show `Hollanov` on the cover. It builds the `#short_ships` template for the ordered relationships set up in [Anthology-aware ships]({{ '/advanced/anthology-ships/' | relative_url }}).

Before using it, complete the [`#all_slashes` setup]({{ '/advanced/anthology-ships/' | relative_url }}) and create the `#short_ships` calculated column. This tool creates its template only—it does not create Calibre columns or change `personal.ini`.

For a first try, click **Load examples**, replace one relationship and short name with your own, and type that relationship in the preview box. Importing existing code is optional and is mainly for returning users.

<div class="callout note">
  <div class="callout-title">Optional AO3 category fallback</div>
  <p>If you have completed the <a href="{{ '/advanced/anthology-ships/' | relative_url }}#optional-ao3-category-fallback">AO3 relationship-category setup</a>, you can enable <strong>Use AO3 category when no relationship is found</strong>. When a fic has no slash relationship, the generated template can then show its saved AO3 category, such as <code>M/M</code> or <code>F/F</code>, instead of the generic <code>Gen</code> fallback. The checkbox does not create or fill that category column for you.</p>
</div>

<div class="callout note">
  <div class="callout-title">Your information stays in your browser</div>
  <p>The generator runs entirely on this page. It does not upload your ship list. It saves a temporary draft in this browser so an accidental refresh does not erase your work.</p>
</div>

<div class="ship-generator" id="ship-generator">
  <section class="generator-panel" aria-labelledby="generator-start-title">
    <div class="generator-panel-heading">
      <div>
        <span class="generator-step">1</span>
        <h2 id="generator-start-title">Choose a starting point</h2>
      </div>
      <button class="generator-button generator-button-secondary" id="load-examples" type="button">Load examples</button>
    </div>

    <p>Start with an empty list, load two examples, or paste the advanced template from this tutorial—or code previously made by this generator.</p>

    <details class="generator-import">
      <summary>Import existing template code</summary>
      <label for="import-code">Paste the complete Calibre template</label>
      <textarea id="import-code" rows="8" spellcheck="false" placeholder="program:&#10;..."></textarea>
      <div class="generator-actions">
        <button class="generator-button" id="import-template" type="button">Import code</button>
        <button class="generator-button generator-button-secondary" id="clear-import" type="button">Clear</button>
      </div>
      <p class="generator-help">The importer understands the tutorial's anthology-aware template and templates made by this generator. Other hand-written Calibre code might not import correctly.</p>
      <div class="generator-message" id="import-message" role="status" aria-live="polite" hidden></div>
    </details>
  </section>

  <section class="generator-panel" aria-labelledby="generator-settings-title">
    <div class="generator-panel-heading">
      <div>
        <span class="generator-step">2</span>
        <h2 id="generator-settings-title">Add your ship names</h2>
      </div>
    </div>

    <p>Use the complete relationship name exactly as it appears on AO3, including the order of the people: <code>Character A/Character B</code> and <code>Character B/Character A</code> are different relationship names. Matching ignores capitalization, but it does not reverse the relationship for you. Add an alternative name when older or differently sourced stories use the other order or another version of the same relationship.</p>
    <details class="generator-import"><summary>If you changed how FanFicFare sorts relationships</summary><p class="generator-help">Enter the participant order that FanFicFare saves in <code>#all_slashes</code>, which may differ from AO3's original order.</p></details>
    <p class="generator-help">If you use <a href="{{ '/advanced/metadata-cleanup/' | relative_url }}">metadata cleanup</a> that changes relationship names, enter the cleaned value instead of the original AO3 value.</p>

    <div class="generator-limit-setting">
      <label class="generator-limit" for="ship-limit">
        Number of ships on the cover
        <select id="ship-limit">
          <option value="1">1</option>
          <option value="2" selected>2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </label>
      <p class="generator-help">This is the maximum number of different ships that will be displayed on a cover.</p>
    </div>

    <div class="generator-limit-setting">
      <label class="generator-checkbox" for="category-fallback">
        <input id="category-fallback" type="checkbox">
        Use AO3 category when no relationship is found
      </label>
      <div id="category-fallback-settings" hidden>
        <label class="generator-limit" for="category-column">
          AO3 category column lookup name
          <input id="category-column" type="text" value="#ao3_category" placeholder="#ao3_category">
        </label>
        <p class="generator-help">Enter any custom-column lookup name, with or without its leading <code>#</code>. The column must contain FanFicFare's AO3 Categories metadata; see <a href="{{ '/advanced/anthology-ships/' | relative_url }}#optional-ao3-category-fallback">Optional AO3 category fallback</a>.</p>
      </div>
    </div>

    <div id="mapping-list" class="mapping-list"></div>

    <div class="generator-actions">
      <button class="generator-button generator-button-danger" id="clear-mappings" type="button">Clear all</button>
      <button class="generator-button" id="add-mapping" type="button">Add ship</button>
    </div>

    <div class="generator-message generator-warning-list" id="validation-message" role="status" aria-live="polite" hidden></div>
  </section>

  <section class="generator-panel" aria-labelledby="generator-preview-title">
    <div class="generator-panel-heading">
      <div>
        <span class="generator-step">3</span>
        <h2 id="generator-preview-title">Try an example</h2>
      </div>
    </div>

    <label for="preview-input">Sample value from <code>#all_slashes</code></label>
    <p class="generator-help generator-help-before-field">Separate relationships with commas, just as they appear in the Calibre column. Repeated relationships and repeated short names are shown only once.</p>
    <textarea id="preview-input" rows="3" placeholder="Sherlock Holmes/John Watson, Shane Hollander/Ilya Rozanov"></textarea>
    <div id="preview-category-wrap" class="generator-limit-setting" hidden>
      <label for="preview-category">Sample AO3 category value</label>
      <p class="generator-help generator-help-before-field">Used only when the relationship sample above does not contain a slash relationship.</p>
      <input id="preview-category" type="text" placeholder="M/M, Gen">
    </div>
    <div class="generator-preview-result">
      <span>Cover text</span>
      <output id="preview-output" for="preview-input">Gen</output>
    </div>
  </section>

  <section class="generator-panel" aria-labelledby="generator-output-title">
    <div class="generator-panel-heading">
      <div>
        <span class="generator-step">4</span>
        <h2 id="generator-output-title">Generate your Calibre template</h2>
      </div>
    </div>

    <p>When your rows and preview look right, generate the complete template. In Calibre, open <strong>Preferences → Add your own columns</strong>, edit <code>#short_ships</code>, and replace the contents of its <strong>Template</strong> box with this result. Save the column and check its value on a test book. If it appears on a cover, regenerate that cover to see the change.</p>

    <div class="generator-actions">
      <button class="generator-button generator-button-primary" id="generate-template" type="button">Generate template</button>
    </div>

    <div class="generator-output-wrap" id="generator-output-wrap" hidden>
      <label for="generated-code">Generated template</label>
      <textarea id="generated-code" rows="22" readonly spellcheck="false"></textarea>
      <div class="generator-actions">
        <button class="generator-button" id="copy-template" type="button">Copy code</button>
        <button class="generator-button generator-button-secondary" id="download-template" type="button">Download .txt</button>
      </div>
      <div class="generator-message" id="copy-message" role="status" aria-live="polite" hidden></div>
    </div>
  </section>
</div>

<noscript>
  <div class="callout warning">
    <div class="callout-title">JavaScript is required</div>
    <p>The generator runs in your browser and needs JavaScript enabled. The manual two-ship template on the Anthology-aware ships page still works without it.</p>
  </div>
</noscript>

<script src="{{ '/assets/js/ship-generator.js' | relative_url }}" defer></script>
