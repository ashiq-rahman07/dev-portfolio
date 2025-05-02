
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level: number;
  }[];
}

const skillsData: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "React", level: 92 },
      { name: "TypeScript", level: 85 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 90 }
    ]
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 87 },
      { name: "Python", level: 80 },
      { name: "Django", level: 75 },
      { name: "GraphQL", level: 78 },
      { name: "RESTful APIs", level: 90 }
    ]
  },
  {
    name: "Database",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 82 },
      { name: "MySQL", level: 80 },
      { name: "Firebase", level: 85 },
      { name: "Redis", level: 70 }
    ]
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 78 },
      { name: "AWS", level: 75 },
      { name: "CI/CD", level: 80 },
      { name: "Testing", level: 82 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            As a full-stack developer, I've cultivated a diverse range of technical skills across different domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category, catIndex) => (
            <Card key={catIndex} className="animate-fade-in" style={{ animationDelay: `${catIndex * 0.15}s` }}>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">{category.name}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-10">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express', 
              'Python', 'Django', 'MongoDB', 'PostgreSQL', 'Redux', 'GraphQL', 
              'AWS', 'Docker', 'Git', 'Tailwind CSS', 'Figma', 'Jest'
            ].map((tech, index) => (
              <div key={index} className="tech-stack-item animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
