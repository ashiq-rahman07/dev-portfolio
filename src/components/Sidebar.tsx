'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Sun, Moon, Home, User, FileText, Briefcase } from 'lucide-react';

export default function Sidebar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen  top-0 left-0  h-full bg-white dark:bg-darkBg shadow-md fixed z-50  w-72   flex flex-col items-center py-8 transition-all duration-500">
      <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-primary">
        <Image src="/profile.jpg" alt="Profile" width={128} height={128} className="object-cover" />
      </div>
      <h1 className="text-2xl font-bold text-lightText dark:text-darkText mb-1 text-center">Ashiqur Rahman</h1>
      <p className="text-gray-500 dark:text-gray-400 text-center mb-6">MERN Stack Developer</p>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="mb-8 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary hover:text-white transition-all duration-300"
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Navigation */}
      <nav className="flex flex-col space-y-4">
        <Link href="#home" className="flex items-center space-x-2 text-lightText dark:text-darkText hover:text-primary dark:hover:text-primary">
          <Home size={18} /> <span>Home</span>
        </Link>
        <Link href="#about" className="flex items-center space-x-2 text-lightText dark:text-darkText hover:text-primary dark:hover:text-primary">
          <User size={18} /> <span>About</span>
        </Link>
        <Link href="#resume" className="flex items-center space-x-2 text-lightText dark:text-darkText hover:text-primary dark:hover:text-primary">
          <FileText size={18} /> <span>Resume</span>
        </Link>
        <Link href="#services" className="flex items-center space-x-2 text-lightText dark:text-darkText hover:text-primary dark:hover:text-primary">
          <Briefcase size={18} /> <span>Services</span>
        </Link>
      </nav>
    </div>
  );
}
