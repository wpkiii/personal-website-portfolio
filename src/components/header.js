import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { useRouter } from 'next/router';
import { scrollToSection } from '@/animations/lenis';
import { gsap, ScrollTrigger, useGSAP } from '@/animations/gsap';
import { useMagnetic } from '@/animations/useMagnetic';
import { header as headerMotion, media, prefersReducedMotion } from '@/animations/config';
import { features } from '@/lib/features';

const CALENDLY_HREF = 'https://calendly.com/treypkelly/30min';

const navLinks = [
  { href: '/#about-me', label: 'About Me' },
  { href: '/#experience', label: 'Experience' },
  features.skills && { href: '/#skills', label: 'Skills' },
  { href: '/#projects', label: 'Projects' },
].filter(Boolean);

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const headerRef = useRef(null);
  const ctaRef = useRef(null);
  // Theme a reveal is currently switching to, so a quick second press
  // (e.g. Enter twice on the focused toggle) toggles from that rather than
  // from the not-yet-updated React state. Mouse clicks can't land mid-reveal:
  // the browser routes them to the page root while a transition runs.
  const pendingThemeRef = useRef(null);
  useMagnetic(ctaRef);

  // ZachJordan-style takeover: over the first stretch of scroll, --p goes
  // 0 → 1 and the CSS in globals.css (.site-header) grows the gold strip into
  // the full bar, shrinks the header, and blends the text colors. Scrubbed,
  // so scrolling back up reverses it. Reduced motion: snaps at the threshold.
  useGSAP(() => {
    const el = headerRef.current;
    const mm = gsap.matchMedia();
    mm.add(media.motion, () => {
      gsap.fromTo(el, { '--p': 0 }, {
        '--p': 1,
        ease: 'none',
        scrollTrigger: { start: 0, end: headerMotion.scrollRange, scrub: 0.3 },
      });
    });
    mm.add(media.reduced, () => {
      ScrollTrigger.create({
        start: headerMotion.scrollRange,
        onEnter: () => gsap.set(el, { '--p': 1 }),
        onLeaveBack: () => gsap.set(el, { '--p': 0 }),
      });
    });
  }, { scope: headerRef });

  // On the homepage, nav links scroll to their section below the fixed
  // header (gliding with Lenis). From other pages the Link navigates home.
  const handleNavClick = (e, href) => {
    setMenuOpen(false);
    if (router.pathname !== '/') return;
    e.preventDefault();
    // Wait a frame so the closed mobile menu no longer counts toward the header offset
    requestAnimationFrame(() => scrollToSection(href.slice(href.indexOf('#'))));
  };

  // Manual toggles override the automatic sunset-based theme for the
  // rest of this browser session (see AutoTheme in _app.js).
  //
  // The new theme is revealed as a circle expanding from the toggle, using
  // the View Transitions API. Browsers without it, and reduced motion, get
  // the instant swap.
  const toggleTheme = (e) => {
    sessionStorage.setItem('theme-manual', '1');
    const current = pendingThemeRef.current ?? resolvedTheme;
    const next = current === 'dark' ? 'light' : 'dark';
    if (!document.startViewTransition || prefersReducedMotion()) {
      setTheme(next);
      return;
    }

    // Keyboard clicks have no pointer position, so start from the button's center
    const btn = e.currentTarget.getBoundingClientRect();
    const x = e.clientX || btn.left + btn.width / 2;
    const y = e.clientY || btn.top + btn.height / 2;
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

    pendingThemeRef.current = next;
    const transition = document.startViewTransition(() => {
      // next-themes applies its class in an effect; apply it here too so the
      // browser's "after" snapshot is guaranteed to be the new theme
      document.documentElement.classList.toggle('dark', next === 'dark');
      document.documentElement.classList.toggle('light', next === 'light');
      document.documentElement.style.colorScheme = next;
      flushSync(() => setTheme(next));
    });
    transition.ready
      .then(() => {
        document.documentElement.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
          { duration: 550, easing: 'cubic-bezier(0.4, 0, 0.2, 1)', pseudoElement: '::view-transition-new(root)' }
        );
      })
      // A skipped transition (e.g. a rapid second click) rejects `ready`; the
      // theme still changes, it just isn't animated
      .catch(() => {});
    transition.finished.finally(() => {
      if (pendingThemeRef.current === next) pendingThemeRef.current = null;
    });
  };

  return (
    <header
      ref={headerRef}
      className="site-header font-heading font-bold text-[17px] px-6 sm:px-10 fixed top-0 w-full z-50"
    >
      {/* Gold strip that grows down to become the header bar */}
      <div aria-hidden="true" className="site-header__fill" />

      <div className="site-header__row relative max-w-7xl mx-auto flex justify-start items-center gap-12">

        <div className="flex items-center space-x-3 flex-shrink-0">
          <Link href="/" className="site-header__logo block hover:opacity-80 transition-opacity">
            <Image
              src="/icons/signature.png"
              alt="William Kelly"
              width={110}
              height={66}
              className="object-contain w-[92px] md:w-[110px] h-auto"
            />
          </Link>
        </div>

        {/* Show the full nav on desktop */}
        {/* Full nav from 1024px up (30px from 1280px, like zachjordan.io); below that the menu button */}
        <nav className="site-header__nav hidden lg:flex items-center space-x-8 xl:space-x-10 text-2xl xl:text-[30px] font-extrabold whitespace-nowrap">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="group"
            >
              <span className="nav-mark">{link.label}</span>
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-6 ml-auto">
          <a
            ref={ctaRef}
            href={CALENDLY_HREF}
            target="_blank"
            rel="noreferrer"
            className="btn-liquid px-4 py-2 xl:px-5 xl:py-2.5 text-lg xl:text-xl rounded-md border-2 border-current"
          >
            Work With Me
          </a>
          <button
            aria-label="Toggle Dark Mode"
            onClick={toggleTheme}
            className="hover:opacity-70 transition-opacity"
          >
            {/* Both icons render; the .dark class picks one. Swapping src from JS
                showed the wrong icon after hydration in dark mode. */}
            <Image src="/icons/darkmode.svg" alt="" width={22} height={22} className="dark:hidden" />
            <Image src="/icons/lightmode.svg" alt="" width={22} height={22} className="site-header__icon hidden dark:block" />
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center space-x-4 lg:hidden ml-auto">
          <button
            aria-label="Toggle Dark Mode"
            onClick={toggleTheme}
            className="hover:opacity-70 transition-opacity"
          >
            {/* Both icons render; the .dark class picks one. Swapping src from JS
                showed the wrong icon after hydration in dark mode. */}
            <Image src="/icons/darkmode.svg" alt="" width={22} height={22} className="dark:hidden" />
            <Image src="/icons/lightmode.svg" alt="" width={22} height={22} className="site-header__icon hidden dark:block" />
          </button>
          <button aria-label="Menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <Image src="/icons/menu.svg" alt="" width={24} height={24} className="dark:hidden" />
            <Image src="/icons/whitemenu.svg" alt="" width={24} height={24} className="site-header__icon hidden dark:block" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <nav className="relative lg:hidden pb-4 px-2 flex flex-col space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="group block py-1"
            >
              <span className="nav-mark">{link.label}</span>
            </Link>
          ))}
          <a
            href={CALENDLY_HREF}
            target="_blank"
            rel="noreferrer"
            className="btn-liquid !block text-center py-2 rounded-md border-2 border-current"
          >
            Work With Me
          </a>
        </nav>
      )}
    </header>
  );
}
