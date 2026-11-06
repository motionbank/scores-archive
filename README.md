# Motion Bank — Online Scores (static site)

Static hosting for the Motion Bank **online scores** — interactive,
horizontally scrolling web scores made up of *cells* (text, images, videos,
interactive annotation/media modules) that communicate with each other via
`postMessage`-based messaging (e.g. clicking a timed scene annotation moves a
synchronized video cell to that moment).

Originally served from `http://scores.motionbank.org` (ca. 2013–2014, Brunch /
Chaplin / Backbone build). This repository is a fully **static** export: the
scores, their JSON data, and their media are all served as files.

## The three scores

| Path | Score | Content focus |
|---|---|---|
| `/dh`  | **Using the Sky** — Deborah Hay's *No Time To Fly* | text cells, video recording cells with scene overlays, data visualizations |
| `/jbmf` | **Seven Duets** — Jonathan Burrows & Matteo Fargion | Vimeo video cells, interactive generator/performer modules |
| `/two` | **TWO** — "A Choreographic Object" companion score | image/text cells, Vimeo, self-hosted three.js mocap viewers, S3 text modules |

A landing page (`index.html`) links to all three. Shared assets (fonts,
styles) live in `/assets`.

## Repository layout

```
index.html              landing page linking the three scores
dh/  jbmf/  two/        score front-ends (HTML shell + compiled JS/CSS)
api/<score>/            score data as static JSON
                        (sets.json, sets/<id>.json, cells/<id>.json)
api/jbmf/pm2/           PieceMaker 2 event data, one JSON per video event
                        (extracted from the restored heroku pg dump)
system/uploads/         poster/upload images referenced by the JSON
assets/                 shared landing-page assets, Open Sans fonts
media/                  self-hosted media — NOT in git; ships as a separate
                        archive (see "Media self-hosting"):
                        /media/dh/piecemaker/*.mp4, /media/jbmf/piecemaker/*.mp4
                        (mirrored from CloudFront), /media/two/data/…
                        (mirrored from S3)
modules/                score iframe modules, all served same-origin
                        (generators, performer modules, mocap viewer, …)
Dockerfile              nginx-based container image for the whole site
docker/                 nginx site configuration used by the image
```

Each score folder contains a `MODERNIZATION.md` chronicle documenting the
2026 modernization (analysis, findings, changes, verification, and known
limitations):

- [`dh/MODERNIZATION.md`](dh/MODERNIZATION.md)
- [`jbmf/MODERNIZATION.md`](jbmf/MODERNIZATION.md)
- [`two/MODERNIZATION.md`](two/MODERNIZATION.md)

## How the system works

### From score book to screen: cells and sets

Each score is a **set**: a large canvas-like grid of *cells* laid out by
`x`, `y`, `width`, `height` grid coordinates (set JSON) and navigated by
horizontal paging. The compiled score front-end (`app-base.js` +
`app-extend.js`, a Brunch/Chaplin/Backbone bundle) fetches
`api/<score>/sets.json`, renders the cell grid, and lazily activates cells
as they scroll into view.

A **cell** (`api/<score>/cells/<id>.json`) is the atomic content unit. Its
`type` decides the view class: `image`, `text`, `html`, `vimeo`,
`set_link`, and — the most important one — `iframe`. An iframe cell's
`iframe-src` (a Handlebars template with config interpolation) points at a
*self-contained module page* under `/modules/`, sized and positioned by the
grid, communicating with the score and other cells over `postMessage`.
Cells additionally carry `additional_fields` that surface as DOM
attributes (`autoload`, `sticky`, `solo`, `css-*`, `attr-*`) controlling
load behaviour and styling.

### PostMessenger: the score's nervous system

All cross-cell interaction runs through the `PostMessenger` wrapper around
`postMessage`. The score shell acts as a hub:

- every iframe cell gets a `connect?` → `connect!` handshake on load;
  the `domain=` URL parameter (added by the shell at render time) pins the
  accepted origin — now derived from `window.location.origin`, which is
  what makes the scores domain-independent;
- messages starting with `>>` (e.g. `>>set-scene`, `>>ping`) received from
  one cell are **re-broadcast to all other open cells**, and published
  internally (`dispatcher:`); that is how a click in the text score seeks
  a video in another cell;
