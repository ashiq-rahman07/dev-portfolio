
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="block text-foreground">Hello, I&apos;m</span>
              <span className="block text-primary mt-2">Full Stack Developer</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-xl">
              I build exceptional digital experiences with modern technologies.
              Specializing in creating beautiful interfaces and efficient backends.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-primary/60 blur-xl"></div>
              <div className="relative bg-card border border-border rounded-full w-full h-full flex items-center justify-center overflow-hidden">
                <Image src='/profile.jpg' alt='profile img' width={150} height={150} className='w-full p-4' />
              </div>
              
              {/* Floating tech icons */}
              <div className="absolute -top-4 -right-4 bg-card shadow-lg rounded-full w-16 h-16 flex items-center justify-center animate-bounce-light">
                <span className="text-2xl">⚛️</span>
              </div>
              <div className="absolute top-1/4 -left-8 bg-card shadow-lg rounded-full w-14 h-14 flex items-center justify-center animate-bounce-light" style={{ animationDelay: '0.5s' }}>
                <span className="text-xl">🔷</span>
              </div>
              <div className="absolute bottom-0 -right-6 bg-card shadow-lg rounded-full w-20 h-20 flex items-center justify-center animate-bounce-light" style={{ animationDelay: '1s' }}>
                <span className="text-2xl">🚀</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#projects" className="flex flex-col items-center text-muted-foreground hover:text-primary">
            <span className="mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
