import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '@/animations/config';

// Hex scanner frame around the hero photo: one or more concentric rings of
// hex characters (0-9A-F) following the photo's outline (rectangle or
// oval). The characters flip now and then like live data, and a scanner
// head orbits the rings with a gold, fading trail.
//
// Hover turns every character into shimmering blocks (█▓▒░) until the
// pointer leaves; a click/tap does the same for a moment (so touch devices
// get it too). Pauses off screen / in background tabs; reduced motion shows a
// still frame (hover still swaps to blocks, without animating).

const HEX = '0123456789ABCDEF';
const BLOCKS = '█▓▒░';
const FLIP_P = 0.05; // chance per tick that a hex cell changes value
const SHIMMER_P = 0.5; // chance per tick that a block cell changes shade
const TRAIL_LEN = 10; // outer-ring cells lit behind the head
const HOT_LEN = 3; // of those, drawn in gold
const TICK_MS = 70;
const TAP_TICKS = 22; // ~1.5s of blocks after a click/tap

const pick = (chars) => chars[(Math.random() * chars.length) | 0];

// Cell centers, clockwise from the top, for a w×h rectangle
function rectPoints(w, h, cell) {
  const cols = Math.max(4, Math.round(w / cell));
  const rows = Math.max(4, Math.round(h / cell));
  const cw = w / cols;
  const ch = h / rows;
  const at = (x, y) => [x * cw + cw / 2, y * ch + ch / 2];
  const pts = [];
  for (let i = 0; i < cols; i++) pts.push(at(i, 0));
  for (let j = 1; j < rows; j++) pts.push(at(cols - 1, j));
  for (let i = cols - 2; i >= 0; i--) pts.push(at(i, rows - 1));
  for (let j = rows - 2; j > 0; j--) pts.push(at(0, j));
  return pts;
}

// Evenly spaced (by arc length) points on the ellipse inscribed in w×h
function ovalPoints(w, h, cell) {
  const rx = w / 2 - cell / 2;
  const ry = h / 2 - cell / 2;
  const steps = 720;
  const samples = [];
  let length = 0;
  let prev = null;
  for (let i = 0; i <= steps; i++) {
    const t = -Math.PI / 2 + (i / steps) * Math.PI * 2; // start at the top
    const p = [w / 2 + rx * Math.cos(t), h / 2 + ry * Math.sin(t)];
    if (prev) length += Math.hypot(p[0] - prev[0], p[1] - prev[1]);
    samples.push([p, length]);
    prev = p;
  }
  const n = Math.max(12, Math.round(length / cell));
  const pts = [];
  let k = 0;
  for (let i = 0; i < n; i++) {
    const target = (i / n) * length;
    while (k < samples.length - 1 && samples[k + 1][1] < target) k++;
    pts.push(samples[k][0]);
  }
  return pts;
}

export default function AsciiFrame({ children, cell = 14, rings = 1, shape = 'rect', className = '' }) {
  const frameRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const frame = frameRef.current;
    const layer = ringRef.current;
    let bands = []; // one array of { el, ch } per ring, outermost first
    let headFrac = 0; // scanner position, 0..1 around the ring
    let hovering = false;
    let tap = 0;
    let timer = null;
    let onScreen = true;
    const reduced = prefersReducedMotion();

    const draw = (animate) => {
      const blocks = hovering || tap > 0;
      const outerN = bands[0]?.length || 1;
      bands.forEach((band) => {
        const n = band.length;
        const head = Math.floor(headFrac * n);
        const trail = Math.max(2, Math.round((TRAIL_LEN * n) / outerN));
        const hot = Math.max(1, Math.round((HOT_LEN * n) / outerN));
        band.forEach((cellState, i) => {
          if (blocks) {
            if (!BLOCKS.includes(cellState.ch) || (animate && Math.random() < SHIMMER_P)) cellState.ch = pick(BLOCKS);
          } else if (!HEX.includes(cellState.ch) || (animate && Math.random() < FLIP_P)) {
            cellState.ch = pick(HEX);
          }
          const d = (head - i + n) % n; // distance behind the head
          const { el } = cellState;
          if (el.textContent !== cellState.ch) el.textContent = cellState.ch;
          el.classList.toggle('is-hot', d < hot);
          el.classList.toggle('is-warm', d >= hot && d < trail);
        });
      });
    };

    const build = () => {
      const w = frame.clientWidth;
      const h = frame.clientHeight;
      layer.textContent = '';
      bands = [];
      for (let r = 0; r < rings; r++) {
        const inset = r * cell; // each ring sits one cell inside the last
        const iw = w - 2 * inset;
        const ih = h - 2 * inset;
        const pts = shape === 'oval' ? ovalPoints(iw, ih, cell) : rectPoints(iw, ih, cell);
        bands.push(
          pts.map(([x, y]) => {
            const el = document.createElement('span');
            el.style.left = `${x + inset}px`;
            el.style.top = `${y + inset}px`;
            layer.appendChild(el);
            return { el, ch: pick(HEX) };
          })
        );
      }
      draw(false);
    };

    const tick = () => {
      headFrac = (headFrac + 1 / (bands[0]?.length || 1)) % 1;
      if (tap > 0) tap--;
      draw(true);
    };

    const run = () => {
      const shouldRun = !reduced && onScreen && !document.hidden;
      if (shouldRun && !timer) timer = setInterval(tick, TICK_MS);
      if (!shouldRun && timer) {
        clearInterval(timer);
        timer = null;
      }
    };

    const onEnter = () => {
      hovering = true;
      draw(false);
    };
    const onLeave = () => {
      hovering = false;
      draw(false);
    };
    const onTap = () => {
      tap = TAP_TICKS;
      draw(false);
      // with reduced motion there's no ticking, so switch back after the same delay
      if (reduced) setTimeout(() => { tap = 0; draw(false); }, TAP_TICKS * TICK_MS);
    };

    build();
    const ro = new ResizeObserver(build);
    ro.observe(frame);
    const io = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      run();
    });
    io.observe(frame);
    document.addEventListener('visibilitychange', run);
    frame.addEventListener('mouseenter', onEnter);
    frame.addEventListener('mouseleave', onLeave);
    frame.addEventListener('click', onTap);
    run();

    return () => {
      clearInterval(timer);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener('visibilitychange', run);
      frame.removeEventListener('mouseenter', onEnter);
      frame.removeEventListener('mouseleave', onLeave);
      frame.removeEventListener('click', onTap);
    };
  }, [cell, rings, shape]);

  return (
    <div
      ref={frameRef}
      className={`ascii-frame ascii-frame--${shape} ${className}`}
      style={{ '--cell': `${cell}px`, '--rings': rings }}
    >
      <div ref={ringRef} aria-hidden="true" className="ascii-frame__ring" />
      {children}
    </div>
  );
}
