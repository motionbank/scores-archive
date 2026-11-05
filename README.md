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
| `/two` | **TWO** — "A Choreographic Object" companion score | image/text cells, Vimeo, S3-hosted text & mocap modules |

A landing page (`index.html`) links to all three. Shared assets (fonts,
styles) live in `/assets`.

## Repository layout

```
index.html              landing page linking the three scores
dh/  jbmf/  two/        score front-ends (HTML shell + compiled JS/CSS)
api/<score>/            score data as static JSON
                        (sets.json, sets/<id>.json, cells/<id>.json)
system/uploads/         poster/upload images referenced by the JSON
assets/                 shared landing-page assets, Open Sans fonts
Dockerfile              nginx-based container image for the whole site
docker/                 nginx site configuration used by the image
```

Each score folder contains a `MODERNIZATION.md` chronicle documenting the
2026 modernization (analysis, findings, changes, verification, and known
limitations):

- [`dh/MODERNIZATION.md`](dh/MODERNIZATION.md)
- [`jbmf/MODERNIZATION.md`](jbmf/MODERNIZATION.md)
- [`two/MODERNIZATION.md`](two/MODERNIZATION.md)

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
known remaining limitations (jbmf's `pm_player_01` cells and scene timings
need a PieceMaker 2 database dump, private Vimeo videos, and
Unity-Web-Player-based mocap content in `/two`).

## Todo — open items

What is still broken or unfinished, and what each item needs to move forward.
Blocked items are marked with the missing input.

### Blocked on data (PieceMaker 2 database dump)

The old PM2 databases (Ruby/Postgres, hosted on now-deleted Heroku apps
`deborah-hay-pm2.herokuapp.com` and `jbmf-pm2.herokuapp.com`) held the video
event metadata. There are no Wayback captures of either API. A dump of the
`events` tables (with `fields.file`, `fields.vid_service`,
`fields.vid_service_id`, `fields['alt-angle-*']`, `utc_timestamp`, `duration`)
would unblock everything below:

- [ ] **`/dh` scene navigation / cell sync** — generate
      `dh/dhay/player/scenes/<file>.json` maps (`title → seconds`) from the
      scene events. The player hook is already implemented and needs no code
      changes; the text-score links (1–30) would then seek the videos.
- [ ] **`/dh` recording/visualization overlay overlays switching during
      playback** — driven by the same `>>set-scene` stream; works again once
      the above maps exist.
- [ ] **`/jbmf` `pm_player_01` cells (140 cells)** — resolve their video file
      only via `vid=` from the API (no `file=` in the cell data). With the
      mapping, port the `/dh` local-player treatment (HTML5 + Video.js) to
      jbmf; the module itself also needs its Flash/RTMP engine and http-only
      froogaloop (Vimeo bridge) replaced.

### Blocked on assets

- [ ] **CloudFront overlay images `/dh/app/cells/…` return 403** —
      recording/visualization cells fall back to local poster images. Needs
      re-hosted overlay PNGs (recover from an old deployment/archive) plus a
      repoint in `dh/javascripts/app-extend.js`.
- [ ] **Private Vimeo videos (HTTP 401)** in `/jbmf` — embed-restricted;
      needs updated video IDs or public embeds in the data.
- [ ] **Unity-Web-Player mocap cells in `/two`** — plugin dead; needs a
      WebAssembly/three.js-style rebuild of the mocap viewers (larger project).

### Data cleanup (low risk, no blockers)

- [ ] **Junk/test cells in the data** — e.g. `two` cells with
      `iframe-src: "asdjahsd kjashd kjashd kajsdhk"`, `/foo/fah`,
      `test/example-iframe` — decide whether to hide/remove them.
- [ ] **Remaining remote embeds on `lab.motionbank.org`** (`moba/logo`,
      `data_inspect_tracks_01`, jbmf performer/generator modules) — alive and
      https-capable; optionally vendor for full self-containment.

### Infra / housekeeping

- [ ] **Commit `docker/ssl/` (self-signed-TLS image for local testing) and
      the matching `.dockerignore` exception** — currently uncommitted.
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
