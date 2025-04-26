'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaHome, FaUser, FaFileAlt, FaCogs, FaSun, FaMoon } from 'react-icons/fa';
import Image from 'next/image';

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
    <div className="flex flex-col items-center w-72 min-h-screen p-5 bg-lightBg dark:bg-darkBg shadow-lg transition-all">
      
      {/* Profile Image */}
      <div className="w-28 h-28 rounded-full overflow-hidden mb-5">
        <Image
          src="/profile.png" 
          alt="Profile"
          width={200}
          height={200}
          className="object-cover"
        />
      </div>

      {/* Name and Role */}
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Jessica <span className="text-primary">Biogi</span>
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mt-1 mb-6">Designer</p>

      {/* Social Links */}
      <div className="flex space-x-4 mb-6">
        <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary text-xl"><FaHome /></a>
        <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary text-xl"><FaUser /></a>
        <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary text-xl"><FaFileAlt /></a>
        <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary text-xl"><FaCogs /></a>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col space-y-3 text-center w-full">
        <Link href="#home" className="nav-link">
          <FaHome className="inline-block mr-2" /> Home
        </Link>
        <Link href="#about" className="nav-link">
          <FaUser className="inline-block mr-2" /> About
        </Link>
        <Link href="#resume" className="nav-link">
          <FaFileAlt className="inline-block mr-2" /> Resume
        </Link>
        <Link href="#services" className="nav-link">
          <FaCogs className="inline-block mr-2" /> Services
        </Link>
      </nav>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="mt-8 flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary transition"
      >
        {darkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
        <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
      </button>
    </div>
  );
}
