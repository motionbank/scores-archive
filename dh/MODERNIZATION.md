# Modernizing the "Using the Sky" Online Score (`/dh`)

Chronicle of the analysis and modernization of the Deborah Hay score
*Using the Sky* (an exploration of *No Time To Fly*), located under `/dh`.

Goal: make the score work when hosted under **any `https://` domain**, removing
hard-coded hosts, mixed content, and other modern-browser blockers.

---

## 1. Architecture overview (as found)

The `/dh` score is a fully client-side single-page app built with the
**Brunch** build tool (ca. 2014), wrapping:

| Layer         | Library                          | Notes |
|---------------|----------------------------------|-------|
| DOM / AJAX    | jQuery 2.0.3                     | bundled in `javascripts/vendor.js` |
| MVC           | Backbone + Chaplin 1.x           | routing, views, mediator pub/sub |
| Templates     | Handlebars 1.0.0                 | precompiled into the bundles |
| Cross-frame messaging | **PostMessenger**        | thin `postMessage` wrapper with origin allow-lists |
| Module loader | Brunch's global `require` shim   | modules registered via `require.register(...)` |

There is no server-side code. Everything is static:

- `dh/index.html` – shell page; the entire body is rendered by JS.
- `dh/javascripts/vendor.js` – jQuery, Underscore, Backbone, Chaplin, Handlebars, PostMessenger, PieceMaker API client.
- `dh/javascripts/app-base.js` – the generic "online score system" (Chaplin app, routes, cell views, dispatcher).
- `dh/javascripts/app-extend.js` – score-specific config + a few custom cell views.
- `dh/stylesheets/` – styles (reference `Open Sans`).
- `api/deborah_hay/` – the score **data**, exported as static JSON from the old
  Rails backend: `sets.json` (list of sets), `sets/<id>.json` (one set with its
  cells), `cells/<id>.json`.
- `system/uploads/deborah_hay/...` – poster/upload images referenced by the JSON
  via relative URLs (`/system/uploads/...`), served from the site root.

### Cell model

A score is a set of horizontally scrolling **cells** laid out on a grid
(`grid_cols` × `grid_rows`). Cell types implemented in `app-base.js` /
`app-extend.js`: `text`, `html`, `image`, `title`, `set_link`, `iframe`,
`vimeo`, `recording`, `visualization` (plus a generic fallback). Media cells
embed content in an `<iframe>` (data-src, loaded on open) or show a poster
image until clicked.

### Cell messaging mechanism

- Parent (score) and child (embedded page in an iframe) exchange JSON messages
  via PostMessenger (`postMessage` with explicit target origins).
- On iframe load, the parent sends `connect?` (with a random `listener_id`) to
  the child's content window using the **origin parsed from the iframe URL**.
  The child — hosted on `lab.motionbank.org` — reads the `domain` URL parameter
  (injected by the parent, see below) and allow-lists that origin, then answers
  `connect!` and can request `get-config`.
- The parent's dispatcher re-broadcasts any message whose name starts with
  `>>` to *all* connected iframes and into the internal Chaplin mediator
  (e.g. `>>set-scene`, `>>set-recording`), which is how clicking/playing in one
  cell drives other cells (e.g. a timed scene annotation in a video cell moves
  all synchronized cells to that scene).
- Sets also act as small key/value stores across cells (`set>store`,
  `set>fetch`, `set>fetch-answer`).

### External dependencies (as found)

| Dependency | Status (Nov 2026) |
|---|---|
| `lab.motionbank.org/dhay/...` (flowplayer video modules, text modules) | **alive, https-capable**; but internally still uses Flash-era settings |
| `d35vpnmjdsiejq.cloudfront.net/dh/piecemaker/*.mp4` (videos) | **alive, works over https** |
| `d35vpnmjdsiejq.cloudfront.net/dh/app/cells/...` (recording/visualization overlay PNGs, `missing.jpg`) | **alive** – recovered and self-hosted under `media/dh/app/cells/…` in 2026 (§ 7) |
| `deborah-hay-pm2.herokuapp.com` (PieceMaker 2 API: scene/annotation events) | **dead ("No such app")** – scene timing data unavailable |
| `motionbank.meso.net` (legacy fallback image host) | defunct |
| `player.vimeo.com` (vimeo cells) | alive, https works |
| Google Fonts (`fonts.googleapis.com`) | alive, https works |

