import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '@/animations/config';

// Full-screen scanline background: faint horizontal lines sweep down the
// screen, each throwing off short glitch flecks, in the palette's particle
// color (--c-particle, so it follows light/dark mode). Replaces the old
// tsparticles dots. Loaded lazily from index.js once the page is idle; pauses
// in background tabs; reduced motion draws one still frame.

const LINES = 7;
const MAX_DPR = 2;

const hexToRgba = (hex, a) => {
  const n = parseInt(hex.replace('#', '').trim(), 16);
  return `rgba(${n >> 16},${(n >> 8) & 255},${n & 255},${a})`;
};

export default function ScanlineBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let w = 0;
    let h = 0;
    let color = '#1F6E5C';
    let raf = 0;

    const readColor = () => {
      color = getComputedStyle(document.documentElement).getPropertyValue('--c-particle').trim() || color;
    };
    const spawn = (anywhere) => ({
      y: anywhere ? Math.random() * h : -4,
      v: 0.6 + Math.random() * 0.8,
      a: 0.08 + Math.random() * 0.14,
      flecks: [],
    });
    let lines = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!lines.length) lines = Array.from({ length: LINES }, () => spawn(true));
    };

    const draw = (advance) => {
      ctx.clearRect(0, 0, w, h);
      for (const line of lines) {
        if (advance) {
          line.y += line.v;
          if (line.y > h + 4) Object.assign(line, spawn(false));
          if (Math.random() < 0.08) line.flecks.push({ x: Math.random() * w, len: 6 + Math.random() * 14, life: 1 });
          line.flecks = line.flecks.filter((f) => (f.life -= 0.05) > 0);
        }
        ctx.fillStyle = hexToRgba(color, line.a);
        ctx.fillRect(0, line.y, w, 1);
        for (const f of line.flecks) {
          ctx.fillStyle = hexToRgba(color, 0.5 * f.life);
          ctx.fillRect(f.x, line.y - 2, f.len, 2);
        }
      }
    };

    const loop = () => {
      draw(true);
      raf = requestAnimationFrame(loop);
    };
    const reduced = prefersReducedMotion();
    const start = () => {
      if (reduced || raf || document.hidden) return;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };
    const onVisibility = () => (document.hidden ? stop() : start());

    readColor();
    resize();
    draw(false);
    start();

    // follow theme switches (next-themes toggles the class on <html>)
    const mo = new MutationObserver(() => {
      readColor();
      if (!raf) draw(false);
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      stop();
      mo.disconnect();
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
}
