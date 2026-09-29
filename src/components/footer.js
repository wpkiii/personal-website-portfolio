import { useRef } from 'react';
import Image from 'next/image';
import { useReveal } from '@/animations/useReveal';

const socialLinks = [
  { href: 'mailto:treypkelly@gmail.com', icon: '/icons/mail.svg', label: 'Email' },
  { href: 'https://github.com/wpkiii', icon: '/icons/github.svg', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/william-kelly-iii-748409194/', icon: '/icons/LinkedIn_icon.svg', label: 'LinkedIn' },
  { href: 'https://www.youtube.com/@trickswithtrey', icon: '/icons/youtube.svg', label: 'YouTube' },
  // Spotify icon is brand-colored, so it skips the dark-mode invert
  {
    href: 'https://open.spotify.com/user/22cephxvqecscjamivxpra3oy?si=KYQ_U9jNSmayXvpOe7VkAg&utm_source=copy-link&nd=1&dlsi=494ad821af4c4e65',
    icon: '/icons/spotify.svg',
    label: 'Spotify',
    invert: false,
  },
];

export default function Footer() {
  const footerRef = useRef(null);
  useReveal(footerRef, { start: 'top bottom' });

  return (
    <footer ref={footerRef} className="font-mono py-10 px-6 sm:px-10 bg-transparent dark:bg-transparent text-gray-500 dark:text-gray-400 relative border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-5 text-center">
        <div className="flex items-center space-x-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              data-reveal
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="group"
            >
              <Image
                src={link.icon}
                alt={link.label}
                width={22}
                height={22}
                className={`transition-transform transform group-hover:scale-125 duration-200 ${
                  link.invert === false ? '' : 'dark:filter dark:invert'
                }`}
              />
            </a>
          ))}
        </div>
        <p data-reveal className="text-xs">
          © {new Date().getFullYear()} William (Trey) Kelly | All rights reserved.
        </p>
      </div>
    </footer>
  );
}
