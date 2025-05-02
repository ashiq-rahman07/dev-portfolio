
import React from 'react';
import ProjectCard, { ProjectProps } from './ProjectCard';

export const projectsData: ProjectProps[] = [
  {
    id: "1",
    title: 'BasaFinder 🏡',
    description: 'A smart rental housing platform with role-based dashboards (Admin, Landlord, Tenant).',
    image: '/basefinder.png',
    tags: ["Next.js", "TypeScript", "Tailwind", "MongoDB"],
    demoLink: 'https://basefinder-client.vercel.app/',
    githubLink: 'https://github.com/ashiq-rahman07/basefinder-client',
    featured: true
  },
  {
    id: "2",
    title: 'Bike Shop E-commerce 🏍️',
    description: 'A fully functional online bike shop with shopping cart, payments, and admin panel. Built using MERN Stack.',
    image: '/bikeshop.png',
    tags: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    demoLink: 'https://bikeshop-frontend.vercel.app/',
    githubLink: 'https://github.com/ashiq-rahman07/bikeshop-frontend',
  },
  {
    id: "3",
    title: 'PluggedIn | Team Projects 🎨',
    description: 'Web base media recording site, Three recording modes available – Screen, Webcam, Audio Recording.',
    image: '/plugdin.png',
    tags: ["React", "Python", "Flask", "OpenAI API"],
    demoLink:'https://pluggedin.vercel.app/',
    githubLink: 'https://github.com/mdpahlovi/plugged-in',
  },

];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A collection of applications and websites I&apos;ve developed. Each project showcases different skills and technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className="animate-fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