- `get-config` → `set-config` hands the shell's runtime config (media
  hosts, paths) to modules that need it;
- `set>store` / `set>fetch` let modules keep shared state in the shell
  (e.g. the "current scene" a viewer should restore when reopened).

The players themselves speak a small protocol:
`>>ping {title}` (annotation cell → player: seek to the event titled
`title`), `>>set-scene <title>` (score text link → player: seek to scene),
`get-scene` / `set>fetch` (player → shell: restore scene state),
`flowplayer:finish` (player → score: recording ended).

### PieceMaker 2: the timing database

The 2013–2014 scores were driven by **PieceMaker 2 (PM2)**, a Ruby/
Postgres research tool (The Forsythe Company) for annotating rehearsal
documentation. Recordings of rehearsals/performances were ingested as
*video events*, and researchers pressed keys while watching to create
*annotation*/*marker*/*scene* events, timestamped in **absolute Unix epoch
seconds** (`utc_timestamp`). Events belong to *groups* (one group per
score's film material, e.g. group 40 `jbmf_all`) and carry a `fields`
hash (title, file names, performers, …).

The scores never shipped a database: the modules called the PM2 HTTP API
(`getEvent`, `findEvents(group, {from, to})`, `listEventsOfType`) on
now-deleted Heroku apps. During the 2026 restoration the original Heroku
`pg_dump`s were located and restored (`jbmf-pm2`, `deborah-hay-pm2`,
`notimetofly`), and the **events were exported to static JSON** — one file
per referenced video:

- `api/jbmf/pm2/<vid>.json` — `{ video, events }`: the video event
  (`utc_timestamp`, `duration`, `fields.file`, `vid_service`,
  `vid_service_id`, `alt-angle-*`, …) plus every event inside its time
  window. `vid=` in a cell's `iframe-src` is simply the PM2 **event id**;
  annotation offsets are `event.utc_timestamp − video.utc_timestamp` in
  seconds — exactly what the original `findEvents` call returned.
- `modules/jbmf/generators/yt_annot_01/pm2-data/yt-lookup.json` —
  YouTube id → vid mapping for the annotation cells linked by `ytid=`.
- `dh/dhay/player/scenes/<file>.json` — `{ scene title → seconds }` maps
  generated from group 24/29 `scene` events (same offset formula), which
  the `/dh` player uses for `>>set-scene` seeks.
- `modules/dhay/data_inspect_tracks_01/videos.json` — the NTTF video list
  with their `data` events (motion-capture track files) for the track-data
  inspection cell.

### What the video cells actually play

- **/jbmf pm_player_01 (138 cells)** — rehearsal filmings of the Burrows/
  Fargion duets. PM2 video events carry `fields.file` (e.g.
  `D01_T03_C_Single_MF_Come_T02`) with alternate camera angles in
  `fields['alt-angle-lh|ls|rh|rs']` (selected via `&angle=` in the cell
  URL). The MP4s are self-hosted under `/media/jbmf/piecemaker/` and played
  by a native HTML5 `<video>` element; annotations of the configured types
  (`&type=`, performer-filtered) drive `>>ping` seeks in partner cells.
- **/jbmf yt_annot_01 (7 cells)** — YouTube videos (interview excerpts,
  e.g. "Heads In Sets", "Marble machine") with time-stamped annotations
  that steer other cells; plays via the YouTube iframe API.
- **/jbfm vimeo cells (294)** — the interview score proper. These are
  **domain-locked on Vimeo's side** (HTTP 403 without a
  `*.motionbank.org` referer); see `jbmf/MODERNIZATION.md` §6.
- **/dh recording cells (49)** — *No Time To Fly* rehearsal takes
  (camera-angle pairs: wide `*_sync_AJA_1` + center
  `*_sync_Center_Small`). Served from `/media/dh/piecemaker/` through the
  local Video.js player; scene titles from `scenes/<file>.json` sync the
  text score and overlay visualizations.
- **/two** — Vimeo, S3 text/infographic modules (now self-hosted under
  `/media/two/data/`), and the self-hosted three.js mocap viewers (see
  `modules/two/mocap/README.md`).

