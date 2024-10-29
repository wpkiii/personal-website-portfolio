// src/components/Header.js
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-8 fixed top-0 w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo and Name */}
        <div className="flex items-center space-x-2">
          <Image src="/icons/terminal.svg" alt="Logo" width={24} height={24} />
          <span className="text-xl font-semibold text-gray-900">William Kelly</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-8 text-lg font-medium">
          <Link href="/#home" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link href="/#experience" className="hover:text-blue-600 transition-colors">Experience</Link>
          <Link href="/#projects" className="hover:text-blue-600 transition-colors">Projects</Link>
        </nav>

        {/* Dark Mode Toggle Icon */}
        <div className="flex items-center">
          <button aria-label="Toggle Dark Mode" className="text-gray-600 hover:text-gray-900 transition-colors">
          <Image src="/icons/darkmode.svg" alt="Dark Mode Icon" width={24} height={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
