// three.js port of the Unity 4.2 mocap viewers (Motion Bank / TWO).
// Data: <name>.export.json — skeleton rest pose, animation keyframes,
// skinned + static meshes extracted from the original .unity3d bundles.
import * as THREE from "three";
import { OrbitControls } from "./vendor/OrbitControls.js";

const params = new URLSearchParams(location.search);
const name = params.get("data") || "MocapView_44a";

const status = document.getElementById("status");
const errBox = document.getElementById("err");
function fail(msg) { errBox.textContent = msg; errBox.style.display = "grid"; status.textContent = "error"; throw new Error(msg); }

// ---------- renderer / scene ----------
const stage = document.getElementById("stage");
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
stage.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x181c20);

const camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 0.05, 500);
camera.position.set(2.5, 2, 4);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.addEventListener("start", () => { userOrbited = true; });

scene.add(new THREE.HemisphereLight(0xdfe8f0, 0x33302a, 2.2));
const sun = new THREE.DirectionalLight(0xffffff, 2.0);
sun.position.set(4, 8, 6);
scene.add(sun);
const sun2 = new THREE.DirectionalLight(0x8899bb, 0.7);
sun2.position.set(-5, 3, -6);
scene.add(sun2);

addEventListener("resize", () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

// ---------- data ----------
status.textContent = "fetching data…";
const res = await fetch(`./data/${name}.export.json`);
if (!res.ok) fail(`No mocap data for "${name}" (${res.status}). Known bundles: 44a 44b 44c 45 46 47 48`);
const data = await res.json();
document.getElementById("title").textContent =
  `TWO — ${name.replace("MocapView_", "Mocap ")} · ${data.clip.name || "take"} (${fmt(data.clip.duration)})`;

function fmt(s) {
  s = Math.round(s);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

// ---------- hierarchy (THREE.Bone so everything can be skinned) ----------
const nodes = new Map(); // full path -> Bone
const roots = [];
const byDepth = Object.entries(data.bones).sort((a, b) => a[0].split("/").length - b[0].split("/").length);
for (const [path, info] of byDepth) {
  const bone = new THREE.Bone();
  bone.name = path;
  const r = info.rest;
  bone.position.set(r.p[0], r.p[1], r.p[2]);
  bone.quaternion.set(r.r[0], r.r[1], r.r[2], r.r[3]);
  bone.scale.set(r.s[0], r.s[1], r.s[2]);
  nodes.set(path, bone);
  if (info.parent && nodes.has(info.parent)) nodes.get(info.parent).add(bone);
  else roots.push(bone);
}
const root = new THREE.Group();
roots.forEach((b) => root.add(b));
scene.add(root);

// ---------- original scene lighting / fog / background ----------
const L = data.lights || [], R = data.renderSettings || {};
let haveLights = false;
for (const l of L) {
  const col = new THREE.Color().setRGB(l.color[0], l.color[1], l.color[2], THREE.LinearSRGBColorSpace);
  if (l.type === 1) {              // directional
    const dl = new THREE.DirectionalLight(col, l.intensity ?? 1);
    const n = nodes.get(l.path);
    if (n) dl.position.setFromMatrixPosition(n.matrixWorld);
    else dl.position.set(4, 8, 6);
    scene.add(dl);
    haveLights = true;
  } else if (l.type === 2) {       // point
    const pl = new THREE.PointLight(col, l.intensity ?? 1, l.range || 0);
    const n = nodes.get(l.path);
    if (n) pl.position.setFromMatrixPosition(n.matrixWorld);
    scene.add(pl);
    haveLights = true;
  }
}
if (R.ambient) {
  const a = R.ambient;
  scene.add(new THREE.AmbientLight(
    new THREE.Color().setRGB(a[0], a[1], a[2], THREE.LinearSRGBColorSpace), 1));
  haveLights = true;
}
if (!haveLights) {
  scene.add(new THREE.HemisphereLight(0xdfe8f0, 0x33302a, 2.2));
}
if (R.fog) {
  const fc = R.fogColor || [1, 1, 1, 1];
  const fogC = new THREE.Color().setRGB(fc[0], fc[1], fc[2], THREE.LinearSRGBColorSpace);
  if (R.fogMode === 1) scene.fog = new THREE.Fog(fogC, R.fogLinearStart || 0, R.fogLinearEnd || 1000);
  else scene.fog = new THREE.FogExp2(fogC, R.fogDensity || 0.01);
}
if (data.camera && data.camera.backgroundColor) {
  const bc = data.camera.backgroundColor;
  scene.background = new THREE.Color().setRGB(bc[0], bc[1], bc[2], THREE.LinearSRGBColorSpace);
}

// ---------- materials (original colors/textures, hash fallback) ----------
const texLoader = new THREE.TextureLoader();
function loadTex(rel) {
  const t = texLoader.load(`./data/${rel}`);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
function matFor(meshName, skinned, matIdx) {
  const dm = (matIdx != null && data.materials && data.materials[matIdx]) || null;
  if (dm) {
    const c = dm.color;
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color().setRGB(c[0], c[1], c[2], THREE.LinearSRGBColorSpace),
      map: dm.tex ? loadTex(dm.tex) : null,
      roughness: 0.85, metalness: 0.02, side: THREE.DoubleSide,
    });
  }
  const hue = [...meshName].reduce((a, c) => (a * 31 + c.charCodeAt(0)) % 360, 7);
  const sat = skinned ? 0.18 : 0.25;
  return new THREE.MeshStandardMaterial({
    color: new THREE.Color().setHSL(hue / 360, sat, skinned ? 0.62 : 0.4),
    roughness: 0.8, metalness: 0.05, side: THREE.DoubleSide,
  });
}

// ---------- meshes ----------
const skinnedMeshes = [];
const staticMeshes = [];
for (const m of data.meshes) {
  const geo = new THREE.BufferGeometry();
  const flat = m.positions.flat();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(flat, 3));
  geo.setIndex(m.indices);
  geo.computeVertexNormals();

  if (m.skinned && m.bonePaths && m.bonePaths.length) {
    const skinIdx = new Uint16Array(m.skinIndex.flat());
    const skinW = new Float32Array(m.skinWeight.flat());
    geo.setAttribute("skinIndex", new THREE.Uint16BufferAttribute(skinIdx, 4));
    geo.setAttribute("skinWeight", new THREE.Float32BufferAttribute(skinW, 4));
    // File bindPoses are the true bind-time inverses (the serialized scene
    // pose is mid-motion, NOT the bind pose). With correct skin weights these
    // reproduce Unity's deformation exactly: vertex' = Σ w·W_bone(t)·bindPose·v.
    root.updateMatrixWorld(true);
    const bones = m.bonePaths.map((p) => nodes.get(p)).filter(Boolean);
    const inverses = m.bindPoses.map((a) => new THREE.Matrix4().set(
      a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7],
      a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]));
    const skeleton = new THREE.Skeleton(bones, inverses);
    const mesh = new THREE.SkinnedMesh(geo, matFor(m.name, true, m.material));
    mesh.frustumCulled = false;
    mesh.bind(skeleton, new THREE.Matrix4());
    mesh.userData.bindInverses = inverses;
    scene.add(mesh);
    skinnedMeshes.push(mesh);
  } else {
    const parent = (m.path && nodes.get(m.path)) || root;
    const mesh = new THREE.Mesh(geo, matFor(m.name, false, m.material));
    mesh.frustumCulled = false;
    // meshes whose material was assigned at runtime by the scene scripts
    // (FadePlane, FadedNoiseFilter …) are invisible in the original scene
    if (m.hidden) mesh.visible = false;
    parent.add(mesh);
    staticMeshes.push(mesh);
  }
}