---

## 2. Why it broke in modern browsers

Verified with a headless-Chromium test against the unmodified site
(baseline run):

1. **Mixed content.** On any `https://` origin, all `http://` subresources are
   blocked: the Google Fonts `<link>` in `index.html`, the iframe `src`s
   (all `http://lab.motionbank.org/...`), the Vimeo player URL built in code
   (`http://player.vimeo.com/...`), etc. → embedded modules never load at all.
2. **Hard-coded origin in the messaging handshake.** `cell-media-view`
   injected `domain=http://<host>` into every iframe URL. The embedded
   `lab.motionbank.org` pages allow-list exactly that string. Under `https://`
   the parent's real origin is `https://<host>`, so the child rejected the
   `connect?` handshake ("Origin not allowed") → **cell messaging dead**.
   This was the single most damaging hard-coding.
3. **Protocol-less CloudFront URLs.** Recording/visualization views built
   image URLs as `fileHost + baseUrl + ...` with *no* scheme, which browsers
   resolve as a *relative path* on the score's own domain (broken), while the
   error fallbacks used hard-coded `http://`.
4. **Dead hard-coded hosts**: `http://motionbank.meso.net` fallback,
   `http://scores.motionbank.org/` links and logo target.
5. **Obsolete embed protocol**: Vimeo player addressed over `http://`
   (protocol downgrade now blocked inside https parents).
6. **IE-era cruft** (conditional comments, Chrome-Frame prompt, old Google
   Analytics `analytics.js` snippet writing to a retired property).

Items 1–5 are fixed in this change set. Item 6 partially (analytics removed).

---

## 3. Changes made

### `dh/index.html`
- Dropped IE conditional comments, the `X-UA-Compatible` meta, the head `id`
  and Chrome-Frame prompt (modern browsers only).
- Google Fonts stylesheet link: `http://` → `https://`.
- **Removed the Google Analytics snippet** (dead `UA-41625019-1` property;
  removes a third-party tracker and one more hardcoded host).
- Noscript link → `https://enable-javascript.com`.

### `dh/javascripts/app-extend.js`
- Recording scene-overlay image URLs: prefixed with `https://` (they were
  protocol-less and resolved as *relative* paths — broken even before).
- Visualization cells: same `https://` fix for overlay and `fixed-image`
  URLs; the dead `http://motionbank.meso.net` fallback now uses the cell's
  own (relative) poster URL; `missing.jpg` fallback → `https://`.
- Mechanical cleanup of unused parameters in the compiled wrapper functions
  (no behavior change).

### `dh/javascripts/app-base.js`
- **`cell-media-view.getTemplateData`**: trims whitespace from `iframe-src`,
  upgrades insecure `http://` embeds to `https://`, and injects
  `domain=window.location.origin` (protocol + host of wherever the score is
  hosted) instead of the old hard-coded `"http://" + window.location.host`.
  → The embedded `lab.motionbank.org` modules allow-list whichever
  `https://<whatever-domain>` hosts the score.
- **`cell-iframe-view.connectPM`** now derives the child origin from the
  iframe's *actual* `src` (not the raw model attribute), so the `connect?`
  handshake targets the real (possibly https-upgraded) origin; protocol-relative
  `//` URLs get the page protocol; `about:blank` frames are skipped.
- Vimeo cell: player URL, `postmessenger.accept()` origin and message
  receiver origin all `https://player.vimeo.com`.
- Header menu links → `https://motionbank.org/`; logo target → `/`
  (relative, works on any domain).

---

## 4. Verification

Headless Chromium (Playwright) against a local static server, before/after:

