'use client';

import { motion } from 'framer-motion';

interface ResumeItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
}

const educationData: ResumeItem[] = [
  {
    year: '2020 - 2024',
    title: 'Bachelor of Computer Science',
    subtitle: 'Your University Name',
    description: 'Focused on software development, web technologies, and system design.',
  },
  // Add more education...
];

const experienceData: ResumeItem[] = [
  {
    year: '2024 - Present',
    title: 'Frontend Developer',
    subtitle: 'Your Company Name',
    description: 'Building responsive and modern web applications using React, Next.js, and TailwindCSS.',
  },
  // Add more experiences...
];

export default function ResumeSection() {
  return (
    <section id="resume" className="py-20 bg-lightBg dark:bg-darkBg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-darkText dark:text-lightText">
          My Resume
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">Education</h3>
            <div className="space-y-8">
              {educationData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl shadow-md bg-white dark:bg-darkCard"
                >
                  <span className="text-sm text-gray-500">{item.year}</span>
                  <h4 className="text-xl font-semibold mt-2">{item.title}</h4>
                  <h5 className="text-md text-primary mb-2">{item.subtitle}</h5>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">Experience</h3>
            <div className="space-y-8">
              {experienceData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl shadow-md bg-white dark:bg-darkCard"
                >
                  <span className="text-sm text-gray-500">{item.year}</span>
                  <h4 className="text-xl font-semibold mt-2">{item.title}</h4>
                  <h5 className="text-md text-primary mb-2">{item.subtitle}</h5>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
