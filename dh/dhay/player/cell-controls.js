/**
 * Minimal cell video controls — play/pause, seek, time, mute.
 *
 * Replaces the native `video.controls` fallback: Firefox's native video
 * menu exposes playback-speed settings, which the score should not show
 * (the old flowplayer UI had no rate control either).
 *
 * Usage (ES module):
 *   import { attachCellControls } from './cell-controls.js';
 *   attachCellControls(video);
 *
 * The bar shows while paused and hides itself after ~2.5 s of idle
 * playback; it reappears on pointer movement over the video.
 */

const CSS = `
.cell-controls {
  position: absolute; left: 0; right: 0; bottom: 0;
  display: flex; align-items: center; gap: 8px;
  padding: 4px 10px;
  background: rgba(0,0,0,0.55);
  opacity: 0; transition: opacity 0.25s;
  font: 11px/1 -apple-system, "Segoe UI", sans-serif; color: #eee;
  z-index: 10;
}
.cell-controls.visible { opacity: 1; }
.cell-controls button {
  background: none; border: 0; color: #eee; cursor: pointer;
  font-size: 13px; line-height: 1; padding: 2px 4px;
}
.cell-controls .cc-seek {
  flex: 1; height: 3px; min-width: 40px;
  -webkit-appearance: none; appearance: none;
  background: rgba(255,255,255,0.35); border-radius: 2px; outline: none;
}
.cell-controls .cc-seek::-webkit-slider-thumb {
  -webkit-appearance: none; appearance: none;
  width: 10px; height: 10px; border-radius: 50%; background: #eee; cursor: pointer;
}
.cell-controls .cc-seek::-moz-range-thumb {
  width: 10px; height: 10px; border: 0; border-radius: 50%; background: #eee; cursor: pointer;
}
.cell-controls .cc-time { white-space: nowrap; font-variant-numeric: tabular-nums; }
`;

function fmt ( t ) {
  if ( !Number.isFinite(t) ) return '0:00';
  t = Math.max(0, Math.round(t));
  var m = Math.floor(t / 60), s = t % 60;
  return m + ':' + (s < 10 ? '0' : '') + s;
}

function el ( tag, className, text ) {
  var node = document.createElement(tag);
  if ( className ) node.className = className;
  if ( text !== undefined ) node.textContent = text;
  return node;
}

export function attachCellControls ( video ) {
  if ( !video || video.dataset.cellControls ) return;
  video.dataset.cellControls = '1';

  if ( !document.getElementById('cell-controls-css') ) {
    var st = document.createElement('style');
    st.id = 'cell-controls-css';
    st.textContent = CSS;
    document.head.appendChild(st);
  }

  // the video's offset parent must be the positioning context
  var host = video.parentElement;
  if ( host && getComputedStyle(host).position === 'static' ) {
    host.style.position = 'relative';
  }

  var bar = el('div', 'cell-controls');
  var playBtn = el('button', 'cc-play', '▶');
  playBtn.type = 'button';
  playBtn.setAttribute('aria-label', 'Play');
  var timeEl = el('span', 'cc-time', '0:00');
  var seek = el('input', 'cc-seek');
  seek.type = 'range';
  seek.min = '0'; seek.max = '1000'; seek.value = '0';
  seek.setAttribute('aria-label', 'Seek');
  var durEl = el('span', 'cc-dur', '0:00');
  var muteBtn = el('button', 'cc-mute', '🔊');
  muteBtn.type = 'button';
  muteBtn.setAttribute('aria-label', 'Mute');
  bar.appendChild(playBtn);
  bar.appendChild(timeEl);
  bar.appendChild(seek);
  bar.appendChild(durEl);
  bar.appendChild(muteBtn);
  host.appendChild(bar);

  var showTimer = null;
  function showBar () {
    bar.classList.add('visible');
    if ( showTimer ) clearTimeout(showTimer);
    showTimer = setTimeout(function () {
      if ( !video.paused ) bar.classList.remove('visible');
    }, 2500);
  }

  function toggle () {
    if ( video.paused ) {
      var p = video.play();
      if ( p && p.catch ) p.catch(function () {});
    } else {
      video.pause();
    }
  }

  playBtn.addEventListener('click', function ( e ) { e.stopPropagation(); toggle(); });
  video.addEventListener('click', toggle);

  muteBtn.addEventListener('click', function ( e ) {
    e.stopPropagation();
    video.muted = !video.muted;
    muteBtn.textContent = video.muted ? '🔇' : '🔊';
  });

  seek.addEventListener('input', function () {
    if ( video.duration ) video.currentTime = (seek.value / 1000) * video.duration;
    showBar();
  });
  // keep clicks inside the bar from toggling playback via the video click
  bar.addEventListener('click', function ( e ) { e.stopPropagation(); });

  function sync () {
    playBtn.textContent = video.paused ? '▶' : '⏸';
    if ( video.duration ) {
      durEl.textContent = fmt(video.duration);
      if ( !seek.matches(':active') ) {
        seek.value = String(Math.round((video.currentTime / video.duration) * 1000));
      }
    }
    timeEl.textContent = fmt(video.currentTime);
  }

  video.addEventListener('play',  function () { sync(); showBar(); });
  video.addEventListener('pause', function () { sync(); showBar(); });
  video.addEventListener('timeupdate', sync);
  video.addEventListener('loadedmetadata', sync);
  ['mousemove', 'touchstart'].forEach(function ( ev ) {
    video.addEventListener(ev, showBar, { passive: true });
  });

  sync();
  // visible initially (e.g. autoplay blocked) — hides itself once playing
  showBar();
}
