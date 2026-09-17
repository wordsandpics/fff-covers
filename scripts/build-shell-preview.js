'use strict';
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const css = fs.readFileSync(path.join(root, 'assets/css/style.css'), 'utf8');
const javascript = fs.readFileSync(path.join(root, 'assets/js/site-navigation.js'), 'utf8');
const groups = [
  ['Start here', ['Overview', '1. Create your first cover', '2. Set up your artwork', '3. Add AO3 metadata']],
  ['Cover content', ['Word and chapter count', 'Status', 'Ships', 'Ship code generator', 'Genres and flags', 'Genre code generator', 'Put it all together']],
  ['Choose a cover', ['By fandom', 'By ship or genre', 'Original works and fallbacks', 'Long titles', 'Protect custom covers']],
  ['Advanced options', ['Anthology-aware ships', 'Chapter-aware and dormant status', 'Precise tag matching', 'Metadata cleanup', 'Likeability score']],
  ['Reference', ['Troubleshooting', 'Downloads', 'Changelog', 'Contact']]
];
const links = groups.map(function (group) {
  return '<div class="nav-section' + (group[0] === 'Cover content' ? ' active' : '') + '">' + group[0] + '</div>' + group[1].map(function (label) {
    const active = label === 'Status' ? ' active' : '';
    const subitem = label.indexOf('code generator') > -1 ? ' nav-subitem' : '';
    return '<a class="nav-link' + subitem + active + '" href="#">' + label + '</a>';
  }).join('');
}).join('');
const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Responsive shell preview</title><style>${css}</style></head><body><header class="topbar"><a class="topbar-title" href="#">fff-covers</a><span class="topbar-sub">FanFicFare + Calibre cover guide</span><button class="menu-button" type="button" aria-expanded="false" aria-controls="site-navigation"><span class="menu-button-label">Menu</span><span aria-hidden="true">☰</span></button></header><button class="navigation-scrim" type="button" aria-label="Close navigation" tabindex="-1"></button><div class="site-wrap"><nav class="sidebar" id="site-navigation" aria-label="Site navigation"><div class="mobile-navigation-heading"><span>Explore the guide</span><button class="menu-close" type="button" aria-label="Close navigation">×</button></div>${links}</nav><main class="content"><nav class="breadcrumbs" aria-label="Breadcrumb"><a href="#">Home</a><span>›</span><a href="#">Cover content</a><span>›</span><span aria-current="page">Status</span></nav><h1>Status</h1><p class="page-subtitle">Show whether a story is complete or still being updated</p><div class="page-requirements" aria-label="Requirements"><span>Calibre settings</span><span>Template code</span></div><p>AO3 provides the story status. FanFicFare reads that information and writes it into the Status column in your Calibre library. We can then shorten it before displaying it on a cover.</p><h2>Before you begin</h2><p>Complete <a href="#">Add AO3 metadata</a> and make sure your Status column contains values such as <em>Completed</em> or <em>In-Progress</em>.</p><h2>Create the short status</h2><p>This calculated column checks the saved status. It displays a check mark for completed stories and WIP for stories that are still being updated.</p><div class="callout warning"><div class="callout-title">What this cannot tell you</div><p>An incomplete story is not necessarily abandoned. This version reports only the status supplied by the source website.</p></div><nav class="page-navigation" aria-label="Previous and next pages"><a class="page-navigation-link previous" href="#"><span class="page-navigation-direction">Previous · Cover content</span><span>Word and chapter count</span></a><a class="page-navigation-link next" href="#"><span class="page-navigation-direction">Next · Cover content</span><span>Ships</span></a></nav></main></div><script>${javascript}</script></body></html>`;
const output = path.join(root, '.shell-preview.html');
fs.writeFileSync(output, html);
console.log(output);
