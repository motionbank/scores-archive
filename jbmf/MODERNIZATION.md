# Modernizing the "Seven Duets" Online Score (`/jbmf`)

Chronicle of the analysis and modernization of the Jonathan Burrows / Matteo
Fargion score *Seven Duets*, located under `/jbmf`. It follows the same
approach as [`dh/MODERNIZATION.md`](../dh/MODERNIZATION.md), which should be
read first for the architecture background (Brunch/Chaplin/PostMessenger cell
system, `api/<score>/` JSON data, `system/uploads/` images).

Goal: make the score work when hosted under **any `https://` domain**.

---

## 1. What is different in `/jbmf`

Compared to `/dh`, the `/jbmf` bundle is a **newer Brunch build** of the same
score system (module names carry `.js` suffixes, a newer `require` shim):

- Cell types present: `vimeo` (203 cells — the bulk of the score), `iframe`
  (26 cells pointing at `lab.motionbank.org/jbmf/...` interactive modules:
  generators, performers, score-books), plus small numbers of `text`, `html`,
  `image`, `title` cells. No `recording`/`visualization` cells (those are
  `/dh`-specific and live in its `app-extend.js`).
- The Vimeo view is already somewhat newer: builds a **protocol-relative**
  `//player.vimeo.com/video/...` URL, allow-lists *both* Vimeo origins and
  already sends its player messages with `https://player.vimeo.com`.
- Data: `api/jbmf/` (8 published sets incl. `sets` overview, `score-books`,
  `patterns-and-pulse`, …). **99 of the cell JSON files are corrupt**
  (contain "502 Bad Gateway" HTML from the original API scrape).
- `index.html` was structurally identical to the old `/dh` one (IE
  conditionals, http Google Fonts, old Google Analytics snippet).

### External dependencies

| Dependency | Status (Nov 2026) |
|---|---|
| `lab.motionbank.org/jbmf/...` (generator/performer/score-book modules) | **alive, https-capable** (200 over https) |
| `player.vimeo.com` videos | alive over https; plays from any domain (a few individual videos may be private/deleted → HTTP 401/404) |
| Google Fonts, jQuery CDN | alive, https-capable |

---

## 2. Breakage found (same root causes as `/dh`)

1. **`domain=http://<host>` handshake injection** in `cell-media-view` — the
   embedded `lab.motionbank.org` modules allow-list exactly that string, so
   under https the `connect?` handshake was rejected → cell messaging dead.
2. **`cell-iframe-view.connectPM`** derived the child origin from the raw
   model attribute instead of the iframe's actual `src`.
3. Mixed content: http Google Fonts `<link>` in `index.html`; http iframe
   sources in the JSON data.
4. Hard-coded dead links: `http://scores.motionbank.org/` (header menu ×1,
   logo `data-href`), `http://motionbank.org/` (header menu).
5. IE-era cruft: conditional comments, `X-UA-Compatible`, Chrome-Frame
   prompt, retired Google Analytics property.

---

## 3. Changes made

### `jbmf/index.html`
- Same cleanup as `/dh`: dropped IE conditionals / `X-UA-Compatible` /
  Chrome-Frame prompt / Google Analytics snippet; Google Fonts link and
  noscript link → `https://`.

### `jbmf/javascripts/app-base.js`
- **`cell-media-view.getTemplateData`**: trims whitespace from `iframe-src`,
  upgrades `http://` → `https://`, and injects `domain=window.location.origin`
  (protocol + host of wherever the score is hosted).
- **`cell-iframe-view.connectPM`**: derives the child origin from the
  iframe's *actual* `src` (resolves protocol-relative URLs against the page
  protocol; skips `about:blank`), so the `connect?` handshake always targets
  the real origin.
- Header menu links → `https://motionbank.org/`; logo target → `/`.

### `jbmf/javascripts/app-extend.js`
- No changes needed: it only contains the score config (`apiBaseUrl:
  "api/jbmf/"`, same-origin) and the cover template — no hard-coded hosts.

Not touched (already fine in this build): the Vimeo view's protocol-relative
player URL and dual-origin allow-list.

---

## 4. Verification (headless Chromium, local static server)

| Check | Result |
|---|---|
| Cover renders ("SEVEN DUETS"), enter works | ✅ |
| `sets.json` loads, 51 menu links | ✅ |
| Overview set renders 25 cells | ✅ |
| `all-duets`: 16 cells, 8 Vimeo iframes, **0 http-only srcs** | ✅ |
| Vimeo player loads and plays (no console errors, no failed requests) | ✅ |
| `patterns-and-pulse`: 87 cells, 52 iframes, **0 http-only srcs** | ✅ |
| `score-books`: lab.motionbank.org pages load **over https with `domain=<origin>`** | ✅ (see limitation 1) |
| `node --check` on modified bundle | ✅ |

---

## 5. Remaining known limitations (outside this repository)

