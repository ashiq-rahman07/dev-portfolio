'use client';

import React, { useEffect, useState } from 'react';

export default function HomeSection() {
  const [typing, setTyping] = useState('');
  const fullName = 'Ashiqur Rahman';
  const role = 'MERN Stack Developer';
  const description = 'Passionate about building web applications with the latest technologies.';

  useEffect(() => {
    let index = 0;
    const nameInterval = setInterval(() => {
      setTyping((prev) => prev + fullName[index]);
      index += 1;
      if (index === fullName.length) {
        clearInterval(nameInterval);
      }
    }, 150); // typing speed
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#2C3E50] to-[#34495E] dark:bg-gradient-to-r dark:from-[#1C1C1C] dark:to-[#2F2F2F] px-6 text-center relative overflow-hidden"
    >
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2C3E50] to-[#34495E] opacity-40 blur-xl"></div>

      {/* Typing Effect for Name */}
      <h1 className="text-4xl md:text-5xl font-mono text-white mb-6">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 animate-pulse">
          {typing}
        </span>
        <span className="block text-gray-300 mt-2 text-lg">{role}</span>
      </h1>

      {/* Description */}
      <p className="text-xl text-gray-200 mb-8 animate__animated animate__fadeIn animate__delay-1s">
        {description}
      </p>

      {/* Buttons */}
      <div className="flex space-x-6 animate__animated animate__fadeIn animate__delay-2s">
        <button className="px-8 py-4 bg-primary text-white rounded-lg shadow-md hover:bg-[#1ABC9C] transition-all ease-in-out duration-300">
          View Projects
        </button>
        <button className="px-8 py-4 bg-[#F39C12] text-white rounded-lg shadow-md hover:bg-[#E67E22] transition-all ease-in-out duration-300">
          Contact Me
        </button>
      </div>
    </section>
  );
}
