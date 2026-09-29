import { useRef } from 'react';
import SocialLinks from '@/components/sociallinks';
import { useReveal } from '@/animations/useReveal';

export default function Footer() {
  const footerRef = useRef(null);
  useReveal(footerRef, { start: 'top bottom' });

  return (
    <footer ref={footerRef} className="font-mono py-10 px-6 sm:px-10 bg-transparent dark:bg-transparent text-gray-500 dark:text-gray-400 relative border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-5 text-center">
        <SocialLinks size={22} className="gap-6" reveal />
        <p data-reveal className="text-xs">
          © {new Date().getFullYear()} William (Trey) Kelly | All rights reserved.
        </p>
      </div>
    </footer>
  );
}
