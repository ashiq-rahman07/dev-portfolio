
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg gradient-card ${
      featured ? 'gradient-border' : ''
    }`}>
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
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
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="tech-stack-item">
              {tag}
            </Badge>
          ))}
        </div>
        <CardDescription className="text-muted-foreground">
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
          <Link to={`/project/${id}`} className="flex items-center gap-1">
            <span>Details</span>
            <ArrowRight size={16} />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
