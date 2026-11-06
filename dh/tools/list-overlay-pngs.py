#!/usr/bin/env python3
"""
List every overlay PNG filename the /dh score can request from
`/dh/app/cells/{recording,visualization}/full/…` (originally on CloudFront,
now 403). The names are reconstructed from the cell data and the restored
PM2 scene maps — see dh/MODERNIZATION.md §7.

URL construction (dh/javascripts/app-extend.js):

    recording overlay:
        /cells/recording/full/<file>-<scene-title-slug>.png
        <file> = the cell's `file=` URL parameter (kept raw)
        <scene-title-slug> = PM2 scene title, [^-a-z0-9] → '-', runs collapsed

    visualization overlay:
        /cells/visualization/full/<base-path>[_<recording>]_<scene-title-slug>.png
        <base-path> = cell attribute, kept raw (may contain '/')
        <recording> = DxxTyy, present if `per-recording` is truthy
        (or `fixed-image` used verbatim instead)

Outputs one candidate filename per line to stdout (sub-directories from
`base-path`/`fixed-image` included). Pipe into a search over old bucket
listings / deployment archives:

    python3 dh/tools/list-overlay-pngs.py > overlay-png-candidates.txt
"""
import glob
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))


def slug(s):
    return re.sub(r"-+", "-", re.sub(r"[^-a-z0-9]", "-", str(s)))


def load(path):
    try:
        with open(path) as f:
            return json.load(f)
    except (OSError, json.JSONDecodeError) as e:
        print(f"warning: skipping {path}: {e}", file=sys.stderr)
        return {}


rec_files, viz_cells = set(), []
for f in glob.glob(os.path.join(ROOT, "api/deborah_hay/cells/*.json")):
    c = load(f)
    af = c.get("additional_fields", {})
    m = re.search(r"file=([A-Za-z0-9_.\-]+)", str(af.get("iframe-src", "")))
    if m:
        rec_files.add(m.group(1))
    if af.get("base-path") or af.get("fixed-image"):
        viz_cells.append(af)

scene_index = load(os.path.join(ROOT, "dh/dhay/player/scenes/index.json"))
scene_titles = {}
for f in rec_files:
    mf = os.path.join(ROOT, f"dh/dhay/player/scenes/{f}.json")
    if os.path.exists(mf):
        scene_titles[f] = list(load(mf).keys())
all_scenes = sorted({t for ts in scene_titles.values() for t in ts})
rec_ids = sorted({m.group(0) for f in rec_files if (m := re.search(r"D\d\dT\d\d", f))})

names = set()
# recording overlays: /cells/recording/full/<file>-<scene slug>.png
for f, titles in scene_titles.items():
    for t in titles:
        names.add(f"{f}-{slug(t)}.png")

# visualization overlays
for af in viz_cells:
    if af.get("fixed-image"):
        names.add(af["fixed-image"])
        continue
    bp = af.get("base-path")
    if not bp:
        continue
    per_recording = str(af.get("per-recording", "")).lower() not in ("", "false")
    recs = [af["recording"]] if af.get("recording") else (rec_ids if per_recording else [None])
    per_scene = str(af.get("per-scene", "")).lower() != "false"
    # js: s += [rec?, scene].join("_") — the recording/scene pair is joined
    # with "_" and appended directly to base-path (no extra separator).
    for r in recs:
        if not per_scene:
            names.add(bp + (r or "") + ".png")
        else:
            for t in all_scenes:
                names.add(bp + ((r + "_") if r else "") + slug(t) + ".png")

for n in sorted(names):
    if not n.startswith("/"):
        print(n)
