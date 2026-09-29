import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '@/animations/config';

// "ASCII scanner frame" around the hero photo: a ring of character cells
// along the photo's edge. A scanner head travels around the ring, trailing a
// fading gradient of characters (first few cells gold). Hovering triggers a
// short "decode" burst where the cells flicker through random gold symbols.
//
// Pauses while off screen or when the tab is hidden; reduced motion shows a
// single still frame.

const TRAIL = '.:-=+*#%@'; // faint → dense; the head shows the densest
const DECODE = '!<>-_\\/[]{}=+*^?#01';
const TRAIL_LEN = 10;
const HOT_LEN = 3; // cells right behind the head drawn in gold
const TICK_MS = 70;
const BURST_TICKS = 20;

export default function AsciiFrame({ children, cell = 14 }) {
  const frameRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const frame = frameRef.current;
    const ring = ringRef.current;
    let spans = [];
    let head = 0;
    let burst = 0;
    let timer = null;
    let onScreen = true;

    // Lay the cells out clockwise around the edge, sized to divide it evenly
    const build = () => {
      const w = frame.clientWidth;
      const h = frame.clientHeight;
      const cols = Math.max(4, Math.round(w / cell));
      const rows = Math.max(4, Math.round(h / cell));
      const cw = w / cols;
      const ch = h / rows;
      const cells = [];
      for (let i = 0; i < cols; i++) cells.push([i, 0]);
      for (let j = 1; j < rows; j++) cells.push([cols - 1, j]);
      for (let i = cols - 2; i >= 0; i--) cells.push([i, rows - 1]);
      for (let j = rows - 2; j > 0; j--) cells.push([0, j]);

      ring.textContent = '';
      spans = cells.map(([x, y]) => {
        const s = document.createElement('span');
        s.style.left = `${x * cw}px`;
        s.style.top = `${y * ch}px`;
        s.style.width = `${cw}px`;
        s.style.height = `${ch}px`;
        s.style.lineHeight = `${ch}px`;
        ring.appendChild(s);
        return s;
      });
      head %= spans.length;
      draw();
    };

    const draw = () => {
      const n = spans.length;
      spans.forEach((s, i) => {
        const d = (head - i + n) % n; // distance behind the head
        let text = '·';
        let hot = false;
        if (burst > 0 && Math.random() < 0.6) {
          text = DECODE[(Math.random() * DECODE.length) | 0];
          hot = true;
        } else if (d < TRAIL_LEN) {
          text = TRAIL[TRAIL.length - 1 - Math.min(d, TRAIL.length - 1)];
          hot = d < HOT_LEN;
        }
        if (s.textContent !== text) s.textContent = text;
        s.classList.toggle('is-hot', hot);
      });
    };

    const tick = () => {
      head = (head + 1) % spans.length;
      draw();
      if (burst > 0) burst--;
    };

    const reduced = prefersReducedMotion();
    const run = () => {
      const shouldRun = !reduced && onScreen && !document.hidden;
      if (shouldRun && !timer) timer = setInterval(tick, TICK_MS);
      if (!shouldRun && timer) {
        clearInterval(timer);
        timer = null;
      }
    };

    const decode = () => {
      if (!reduced) burst = BURST_TICKS;
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
    frame.addEventListener('mouseenter', decode);
    run();

    return () => {
      clearInterval(timer);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener('visibilitychange', run);
      frame.removeEventListener('mouseenter', decode);
    };
  }, [cell]);

  return (
    <div ref={frameRef} className="ascii-frame" style={{ '--cell': `${cell}px` }}>
      <div ref={ringRef} aria-hidden="true" className="ascii-frame__ring" />
      {children}
    </div>
  );
}
