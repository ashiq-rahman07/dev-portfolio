import AboutSection from '@/components/sections/AboutSection';
import HomeSection from '@/components/sections/HomeSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ResumeSection from '@/components/sections/ResumeSection';
import ServicesSection from '@/components/sections/ServicesSection';
import SkillsSection from '@/components/sections/SkillSection';
// import Sidebar from '@/components/Sidebar';

export default function Home() {
  return (
  <>
        <HomeSection />
        <AboutSection />
        <ProjectsSection/>
        <ResumeSection />
        <SkillsSection/>
        <ServicesSection />
  </>
       
    
  );
}
