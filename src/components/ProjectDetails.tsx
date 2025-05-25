"use client"

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react';
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
  description: string;
  images: string[];
  challenge: string;
  solution: string;
  features: string[];
  tags:string[];
  liveLink: string;
   githubFrontEnd?: string;
  githubBackEnd?: string;
    
}

  

const ProjectDetails = ({project}:{project:ProjectData | undefined}) => {
 
  return (
    <div className="container mx-auto px-4 pt-4">
      <div className="mb-8 flex justify-between items-center">
        <Button variant="outline" asChild>
          <Link href="/" className="flex items-center">
            <ArrowLeft className="mr-2" size={16} />
            Back to Projects
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/" className="flex items-center">
            <ArrowRight className="mr-2" size={16} />
            Back to Home
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
                          className="w-full h-full object-cover rounded-lg shadow-lg"
                          width={1200} 
                           height={800}
                           quality={90}
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
            <p className="text-lg mb-6">{project?.description}</p>
            
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
              <p className="mb-6">{project?.challenge}</p>
              
              <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
              <p>{project?.solution}</p>
            </div>
            
            
          </div>
        </div>

        <div className="lg:col-span-1">
          <Card className="p-6 sticky top-24 gradient-card">
            <h2 className="text-xl font-semibold mb-6 text-center">Project Links</h2>
            
            <div className="space-y-4">
              <Button className="w-full" asChild>
                <Link href={`${project?.liveLink}`}target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <ExternalLink size={18} />
                  <span>Live Link</span>
                </Link>
              </Button>
              
              <Button variant="outline" className="w-full" asChild>
                <Link href={`${project?.githubFrontEnd}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <Github size={18} />
                  <span>Github Front End</span>
                </Link>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link href={`${project?.githubBackEnd}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <Github size={18} />
                  <span>Github Back End</span>
                </Link>
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
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4 text-center">Key Features</h2>
              <ul className="list-disc pl-6 space-y-2">
                {project?.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails

