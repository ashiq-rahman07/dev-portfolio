

import About from '@/components/sections/About'
import CodeShowcase from '@/components/sections/CodeShowcase'
import Contact from '@/components/sections/ContactSection'
import CreativeSection from '@/components/sections/CreativeSection'
import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <Projects />
      <Skills />
      <CreativeSection />
      <CodeShowcase />
      <About />
      <Contact />
    </div>
  )
}

export default page