// @ts-nocheck
import React from 'react';
import { Button } from "@/components/ui/button";
import HomeSection from '@/components/sections/HomeSection';
import EducationSection from '@/components/sections/EducationSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import MyLifeSection from '@/components/sections/MyLifeSection';
import ContactSection from '@/components/sections/ContactSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import BlogSection from '@/components/sections/BlogSection';

interface MainContentProps {
  activeTab: string;
  handleTabChange: (value: string) => void;
}

const MainContent: React.FC<MainContentProps> = ({ activeTab, handleTabChange }) => {
  const sections = {
    home: {
      title: "Home",
      content: "Welcome to my portfolio! I'm a passionate web developer and designer."
    },
    education: {
      title: "Education",
      content: "My academic journey and qualifications."
    },
    experience: {
      title: "Experience",
      content: "My professional journey and skills."
    },
    projects: {
      title: "Projects",
      content: "Showcase of my best work and achievements."
    },
    mylife: {
      title: "My Life",
      content: "Personal interests and activities."
    },
    contact: {
      title: "Contact",
      content: "Get in touch with me."
    },
    // portfolio: {
    //   title: "Portfolio",
    //   content: "View my portfolio work."
    // },
    // blog: {
    //   title: "Portfolio",
    //   content: "View my portfolio work."
    // }
  };

  return (
    <div className="flex-1 w-full">
      <div className="bg-myColor rounded-xl p-6 mb-6 sticky top-0 z-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <h1 className="text-2xl font-bold mb-4 md:mb-0">{sections[activeTab as keyof typeof sections].title}</h1>
          <div className="flex flex-wrap gap-2 md:gap-4">
            {Object.keys(sections).map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? "default" : "ghost"}
                onClick={() => handleTabChange(tab)}
                className={`text-sm rounded-button whitespace-nowrap transform transition-all duration-300 hover:scale-105 ${
                  activeTab === tab ? "bg-HeighLightColor hover:bg-HeighLightDarkColor" : "text-myText hover:text-myTextBig"
                }`}
              >
                {sections[tab as keyof typeof sections].title}
              </Button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="transition-opacity duration-300 ease-in-out">
        {activeTab === "home" && <HomeSection />}
        {activeTab === "education" && <EducationSection />}
        {activeTab === "experience" && <ExperienceSection />}
        {activeTab === "projects" && <ProjectsSection />}
        {activeTab === "mylife" && <MyLifeSection />}
        {activeTab === "contact" && <ContactSection />}
        {/* {activeTab === "portfolio" && <PortfolioSection />} */}
        {activeTab === "blog" && <BlogSection />}
      </div>
    </div>
  );
};

export default MainContent;