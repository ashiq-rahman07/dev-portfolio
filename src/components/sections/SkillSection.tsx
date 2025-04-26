'use client';

import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiJavascript, SiTypescript } from 'react-icons/si';

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-lightBg dark:bg-darkBg flex flex-col items-center justify-center py-16 px-6"
    >
      <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white mb-8">
        My Skills & Technologies
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
        I specialize in building full-stack applications using the latest web technologies.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center hover:scale-110 transform transition duration-300 ease-in-out">
          <FaReact size={50} className="text-sky-500 mb-4" />
          <h3 className="text-xl text-gray-800 dark:text-white">React</h3>
        </div>

        <div className="flex flex-col items-center hover:scale-110 transform transition duration-300 ease-in-out">
          <FaNodeJs size={50} className="text-green-600 mb-4" />
          <h3 className="text-xl text-gray-800 dark:text-white">Node.js</h3>
        </div>

        <div className="flex flex-col items-center hover:scale-110 transform transition duration-300 ease-in-out">
          <SiMongodb size={50} className="text-green-500 mb-4" />
          <h3 className="text-xl text-gray-800 dark:text-white">MongoDB</h3>
        </div>

        <div className="flex flex-col items-center hover:scale-110 transform transition duration-300 ease-in-out">
          <SiExpress size={50} className="text-gray-700 mb-4" />
          <h3 className="text-xl text-gray-800 dark:text-white">Express</h3>
        </div>

        <div className="flex flex-col items-center hover:scale-110 transform transition duration-300 ease-in-out">
          <SiJavascript size={50} className="text-yellow-500 mb-4" />
          <h3 className="text-xl text-gray-800 dark:text-white">JavaScript</h3>
        </div>

        <div className="flex flex-col items-center hover:scale-110 transform transition duration-300 ease-in-out">
          <SiTypescript size={50} className="text-blue-600 mb-4" />
          <h3 className="text-xl text-gray-800 dark:text-white">TypeScript</h3>
        </div>

        <div className="flex flex-col items-center hover:scale-110 transform transition duration-300 ease-in-out">
          <FaHtml5 size={50} className="text-orange-600 mb-4" />
          <h3 className="text-xl text-gray-800 dark:text-white">HTML5</h3>
        </div>

        <div className="flex flex-col items-center hover:scale-110 transform transition duration-300 ease-in-out">
          <FaCss3Alt size={50} className="text-blue-600 mb-4" />
          <h3 className="text-xl text-gray-800 dark:text-white">CSS3</h3>
        </div>
      </div>
    </section>
  );
}
