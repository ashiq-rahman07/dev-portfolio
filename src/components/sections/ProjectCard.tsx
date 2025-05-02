
import React from 'react';
import { Card,  CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';


export interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  githubLink: string;
  featured?: boolean;
  id?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  tags, 
  demoLink, 
  githubLink,
  featured = false,
  id = "1"
}: ProjectProps) => {
  return (
    <div>
         <Card className={`overflow-hidden overflow-y-hidden  transition-all duration-300 hover:shadow-lg gradient-card ${
      featured ? 'gradient-border' : ''
    }`}>
      <div className="aspect-video overflow-hidden">
        <Image
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          width={300}
          height={150}
        />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="text-xl">{title}</CardTitle>
          {featured && (
            <Badge variant="default" className="bg-primary/20 text-primary hover:bg-primary/30">
              Featured
            </Badge>
          )}
        </div>
        <div className="flex flex-wrap gap-2 mb-2 w-[250px]">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="tech-stack-item">
              {tag}
            </Badge>
          ))}
        </div>
        <CardDescription className="text-muted-foreground w-full">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
            <Github size={16} />
            <span>Code</span>
          </a>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </a>
        </Button>
        <Button size="sm" asChild>
          <Link href={`/projects/${id}`} className="flex items-center gap-1">
            <span>Details</span>
            <ArrowRight size={16} />
          </Link>
        </Button>
      </CardFooter>
    </Card>
    </div>
  );
};

export default ProjectCard;