// ---------- animation (manual sampling: full scrub control) ----------
// Clip paths are relative to the avatar root, scene paths carry the scene
// root prefix — resolve by segment-boundary ends-with match.
const resolveCache = new Map();
function nodeFor(path) {
  if (resolveCache.has(path)) return resolveCache.get(path);
  let n = nodes.get(path) || null;
  if (!n) {
    const suf = "/" + path;
    for (const [p, node] of nodes) {
      if (p.endsWith(suf)) { n = node; break; }
    }
  }
  resolveCache.set(path, n);
  return n;
}
const mode = params.get("mode");
let rotCurves = (data.clip.rotation || []).map((c) => [c, nodeFor(c.path)]).filter(([, n]) => n);
let posCurves = (data.clip.position || []).map((c) => [c, nodeFor(c.path)]).filter(([, n]) => n);
let sclCurves = (data.clip.scale || []).map((c) => [c, nodeFor(c.path)]).filter(([, n]) => n);
if (mode === "rot") { posCurves = []; sclCurves = []; }
if (mode === "rot-pos") { sclCurves = []; }
console.log(`curves: rot=${rotCurves.length} pos=${posCurves.length} scl=${sclCurves.length}`);
const duration = data.clip.duration || 1;
for (const [c] of [...rotCurves, ...posCurves, ...sclCurves]) c.times = c.keys.map((k) => k[0]);

