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

See the per-score chronicles for details, verification results, and the
known remaining limitations (dead external data sources such as the
PieceMaker API, private Vimeo videos, corrupt cell JSONs from the original
data scrape, and Unity-Web-Player-based mocap content in `/two`).

## Running

Any static file server pointed at the repository root, e.g.:

```sh
python3 -m http.server 8765
# then open:
#   http://localhost:8765/            (landing page)
#   http://localhost:8765/dh/
#   http://localhost:8765/jbmf/
#   http://localhost:8765/two/
```

No build step is required — the `javascripts/` bundles are pre-built Brunch
output (`vendor.js`, `app-base.js`, `app-extend.js`) and the data lives in
`api/`. Each score is self-contained on its host (data is fetched
same-origin from `api/<score>/`).

## Copyright

© The Forsythe Company / Motion Bank, 2013–2014. All rights reserved.
Modernization changes: 2026.
