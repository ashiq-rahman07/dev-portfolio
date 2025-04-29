'use client';

import { CameraIcon } from 'lucide-react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { FiGithub, FiExternalLink } from 'react-icons/fi';
import ProjectCard from '../ProjectCard';

const projects = [
  {
    slug: 'basafinder',
    title: 'BasaFinder 🏡',
    description: 'A smart rental housing platform with role-based dashboards (Admin, Landlord, Tenant). Built with Next.js, Tailwind, Node.js, MongoDB.',
    image: '/basefinder.png', // 👉 You must add your project images inside /public/projects/
    github: 'https://github.com/ashiq-rahman07/basefinder-client',
    live: 'https://basefinder-client.vercel.app/',
  },
  {
    slug: 'bikeshop',
    title: 'Bike Shop E-commerce 🏍️',
    description: 'A fully functional online bike shop with shopping cart, payments, and admin panel. Built using MERN Stack.',
    image: '/bikeshop.png',
    github: 'https://github.com/ashiq-rahman07/bikeshop-frontend',
    live: 'https://bikeshop-frontend.vercel.app/',
  },
  {
    slug: 'plugedin',
    title: 'PluggedIn | Team Projects 🎨',
    description: 'Web base media recording site, Three recording modes available – Screen, Webcam, Audio Recording.',
    image: '/plugdin.png',
    github: 'https://github.com/mdpahlovi/plugged-in',
    live: 'https://pluggedin.vercel.app/',
  },
];

const ProjectsSection = () => {
    return (
      <section id="projects" className="py-20 px-8 md:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">My Projects</h2>
          <CameraIcon/>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };

export default ProjectsSection;
