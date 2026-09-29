import { useRef } from 'react';
import { gsap, useGSAP } from '@/animations/gsap';
import { durations, easings, media } from '@/animations/config';

// Shared heading for every homepage section: a small index label, a large
// title, and a gold underline that draws left → right the first time the
// heading scrolls into view. The underline starts collapsed via CSS
// (.section-underline in globals.css) only when motion is allowed, so with
// reduced motion it is simply there.
export default function SectionHeader({ index, title }) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(media.motion, () => {
        gsap.to('.section-underline', {
          scaleX: 1,
          duration: durations.slow,
          ease: easings.out,
          scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
        });
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} data-reveal className="w-full mb-10 lg:mb-16">
      <p className="font-mono text-sm tracking-wider text-gray-600 dark:text-gray-400 mb-2">
        {index}
      </p>
      <h2 className="relative inline-block font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white pb-3">
        {title}
        <span aria-hidden="true" className="section-underline absolute left-0 bottom-0 h-1 w-full rounded-full bg-brand-gold" />
      </h2>
    </div>
  );
}
