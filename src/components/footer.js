import { useRef } from 'react';
import SocialLinks from '@/components/sociallinks';
import { useReveal } from '@/animations/useReveal';

export default function Footer() {
  const footerRef = useRef(null);
  useReveal(footerRef, { start: 'top bottom' });

  return (
    <footer ref={footerRef} className="font-mono py-10 px-6 sm:px-10 bg-transparent dark:bg-transparent text-ink-muted relative border-t border-rule">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-5 text-center">
        <SocialLinks size={22} className="gap-6" reveal />
        <p data-reveal className="text-xs">
          © {new Date().getFullYear()} William (Trey) Kelly | All rights reserved.
        </p>
      </div>
    </footer>
  );
}
