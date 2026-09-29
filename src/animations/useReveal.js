// Scroll-in reveal shared by every section: elements marked `data-reveal`
// inside the scope fade in and rise slightly the first time they enter the
// viewport. Elements entering together are batched and staggered in order.
//
// - Reduced motion: nothing is hidden or animated.
// - Only opacity is used for the hidden state (not visibility), so
//   not-yet-revealed items stay focusable for keyboard users.
// - The initial hidden state is applied from JS, so content is never hidden
//   if scripts fail to load.
// - `start` is when a batch fires. Content near the very bottom of the page
//   (the footer) should use 'top bottom' so it can't get stuck hidden on a
//   tall screen where it never scrolls up far enough.
import { gsap, ScrollTrigger, useGSAP } from './gsap';
import { durations, easings, media } from './config';

export function useReveal(scopeRef, { start = 'top 88%' } = {}) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add({ motion: media.motion, desktop: media.desktop }, (ctx) => {
        if (!ctx.conditions.motion) return;
        const items = scopeRef.current.querySelectorAll('[data-reveal]');
        if (!items.length) return;

        gsap.set(items, { opacity: 0, y: ctx.conditions.desktop ? 32 : 20 });
        ScrollTrigger.batch(items, {
          start,
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: durations.slow,
              ease: easings.out,
              stagger: durations.stagger,
              overwrite: true,
              // hand transforms back to CSS so Tailwind hover scales still work
              clearProps: 'transform',
            }),
        });
      });
    },
    { scope: scopeRef }
  );
}
