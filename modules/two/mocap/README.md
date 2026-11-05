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

UI: play/pause, timeline scrub, playback speed, "reset view" (orbit/zoom is
mouse control at any time), and a "skeleton" x-ray toggle (translucent body +
visible bones). Both buttons are additions — the original Unity app exposed
no UI; it had a mouse-orbit camera and mouse-driven dancer interactions
(`CameraControl`, `MakeDancerDoStuffWithMouse`, `SmudgeDancer`,
`TrailRenderControl`, `BoxDropControl` script names in the bundles) and no
skeleton view.

## Data pipeline

Each `data/<name>.export.json` was extracted from the original Unity **4.2.0f4**
bundle (`https://s3.amazonaws.com/motionbank-media/two/data/MocapView_*/…`)
with [UnityPy](https://github.com/K0lb3/UnityPy):

1. `Transform` components → bone hierarchy (paths + rest pose)
2. `AnimationClip` ("Take 001", 24 fps) → local rotation/position/scale
   keyframes per bone
3. `Mesh` + `SkinnedMeshRenderer` → positions, triangle indices, 4 bone
   weights/indices per vertex, bind poses
4. `Material`/`Texture2D` → material name, shader family, `_Color`,
   `_MainTex` (PNGs extracted to `data/<name>.tex/`); meshes carry their
   material index
5. `Light`, `Camera` and `RenderSettings` → light type/color/intensity/range
   + scene-graph position, camera path/FOV/background, fog (mode/color/
   density/linear range) and ambient light

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

## Scene fidelity & camera framing

The viewer restores what is recoverable from the scene data: material
colors (with a hash-color fallback for missing textures), background color,
lights, fog and the original camera's **FOV and viewpoint direction**. The
dancers' flat colors and the stage tints (Mocap 47 teal, Recall08 green)
come from the original data.

What is **not** recoverable: script behaviour. The bundles contain no
embedded assembly, no TextAssets, and their MonoBehaviours are typeless —
so feature scripts (CameraControl, MakeDancerDoStuffWithMouse,
SmudgeDancer, TrailRenderControl, BoxDropControl, AddOtherCameraImgs) exist
as names only. No post-effect is enabled in any bundle.

What **was** recovered from the data (plus how the rest is inferred):

- **Original screen buttons**: the bundles ship the actual icon PNGs
  (play/pause, minus1/plus1, FullScreen/NotFullScreen, camera) — the
  viewer's toolbar uses them; behaviours are inferred from the icons.
- **Motion trails** (`TrailRenderControl`): re-created as fading white
  ribbons behind hands/feet/head, on by default, toggleable.
- **Smear/noise overlay** (`FadedNoiseFilter`): every MocapView bundle has
  a full-screen `FadedNoiseFilter` quad parented to the Main Camera with a
  runtime-assigned material; 44a/44b/44c/46 ship the CrossHatchSaga
  cross-hatch texture it used. Re-created as an opt-in "smear" multiply
  overlay at low opacity. `FadePlane` (transition fade) and other meshes
  whose materials the scripts assigned at runtime stay invisible, matching
  the original scene graphs.
- Mouse-dancer interactions (`SmudgeDancer`, `BoxDropControl`) and stage-
  camera imagery (`AddOtherCameraImgs`) remain name-only — no data to
  reconstruct them from.

Camera framing specifics (learned the hard way):

- Frame from **animated** joints, never the rest pose — the serialized
  T-pose sprawls across hundreds of units (arms out), dragging medians and
  clusters onto hands/spines.
- Joint samples accumulate over the first ~1.5 s of playback, with one
  silent reframe at ~12 s to cover a solo dancer's roam (skipped if the
  user has orbited already).
- The orbit target is the **densest joint cluster** (candidate centres,
  neighbour counts within 12% of the samples' bounding-sphere diagonal),
  which ignores MotionBuilder rig bones (`/ctrl/i` names) and props.
- Camera distance = 96th-percentile cluster radius × 1.45 × 2, keeping the
  original camera's direction; the original position itself framed the
  whole stage and left the dancers too small.

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
