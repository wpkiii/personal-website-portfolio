// src/components/Header.js
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-8 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo and Name */}
        <div className="flex items-center space-x-2">
          <Image src="/globe.svg" alt="Logo" width={24} height={24} />
          <span className="text-xl font-semibold">William Kelly</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-8 text-lg font-medium">
          <Link href="/#home">Home</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/#projects">Projects</Link>
        </nav>

        {/* Dark Mode Toggle Icon (optional) */}
        <div className="flex items-center">
          <button aria-label="Toggle Dark Mode">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m8-8h1M4 12H3m15.364-7.364l.707.707M5.636 5.636l-.707.707M18.364 18.364l.707.707M5.636 18.364l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