const _qa = new THREE.Quaternion(), _qb = new THREE.Quaternion();
const _v = new THREE.Vector3();
function applyRot(t) {
  for (const [c, node] of rotCurves) {
    const ks = c.keys, ts = c.times;
    const i = bracket(ts, t);
    const k0 = ks[i], k1 = ks[i + 1] || k0;
    const f = k1 === k0 ? 0 : (t - k0[0]) / (k1[0] - k0[0]);
    _qa.set(k0[1], k0[2], k0[3], k0[4]);
    _qb.set(k1[1], k1[2], k1[3], k1[4]);
    node.quaternion.slerpQuaternions(_qa, _qb, f);
  }
  for (const [c, node] of posCurves) {
    const ks = c.keys, ts = c.times;
    const i = bracket(ts, t);
    const k0 = ks[i], k1 = ks[i + 1] || k0;
    const f = k1 === k0 ? 0 : (t - k0[0]) / (k1[0] - k0[0]);
    node.position.set(
      k0[1] + (k1[1] - k0[1]) * f,
      k0[2] + (k1[2] - k0[2]) * f,
      k0[3] + (k1[3] - k0[3]) * f);
  }
  for (const [c, node] of sclCurves) {
    const ks = c.keys, ts = c.times;
    const i = bracket(ts, t);
    const k0 = ks[i], k1 = ks[i + 1] || k0;
    const f = k1 === k0 ? 0 : (t - k0[0]) / (k1[0] - k0[0]);
    node.scale.set(
      k0[1] + (k1[1] - k0[1]) * f,
      k0[2] + (k1[2] - k0[2]) * f,
      k0[3] + (k1[3] - k0[3]) * f);
  }
}
function bracket(ts, t) {
  const n = ts.length;
  if (t <= ts[0]) return 0;
  if (t >= ts[n - 1]) return n - 2;
  let lo = 0, hi = n - 1;
  while (hi - lo > 1) { const mid = (lo + hi) >> 1; if (ts[mid] <= t) lo = mid; else hi = mid; }
  return lo;
}

// ---------- camera fit (robust, world-space) ----------
// Framing must run on ANIMATED poses, not the serialized rest pose: the
// T-pose sprawls across hundreds of units (arms out), dragging any
// median/cluster fit onto a hand or spine. Joint samples are accumulated
// over the first ~1.5 s of playback (the performance area), then the
// densest joint cluster becomes the orbit target. The original scene
// camera's viewpoint is kept, pulled in to frame the dancers.
const fitSamples = [];
let fitElapsed = 0;
let pendingReframe = false;
let userOrbited = false;

