import { useRef } from 'react';
import Image from 'next/image';
import { useMagnetic } from '@/animations/useMagnetic';

// Social links shared by the About section and the footer. On hover each
// icon drifts a few pixels toward the cursor (magnetic pull).
const links = [
  { label: 'Email', href: 'mailto:treypkelly@gmail.com', icon: '/icons/mail.svg' },
  // The GitHub mark is black, so it's the only icon inverted in dark mode;
  // the others are already brand-colored.
  { label: 'GitHub', href: 'https://github.com/wpkiii', icon: '/icons/github.svg', invertInDark: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/william-kelly-iii-748409194/', icon: '/icons/LinkedIn_icon.svg' },
  { label: 'YouTube', href: 'https://www.youtube.com/@trickswithtrey', icon: '/icons/youtube.svg' },
  {
    label: 'Spotify',
    href: 'https://open.spotify.com/user/22cephxvqecscjamivxpra3oy?si=KYQ_U9jNSmayXvpOe7VkAg&utm_source=copy-link&nd=1&dlsi=494ad821af4c4e65',
    icon: '/icons/spotify.svg',
  },
];

function SocialIcon({ link, size }) {
  const ref = useRef(null);
  useMagnetic(ref, { strength: 0.35, max: 6 });
  const external = link.href.startsWith('http');

  return (
    <a
      ref={ref}
      href={link.href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="inline-block"
    >
      <Image
        src={link.icon}
        alt={link.label}
        width={size}
        height={size}
        className={`block ${link.invertInDark ? 'dark:invert' : ''}`}
      />
    </a>
  );
}

// `reveal` opts each icon into the section's scroll-in reveal (useReveal).
// The reveal animates a wrapper, so it never fights the magnetic pull.
export default function SocialLinks({ size = 40, className = '', reveal = false }) {
  return (
    <div className={`flex items-center ${className}`}>
      {links.map((link) =>
        reveal ? (
          <span key={link.label} data-reveal className="inline-flex">
            <SocialIcon link={link} size={size} />
          </span>
        ) : (
          <SocialIcon key={link.label} link={link} size={size} />
        )
      )}
    </div>
  );
}
