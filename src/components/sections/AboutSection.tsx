'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const skills = [
  { name: 'React.js', level: 90 },
  { name: 'Next.js', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'MongoDB', level: 80 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'TypeScript', level: 75 },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-8 md:px-24 py-20 bg-lightBg dark:bg-darkBg transition-all duration-500"
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold text-primary mb-8"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-col md:flex-row items-center gap-10"
      >
        {/* Profile Image */}
        <div className="w-52 h-52 rounded-full overflow-hidden border-4 border-primary shadow-lg">
          <Image
            src="/profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
            width={208}
            height={208}
          />
        </div>

        {/* About Text */}
        <div className="max-w-2xl text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800 dark:text-white">
            MERN Stack Developer | Full Stack Engineer
          </h3>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            Hello! I&rsquo;m <span className="text-primary font-semibold">Ashiqur Rahman</span>, a passionate full-stack web developer from Bangladesh 🇧🇩. 
            I love creating modern web applications with clean code, beautiful design, and high performance.
          </p>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            I specialize in building dynamic, responsive, and scalable websites using the latest technologies like 
            <span className="font-semibold text-primary"> Next.js, React, Node.js, MongoDB</span>. 
            Always excited to learn new skills and solve real-world problems through technology.
          </p>
        </div>
      </motion.div>

      {/* Skills Progress Bars */}
      <div className="w-full mt-16 max-w-4xl">
        <motion.h3
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white"
        >
          My Skills
        </motion.h3>

        <div className="space-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1 }}
              className="bg-gray-300 dark:bg-gray-700 rounded-full h-6 overflow-hidden"
            >
              <div
                className="h-full bg-primary text-white flex items-center justify-center font-semibold text-sm"
                style={{ width: `${skill.level}%` }}
              >
                {skill.name} {skill.level}%
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