function sampleFitPose() {
  const _m = new THREE.Matrix4();
  const push = (x, y, z) => { if (fitSamples.length < 2000000) fitSamples.push(x, y, z); };
  if (!skinnedMeshes.length) {
    for (const mesh of staticMeshes) {
      const pos = mesh.geometry.getAttribute("position");
      for (let i = 0; i < pos.count; i += 2) {
        _v.fromBufferAttribute(pos, i).applyMatrix4(mesh.matrixWorld);
        push(_v.x, _v.y, _v.z);
      }
    }
  } else {
    const seen = new Set();
    for (const mesh of skinnedMeshes) {
      for (const b of mesh.skeleton.bones) {
        if (seen.has(b) || /ctrl/i.test(b.name)) continue; // MotionBuilder rig bones bunch off-stage
        seen.add(b);
        const p = new THREE.Vector3().setFromMatrixPosition(b.matrixWorld);
        push(p.x, p.y, p.z);
      }
    }
  }
}

function frameCamera() {
  const samples = fitSamples;
  const n = samples.length / 3;
  if (!n) return;
  const cx3 = (i) => samples[i * 3], cy3 = (i) => samples[i * 3 + 1], cz3 = (i) => samples[i * 3 + 2];
  let minX = Infinity, minY = Infinity, minZ = Infinity, maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;
  for (let i = 0; i < n; i++) {
    minX = Math.min(minX, cx3(i)); maxX = Math.max(maxX, cx3(i));
    minY = Math.min(minY, cy3(i)); maxY = Math.max(maxY, cy3(i));
    minZ = Math.min(minZ, cz3(i)); maxZ = Math.max(maxZ, cz3(i));
  }
  const diag = Math.sqrt((maxX - minX) ** 2 + (maxY - minY) ** 2 + (maxZ - minZ) ** 2) || 1;
  const rad = diag * 0.12;
  let bestI = 0, bestCount = -1;
  for (let c = 0; c < n; c += Math.max(1, Math.floor(n / 400))) {
    let cnt = 0;
    for (let i = 0; i < n; i++) {
      const dx = cx3(i) - cx3(c), dy = cy3(i) - cy3(c), dz = cz3(i) - cz3(c);
      if (dx * dx + dy * dy + dz * dz <= rad * rad) cnt++;
    }
    if (cnt > bestCount) { bestCount = cnt; bestI = c; }
  }
  let sx = 0, sy = 0, sz = 0, cnt2 = 0;
  for (let i = 0; i < n; i++) {
    const dx = cx3(i) - cx3(bestI), dy = cy3(i) - cy3(bestI), dz = cz3(i) - cz3(bestI);
    if (dx * dx + dy * dy + dz * dz <= rad * rad) { sx += cx3(i); sy += cy3(i); sz += cz3(i); cnt2++; }
  }
  const cx = sx / cnt2, cy = sy / cnt2, cz = sz / cnt2;
  const d = new Array(cnt2);
  let k = 0;
  for (let i = 0; i < n; i++) {
    const dx = cx3(i) - cx, dy = cy3(i) - cy, dz = cz3(i) - cz;
    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
    if (dist <= rad * 2.2) d[k++] = dist;
  }
  d.length = k;
  d.sort((a, b) => a - b);
  const r = Math.max((d[Math.floor(k * 0.96)] || 1) * 1.45, 1);
  camera.far = Math.max(500, r * 60);
  camera.updateProjectionMatrix();
  controls.target.set(cx, cy, cz);
  const camNode = data.camera && nodes.get(data.camera.path);
  if (camNode && data.camera.fov) camera.fov = data.camera.fov;
  camera.updateProjectionMatrix();
  let placed = false;
  if (camNode) {
    camNode.updateWorldMatrix(true, false);
    const p = new THREE.Vector3().setFromMatrixPosition(camNode.matrixWorld);
    if (p.lengthSq() > 1e-6) {
      const dir = p.sub(controls.target).normalize();
      camera.position.copy(controls.target).addScaledVector(dir, r * 2.0);
      placed = true;
    }
  }
  if (!placed) camera.position.set(cx + r * 0.6, cy + r * 0.5, cz + r * 0.95);
  controls.update();
  window.__fit = { r, cx, cy, cz, camPath: data.camera && data.camera.path };
  window.__viewer = { skinnedMeshes, staticMeshes, camera, controls, root };
  window.__home = { pos: camera.position.clone(), target: controls.target.clone() };
}

