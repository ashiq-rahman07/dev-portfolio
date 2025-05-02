"use client"

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
// import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

// interface IProject {
//     id: string;
//     title: string;
//     description: string;
//     features: string[];
//     technologies: string[];
//     image: string;
//     github: string;
//     live: string;
//   }

interface ProjectData {
  name: string;
  id: string;
  images: string[];
  challenge: string;
  solution: string;
  features: string[];
  tags:string[];
  demoLink: string;
  githubLink: string;
}

  

const ProjectDetails = ({project}:{project:ProjectData | undefined}) => {
 
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="mb-8">
        <Button variant="outline" asChild>
          <Link href="/" className="flex items-center">
            <ArrowLeft className="mr-2" size={16} />
            Back to Projects
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-8 rounded-lg overflow-hidden">
            <Carousel className="w-full">
              <CarouselContent>
                {project?.images.map((img, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div className="aspect-video overflow-hidden rounded-lg">
                        <Image 
                          src={img} 
                          alt={`${project.name} screenshot ${index + 1}`} 
                          className="w-full h-full object-cover"
                          width={600}
                          height={500}
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <h1 className="text-4xl font-bold mb-4">{project?.name}</h1>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project?.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="tech-stack-item">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="mb-8">
            <p className="text-lg mb-6">A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.</p>
            
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
              <p className="mb-6">{project?.challenge}</p>
              
              <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
              <p>{project?.solution}</p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="list-disc pl-6 space-y-2">
                {project?.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <Card className="p-6 sticky top-24 gradient-card">
            <h2 className="text-xl font-semibold mb-6">Project Links</h2>
            
            <div className="space-y-4">
              <Button className="w-full" asChild>
                <a href={project?.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </a>
              </Button>
              
              <Button variant="outline" className="w-full" asChild>
                <a href={project?.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <Github size={18} />
                  <span>Source Code</span>
                </a>
              </Button>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project?.tags.map((tag, index) => (
                  <Badge key={index} className="tech-stack-item">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails

