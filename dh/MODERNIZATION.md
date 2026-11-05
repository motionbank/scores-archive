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
| `d35vpnmjdsiejq.cloudfront.net/dh/app/cells/...` (recording/visualization overlay PNGs, `missing.jpg`) | **dead (403)** – content no longer hosted |
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
2. **The embedded `lab.motionbank.org` pages still have their own legacy
   issues** (their hard-coded `http://` Google-Fonts link is blocked under
   https — cosmetic only; flowplayer is configured for a Flash/RTMP engine
   that no longer exists; a couple of their replies are sent with a default
   target origin that modern browsers reject). Those pages live outside this
   repository; a follow-up could vendor (copy + patch) the `/dhay/` modules
   into this repo and fix them there.
3. **CloudFront overlay images (`/dh/app/cells/...`) return 403.** The
   recording/visualization cells gracefully fall back to their poster images,
   which are served locally from `system/uploads/`.
4. **71 of the 252 exported cell JSON files contain "502 Bad Gateway" HTML**
   instead of JSON — the original API scrape was incomplete for those cells.
   They render as "missing" cells.
5. `vendor.js` still contains jQuery 2.0.3 / Chaplin 1.x. They work in current
   browsers for what the score uses; a full framework migration was
   deliberately out of scope for this pass.
6. The other two scores (`/jbmf`, `/two`) shared the same architecture and
   defects; they have since received the same treatment — see their own
   chronicles: [`jbmf/MODERNIZATION.md`](../jbmf/MODERNIZATION.md) and
   [`two/MODERNIZATION.md`](../two/MODERNIZATION.md).

---

## 6. How to run

Any static file server pointed at the repository root, e.g.:

```sh
python3 -m http.server 8765
# open http://localhost:8765/dh/
```

Data is fetched from `api/deborah_hay/` (configured in
`dh/javascripts/app-extend.js` → `config.apiBaseUrl`, `apiHost` empty =
same origin), so the score is fully self-contained on any https domain.