### Media self-hosting

All media and data now resolve against the serving origin. The original
hosts were mirrored once and are no longer contacted at runtime:

| Original | Mirrored to | State |
|---|---|---|
| `…/jbmf/piecemaker/*.mp4` (CloudFront, RTMP-era) | `media/jbmf/piecemaker/` | complete (419 files) |
| `…/dh/piecemaker/*.mp4` (CloudFront) | `media/dh/piecemaker/` | complete (123 files) |
| `s3.amazonaws.com/motionbank-media/two/…` | `media/two/data/` | complete |
| `lab.motionbank.org/dhay/data/*_com.txt` | `modules/dhay/data_inspect_tracks_01/data/` | 20/22 (2 files already gone upstream) |
| Open Sans (Google Fonts) | `assets/fonts/` | complete |
| jQuery / froogaloop2 CDNs | vendored in each module | complete |

The `media/` directory (~7 GB, 542 MP4s + text cells) is **not stored in
git** — 25 of the dh full-take recordings exceed GitHub's 100 MB file
limit, and it would dominate the repository history. It ships as a
separate archive instead:

```sh
# fetch the archive (uploaded alongside the repository release):
#   motionbank-media.tar (~7.5 GB, contains the media/ directory)
# verify the checksum:
#   c6a4e76616a497dee7e2d58bcec0e8f901619108eb9adb2cb6d6e9449c6aea4a
shasum -a 256 motionbank-media.tar
# extract into the repository root (creates ./media/):
tar -xf motionbank-media.tar -C /path/to/motionbank-scores-static
```

After extraction the directory contains:

```
media/dh/piecemaker/*.mp4        No Time To Fly recording takes + camera angles
media/jbmf/piecemaker/*.mp4      Seven Duets filming takes + alternate angles
media/two/data/                  TWO text cells + infographics (from S3)
```

The Docker image copies `media/` in at build time, so extract the archive
**before** `docker build`. Without it, everything except the recording/
filming video cells works. The only remaining dead upstreams are private
Vimeo embeds (domain allowlist); they fall back to local poster images.

### Data structures: a field guide

Everything under `api/<score>/` is a static snapshot of the 2013 CMS
(MongoDB → JSON export, repaired in 2026 from a Feb-2020 dump). Three
levels, plus the timing side-data:

| File | Role |
|---|---|
| `api/<score>/sets.json` | **Set index** — one entry per set (id, title, `path` slug, `published`). The score menu shows published sets; the shell fetches one of `sets/<id>.json` on navigation. |
| `api/<score>/sets/<id>.json` | **A set** — the cell grid. Holds `grid_cols`/`grid_rows` (canvas size in cells), `cell_width`/`cell_height` (cell aspect), `css_class_name`, and a `cells[]` array of **embedded cell copies with grid placement** (`x`, `y`, `width`, `height`). |
| `api/<score>/cells.json` | **Flat cell index** (id, title, type, description…) without placement — used by search/overview helpers. |
| `api/<score>/cells/<id>.json` | **A cell** — the content record (no placement). The set file's embedded copy is authoritative for position. |
| `api/jbmf/pm2/<vid>.json` | PM2 timing data per video event — see "PieceMaker 2" above. |
| `dh/dhay/player/scenes/<file>.json` | `{ scene title → offset seconds }` for one NTTF recording. |
| `modules/dhay/data_inspect_tracks_01/videos.json` | NTTF video list + motion-capture `data` events for the track inspector. |

A cell record:

```json
{
  "title": "…",                  // shown in the cell's info overlay
  "description": "…",            // longer text, info overlay
  "type": "iframe",              // picks the Backbone view class (see below)
  "id": "06605f716d6d6d8d052c0000",  // Mongo ObjectId
  "css_class_name": "cell-156",  // legacy per-cell styling hook
  "poster_image": { "url": "/system/uploads/…", "small": {…}, "medium": {…} },
  "additional_fields": { … }      // the type-specific payload (below)
}
```

`additional_fields` is a grab-bag with three conventions the shell applies
literally:

- **`attr-*` → DOM attributes** on the cell element
  (`attr-allowfullscreen`, `attr-mozallowfullscreen`, …);