// ---------- UI ----------
// The original player's screen UI was created at runtime as GUITextures
// (the icon PNGs ship in the bundles: play/pause, ±1 speed, fullscreen,
// camera). The buttons below reuse those actual icons; their behaviour is
// inferred from the icon semantics since the scripts are unrecoverable.
const playBtn = document.getElementById("play");
const timeline = document.getElementById("timeline");
const timeLbl = document.getElementById("time");
let playing = true, t = 0, speed = 1, last = performance.now();

const iconUrl = (name) => (data.textures || []).find((t) => t.includes(`/${name}_`)) || null;
function setIcon(btn, name, fallback) {
  const url = iconUrl(name);
  btn.innerHTML = url ? `<img src="./data/${url}" alt="${fallback}">` : fallback;
}

playBtn.onclick = () => {
  playing = !playing;
  setIcon(playBtn, playing ? "pause" : "play", playing ? "⏸" : "▶");
};
setIcon(playBtn, "pause", "⏸");

const SPEEDS = [0.25, 0.5, 1, 2, 4];
const speedVal = document.getElementById("speedVal");
function setSpeed(s) {
  speed = s;
  speedVal.textContent = `${s}×`;
}
document.getElementById("slower").onclick = () =>
  setSpeed(SPEEDS[Math.max(0, SPEEDS.indexOf(speed) - 1)]);
document.getElementById("faster").onclick = () =>
  setSpeed(SPEEDS[Math.min(SPEEDS.length - 1, SPEEDS.indexOf(speed) + 1)]);
setIcon(document.getElementById("slower"), "minus1", "−");
setIcon(document.getElementById("faster"), "plus1", "+");

// original fullscreen button (FullScreen / NotFullScreen icons)
const fsBtn = document.getElementById("fs");
fsBtn.onclick = () => {
  if (document.fullscreenElement) document.exitFullscreen();
  else document.documentElement.requestFullscreen().catch(() => {});
};
document.addEventListener("fullscreenchange", () =>
  setIcon(fsBtn, document.fullscreenElement ? "NotFullScreen" : "FullScreen", "⛶"));
setIcon(fsBtn, "FullScreen", "⛶");

