
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Code, Terminal, Cpu, LayoutGrid } from 'lucide-react';

const CreativeSection = () => {
  const creativeItems = [
    {
      icon: <Terminal className="h-8 w-8 mb-4 text-primary" />,
      title: "Clean Code",
      description: "Writing code that is readable, maintainable and follows best practices."
    },
    {
      icon: <Code className="h-8 w-8 mb-4 text-primary" />,
      title: "Modern Stack",
      description: "Utilizing the latest technologies to build fast, responsive and secure applications."
    },
    {
      icon: <Cpu className="h-8 w-8 mb-4 text-primary" />,
      title: "Performance Optimized",
      description: "Building applications with performance in mind from the beginning."
    },
    {
      icon: <LayoutGrid className="h-8 w-8 mb-4 text-primary" />,
      title: "Responsive Design",
      description: "Creating interfaces that work seamlessly across all device sizes."
    }
  ];

  return (
    <section id="creative" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-primary">Development Philosophy</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The principles and practices that guide my approach to software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {creativeItems.map((item, index) => (
            <Card key={index} className="gradient-card overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="rounded-full bg-card p-4 mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="relative mt-20 p-8 rounded-xl overflow-hidden gradient-border">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 opacity-20 rounded-xl"></div>
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Passionate about creating elegant solutions</h3>
                <p className="text-muted-foreground mb-6">
                  I believe that the best applications are those that solve real problems while providing an exceptional user experience.
                </p>
              </div>
              <div className="flex-shrink-0 w-full md:w-1/3 aspect-square relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-primary/60 blur-xl"></div>
                <div className="relative bg-card border border-border rounded-full w-full h-full flex items-center justify-center overflow-hidden">
                  <div className="text-6xl">💡</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeSection;
