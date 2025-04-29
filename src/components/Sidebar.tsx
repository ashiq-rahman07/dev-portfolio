'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Sun, Moon, Home, User, FileText, Briefcase, Menu} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Sidebar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden fixed top-4 left-4 z-50 bg-primary text-white p-2 rounded-lg"
        onClick={toggleSidebar}
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-72 bg-white dark:bg-darkBg shadow-md z-40 flex flex-col items-center py-8
        transition-transform duration-300
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
      `}>
        {/* Profile Image */}
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-primary">
          <Image src="/profile.jpg" alt="Profile" width={128} height={128} className="object-cover" />
        </div>

        {/* Name and Title */}
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
           {/* Social Links */}
      <div className="flex space-x-4 mb-8">
        <Link href="https://github.com/your-github-username" target="_blank" className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary hover:text-white transition-all duration-300">
        <FaGithub size={20} />
        </Link>
        <Link href="https://linkedin.com/in/your-linkedin-username" target="_blank" className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary hover:text-white transition-all duration-300">
        <FaLinkedin size={20} />
        </Link>
      </div>
        {/* Download Resume Button */}
        <Link
        href="/asiq-resume.pdf" // 📄 Make sure this file exists inside your `/public` folder
        download
        className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-all duration-300"
      >
        Download Resume
      </Link>
      </div>
    </>
  );
}
