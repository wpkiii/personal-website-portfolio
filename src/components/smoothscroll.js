import { useEffect } from 'react';
import Router from 'next/router';
import { resetLenis, startLenis, stopLenis } from '@/animations/lenis';
import { ScrollTrigger } from '@/animations/gsap';
import { media } from '@/animations/config';

// Mounts Lenis for the whole app, and turns it off/on if the visitor
// changes their reduced-motion setting while the page is open. Also keeps
// ScrollTrigger's measurements current when the page height changes.
export default function SmoothScroll() {
  useEffect(() => {
    const mql = window.matchMedia(media.reduced);
    const sync = () => (mql.matches ? stopLenis() : startLenis());

    sync();
    mql.addEventListener('change', sync);
    // Covers link clicks and the back/forward buttons
    Router.events.on('routeChangeStart', resetLenis);

    // ScrollTrigger only re-measures on window resize. Opening an accordion
    // or media loading moves everything below it, so re-measure (debounced)
    // whenever the page height changes, or triggers fire in the wrong place.
    let timer;
    const ro = new ResizeObserver(() => {
      clearTimeout(timer);
      timer = setTimeout(() => ScrollTrigger.refresh(), 150);
    });
    ro.observe(document.body);

    return () => {
      ro.disconnect();
      clearTimeout(timer);
      mql.removeEventListener('change', sync);
      Router.events.off('routeChangeStart', resetLenis);
      stopLenis();
    };
  }, []);

  return null;
}
