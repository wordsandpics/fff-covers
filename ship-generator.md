---
layout: default
title: "Short ship generator"
subtitle: "Build the repetitive Calibre template without writing it by hand"
description: "Generate a Calibre short-ships template from AO3 relationship names."
---

This generator creates the `#short_ships` template used in step 5. Add the full AO3 relationship name and the shorter name you want on your covers; the generator writes the repetitive Calibre code for you.

Before using it, complete the [`#all_slashes` setup from step 5]({{ '/advanced-ships/' | relative_url }}). This tool creates the calculated template only—it does not create the Calibre columns or change `personal.ini`.

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
      <p class="generator-help">The importer understands the Step 5 tutorial template and templates made by this generator. Other hand-written Calibre code might not import correctly.</p>
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

    <p>Use the complete relationship name as it appears on AO3. Add alternative names only when older or differently sourced stories use another version of the same relationship.</p>

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

    <p>When your rows and preview look right, generate the complete template. Replace the existing code in your `#short_ships` composite column with this result.</p>

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
    <p>The generator runs in your browser and needs JavaScript enabled. The manual two-ship template in step 5 still works without it.</p>
  </div>
</noscript>

***

<div class="next-step">
  <a href="{{ '/nerdery/' | relative_url }}">
    <span class="next-label">Next</span>
    <span class="next-title">Step 6: Tips & Tricks →</span>
  </a>
</div>

<script src="{{ '/assets/js/ship-generator.js' | relative_url }}" defer></script>
