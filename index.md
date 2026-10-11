---
layout: default
title: Make fanfic covers that update themselves
subtitle: A guide for FanFicFare + Calibre users
next: {label: "Create your first cover", url: "/start/first-cover/", section: "Start here"}
---

<p>You're already using FanFicFare to download fic and Calibre to manage it. This guide helps you make your library look good and show useful information at a glance, with covers that update automatically.</p>

<p>This is not a guide to setting up FanFicFare from scratch. If you need a more general, but advanced guide without emphasis on covers, I strongly recommend <a href="https://maelstrom.quest/2026/02/24/calibre-fff-guide/">Stormy Crossroads' Calibre + Fanficfare tutorial</a>. For thorough documentation there's the <a href="https://github.com/JimmXinu/FanFicFare/wiki">FFF wiki</a>. </p>

![Cover samples]({{ '/assets/img/cover-samples-3.png' | relative_url }})

This is a sample from my own library. My covers use custom artwork for different fandoms—and sometimes different ships—and show the main ship, genre, length, and completion status. You can choose which of those details matter to you. The ready-made artwork in this guide uses a generic book symbol so it works for everyone, but you can edit it to add your own colours, layouts, and fandom icons.

Metadata simply means information about a story, such as its fandom, relationships, tags, and word count.

<figure class="cover-flow" aria-labelledby="cover-flow-title">
  <figcaption id="cover-flow-title">How a cover comes together</figcaption>
  <div class="cover-flow-node"><strong>AO3 story</strong><span>Title, author, tags, relationships, word count, and more</span></div>
  <div class="cover-flow-arrow" aria-hidden="true">↓</div>
  <div class="cover-flow-node"><strong>FanFicFare reads the story</strong><span>It saves information in Calibre and can choose which cover design to use.</span></div>
  <div class="cover-flow-arrow" aria-hidden="true">↓</div>
  <div class="cover-flow-branches">
    <div class="cover-flow-branch">
      <div class="cover-flow-label">What the cover says</div>
      <div class="cover-flow-node"><strong>Calibre columns</strong><span>Saved values such as words and relationships; optional calculated columns can shorten them.</span></div>
    </div>
    <div class="cover-flow-branch">
      <div class="cover-flow-label">What the cover looks like</div>
      <div class="cover-flow-node"><strong>Saved cover design (preset)</strong><span>FanFicFare uses your selection rules, or your default preset, to choose the artwork and layout.</span></div>
    </div>
  </div>
  <div class="cover-flow-arrow" aria-hidden="true">↓</div>
  <div class="cover-flow-node"><strong>Generate Cover makes the finished cover</strong><span>It puts the book's Calibre values into the chosen design.</span></div>
</figure>

## Start here

Step 1 gives you a working automatic cover. Step 2 is optional artwork; Steps 3 and 4 add story details to the cover. Follow the parts you want for your library.

<div class="step-grid">
  <a class="step-card" href="{{ '/start/first-cover/' | relative_url }}">
    <span class="step-num">Step 1</span>
    <h3 class="step-title">Create your first cover</h3>
    <p class="step-desc">Import a preset and generate a working cover.</p>
  </a>
  <a class="step-card" href="{{ '/start/artwork/' | relative_url }}">
    <span class="step-num">Step 2</span>
    <h3 class="step-title">Set up your artwork</h3>
    <p class="step-desc">Use the included backgrounds or customize your own.</p>
  </a>
  <a class="step-card" href="{{ '/start/metadata/' | relative_url }}">
    <span class="step-num">Step 3</span>
    <h3 class="step-title">Add AO3 metadata</h3>
    <p class="step-desc">Connect fandom, ships, status, words, and chapters.</p>
  </a>
  <a class="step-card" href="{{ '/start/generate-covers/' | relative_url }}">
    <span class="step-num">Step 4</span>
    <h3 class="step-title">Generate covers with your metadata</h3>
    <p class="step-desc">Put saved values on a cover and update existing books.</p>
  </a>
</div>

After the basic setup, the rest of the guide offers optional ways to refine your covers: shorten what they say, choose different artwork for particular stories, or handle more specialised cases. You can pick the techniques that interest you without following every page.

## Before you start

<div class="callout note">
  <div class="callout-title">New to FanFicFare?</div>
  <p>This guide starts after FanFicFare is installed and can download one fic successfully. Before beginning, install FanFicFare, download one public AO3 work into Calibre, and confirm that you can open the EPUB and see it in your library. You do not need any other configuration yet.</p>
</div>

<div class="prereqs">
  <p class="prereqs-title">You'll need</p>
  <ul class="prereq-items">
  <li><div class="prereq-dot"></div>Calibre with the FanFicFare plugin installed and working</li>
  <li><div class="prereq-dot"></div>Generate Cover, which you'll install in Step 1</li>
  </ul>
</div>

You do not need coding experience. When a later technique uses code, the guide explains what to copy and where to put it.



<div class="callout note">
  <div class="callout-title">Note</div>
  <p>This guide is written with AO3 in mind. Settings may need adjustments for other sites.</p>
</div>
