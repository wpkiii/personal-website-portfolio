// Single entry point for GSAP. Import gsap, ScrollTrigger, and useGSAP from
// here rather than from the packages so plugins are registered exactly once.
//
// Only ScrollTrigger is registered globally. A feature that needs another
// plugin (SplitText, DrawSVG, ...) registers it in its own module, so pages
// that don't use it never download it.
//
// Always animate inside useGSAP(): it scopes selectors to a ref and reverts
// every tween and ScrollTrigger on unmount, so nothing leaks between pages.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { durations, easings } from './config';

gsap.registerPlugin(ScrollTrigger, useGSAP);

gsap.defaults({ duration: durations.base, ease: easings.out });

// Don't recalculate every trigger when the mobile URL bar shows/hides
ScrollTrigger.config({ ignoreMobileResize: true });

export { gsap, ScrollTrigger, useGSAP };
