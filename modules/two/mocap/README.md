# TWO — mocap viewer (three.js port of the Unity Web Player cells)

The original `/two` score embedded seven **Unity Web Player** viewers
(`MocapView_44a/44b/44c/45/46/47/48`) hosted on S3. The Unity plugin has been
dead since 2017; these cells could never load again.

This module replaces them with a self-hosted three.js viewer that renders the
original mocap data — skeleton, skinning, and animation — extracted from the
`.unity3d` bundles.

## Usage

`index.html?data=<bundle>` with one of: `MocapView_44a`, `MocapView_44b`,
`MocapView_44c`, `MocapView_45`, `MocapView_46`, `MocapView_47`,
`MocapView_48` (the original mocap cells), or `Recall08`, `Redux19`,
`PhrasingLandscapeBoth02` (the InterAct Unity scenes). The score cells
reference these directly.

UI: play/pause, timeline scrub, playback speed, camera reset (orbit with the
mouse), skeleton overlay toggle.

## Data pipeline

Each `data/<name>.export.json` was extracted from the original Unity **4.2.0f4**
bundle (`https://s3.amazonaws.com/motionbank-media/two/data/MocapView_*/…`)
with [UnityPy](https://github.com/K0lb3/UnityPy):

1. `Transform` components → bone hierarchy (paths + rest pose)
2. `AnimationClip` ("Take 001", 24 fps) → local rotation/position/scale
   keyframes per bone
3. `Mesh` + `SkinnedMeshRenderer` → positions, triangle indices, 4 bone
   weights/indices per vertex, bind poses

Notes on the Unity specifics that matter:

- Clip paths are **avatar-relative**; scene bone paths carry a scene-root
  prefix — resolved by segment-boundary suffix match at load time.
- The serialized scene pose is **mid-motion** (MotionBuilder rigs saved after
  animating), not the bind pose — the file `bindPoses` are the true bind-time
  inverses and must be used as `Skeleton.boneInverses`.
- Mesh skin data lives in `m_CompressedMesh` (`MeshHandler.m_BoneWeights` =
  4 weights per vertex summing to 1, `m_BoneIndices` = 4 bone indices).
- Bundles 44a/46/47 also contain MotionBuilder **control rigs**
  (`*_Ctrl:*` hierarchies with their own curves); the rendered deform
  skeletons have their own baked curves, so the rigs are ignored at runtime.

## Remaining Unity content

The three additional Unity InterAct scenes are also ported through the same
pipeline: `Recall08` (InterAct 24), `Redux19` (25) and
`PhrasingLandscapeBoth02` (31). Note these were interactive **games** — the
mocap playback and scene render, but the game logic (user input, physics
sim, scoring) that lived in compiled Unity scripts is not reproduced; the
cells play as viewers. The InterAct 27–29 cells are d3.js visualizations and
30 is a paper.js 2D mocap player — those are web-native and are served
as-is from `/modules/two/interact/` (S3 pages with their local deps
vendored). `three.js` r170 is vendored under `vendor/` (import map: `three`
→ `./vendor/three.module.js`).
