// Magnetic hover: while the pointer is over the element, it drifts a few
// pixels toward the cursor, then springs back when the pointer leaves.
// Mouse/trackpad only and off under reduced motion.
import { gsap, useGSAP } from './gsap';
import { media } from './config';

export function useMagnetic(ref, { strength = 0.3, max = 8 } = {}) {
  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add(`${media.motion} and ${media.finePointer}`, () => {
        const toX = gsap.quickTo(el, 'x', { duration: 0.35, ease: 'power3.out' });
        const toY = gsap.quickTo(el, 'y', { duration: 0.35, ease: 'power3.out' });
        const clamp = gsap.utils.clamp(-max, max);

        const move = (e) => {
          // Measure without the current offset so the pull doesn't compound
          const r = el.getBoundingClientRect();
          const cx = r.left - gsap.getProperty(el, 'x') + r.width / 2;
          const cy = r.top - gsap.getProperty(el, 'y') + r.height / 2;
          toX(clamp((e.clientX - cx) * strength));
          toY(clamp((e.clientY - cy) * strength));
        };
        const leave = () => gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.45)', overwrite: true });

        el.addEventListener('pointermove', move);
        el.addEventListener('pointerleave', leave);
        return () => {
          el.removeEventListener('pointermove', move);
          el.removeEventListener('pointerleave', leave);
        };
      });
    },
    { scope: ref }
  );
}
