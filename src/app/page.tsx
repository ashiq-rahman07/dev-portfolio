import AboutSection from '@/components/sections/AboutSection';
import HomeSection from '@/components/sections/HomeSection';
import ResumeSection from '@/components/sections/ResumeSection';
import ServicesSection from '@/components/sections/ServicesSection';
import SkillsSection from '@/components/sections/SkillSection';
import Sidebar from '@/components/Sidebar';

export default function Home() {
  return (
    <main className="flex">
      <Sidebar />
      <div className="flex-1 ml-72 w-full z-10 overflow-y-auto scroll-smooth">
        <HomeSection />
        <AboutSection />
        <ResumeSection />
        <SkillsSection/>
        <ServicesSection />
      </div>
    </main>
  );
}
