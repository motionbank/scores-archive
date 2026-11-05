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

// ---------- materials ----------
function matFor(meshName, skinned) {
  const hue = [...meshName].reduce((a, c) => (a * 31 + c.charCodeAt(0)) % 360, 7);
  const sat = skinned ? 0.18 : 0.25;
  return new THREE.MeshStandardMaterial({
    color: new THREE.Color().setHSL(hue / 360, sat, skinned ? 0.62 : 0.4),
    roughness: 0.8, metalness: 0.05, side: THREE.DoubleSide,
  });
}

// ---------- meshes ----------
const skinnedMeshes = [];
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
    const mesh = new THREE.SkinnedMesh(geo, matFor(m.name, true));
    mesh.frustumCulled = false;
    mesh.bind(skeleton, new THREE.Matrix4());
    scene.add(mesh);
    skinnedMeshes.push(mesh);
  } else {
    const parent = (m.path && nodes.get(m.path)) || root;
    const mesh = new THREE.Mesh(geo, matFor(m.name, false));
    mesh.frustumCulled = false;
    parent.add(mesh);
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

// ---------- camera fit ----------
{
  const box = new THREE.Box3();
  for (const m of data.meshes) {
    for (const p of m.positions) box.expandByPoint(_v.set(p[0], p[1], p[2]));
  }
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  const r = Math.max(size.x, size.y, size.z) || 2;
  camera.position.set(center.x + r * 0.9, center.y + r * 0.35, center.z + r * 1.1);
  controls.target.copy(center);
  controls.update();
  window.__home = { pos: camera.position.clone(), target: center.clone() };
}

// ---------- UI ----------
const playBtn = document.getElementById("play");
const timeline = document.getElementById("timeline");
const timeLbl = document.getElementById("time");
const speedSel = document.getElementById("speed");
let playing = true, t = 0, speed = 1, last = performance.now();

playBtn.onclick = () => {
  playing = !playing;
  playBtn.textContent = playing ? "⏸" : "▶";
};
speedSel.onchange = () => { speed = parseFloat(speedSel.value); };
timeline.oninput = () => { t = (timeline.value / 1000) * duration; };
document.getElementById("reset").onclick = () => {
  camera.position.copy(window.__home.pos);
  controls.target.copy(window.__home.target);
  controls.update();
};
let showBones = false;
const helper = new THREE.SkeletonHelper(root);
helper.visible = false;
scene.add(helper);
document.getElementById("bones").onclick = (e) => {
  showBones = !showBones;
  helper.visible = showBones;
  e.target.classList.toggle("on", showBones);
};

function loop(now) {
  const dt = Math.min((now - last) / 1000, 0.1);
  last = now;
  if (playing) {
    t = (t + dt * speed) % duration;
    timeline.value = Math.round((t / duration) * 1000);
  }
  applyRot(t);
  timeLbl.textContent = `${fmt(t)} / ${fmt(duration)}`;
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(loop);
}
status.textContent = `${skinnedMeshes.length} skinned meshes · ${data.bones ? Object.keys(data.bones).length : 0} nodes · ready`;
requestAnimationFrame(loop);
