import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useState } from 'react';

const CALENDLY_HREF = 'https://calendly.com/treypkelly/30min';

const navLinks = [
  { href: '/#about-me', label: 'About Me' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects', label: 'Playground' },
];

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  // Dynamically apply icons based on theme
  const menuIconSrc = theme === 'dark' ? '/icons/whitemenu.svg' : '/icons/menu.svg';

  return (
    <header className="font-heading font-bold text-[17px] bg-white dark:bg-black border-b border-black-200 py-5 px-6 sm:px-10 fixed top-0 w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-start items-center gap-12">

        <div className="flex items-center space-x-3">
          <Link href="/" className="hover:text-blue-600 text-gray-900 dark:text-white tracking-wide">
            William Kelly
          </Link>
        </div>

        {/* Show the full nav on desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-6 ml-auto">
          <a
            href={CALENDLY_HREF}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Work With Me
          </a>
          <button
            aria-label="Toggle Dark Mode"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            <Image src={theme === 'dark' ? '/icons/lightmode.svg' : '/icons/darkmode.svg'} alt="Dark Mode Icon" width={22} height={22} />
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center space-x-4 md:hidden ml-auto">
          <button
            aria-label="Toggle Dark Mode"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            <Image src={theme === 'dark' ? '/icons/lightmode.svg' : '/icons/darkmode.svg'} alt="Dark Mode Icon" width={22} height={22} />
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-600 dark:text-gray-300"
          >
            <Image src={menuIconSrc} alt="Menu" width={24} height={24} />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <nav className="md:hidden mt-4 px-2 flex flex-col space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-1 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={CALENDLY_HREF}
            target="_blank"
            rel="noreferrer"
            className="block text-center py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Work With Me
          </a>
        </nav>
      )}
    </header>
  );
}
