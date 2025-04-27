'use client';

import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { Typewriter } from 'react-simple-typewriter';
import Link from 'next/link';

const HomeSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-start px-8 md:px-24 overflow-hidden bg-white dark:bg-darkBg transition-all duration-500"
    >
      {/* Background Particles */}
      <Particles
        options={{
          background: { color: { value: '' } },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: 'repulse' }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            color: { value: '#00BFFF' },
            links: { color: '#00BFFF', distance: 150, enable: true, opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, outModes: { default: 'bounce' } },
            number: { density: { enable: true, area: 800 }, value: 50 },
            opacity: { value: 0.5 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 5 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      {/* Foreground Content */}
      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-900 dark:text-white"
        >
          Hello, I&apos;m <span className="text-primary">Ashiqur Rahman</span>
        </motion.h1>

        {/* Typewriter Effect Text */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300 h-12"
        >
          <Typewriter
            words={[
              'MERN Stack Developer',
              'Full Stack Engineer',
              'Freelancer',
              'Web Application Specialist',
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-gray-500 dark:text-gray-400 max-w-xl mb-8 leading-relaxed"
        >
          I specialize in building exceptional web applications with beautiful interfaces and solid backend architecture. Passionate about writing clean code and solving real-world problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="flex space-x-4"
        >
          <Link href="#projects">
            <button className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition">
              View Projects
            </button>
          </Link>
          <Link href="#contact">
            <button className="px-6 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition">
              Contact Me
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;
