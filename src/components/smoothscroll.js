import { useEffect } from 'react';
import Router from 'next/router';
import { resetLenis, startLenis, stopLenis } from '@/animations/lenis';
import { media } from '@/animations/config';

// Mounts Lenis for the whole app, and turns it off/on if the visitor
// changes their reduced-motion setting while the page is open.
export default function SmoothScroll() {
  useEffect(() => {
    const mql = window.matchMedia(media.reduced);
    const sync = () => (mql.matches ? stopLenis() : startLenis());

    sync();
    mql.addEventListener('change', sync);
    // Covers link clicks and the back/forward buttons
    Router.events.on('routeChangeStart', resetLenis);
    return () => {
      mql.removeEventListener('change', sync);
      Router.events.off('routeChangeStart', resetLenis);
      stopLenis();
    };
  }, []);

  return null;
}
