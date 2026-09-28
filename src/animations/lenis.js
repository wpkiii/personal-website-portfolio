// Site-wide Lenis smooth scroll, driven by GSAP's ticker so Lenis and
// ScrollTrigger always agree on the scroll position. One instance for the
// whole app; started/stopped by <SmoothScroll /> in _app.js.
//
// Touch devices keep native scrolling (Lenis' default), and visitors who
// prefer reduced motion never get Lenis at all.
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from './gsap';
import { prefersReducedMotion } from './config';

let lenis = null;

const raf = (time) => lenis?.raf(time * 1000);

export function startLenis() {
  if (lenis || prefersReducedMotion()) return;
  lenis = new Lenis({ autoRaf: false });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(raf);
  gsap.ticker.lagSmoothing(0);
}

export function stopLenis() {
  if (!lenis) return;
  gsap.ticker.remove(raf);
  lenis.destroy();
  lenis = null;
}

// Cancel any in-flight glide. Called on route changes so a scroll that's
// still easing on one page doesn't carry over onto the next.
export function resetLenis() {
  lenis?.reset();
}

// Scroll to a section, leaving room for the fixed header. Glides with Lenis;
// jumps instantly when Lenis is off (reduced motion).
export function scrollToSection(selector) {
  const target = document.querySelector(selector);
  if (!target) return;
  // Sections sit below the header's compact (scrolled) height, not its
  // taller at-the-top height
  const header = document.querySelector('header');
  const compact = header && parseFloat(getComputedStyle(header).getPropertyValue('--hdr-compact'));
  const offset = -(compact || header?.offsetHeight || 0);
  if (lenis) {
    lenis.scrollTo(target, { offset });
  } else {
    window.scrollTo(0, target.getBoundingClientRect().top + window.scrollY + offset);
  }
}
