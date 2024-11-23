import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useState } from 'react';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  // Dynamically apply icons based on theme
  const menuIconSrc = theme === 'dark' ? '/icons/whitemenu.svg' : '/icons/menu.svg';
  const logoSrc = theme === 'dark' ? '/ok.svg' : '/darkok.svg';

  return (
    <header className="bg-white dark:bg-black border-b border-black-200 py-4 px-8 fixed top-0 w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        <div className="flex items-center space-x-2">
          {/* Logo Image */}
          <Image src={logoSrc} alt="Logo" width={24} height={24} />
          <Link href="/#hero" className="hover:text-blue-600 font-semibold text-gray-900 dark:text-white">
            William Kelly
          </Link>
        </div>

        {/* Show the full nav on desktop */}
        <nav className="hidden sm:flex space-x-4">
          <Link href="/#hero" className="hover:text-blue-600 font-semibold dark:hover:text-blue-400 transition-colors">
            Home
          </Link>
          <Link href="/#education" className="hover:text-blue-600 font-semibold dark:hover:text-blue-400 transition-colors">
            Education
          </Link>
          <Link href="/#experience" className="hover:text-blue-600 font-semibold dark:hover:text-blue-400 transition-colors">
            Experience
          </Link>
          <Link href="/#projects" className="hover:text-blue-600 font-semibold dark:hover:text-blue-400 transition-colors">
            Projects
          </Link>
        </nav>
        
        {/* Dark Mode and Mobile Menu Icons */}
        <div className="flex items-center space-x-4">
          <button
            aria-label="Toggle Dark Mode"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            <Image src={theme === 'dark' ? '/icons/lightmode.svg' : '/icons/darkmode.svg'} alt="Dark Mode Icon" width={24} height={24} />
          </button>

          {/* Mobile Menu */}
          <div className="sm:hidden">
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="text-gray-600 dark:text-gray-300"
            >
              <Image src={menuIconSrc} alt="Menu" width={24} height={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <nav className="sm:hidden mt-4 px-8">
          <Link href="/#hero" className="block py-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
            Home
          </Link>
          <Link href="/#education" className="block py-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
            Education
          </Link>
          <Link href="/#experience" className="block py-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
            Experience
          </Link>
          <Link href="/#projects" className="block py-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
            Projects
          </Link>
        </nav>
      )}
    </header>
  );
}
