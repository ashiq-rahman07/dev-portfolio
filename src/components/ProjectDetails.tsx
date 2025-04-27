"use client"

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
// import { notFound } from 'next/navigation';
import Image from 'next/image';

interface IProject {
    id: string;
    title: string;
    description: string;
    features: string[];
    technologies: string[];
    image: string;
    github: string;
    live: string;
  }
  

const ProjectDetails = ({project}:{project:IProject}) => {
 
return (
    <section className="min-h-screen py-20 px-8 md:px-24 bg-lightBg dark:bg-darkBg transition-all duration-500">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto"
    >
      {/* Project Image */}
      <div className="w-full h-72 md:h-[500px] overflow-hidden rounded-xl mb-10 shadow-lg">
        <Image
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          width={500}
          height={300}
        />
      </div>

      {/* Project Title */}
      <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">{project.title}</h1>

      {/* Project Description */}
      <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
        {project.description}
      </p>

      {/* Features */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* Technologies Used */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Technologies Used</h2>
        <div className="flex flex-wrap gap-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-6">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/80 text-white font-semibold rounded-lg transition"
        >
          <FiGithub size={22} /> View Code
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/80 text-white font-semibold rounded-lg transition"
        >
          <FiExternalLink size={22} /> Live Demo
        </a>
      </div>
    </motion.div>
  </section>
)
}

export default ProjectDetails