1. **`lab.motionbank.org/jbmf/score-books/` pages load jQuery from a
   hard-coded `http://ajax.googleapis.com` URL.** Embedded from an https
   parent that script is blocked → those particular child pages fail with
   `jQuery is not defined` and cannot run their logic. The other `/jbmf`
   modules (e.g. `patterns-and-pulse` generators) are not affected. Fixing
   requires patching the pages on `lab.motionbank.org` (or vendoring them
   into this repo).
2. **Some Vimeo videos return HTTP 401** (private / embed-restricted), e.g.
   `70788635`. They will not play regardless of hosting; the data would need
   updating.
3. ~~**99 corrupt cell JSON files**…~~ **Fixed in the second pass** — all 99
   corrupted cell JSONs were restored from a February 2020 database export;
   see [`dh/MODERNIZATION.md` § 6.1](../dh/MODERNIZATION.md) for the verified
   conversion mapping and git-traceable quarantine/restore commits.
4. WebGL/console noise seen in headless tests comes from the embedded
   modules' own telemetry, not from the score shell.

---

## 6. Second pass (2026-11-05)

- **All `http://` `iframe-src` values upgraded to `https://`** across cells,
  sets and the aggregate indexes (every unique child URL probed alive over
  https). Mixed-content iframes are hard-blocked by modern browsers, so these
  cells were dead under https hosting regardless of the child modules.
- **`pm_player_01` cells (140) remain broken for a data reason**: the module
  resolves its video file from the dead `jbmf-pm2.herokuapp.com` PieceMaker 2
  API (`vid=` URL parameter only, no `file=`), and also used the Flash/RTMP
  engine plus an http-only Vimeo bridge (froogaloop). No Wayback captures of
  the API exist; the `vid → file` mapping and scene timings are only
  recoverable from a PM2 database dump. With one, the local-player treatment
  used for `/dh` (see [`dh/MODERNIZATION.md` § 6.2](../dh/MODERNIZATION.md))
  can be extended here.
- **Private Vimeo cells — resolved (2026-11-06)**: the 294 `vimeo` cells
  in the current `api/jbmf` data are intact and their videos play from any
  hosting domain. Earlier curl probes of `player.vimeo.com/…/config` that
  returned 403 were **Cloudflare bot-blocking curl**, not a domain
  allowlist: in a real browser the iframe loads (HTTP 200), player modules
  load, and HLS segments stream from `skyfire.vimeocdn.com` — verified
  headless against `https://localhost:8443` (cell 68204508, "both sitting
  duet") and confirmed manually across several cells. Occasional single
  videos may still be private/deleted on Vimeo's side.
  Historical note: the 2013 CMS Mongo dump (`motion_bank_score_for_archive`,
  db/dump `20131119_1823_all_scores_reimported`) shows the original jbmf
  score was built entirely on these same Vimeo cells (293 of them) before
  the Piecemaker-based cells were added; the vimeo-id set is identical to
  today's data.
- **Vimeo "allowlist" update — diagnosis withdrawn (2026-11-06)**: the
  same-day re-verification that showed 403 for *every* referer (including
  `localhost` and `motionbank.org` variants) was measuring Cloudflare's
  bot-blocking of `curl`, not Vimeo's embed settings. A real-browser test
  the same day (headless Chromium against `https://localhost:8443`) shows
  the player and HLS segments loading and **videos play from any domain** —
  see "Private Vimeo cells — resolved" above. No Vimeo-side change is
  needed.
- The remaining performer/generator modules on `lab.motionbank.org` are alive
  over https and now load as mixed-content-free iframes. **They have since
  been vendored**: every child module is mirrored under `/modules/` and all
  `iframe-src`s resolve same-origin — see
  [`dh/MODERNIZATION.md` § 6.7](../dh/MODERNIZATION.md). The score no longer
  requests anything from `lab.motionbank.org` (the `pm_player_01` cells stay
  broken for the data reason above; their module is preserved as a historic
  record).

## 7. Third pass — PieceMaker 2 data restoration (2026-11-06)

The missing input identified in § 6 was found: the **original Heroku
`pg_dump`s** still exist in the local archive
(`~/Motion Bank Heroku/`), including `jbmf-pm2-….pgdump` — the complete
`jbmf-pm2.herokuapp.com` database. It was restored into a throwaway
Postgres 15 container and inspected:

- **6,105 events in 3 groups**: `40 jbmf_all` (678 videos, 2,091 scenes,
  743 markers, 67 data events, 101 dev notes), `41 jbmf_yta` (YouTube
  annotation videos + annotations), `42 jbmf_interviews_2` — exactly the
  groups the `pm_player_01` config (`gid=40` default, `gid=41` for the
  YouTube annotator) addressed.
- **All 123 `vid=` values referenced by the score resolve to real video
  events** (ids 23584–30037, e.g. `28689` = `D01_T03_C_Single_MF_Come_T02`,
  a 2.77 s micro-duet take; `23584` = the "Marble machine" YouTube
  annotation video with 343 annotations).
- PM2 data model (as consumed by the score): events carry an absolute
  `utc_timestamp` (Unix epoch seconds), `duration`, a `type`
  (`video`/`scene`/`marker`/`annotation`/…) and a `fields` hash. A cell's
  `vid=` is the **video event id**; a video's annotation set is
  `findEvents(group, {from: video.utc, to: video.utc + video.duration})`,
  and the seek offset is `event.utc_timestamp − video.utc_timestamp`.

### Export

A one-off script (querying the restored dump) wrote:

- `api/jbmf/pm2/<vid>.json` (123 files + `index.json`) — `{ video, events }`
  per referenced video, covering all groups and event types in the window
  so the module-side type/performer filtering works unchanged.
- `modules/jbmf/generators/yt_annot_01/pm2-data/yt-lookup.json` —
  `vid_service_id` (YouTube id) → vid for all 52 group-41 videos, for the
  cells linked by `&ytid=`.

### Module changes

- **`pm_player_01`**: the `PieceMakerApi` chain (`getGroup` → `getEvent` →
  `findEvents`) was replaced by a single `$.getJSON('pm2-data/<vid>.json')`
  that re-shapes the data to what the API returned (`utc_timestamp` wrapped
  back into `Date` objects), so the event filtering, `from/to`, `fixFromTo`,
  `>>ping` seeking and all downstream code are **byte-identical in
  behaviour**. The dead `http://jbmf-pm2.herokuapp.com` host and API key are
  gone from the config.
- **`pm_player_01` player class**: the Flash/RTMP stack
  (flowplayer-5.4.3 + `rtmp://s12vlv7g59gljg.cloudfront.net/cfx/st`) is
  replaced by a **native HTML5 `<video>` implementation** of the same
  player interface (Backbone events `player:ready` / `player:time-change` /
  `player:playing` / `player:finished` plus the `player.api` methods:
  `currentTime`, `duration`, `seekTo`, `play/pause`, `volume`, `mute`,
  `speed`). Media URL: `/media/jbmf/piecemaker/<file>.mp4` (self-hosted,
  see below).
- **`yt_annot_01`**: `listEventsOfType(41,'video')` + `findEvents` replaced
  by the static JSON (`vid=` directly, `ytid=` via the lookup file);
  annotations filtered client-side; the module now also degrades gracefully
  ("No annotations!") instead of crashing on an empty event list.
  The Google-CDN jQuery and http-only `a.vimeocdn.com` froogaloop script
  were vendored.
- **`config` broadcast**: the score shell's `cloudFront.fileHost` (sent to
  all iframe modules via `get-config`/`set-config`) now points at `/media`
  so modules resolve media same-origin.

