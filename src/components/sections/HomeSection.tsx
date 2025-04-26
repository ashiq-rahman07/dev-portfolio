'use client';

import React from 'react';

export default function HomeSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-lightBg dark:bg-darkBg px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fadeIn">
        Hello, I&apos;m Jessica Biogi
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fadeIn delay-200">
        Freelance Designer | Visual Creator
      </p>
      <div className="flex space-x-4">
        <button className="px-6 py-3 bg-primary text-white rounded-full hover:bg-green-400 transition">View Work</button>
        <button className="px-6 py-3 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition">Contact Me</button>
      </div>
    </section>
  );
}
