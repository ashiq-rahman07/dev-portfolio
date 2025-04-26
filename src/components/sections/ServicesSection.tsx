'use client';

import React from 'react';

export default function ServicesSection() {
  return (
    <section id="services" className="min-h-screen flex flex-col justify-center items-center bg-lightBg dark:bg-darkBg px-6">
      <h2 className="text-4xl font-bold mb-6 text-primary">My Services</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">UI/UX Design</h3>
          <p className="text-gray-600 dark:text-gray-400">Creating user-friendly and modern designs for web and mobile.</p>
        </div>
        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Brand Identity</h3>
          <p className="text-gray-600 dark:text-gray-400">Building strong visual brands with logo design and branding guides.</p>
        </div>
      </div>
    </section>
  );
}
