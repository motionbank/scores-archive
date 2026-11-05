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
| `player.vimeo.com` videos | alive over https; **some videos return 401** (private/embed-restricted) |
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
3. **99 corrupt cell JSON files** ("502 Bad Gateway" bodies) from the
   original data export — those cells cannot render.
4. WebGL/console noise seen in headless tests comes from the embedded
   modules' own telemetry, not from the score shell.

---

## 6. How to run

```sh
python3 -m http.server 8765
# open http://localhost:8765/jbmf/
```

Fully self-contained on any https domain (data from `api/jbmf/`, same origin).