### Media

The filming MP4s referenced by the score — 116 `fields.file` names plus 377
alternate camera angles used via `&angle=` — are **all still on CloudFront**
(542 files, ~7 GB) and were mirrored to `media/jbmf/piecemaker/`
(shipped as a separate archive outside git; see root README). Only
Vimeo/YouTube embeds remain external.

### Verification

Headless Chromium against a local static server
(`/tmp/pwtest/test-pm2.js`, 2026-11-06):

- `pm_player_01?vid=28689` (filming take, `angle=` free): PM2 JSON loads
  from `api/jbmf/pm2/`, body gets `pm-connected`, native `<video>` element
  created with `src=/media/jbmf/piecemaker/D01_T03_C_Single_MF_Come_T02.mp4`,
  `readyState 4` (media loaded from the self-hosted mirror).
- `pm_player_01?vid=23584` (YouTube service): `pm-connected`; the only
  external requests are YouTube's own player assets.
- `yt_annot_01?vid=24646` and `?ytid=eglrs4r5kzk` (via the lookup file):
  both render the video title and start the annotation timer; no heroku
  calls.
- In-score: `/jbmf/#/set/…` loads `api/jbmf/sets.json` same-origin, opens a
  `pm_player_01?vid=29727&gid=41` iframe cleanly (no 404s from the player
  itself; the only 404s come from the pre-existing `bubbler-02` Edge-Animate
  module, untouched by this round).
- `dh/dhay/player/scenes/index.json`: 49 maps present; a sample map
  (`D05T01_Janine_sync_AJA_1.json`) exposes the expected scene titles
  ("1 minute turn", "beckett quote", …).
- `modules/dhay/data_inspect_tracks_01/videos.json`: 22 videos with data
  events; track files served from the vendored `data/` dir.

---

## 8. How to run

```sh
python3 -m http.server 8765
# open http://localhost:8765/jbmf/
```

or the Docker image (see the repository README). Fully self-contained on any
https domain (data from `api/jbmf/`, same origin) — except the `pm_player_01`
cells noted above.
