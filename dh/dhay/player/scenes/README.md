# Scene timing maps

The `/dh` recording player (`../index.html`) can seek the video when the text
score navigates to a scene (`>>set-scene`). Scene timings originally lived in
the PieceMaker 2 API (`deborah-hay-pm2.herokuapp.com`), which is offline, so
the maps are currently empty.

## Format

- `index.json` — object mapping video file ids (the `file=` URL parameter) to
  `true` for each video that has a timing map, e.g. `{ "20130601_all": true }`.
- `<file>.json` — object mapping scene titles (as sent by the text module,
  e.g. `"questions"`, `"fred + ginger"`) to seconds from the start of the
  video: `{ "questions": 412.5, ... }`.

If a scene title is missing from the map, the player logs and keeps playing.

To generate a map from a PieceMaker 2 database dump: for each `video` event,
`time = (scene.utc_timestamp - video.utc_timestamp) / 1000` for every `scene`
event within the video's time range.