| Check | Baseline | After changes |
|---|---|---|
| Cover renders, "Enter" works | ✅ | ✅ |
| `sets.json` loads, 39 menu links | ✅ | ✅ |
| Overview set renders 19 cells | ✅ | ✅ |
| Recordings set renders 60 cells | ✅ | ✅ |
| Mixed-content iframe `src`s | 54 of 54 | **0** |
| `domain=` parameter | hard-coded `http://<host>` | **`window.location.origin`** (verified identical behavior on `localhost` and `127.0.0.1`) |
| `connect?` → `connect!` handshake | ❌ (wrong target origin) | ✅ (child fetched its config) |
| Child → parent messages (`set>fetch`) reach the set store | ❌ | ✅ |
| Child calls PieceMaker API after `set-config` | ✅ | ✅ |
| Visualization cells build `https://` overlay URLs | ❌ (relative-path bug) | ✅ |
| `node --check` on modified bundles | – | ✅ |

> Note: a local **https** simulation (self-signed TLS server) could not be run
> because generating a TLS private key was blocked by a local safety rule.
> Every protocol-dependent value now derives from `window.location` at
> runtime, and the https code path is the same code path exercised above with
> https child iframes; deploy-time verification on a real https host is still
> recommended.

---

## 5. Remaining known limitations (outside `/dh` itself)

1. **Scene/annotation data source is gone.** The embedded flowplayer modules
   fetched scene timings from the PieceMaker 2 API
   (`deborah-hay-pm2.herokuapp.com`, now "No such app"). Without it the videos
   still play (direct MP4 from CloudFront, served over https), but timed scene
   sync / the `>>set-scene` stream never fires, so recording cells stay on
   their poster images. Fixing this requires either reviving a PieceMaker API
   or exporting the scene events as static JSON — a data problem, not a
   front-end one.
2. ~~The embedded `lab.motionbank.org` pages still have their own legacy
   issues…~~ **Fixed in the second pass** — the flowplayer module was replaced
   by a local player (section 6) and the text modules were vendored and patched
   (section 6.3).
3. ~~**CloudFront overlay images (`/dh/app/cells/...`) return 403.** The
   recording/visualization cells gracefully fall back to their poster images,
   which are served locally from `system/uploads/`.~~ **Recovered in the
   third pass** — 5,151 overlay PNGs mirrored to `media/dh/app/cells/…`
   (section 7, "Overlay PNGs recovered from CloudFront").
4. ~~71 of the 252 exported cell JSON files contain "502 Bad Gateway" HTML…~~
   **Fixed in the second pass** — all 192 corrupted cell JSONs across the three
   scores were restored from a February 2020 database export (section 6.1).
5. `vendor.js` still contains jQuery 2.0.3 / Chaplin 1.x. They work in current
   browsers for what the score uses; a full framework migration was
   deliberately out of scope for this pass.
6. The other two scores (`/jbmf`, `/two`) shared the same architecture and
   defects; they have since received the same treatment — see their own
   chronicles: [`jbmf/MODERNIZATION.md`](../jbmf/MODERNIZATION.md) and
   [`two/MODERNIZATION.md`](../two/MODERNIZATION.md).

---

## 6. Second pass (video playback, data repair, self-hosted child modules)

A later pass fixed what the first pass could only document: broken video
cells, the corrupted JSON data, and the runtime dependency on
`lab.motionbank.org`.

### 6.1 Cell data restored from a 2020 database export

A mongodump-style export of the old mosys/Rails backend (Feb 2020) surfaced in
`~/Downloads/mosys-meso-assets` — NDJSON with one Mongo document per cell, in
Mongo extended JSON (`$oid`, `$symbol`, `$numberInt`). It covers all 252
`deborah_hay` cells (plus `jbmf` and `two`), and the repo's intact cell files
are an exact conversion of it, which pinned the mapping:

- `_id.$oid` → `id`, `type.$symbol` → `type`, everything else passthrough;
- `poster_image.{url,small.url,medium.url}` rebuilt from
  `poster_image_filename` as `/system/uploads/<score>/Cell/poster_image/<size>/<fn>`;
- cells without a filename get the `/assets/fallback/…` poster set.

Round-trip-diffing this conversion against **all 569 previously intact** cell
JSONs across the three scores matched 100%, so the same mapping was used to
regenerate the corrupted ones:

