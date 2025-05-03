
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Book, Code, Rocket } from 'lucide-react';

const About = () => {
  const experiences = [
    {
      title: "Web Development Mentor",
      company: "Her Power Project, ICT Division Bangladesh",
      period: "June- 2024 – December 2024  (6 months)t",
      description: "Mentored 20+ female students in HTML, CSS, JavaScript, and CMS technologies.Designed structured learning paths, hands-on assignments, and real-world projects."
    },

   
  ];


  const education = [
    {
      degree: " Bachelor of Science in Computer Science and Engineering (Incomplete)",
      institution: "Sylhet Metropolitan University | Sylhet, Bangladesh",
      period: "2017 – 2019 (Completed 7 Semesters)",
      description: ""
    },
    {
      degree: "Diploma in Architecture",
      institution: "Habiganj Polytechnic Institute",
      period: "2012 - 2016 ",
      description: ""
    }
  ];

  const services = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Web Development",
      description: "End-to-end web application development with modern frameworks and best practices."
    },
    {
      icon: <Rocket className="h-10 w-10 text-primary" />,
      title: "API Development",
      description: "Designing and building scalable RESTful and GraphQL APIs for various applications."
    },
    {
      icon: <Book className="h-10 w-10 text-primary" />,
      title: "Technical Consultation",
      description: "Providing expert advice on technology stack selection and system architecture."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
            I&apos;m a passionate full-stack developer with over 6 years of experience building web applications,
            APIs, and digital experiences for clients across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-primary/10">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in-right">
            <h3 className="text-2xl font-bold mb-6">Work Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-primary/30 pb-6">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
                  <h4 className="text-lg font-bold">{exp.title}</h4>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-primary">{exp.company}</span>
                    <span className="text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-in-right" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-primary/30 pb-6">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
                  <h4 className="text-lg font-bold">{edu.degree}</h4>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-primary">{edu.institution}</span>
                    <span className="text-muted-foreground">{edu.period}</span>
                  </div>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              ))}
              
              <div className="mt-8">
                <h4 className="text-lg font-bold mb-4">Certifications</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Next Level Web Development - Programming Hero.
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Complete Web Development - Programming Hero.
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Think in Redux Way - Learn With Sumith.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
