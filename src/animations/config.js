// Shared motion config: every animation on the site pulls its timing,
// easing, and colors from here so the whole site moves the same way.
import tokens from './tokens.json';

// Aggie Gold (NC A&T) and Northwestern Purple. Also exposed to Tailwind as
// `brand-gold` / `brand-purple` via tailwind.config.js.
export const colors = tokens.colors;

// Seconds, as GSAP expects
export const durations = {
  fast: 0.2, // hovers, small state changes
  base: 0.45, // most reveals and toggles
  slow: 0.8, // headers, larger entrances
  stagger: 0.08, // gap between children in a staggered reveal
};

export const easings = {
  out: 'power3.out', // default for things entering
  inOut: 'power2.inOut', // things moving between two states
  snap: 'back.out(1.7)', // magnetic snap-back
};

// Scroll-driven header (src/components/header.js). Its sizes and colors
// live in globals.css under .site-header.
export const header = {
  scrollRange: 160, // px of scroll over which the gold bar takes over
};

// Media queries for gsap.matchMedia(). Every animation should branch on
// `motion` vs `reduced`; pointer-driven effects (tilt, magnetic) also
// require `finePointer` so touch devices skip them.
export const media = {
  motion: '(prefers-reduced-motion: no-preference)',
  reduced: '(prefers-reduced-motion: reduce)',
  finePointer: '(hover: hover) and (pointer: fine)',
  desktop: '(min-width: 768px)',
};

// For code outside gsap.matchMedia (e.g. deciding whether to start Lenis)
export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia(media.reduced).matches;