| score | corrupted cells (nginx "502 Bad Gateway" HTML) | restored |
|---|---|---|
| deborah_hay | 71 | 71 |
| jbmf | 99 | 99 |
| two | 22 | 22 |

Git history keeps the quarantine step (commit `fc0dc5a` renames them to
`*.json.corrupt`) separate from the restore (commit `775e478`), so the original
scrape damage stays traceable. Sets (`sets/*.json`) were not corrupted and were
left untouched — their format merges grid cells with cell data and was not
regenerated. The export's `assets/` folders proved redundant: every upload the
JSON references already exists under `system/uploads/` (2736 refs, 0 missing).

### 6.2 Local recording player module (`/dh/dhay/player/`)

The remote `lab.motionbank.org/dhay/flowplayer/` module was the reason video
cells were dead: it drove Flowplayer 5.4.3 in `engine: 'flash'` + RTMP (Flash
is gone from all browsers) and resolved everything else through the dead
`deborah-hay-pm2.herokuapp.com` PieceMaker 2 API. It was replaced by a new
local module, `dh/dhay/player/index.html`:

- **Video.js 10.3.0** (the current major, built on HTML custom elements —
  `<video-player><video-skin><video …>`), self-hosted under
  `dh/dhay/player/vendor/` (ES module chunks mirrored from `@videojs/cdn`),
  so the score has no player CDN dependency.
- Plays the MP4 renditions directly from the still-alive CloudFront host over
  https (`/dh/piecemaker/<file>.mp4`, taken from `set-config`, with a sane
  fallback), via the plain HTML5 media element — no Flash, no RTMP.
- **Implements the score's PostMessenger wire protocol** with ~70 lines of
  plain `postMessage` code: answers `connect?` with `connect!`, requests
  `get-config`, consumes `set-config`, handles `>>set-scene` /
  `set>fetch-answer`, reports `flowplayer:finish` on `ended`. Same-origin
  iframe, so the origin allow-list is the page's own origin plus the optional
  `domain=` parameter.
- **Scene navigation degrades gracefully**: scene timings lived only in the
  dead PieceMaker API (no Wayback captures exist), so `>>set-scene` is logged
  and playback continues. If a `scenes/<file>.json` map (`title → seconds`)
  is ever recovered, the module will honour it without code changes.
- The cell JSON's `iframe-src` params (`rec`, `vid`, `file`, `gid`, `perf`)
  are preserved verbatim, so the parent's `cell-recording-view` overlay logic
  keeps parsing them unchanged.

Verified headless-Chromium against the Docker image: the big "Overlays" cell
plays **on the first click** (`paused:false`, `currentTime` advancing), zero
Heroku/API requests, no exceptions; previously the first click threw and only
the second click (sometimes) started playback.

All 302 recording-cell `iframe-src` values in the deborah_hay data now point
to `/dh/dhay/player/`.

### 6.3 Text/notes modules vendored (`/dh/dhay/text/`)

The five text modules (`score-text`, `score-text-notes`, `score-notes`,
`ros-insights`, `jeanine-insights`) are copied from `lab.motionbank.org/dhay/text/`
with minimal patches: the Google Fonts link upgraded to https (it was the last
mixed-content offender), `style.css` font URLs repointed to the repo's
`/assets/open-sans/`, and their shared `js/` (PostMessenger, messaging,
locparams, app) vendored unchanged to pin the wire protocol. All 60 text-cell
`iframe-src` values now point to `/dh/dhay/text/` — **the /dh score no longer
requests anything from lab.motionbank.org at runtime**. Remaining remote
embeds (YouTube, Vimeo, moba logo, track inspector) were probed alive over
https.

### 6.4 https for all iframe embeds (all three scores)

Every remaining `http://` `iframe-src` in `api/{deborah_hay,jbmf,two}` was
upgraded to `https://` after probing each unique child URL (all hosts
https-capable). Mixed-content iframes are hard-blocked by modern browsers, so
these cells were dead under https hosting regardless of the child modules'
health. Six `two` cells also had a leading tab+space inside the `iframe-src`
value, breaking iframe resolution outright — trimmed. Aggregate
`cells.json`/`sets.json` indexes updated too (125 files, 1-line diffs).