- **`css-*` → inline styles** (`css-background-color`, `css-font-size`,
  `css-border-color`, …);
- **interaction flags**: `autoload` (open the cell when scrolled into
  view), `sticky` (keep playing when scrolled out), `solo` (close other
  cells of the same group when opened);
- **`class`** → extra DOM classes (e.g. `add-fullscreen`, `no-ui`);
- keys with an `xxx-` prefix are archival CMS notes (original video id,
  file names) — not used at runtime.

Cell types and who handles them:

| Type | n | Handled by | Key fields / behaviour |
|---|---|---|---|
| `vimeo` | 381 | `cell-vimeo-view` | `vimeo-id` → builds the player.vimeo.com iframe; listens for Vimeo `finish` events to trigger `on-finish` links. |
| `context` | 86 | cell-image view | poster-image-only cells (background image, no interaction). |
| `iframe` | 81 | `cell-iframe-view` + `cell-media-view` | `iframe-src` (Handlebars template, config-interpolated, gets `domain=<origin>` appended); opened lazily into an iframe; PostMessenger handshake. |
| `visualization` | 53 | dh-specific view | `base-path`/`fixed-image`/`per-recording`/`per-scene` → builds the overlay PNG URL under `/media/dh/app/cells/visualization/…` (see `dh/MODERNIZATION.md` §7); switches with `>>set-scene`. |
| `recording` | 48 | dh-specific iframe view | `iframe-src` at `/dh/dhay/player/` with `file=`/`vid=`/`gid=`/`perf=`; reacts to `>>set-scene` by overlay-switching. |
| `html` | 45 | `cell-html-view` | `html-content` injected inline (credits, notes). |
| `image` | 41 | `cell-image-view` | `image-src`/`img-src` + optional `link`. |
| `text` | 13 | `cell-text-view` | `text-content` inline text. |
| `set_link` | 11 | `cell-set_link-view` | `set-id`/`cell-id` → navigates to another set (with optional deep-link cell). |
| `title` | 2 | (template only) | big display text (e.g. "end" slate). |

The iframe modules under `modules/` are ordinary static pages; their
`iframe-src` is the contract. Two templates recur: the PieceMaker-driven
players (`pm_player_01`, `yt_annot_01`, `/dh/dhay/player/`, the mocap
viewer) which consume a `vid=`/`file=` and speak `>>ping`/`>>set-scene`,
and self-contained generator/performer toys (`gen_mash_01`, `05_clap`,
`audio`, the Edge-Animate `performer/*` set) which only listen for
`activate!`/`deactivate!`.

Placement coordinates: `x`/`width` are columns, `y`/`height` are rows in
the set's `grid_cols`×`grid_rows` canvas; the shell computes pixel sizes
from `cell_width`/`cell_height` and the viewport, then pages horizontally
through `grid_cols`. The pager, keyboard arrows and `scrollToCell`
deep-links all work off those numbers.

## Modernization (2026)

The scores were built for `http://scores.motionbank.org` and no longer
worked in modern browsers. All three were modernized to run from **any
`https://` domain** with no hard-coded hosts:

- removed mixed content (http font/CDN links, http iframe embeds → https)
- the cross-frame messaging handshake (`domain=` URL parameter and
  `postMessage` target origins) now derives from `window.location.origin`
  at runtime instead of a hard-coded `http://` origin
- dead hosts and links (`motionbank.meso.net`, `scores.motionbank.org`)
  replaced with same-origin/https equivalents
- removed IE conditional comments, Chrome-Frame prompts, and the retired
  Google Analytics snippet
- repaired a corrupted `two/index.html` tail

A second pass (also 2026) fixed the data and playback layer:

- restored the 192 corrupted cell JSON files (nginx "502 Bad Gateway" bodies
  from the original scrape) from a February 2020 database export, with the
  conversion verified by round-trip-diffing all intact files
- replaced the Flash-era `/dh` flowplayer iframe module with a local
  Video.js 10.3.0 player module (`/dh/dhay/player/`) that speaks the score's
  PostMessenger protocol and plays the still-hosted CloudFront MP4s on the
  first click — no dead Heroku API calls
- vendored the `/dh` text/notes iframe modules locally and upgraded every
  remaining `http://` iframe embed across all three scores to `https`

