'use client';

import React from 'react';

export default function ResumeSection() {
  return (
    <section id="resume" className="min-h-screen flex flex-col justify-center items-center bg-lightBg dark:bg-darkBg px-6">
      <h2 className="text-4xl font-bold mb-6 text-primary">Resume</h2>
      <div className="max-w-3xl space-y-4">
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Senior Designer</h3>
          <p className="text-gray-600 dark:text-gray-400">Creative Studio | 2022 - Present</p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Visual Artist</h3>
          <p className="text-gray-600 dark:text-gray-400">Freelance | 2019 - 2022</p>
        </div>
      </div>
    </section>
  );
}
