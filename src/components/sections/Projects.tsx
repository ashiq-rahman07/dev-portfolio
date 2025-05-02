
import React from 'react';
import ProjectCard, { ProjectProps } from './ProjectCard';

export const projectsData: ProjectProps[] = [
  {
    id: "ecommerce",
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000",
    tags: ["Next.js", "TypeScript", "Tailwind", "Stripe", "MongoDB"],
    demoLink: "https://demo-link.com",
    githubLink: "https://github.com/yourusername/ecommerce",
    featured: true
  },
  {
    id: "taskapp",
    title: "Task Management App",
    description: "A productive task management application with real-time updates and team collaboration features.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2000",
    tags: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    demoLink: "https://demo-link.com",
    githubLink: "https://github.com/yourusername/taskapp"
  },
  {
    id: "aigen",
    title: "AI Content Generator",
    description: "Content creation tool powered by artificial intelligence to help bloggers and marketers.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2000",
    tags: ["React", "Python", "Flask", "OpenAI API"],
    demoLink: "https://demo-link.com",
    githubLink: "https://github.com/yourusername/ai-generator"
  },
  {
    id: "realestate",
    title: "Real Estate Platform",
    description: "Property listing and search platform with map integration and virtual tours.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000",
    tags: ["React", "Express", "MongoDB", "Google Maps API"],
    demoLink: "https://demo-link.com",
    githubLink: "https://github.com/yourusername/realestate",
    featured: true
  },
  {
    id: "socialdash",
    title: "Social Media Dashboard",
    description: "Analytical dashboard for social media marketers with data visualization and reporting.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2000",
    tags: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
    demoLink: "https://demo-link.com",
    githubLink: "https://github.com/yourusername/social-dashboard"
  },
  {
    id: "fitnessapp",
    title: "Fitness Tracking App",
    description: "Mobile-responsive fitness application with workout plans and progress tracking.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2000",
    tags: ["React Native", "Firebase", "Redux", "Health API"],
    demoLink: "https://demo-link.com",
    githubLink: "https://github.com/yourusername/fitness-app"
  }
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
            A collection of applications and websites I've developed. Each project showcases different skills and technologies.
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
