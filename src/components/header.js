// src/components/Header.js
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';  // Import useTheme hook

export default function Header() {
  const { theme, setTheme } = useTheme();  // Use theme and setTheme for switching modes

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 py-4 px-8 fixed top-0 w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo and Name */}
        <div className="flex items-center space-x-2">
          <Image src="/icons/terminal.svg" alt="Logo" width={24} height={24} />
          <span className="text-xl font-semibold text-gray-900 dark:text-white">William Kelly</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-8 text-lg font-medium">
          <Link href="/#hero" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link>
          <Link href="/#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</Link>
          <Link href="/#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</Link>
        </nav>

        {/* Dark Mode Toggle Icon */}
        <div className="flex items-center">
          <button
            aria-label="Toggle Dark Mode"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}  // Toggle between light and dark mode
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            <Image
              src={theme === 'dark' ? '/icons/lightmode.svg' : '/icons/darkmode.svg'}
              alt="Dark Mode Icon"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </header>
  );
}
