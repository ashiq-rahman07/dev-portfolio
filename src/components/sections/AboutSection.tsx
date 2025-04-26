'use client';

import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center bg-lightBg dark:bg-darkBg px-6">
      <h2 className="text-4xl font-bold mb-6 text-primary">About Me</h2>
      <p className="max-w-2xl text-center text-gray-700 dark:text-gray-300 text-lg">
        I am a passionate designer with a deep love for creative expression. 
        I help brands and individuals create visual experiences that leave a lasting impact.
        Let&apos;s work together to make something beautiful!
      </p>
    </section>
  );
}