See the per-score chronicles for details, verification results, and the
known remaining limitations (domain-locked private Vimeo videos and
Unity InterAct scenes playing as viewers only).

A third pass (2026) restored the timing data and finished the
self-hosting of all external resources:

- located and restored the original **Heroku `pg_dump`s** of the PM2
  databases (`jbmf-pm2`, `deborah-hay-pm2`, `notimetofly`) and exported
  the event data to static JSON (see "PieceMaker 2" above)
- **`/jbmf` `pm_player_01` (138 cells)** and **`yt_annot_01` (7 cells)**
  now load their video metadata and annotations from that JSON instead of
  the dead API; `pm_player_01`'s Flash/RTMP flowplayer stack was replaced
  with a native HTML5 `<video>` player class with the same interface
- **`/dh` scene timing maps** generated from the dump — text-score scene
  links and overlay switching seek the recordings again
- **all remaining external hosts mirrored and repointed**: piecemaker MP4s
  (CloudFront) → `/media/`, two's text/infographic cells (S3) →
  `/media/two/data/`, Open Sans → `assets/fonts/`, jQuery/froogaloop CDNs
  → vendored copies, `lab.motionbank.org` fullscreen helper + track data
  → vendored. Only Vimeo/YouTube embeds (and the optional Google
  Analytics snippet) remain external.

## Todo — open items

What is still broken or unfinished, and what each item needs to move forward.

### Data

- [x] **PM2 database dumps** — **done**: found in the local
      `Motion Bank Heroku/` folder, restored into throwaway Postgres
      containers, exported to static JSON (`api/jbmf/pm2/`,
      `dh/dhay/player/scenes/`, `modules/dhay/data_inspect_tracks_01/`),
      and wired into all players. The restoration process is documented in
      `jbmf/MODERNIZATION.md` §7 and `dh/MODERNIZATION.md` §7.
- [ ] **Private Vimeo videos (HTTP 403)** in `/jbmf` — as of 2026-11-06
      **all** tested referers return 403 (arbitrary domains, `motionbank.org`
      variants, `localhost`) — the earlier allowlist state
      (`*.motionbank.org` → 200) is gone. The embed allowlist on Motion
      Bank's Vimeo account was reportedly updated; re-verify once it has
      propagated (test: `curl -e "https://<domain>/" -o /dev/null -w
      "%{http_code}" https://player.vimeo.com/video/78808311/config`).
- [ ] **Two lost NTTF track-data files** — the data-inspect cell
      ("Inspecting track data") loads center-of-mass track files from the
      lab mirror; 20 of 22 were recovered, but these two already returned
      404 on `lab.motionbank.org` at restoration time (used by the videos
      `2011-10/D01_T02_Jeanine` and
      `Janine_D06T03_BackgroundSubstracted_Corrected`):
      - `2011-10/D01_T02_Jeanine/Tracked3DPosition_com.txt`
      - `Janine_D06T03_BackgroundSubstracted_Corrected/Tracked3DPosition_com.txt`

      Search old lab backups / deployment archives / Forsythe Company
      archives; drop-ins for
      `modules/dhay/data_inspect_tracks_01/data/<path>`.