### 6.5 What still needs source data

- **jbmf `pm_player_01` cells (140)**: that module resolves its video file via
  `vid=` from the dead `jbmf-pm2.herokuapp.com` API; the `vid → file` mapping
  is unrecoverable from public sources (no Wayback captures of either PM2
  API). If a PM2 database dump (events with `fields.file`, `fields.vid_service*`,
  `fields['alt-angle-*']`, scene events) ever becomes available, the same
  local-player treatment applied here can be extended to jbmf, and scene
  timing maps for `/dh` can be generated as `scenes/<file>.json`.
- ~~CloudFront overlay images (`/dh/app/cells/…`) still 403; cells fall back
  to local poster images.~~ **Recovered in the third pass** — see § 7.

### 6.6 Follow-up fixes from user testing

- **Recording cells went dark grey on close** instead of returning to their
  poster: the `cell-recording-view.close()` override saved the current
  background (which `open()` had set to `none`) and re-applied it *after* the
  base `close()` had restored the poster. The override now only re-applies
  actual scene-overlay backgrounds.
- **Scene navigation felt dead after the first click**: the player warned
  about missing timing data only once, and every cell open logged a 404 for
  the per-video scenes probe. It now fetches a shipped (empty)
  `scenes/index.json` manifest — no 404 noise — and logs every unmatched
  scene navigation. Note the overlay behaviour is genuinely mixed: ~22 of 30
  `20130601_all` scene overlay PNGs are still alive on CloudFront, so those
  text-score links visibly "jump" the cell to the scene's frame grab; the
  video itself still cannot seek without timing data (see 6.5).

### 6.7 Full self-containment: lab.motionbank.org vendored away

A final pass mirrored every still-referenced `lab.motionbank.org` child
module into `/modules/` (356 files: jbmf generators and performers,
score-books, the dhay track inspector, the moba logo, test/example-iframe)
and rewrote every `iframe-src` to same-origin paths. A recursive crawler
followed module-relative html/css/js references; URLs built at runtime by
the modules themselves cannot be mirrored statically. The scores no longer
request anything from `lab.motionbank.org`; what remains remote are third-
party embeds (YouTube, Vimeo) and CDN libraries referenced inside the
mirrored modules.

Mechanical, behavior-safe lint fixes were applied to the vendored
PostMessenger copies and `yt_annot_01/js/api.js` (throw strings → Error
objects, guarded `JSON.parse` in the message handler, `hasOwnProperty` via
`call`). Vendored frozen mirrors (this one and the video.js chunk mirror)
are excluded from lint analysis via `.pi-lens.json`.

---

## 7. Third pass — PieceMaker 2 data restoration (2026-11-06)

The PM2 dump blocking scene navigation (§ 6.2) was found: the local
archive contains `deborah-hay-pm2-….pgdump` — the complete
`deborah-hay-pm2.herokuapp.com` database. Restored into a throwaway
Postgres 15 container it holds 6 groups; the score's material lives in
**group 24 `notimetofly`** (159 videos, 5,765 markers, 1,487 scenes,
844 `scene2`) and group 29 `fh-hof-2014-04` (159 videos, 5,759 markers),
plus discussion/interview groups.

### Scene timing maps

All **21 distinct `vid=` values** in the 49 recording-cell URLs resolve to
`video` events, and **every one has a complete scene set** — type `scene`
events inside `[video.utc_timestamp, video.utc_timestamp + duration]`
(avg 50.8 scenes per take, max 59). For each recording file (49 distinct,
including the camera-angle pairs and the June 2013 compilation videos)
the exporter wrote `dh/dhay/player/scenes/<file>.json` mapping
**scene title → offset seconds** (`event.utc_timestamp − video.utc_timestamp`,
first occurrence of each title wins — the original module's seek
semantics), plus the `scenes/index.json` manifest the player already
consumed. No player code changes were needed: `>>set-scene` from the text
score and the scene-overlay switching work again.