// original camera button → save a screenshot of the scene
const camBtn = document.getElementById("camera");
camBtn.onclick = () => {
  renderer.render(scene, camera); // fresh frame in case the tab was hidden
  renderer.domElement.toBlob((blob) => {
    if (!blob) return;
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${name}-${Math.round(t * 1000)}ms.png`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 5000);
  }, "image/png");
};
setIcon(camBtn, "camera", "📷");

timeline.oninput = () => { t = (timeline.value / 1000) * duration; };
document.getElementById("reset").onclick = () => {
  if (!window.__home) return;
  camera.position.copy(window.__home.pos);
  controls.target.copy(window.__home.target);
  controls.update();
};
let showBones = false;
// One helper per skinned mesh: draws only the deform skeleton bones that
// actually move (a helper over the whole scene root would also draw the
// static MotionBuilder control rigs / effectors that ship in the bundles).
// In x-ray mode the meshes turn translucent so the bones are readable —
// (the original Unity app had no skeleton view; this is an analysis extra).
const helpers = skinnedMeshes.map((m) => {
  const h = new THREE.SkeletonHelper(m);
  h.visible = false;
  h.material.depthTest = false;
  h.renderOrder = 10;
  scene.add(h);
  return h;
});
document.getElementById("bones").onclick = (e) => {
  showBones = !showBones;
  helpers.forEach((h) => (h.visible = showBones));
  for (const m of skinnedMeshes) {
    m.material.transparent = showBones;
    m.material.opacity = showBones ? 0.3 : 1;
    m.material.needsUpdate = true;
  }
  e.target.classList.toggle("on", showBones);
};

// ---------- motion trails (re-creation of TrailRenderControl) ----------
// The original bundle ships a TrailRenderControl script but no logic, so
// this is an inferred re-creation: fading ribbons behind the extremities
// (hands, feet, head) — the classic mocap-display look of the era.
const TRAIL_LEN = 180; // ~3 s at 60 fps
// dark trails like the dancer outline (lambert2/BodyOutlineMaterial) —
// high contrast against the stage colours
const outlineMat = (data.materials || []).find((m) => /outline/i.test(m.shader));
const trailColor = outlineMat
  ? new THREE.Color().setRGB(outlineMat.color[0], outlineMat.color[1], outlineMat.color[2], THREE.LinearSRGBColorSpace)
  : new THREE.Color(0x111111);
const trails = [];
for (const mesh of skinnedMeshes) {
  for (const b of mesh.skeleton.bones) {
    if (!/:?(LeftHand|RightHand|LeftFoot|RightFoot|Head|Head_End)$/.test(b.name)) continue;
    const pos = new Float32Array(TRAIL_LEN * 3);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setDrawRange(0, 0);
    const line = new THREE.Line(geo, new THREE.LineBasicMaterial({
      color: trailColor, transparent: true, opacity: 0.5,
    }));
    line.renderOrder = 9;
    line.frustumCulled = false;
    scene.add(line);
    trails.push({ bone: b, pos, geo, line, n: 0 });
  }
}
let showTrails = trails.length > 0; // on by default, like the original
function resetTrails() { // on loop wrap: no hard streaks across the cut
  for (const tr of trails) { tr.n = 0; tr.geo.setDrawRange(0, 0); }
}
function updateTrails() {
  for (const tr of trails) {
    tr.line.visible = showTrails;
    if (!showTrails) continue;
    const e = tr.bone.matrixWorld.elements;
    if (tr.n === 0) {
      // seed the whole buffer so empty points never connect to the origin
      for (let i = 0; i < TRAIL_LEN; i++) {
        tr.pos[i * 3] = e[12]; tr.pos[i * 3 + 1] = e[13]; tr.pos[i * 3 + 2] = e[14];
      }
      tr.n = 1;
      tr.geo.attributes.position.needsUpdate = true;
      continue;
    }
    // shift back and append the current joint position
    tr.pos.copyWithin(3, 0, (TRAIL_LEN - 1) * 3);
    tr.pos[0] = e[12]; tr.pos[1] = e[13]; tr.pos[2] = e[14];
    if (tr.n < TRAIL_LEN) tr.n++;
    tr.geo.setDrawRange(0, tr.n);
    tr.geo.attributes.position.needsUpdate = true;
  }
}
const trailsBtn = document.getElementById("trails");
trailsBtn.onclick = (e) => {
  showTrails = !showTrails;
  e.target.classList.toggle("on", showTrails);
};
trailsBtn.classList.toggle("on", showTrails);
trailsBtn.style.display = trails.length ? "" : "none";

// ---------- cross-hatch noise overlay (FadedNoiseFilter) ----------
// A full-screen quad parented to the original Main Camera; the scripts
// assigned its material at runtime, using the CrossHatchSaga texture that
// ships in the bundle. Re-created here as a subtle multiply overlay.
const noiseOverlay = (data.overlays || []).find((o) => o.name === "FadedNoiseFilter" && o.tex);
let smearEnabled = true;
let fitSmearOverlay = null;
if (noiseOverlay) {
  scene.add(camera); // the quad follows the camera, as in the original
  const geo = new THREE.PlaneGeometry(1, 1);
  // Multiply blend against the background colour: keeps the original
  // stage hue while the white/gray hatch texture only darkens it where
  // the grain sits. The quad renders in the opaque pass nearest the
  // camera (front-to-back) and writes no depth, so the dancers draw
  // over it — the grain stays in the BACKGROUND.
  // A third-strength multiply: opacity has no effect on MultiplyBlending,
  // so the texture itself is mixed 2/3 toward white on a canvas — the
  // grain then darkens the background only a third as much.
  const mat = new THREE.MeshBasicMaterial({
    blending: THREE.MultiplyBlending,
    depthWrite: false, depthTest: false,
    toneMapped: false, side: THREE.DoubleSide, fog: false,
  });
  const grainUrl = `./data/${noiseOverlay.tex}`;
  new THREE.TextureLoader().load(grainUrl, (raw) => {
    const cv = document.createElement("canvas");
    cv.width = raw.image.width; cv.height = raw.image.height;
    const ctx = cv.getContext("2d");
    ctx.drawImage(raw.image, 0, 0);
    ctx.globalAlpha = 2 / 3;
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, cv.width, cv.height);
    ctx.globalAlpha = 1;
    const tex = new THREE.CanvasTexture(cv);
    tex.colorSpace = THREE.SRGBColorSpace;
    mat.map = tex;
    mat.needsUpdate = true;
  });
  const quad = new THREE.Mesh(geo, mat);
  quad.renderOrder = -1; // always the first opaque draw: a backdrop
  quad.visible = true; // on by default
  camera.add(quad);
  fitSmearOverlay = function () {
    const z = noiseOverlay.pos[2] || 6;
    const h = 2 * z * Math.tan((camera.fov * Math.PI) / 360);
    quad.position.set(0, 0, -z); // three.js cameras look down -Z
    quad.scale.set(h * camera.aspect * 1.02, h * 1.02, 1);
  };
  fitSmearOverlay();
  window.addEventListener("resize", fitSmearOverlay);
  const smearBtn = document.getElementById("smear");
  smearBtn.classList.add("on");
  smearBtn.onclick = (e) => {
    smearEnabled = !smearEnabled;
    if (smearEnabled && fitSmearOverlay) fitSmearOverlay();
    quad.visible = smearEnabled;
    e.target.classList.toggle("on", smearEnabled);
  };
} else {
  document.getElementById("smear").style.display = "none";
}

function loop(now) {
  const dt = Math.min((now - last) / 1000, 0.1);
  last = now;
  if (playing) {
    const prev = t;
    t = (t + dt * speed) % duration;
    if (t < prev) resetTrails(); // looped — don't streak across the cut
    timeline.value = Math.round((t / duration) * 1000);
  }
  applyRot(t);
  root.updateMatrixWorld(true);
  updateTrails();
  if (smearEnabled && fitSmearOverlay) fitSmearOverlay(); // track FOV changes
  // Accumulate animated joint samples, then frame the performance area:
  // a quick fit at ~1.5 s for an immediate view, one silent reframe at
  // ~12 s once the dancers' roam is covered (skipped if the user has
  // already orbited the camera themselves).
  if (playing) sampleFitPose();
  if (!window.__home) {
    fitElapsed += dt;
    if (fitElapsed >= 1.5 || t > 2) { frameCamera(); pendingReframe = true; }
  } else if (pendingReframe && !userOrbited && t >= 12) {
    frameCamera();
    pendingReframe = false;
  }
  timeLbl.textContent = `${fmt(t)} / ${fmt(duration)}`;
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(loop);
}
status.textContent = `${skinnedMeshes.length} skinned meshes · ${data.bones ? Object.keys(data.bones).length : 0} nodes · ready`;
requestAnimationFrame(loop);
