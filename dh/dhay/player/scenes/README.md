# Scene timing maps

The `/dh` recording player (`../index.html`) seeks the video when the text
score navigates to a scene (`>>set-scene`). Scene timings originally lived
in the PieceMaker 2 API (`deborah-hay-pm2.herokuapp.com`), which is offline.

**Restored (2026-11-06):** the original Heroku `pg_dump` of the
`deborah-hay-pm2` PM2 database was found and restored, and the `scene`
events were exported into these maps — `index.json` lists **49 recording
files**, each with a `<file>.json` timing map, so scene navigation and
overlay switching work again. See `dh/MODERNIZATION.md` §7.

## Format

- `index.json` — object mapping video file ids (the `file=` URL parameter) to
  `true` for each video that has a timing map, e.g. `{ "20130601_all": true }`.
- `<file>.json` — object mapping scene titles (as sent by the text module,
  e.g. `"questions"`, `"fred + ginger"`) to seconds from the start of the
  video: `{ "questions": 412.5, ... }`.

If a scene title is missing from the map, the player logs and keeps playing
(overlay cells keep their last valid overlay via the availability manifest).

To generate a map from a PieceMaker 2 database dump: for each `video` event,
`time = (scene.utc_timestamp - video.utc_timestamp) / 1000` for every `scene`
event within the video's time range. The shipped maps were produced exactly
this way from the restored dump (see `dh/MODERNIZATION.md` §7 for the
restoration process).