The same window logic confirmed the original module's data shape: the
lab flowplayer fetched `findEvents(gid, {type:'scene', from, to})` and
broadcast `currentScene.fields.title` during playback — the export is a
faithful snapshot of that call.

### Track-data inspection cell

`data_inspect_tracks_01` ("Inspecting track data" cell) called the dead
`notimetofly.herokuapp.com` PM1 API to list the NTTF videos, load a
video's `data` event, and fetch `lab.motionbank.org/dhay/data/<file>_com.txt`
(center-of-mass track files). Restoration:

- the `notimetofly-….pgdump` was restored; its 22 `data` events
  (motion-capture track references, e.g.
  `Janine_D05T01_withBackgroundAdjustment_Corrected/Tracked3DPosition.txt`)
  were exported to `modules/dhay/data_inspect_tracks_01/videos.json`
  (video id + title + data events).
- 20 of the 22 `_com.txt` track files were still on
  `lab.motionbank.org` and are now vendored under
  `modules/dhay/data_inspect_tracks_01/data/` (2 were already gone
  upstream — those two selections log an error, as before).
- `connect.js` now loads `videos.json` instead of the PM1 API and serves
  the track data from the vendored `data/` dir; the PM1 `eval()` of event
  descriptions was replaced by a strict parser.

### Media + fonts

The 49 recording MP4s (~1 GB) are mirrored from CloudFront to
`media/dh/piecemaker/` (not in git — the media set ships as a separate
archive, see root README), and the
player's default `fileHost` now resolves same-origin (`/media`). Open Sans
was self-hosted under `assets/fonts/` for the score shell and the text
modules; the Google-CDN jQuery in the text modules is vendored.

### Overlay PNGs recovered from CloudFront

The "dead" CloudFront overlay host (§ 1, § 5, § 6.5) turned out to be
alive after all — the earlier 403s were a misleading single-URL probe.
Recovery, recorded step by step:

1. **Filename space reconstruction** — `tools/list-overlay-pngs.py`
   replays the URL building in `app-extend.js` over every recording and
   visualization cell in the restored cell data, combined with the PM2
   scene titles from the new `scenes/` maps:
   `dh/tools/overlay-png-candidates.txt` holds every name the score can
   possibly request.
2. **First probe — 1,153 live** — a HEAD probe of all 7,661 candidates
   against the original distribution found 1,153 returning HTTP 200.
   Comparing probe misses against the cell data exposed a bug in the
   candidate generator: the original code appends `join("_")` directly to
   base-paths that already end in `_`, so the generator had produced
   `path_D05T01__scene.png` (double underscore) instead of
   `path_D05T01_scene.png`. Fixed and regenerated: 7,115 candidates.
3. **Second probe — 5,151 live** — the corrected names were re-probed:
   **5,151 of 7,115 candidates return HTTP 200** (the remaining 1,964 are
   generated combinations that were never uploaded — e.g. per-scene
   overlays for takes that only ever had a per-recording one).
4. **Download + mirror** — all 5,151 PNGs (372 MB, zero failures) were
   downloaded into `media/dh/app/cells/{recording,visualization}/full/…`
   — exactly the path `fileHost + baseUrl` resolves to, so
   `app-extend.js` needed no changes at all.
5. **Verification** — in the live score page, a recording overlay
   (`D04T02_Juliette_sync_AJA_1-1-minute-turn.png`, 640×360) and a
   visualization path overlay (`path_D04T02_1-minute-turn.png`, 700×700)
   both load from `/media/dh/app/…` with **zero CloudFront requests**;
   the `>>set-scene` overlay switching of § 6.6 now works from the local
   mirror.

---

## 8. How to run

Any static file server pointed at the repository root, e.g.:

```sh
python3 -m http.server 8765
# open http://localhost:8765/dh/
```

or the Docker image (see the repository README).

Data is fetched from `api/deborah_hay/` (configured in
`dh/javascripts/app-extend.js` → `config.apiBaseUrl`, `apiHost` empty =
same origin), so the score is fully self-contained on any https domain.
