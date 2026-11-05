# Modernizing the "TWO" Online Score (`/two`)

Chronicle of the analysis and modernization of the *TWO* score (the
"linear" companion score to Motion Bank's *A Choreographic Object* research),
located under `/two`. It follows the same approach as
[`dh/MODERNIZATION.md`](../dh/MODERNIZATION.md), which should be read first
for the architecture background (Brunch/Chaplin/PostMessenger cell system,
`api/<score>/` JSON data, `system/uploads/` images).

Goal: make the score work when hosted under **any `https://` domain**.

---

## 1. What is different in `/two`

- `two/javascripts/app-base.js` was **byte-identical to the original
  `/dh` bundle** (same older Brunch build) — so it had exactly the same
  defects and received exactly the same fixes.
- `two/javascripts/app-extend.js` contains only the score config
  (`apiBaseUrl: "api/two"`, same-origin) and the cover template — no
  hard-coded hosts, no changes needed.
- Data: `api/two/` (published sets: `sets` overview, `memory`, `tendency`,
  `impulse`, `habit`, `Credits`). Cell mix: 36 `image`, 39 `vimeo`,
  33 `html`, 29 `iframe`, 10 `text`, 8 `set_link`. **22 cell JSON files are
  corrupt** ("502 Bad Gateway" bodies from the original API scrape).
- The `iframe` cells point at two external hosts:
  - `https://s3.amazonaws.com/motionbank-media/two/data/...` — **S3, https
    works**. Several `iframe-src` values in the JSON carry **leading
    whitespace/tabs** (data quirk).
  - `MocapView_*/...Mocap.html` pages are **Unity Web Player** embeds.

### External dependencies

| Dependency | Status (Nov 2026) |
|---|---|
| `s3.amazonaws.com/motionbank-media/two/...` (text cells, mocap pages) | **alive, https-capable** (200 over https) |
| `player.vimeo.com` videos | alive over https; **some videos return 401** (private/embed-restricted) |
| Unity Web Player content | **dead technology** (see limitations) |

---

## 2. Breakage found (same root causes as `/dh`)

1. **`domain=http://<host>` handshake injection** in `cell-media-view`
   (rejects the `connect?` handshake under https → cell messaging dead).
2. **`cell-iframe-view.connectPM`** derived the child origin from the raw
   model attribute instead of the iframe's actual `src`.
3. Mixed content: http Google Fonts `<link>` in `index.html`; `http://` S3
   iframe sources in the JSON data.
4. **Whitespace-prefixed `iframe-src` values** in the JSON would have
   bypassed a naive `http://` → `https://` replacement.
5. Hard-coded dead links: `http://scores.motionbank.org/` (header menu,
   logo `data-href`), `http://motionbank.org/` (header menu).
6. IE-era cruft: conditional comments, `X-UA-Compatible`, Chrome-Frame
   prompt, retired Google Analytics property.
7. **Pre-existing file corruption**: `two/index.html` ended in a mangled
   duplicate (`...cript>` followed by a second `</body></html>`).

---

## 3. Changes made

### `two/index.html`
- Same cleanup as `/dh` and `/jbmf`: dropped IE conditionals /
  `X-UA-Compatible` / Chrome-Frame prompt / Google Analytics snippet;
  Google Fonts link and noscript link → `https://`.
- **Removed the corrupted trailing markup** (`cript>` + duplicated closing
  tags after the real end of the document).

### `two/javascripts/app-base.js`
- **`cell-media-view.getTemplateData`**: trims whitespace from `iframe-src`
  (needed for the S3 URLs in this score's data), upgrades `http://` →
  `https://`, and injects `domain=window.location.origin`.
- **`cell-iframe-view.connectPM`**: derives the child origin from the
  iframe's *actual* `src` (protocol-relative URLs resolved against the page
  protocol; `about:blank` skipped).
- Vimeo cell: player URL, `postmessenger.accept()` origin and message
  receiver origin all `https://player.vimeo.com`.
- Header menu links → `https://motionbank.org/`; logo target → `/`.

---

## 4. Verification (headless Chromium, local static server)

| Check | Result |
|---|---|
| Cover renders ("TWO"), enter works | ✅ |
| `sets.json` loads, 10 menu links | ✅ |
| Overview set renders 26 cells | ✅ |
| `memory`: renders incl. S3 + mocap iframe cells, **0 http-only srcs** | ✅ |
| `habit`: 26 cells, 14 iframes all `https://` (Vimeo + S3), iframe opens correctly | ✅ |
| S3 text/mocap pages load over https | ✅ (see limitations) |
| `node --check` on modified bundle | ✅ |
| `/dh` regression after adding the shared whitespace-trim | ✅ (cover, sets, handshake, 0 mixed-content srcs) |

---

## 5. Remaining known limitations (outside this repository)

1. **The mocap viewer cells are Unity Web Player embeds** (`UnityObject2`,
   `webplayer.unity3d.com`). The Unity browser plugin was removed from all
   modern browsers years ago; that content can never render again without a
   content-level migration (e.g. re-export to WebGL/three.js). No front-end
   fix is possible; the cells show their poster/info state.
2. **The S3 text-cell pages hard-code `http://` for their jQuery and Google
   Fonts** — under an https parent those two subresources are blocked. The
   text itself still renders (the scripts only drive a fit-to-size effect),
   but with fallback typography. Fix would require editing the files in the
   `motionbank-media` S3 bucket.
3. **Some Vimeo videos return HTTP 401** (private / embed-restricted),
   e.g. `79332844`; they cannot play regardless of hosting.
4. **22 corrupt cell JSON files** ("502 Bad Gateway" bodies) from the
   original data export.

---

## 6. Second pass (2026-11-05)

- **All `http://` `iframe-src` values upgraded to `https://`** (the S3 media
  bucket `s3.amazonaws.com/motionbank-media/…`, the only http host besides
  YouTube, serves https). Mixed-content iframes are hard-blocked by modern
  browsers, so those cells were dead under https hosting before.
- **Six cells had a leading tab+space inside the `iframe-src` value**
  (whitespace corruption in the original export), which broke iframe
  resolution outright — trimmed. Every unique child URL was re-probed alive
  over https.
- **22 corrupt cell JSON files restored** from a February 2020 database
  export; see [`dh/MODERNIZATION.md` § 6.1](../dh/MODERNIZATION.md).

---

## 6b. Unity mocap viewers ported to three.js (2026-11-05)

The seven **Unity Web Player** mocap cells (`MocapView_44a/44b/44c/45/46/47/48`
on S3) could never load again — the plugin has been dead since 2017. They are
now served by a self-hosted three.js viewer at `/modules/two/mocap/`:

- Skeleton, skinning and animation were extracted from the original Unity
  **4.2.0f4** `.unity3d` bundles (downloaded from S3) with UnityPy into one
  JSON per bundle under `modules/two/mocap/data/` — bone hierarchy + rest
  pose, the 24 fps "Take 001" keyframe curves, and skinned meshes with 4
  weights/indices per vertex plus bind poses.
- The viewer (`modules/two/mocap/viewer.js`, three.js r170 vendored) builds
  the bone hierarchy, creates `SkinnedMesh`s with the file bindPoses as
  `boneInverses`, and samples the keyframe curves directly (full scrub
  control). UI: play/pause, timeline, speed, camera reset, skeleton overlay.
- Unity-specific findings recorded in `modules/two/mocap/README.md`: clip
  paths are avatar-relative (resolved by suffix match), the serialized scene
  pose is mid-motion so the **file bindPoses must be used**, and the
  MotionBuilder control rigs (`*_Ctrl:*`, present in 44a/46/47) can be
  ignored — the deform skeletons carry their own baked curves.
- All 7 bundles verified visually in headless Chromium (solos, duets and the
  Careful Scientist trio deform and animate correctly), and the embedded cell
  was verified inside the running score (iframe + canvas + zero console
  errors).
- `docker/nginx-default.conf` now gzips JSON (the largest mocap JSON is
  14 MB, ~3.5 MB compressed).

Not yet ported: the `InterAct_31_PhrasingLandscape` cell (also a Unity Web
Player embed on S3, referenced by a set); the same extraction pipeline
applies. The `TextCells/TEND-*` S3 pages remain plain-HTML embeds.

---

## 7. How to run

```sh
python3 -m http.server 8765
# open http://localhost:8765/two/
```

or the Docker image (see the repository README). Fully self-contained on any
https domain (data from `api/two/`, same origin).