- [x] **Unity-Web-Player mocap cells in `/two`** — **done**: all seven mocap
      viewers were rebuilt as a self-hosted three.js player
      (`/modules/two/mocap/`); skeleton, skinning and animation were extracted
      from the original Unity 4.2 `.unity3d` bundles with UnityPy, and every
      `iframe-src` now points at the local viewer. See
      `modules/two/mocap/README.md` for the pipeline and Unity-specific
      findings. The three additional Unity InterAct scenes (24 Recall, 25
      Redux, 31 Phrasing Landscape) are ported through the same viewer —
      as playback (the games' compiled logic is not reproduced); InterAct
      27–30 are web-native d3.js/paper.js pages, vendored under
      `/modules/two/interact/`.

### Data cleanup (low risk, no blockers)

- [x] **Junk/test cells in the data** — **done (2026-11-06)**: removed 30
      unpublished `TEST:`/`DELETE --` scaffolding sets (jbmf 15, dh 12, two 3)
      and the two junk-content cells ("IFrame messaging tester",
      "recording-test"); 363 dangling cell ids that existed only inside the
      removed sets' JSON went with them. The published scores are untouched
      (jbmf 51→36, dh 39→27, two 10→7 sets; all remaining set files
      verified present, scores re-tested in headless Chromium).
      `two`'s "General information - do not delete" set was explicitly kept.
- [x] **Missing `/dh` overlay PNGs — search material** — **done**: the
      complete filename space the score can request is reconstructed in
      `dh/tools/list-overlay-pngs.py` (from the cell data + the restored PM2
      scene maps; 7,661 candidates in
      `dh/tools/overlay-png-candidates.txt`). Search old S3/CloudFront
      bucket listings or deployment archives for these names, then drop
      recovered files into a local `media/dh/app/cells/…` mirror and repoint
      `dh/javascripts/app-extend.js`.
- [x] **CloudFront overlay images recovered and self-hosted** — **done**:
      HEAD-probing the reconstructed filename space against the original
      CloudFront distribution found **5,151 of the 7,115 candidates live**
      (HTTP 200). All were downloaded into `media/dh/app/cells/
      {recording,visualization}/full/…` (372 MB, zero failures); a first
      candidate-name generator bug (double underscore in visualization
      names) was found by probe miss analysis and fixed before the final
      pass. `dh/javascripts/app-extend.js` already resolves overlays via
      `fileHost + baseUrl` = `/media/dh/app/…`, so no code change was
      needed — both overlay types verified loading in the live score page
      (recording overlay 640×360, visualization path overlay 700×700) with
      **zero CloudFront requests**.
- [x] **Remaining remote embeds on `lab.motionbank.org`** (`moba/logo`,
      `data_inspect_tracks_01`, jbmf performer/generator modules) — **done**:
      all mirrored under `/modules/` and every `iframe-src` rewritten
      same-origin. The score sites no longer request anything from
      `lab.motionbank.org` (20 of 22 track-data files recovered; the two
      lost ones are listed under "Data" above).

### Infra / housekeeping

- [x] **Media self-hosting (~7 GB)** — **done**: mirrored from CloudFront/S3,
      all references repointed same-origin. The media set is not stored in
      git (25 dh takes exceed GitHub's 100 MB limit); it ships as a separate
      archive with download + checksum documented in the root README
      ("Media self-hosting"). Extract before `docker build`.
- [x] **Commit `docker/ssl/` (self-signed-TLS image for local testing) and
      the matching `.dockerignore` exception** — **done**, including a fix
      for the healthcheck (dedicated plain-HTTP `/health` endpoint; the
      server-level 301 used to hijack it).
- [ ] **Framework modernization** (jQuery 2.0.3 / Backbone / Chaplin in the
      bundles) — deliberately out of scope so far; works in current browsers
      for what the scores use.
- [ ] **Deploy-time verification on a real https host** — local testing ran
      on self-signed TLS; a check against the production domain (and its
      certificate chain / CDN headers) is still recommended.

## Running

### Locally (any static file server)

```sh
python3 -m http.server 8765
# then open:
#   http://localhost:8765/            (landing page)
#   http://localhost:8765/dh/
#   http://localhost:8765/jbmf/
#   http://localhost:8765/two/
```

### Docker (nginx)

```sh
docker build -t motionbank-scores .
docker run --rm -p 8080:80 motionbank-scores
# → http://localhost:8080/  (landing page; scores under /dh, /jbmf, /two)
```

The image is based on `nginx:1.27-alpine` and serves the whole site (score
front-ends, `api/` JSON data, `system/` images) with gzip compression,
sane cache headers, and a health check on `/`. Deploy it to any host or
container platform and put your TLS termination in front (or use the TLS
support of your ingress/reverse proxy) — the scores work from any
`https://` origin.

No build step is required — the `javascripts/` bundles are pre-built Brunch
output (`vendor.js`, `app-base.js`, `app-extend.js`) and the data lives in
`api/`. Each score is self-contained on its host (data is fetched
same-origin from `api/<score>/`).

## Copyright

© The Forsythe Company / Motion Bank, 2013–2014. All rights reserved.
Modernization changes: 2026.
