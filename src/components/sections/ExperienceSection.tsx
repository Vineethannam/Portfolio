import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const ExperienceSection: React.FC = () => {
  return (
    <div className="bg-myColor rounded-xl p-6 mb-6">
      <div className="mb-10">
        <h3 className="text-xl font-bold mb-6">Professional Experience</h3>
        <div className="space-y-8">
          <div className="relative pl-6 border-l-2 border-[#333333]">
            <div className="absolute w-3 h-3 bg-HeighLightColor rounded-full -left-[7px] top-1"></div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
              <h4 className="font-semibold text-lg mb-2 sm:mb-0">Creative Director</h4>
              <span className="px-3 py-1 bg-[#333333] rounded-full text-xs inline-block sm:ml-2">Current</span>
            </div>
            <p className="text-sm text-HeighLightColor mb-2">DesignHub Agency • 2020 - Present</p>
            <p className="text-sm text-myText mb-4">
              Leading a team of 15 designers and developers to create innovative digital experiences for global clients. Responsible for creative strategy, client presentations, and design direction.
            </p>
            <div className="bg-[#2a2a2a] rounded-lg p-4">
              <h5 className="text-sm font-medium mb-2">Key Responsibilities:</h5>
              <ul className="text-sm text-myText space-y-2 list-disc pl-5">
                <li>Oversee all creative projects from concept to completion</li>
                <li>Establish design standards and quality control processes</li>
                <li>Mentor junior designers and provide professional development</li>
                <li>Present creative concepts and strategies to C-level clients</li>
                <li>Collaborate with marketing and development teams to ensure cohesive product delivery</li>
              </ul>
            </div>
            <div className="mt-4">
              <h5 className="text-sm font-medium mb-2">Notable Projects:</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-[#2a2a2a] rounded-lg p-3">
                  <h6 className="text-sm font-medium mb-1">Global Finance App Redesign</h6>
                  <p className="text-xs text-myText">Complete UX overhaul resulting in 45% increase in user engagement</p>
                </div>
                <div className="bg-[#2a2a2a] rounded-lg p-3">
                  <h6 className="text-sm font-medium mb-1">Retail Brand Identity System</h6>
                  <p className="text-xs text-myText">Comprehensive rebrand across digital and physical touchpoints</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative pl-6 border-l-2 border-[#333333]">
            <div className="absolute w-3 h-3 bg-HeighLightColor rounded-full -left-[7px] top-1"></div>
            <h4 className="font-semibold text-lg">Senior UI/UX Designer</h4>
            <p className="text-sm text-HeighLightColor mb-2">TechVision Inc. • 2016 - 2020</p>
            <p className="text-sm text-myText mb-4">
              Led design initiatives for enterprise software products and client projects. Specialized in creating intuitive interfaces for complex data visualization systems.
            </p>
            <div className="bg-[#2a2a2a] rounded-lg p-4">
              <h5 className="text-sm font-medium mb-2">Key Achievements:</h5>
              <ul className="text-sm text-myText space-y-2 list-disc pl-5">
                <li>Redesigned flagship analytics platform, increasing user retention by 32%</li>
                <li>Implemented design system that reduced development time by 40%</li>
                <li>Led UX research initiatives that informed product roadmap</li>
                <li>Mentored team of 5 junior designers</li>
              </ul>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-[#333333] rounded-full text-xs">Figma</span>
              <span className="px-3 py-1 bg-[#333333] rounded-full text-xs">Adobe XD</span>
              <span className="px-3 py-1 bg-[#333333] rounded-full text-xs">Sketch</span>
              <span className="px-3 py-1 bg-[#333333] rounded-full text-xs">InVision</span>
            </div>
          </div>
          
          <div className="relative pl-6 border-l-2 border-[#333333]">
            <div className="absolute w-3 h-3 bg-HeighLightColor rounded-full -left-[7px] top-1"></div>
            <h4 className="font-semibold text-lg">UI Designer</h4>
            <p className="text-sm text-HeighLightColor mb-2">CreativeWorks Studio • 2014 - 2016</p>
            <p className="text-sm text-myText mb-4">
              Designed user interfaces for web and mobile applications across various industries including finance, healthcare, and e-commerce.
            </p>
            <div className="bg-[#2a2a2a] rounded-lg p-4">
              <h5 className="text-sm font-medium mb-2">Projects & Clients:</h5>
              <ul className="text-sm text-myText space-y-2 list-disc pl-5">
                <li>HealthTrack - Patient management mobile application</li>
                <li>ShopEase - E-commerce platform redesign</li>
                <li>FinanceFlow - Investment tracking dashboard</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-10">
        <h3 className="text-xl font-bold mb-6">Skills & Expertise</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 mb-8">
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">UI/UX Design</span>
              <span className="text-HeighLightColor">95%</span>
            </div>
            <Progress value={95} className="h-2 bg-[#333333]" indicatorClassName="bg-HeighLightColor" />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Web Design</span>
              <span className="text-HeighLightColor">90%</span>
            </div>
            <Progress value={90} className="h-2 bg-[#333333]" indicatorClassName="bg-HeighLightColor" />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Mobile App Design</span>
              <span className="text-HeighLightColor">88%</span>
            </div>
            <Progress value={88} className="h-2 bg-[#333333]" indicatorClassName="bg-HeighLightColor" />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Brand Identity</span>
              <span className="text-HeighLightColor">85%</span>
            </div>
            <Progress value={85} className="h-2 bg-[#333333]" indicatorClassName="bg-HeighLightColor" />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Front-End Development</span>
              <span className="text-HeighLightColor">75%</span>
            </div>
            <Progress value={75} className="h-2 bg-[#333333]" indicatorClassName="bg-HeighLightColor" />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Design Systems</span>
              <span className="text-HeighLightColor">92%</span>
            </div>
            <Progress value={92} className="h-2 bg-[#333333]" indicatorClassName="bg-HeighLightColor" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#2a2a2a] rounded-xl p-4">
            <h4 className="font-semibold mb-3 flex items-center">
              <i className="fas fa-pencil-ruler text-HeighLightColor mr-2"></i> Design Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#333333] rounded-full text-xs">Figma</span>
              <span className="px-3 py-1 bg-[#333333] rounded-full text-xs">Adobe XD</span>
              <span className="px-3 py-1 bg-[#333333] rounded-full text-xs">Sketch</span>
              <span className="px-3 py-1 bg-[#333333] rounded-full text-xs">Photoshop</span>
              <span className="px-3 py-1 bg-[#333333] rounded-full text-xs">Illustrator</span>
              <span className="px-3 py-1 bg-[#333333] rounded-full text-xs">InVision</span>
            </div>
          </div>
          
          <div className="bg-[#2a2a2a] rounded-xl p-4">
            <h4 className="font-semibold mb-3 flex items-center">
              <i className="fas fa-code text-HeighLightColor mr-2"></i> Development
            </h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#333333] rounded-full text-xs">HTML5</span>
              <span className="px-3 py-1 bg-[#333333] rounded-full text-xs">CSS3/SASS</span>
              <span className="px-3 py-1 bg-[#333333] rounded-full text-xs">JavaScript</span>
              <span className="px-3 py-1 bg-[#333333] rounded-full text-xs">React</span>
              <span className="px-3 py-1 bg-[#333333] rounded-full text-xs">Tailwind</span>
              <span className="px-3 py-1 bg-[#333333] rounded-full text-xs">Git</span>
            </div>
          </div>
          
          <div className="bg-[#2a2a2a] rounded-xl p-4">
            <h4 className="font-semibold mb-3 flex items-center">
              <i className="fas fa-users text-HeighLightColor mr-2"></i> Soft Skills
            </h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#333333] rounded-full text-xs">Team Leadership</span>
              <span className="px-3 py-1 bg-[#333333] rounded-full text-xs">Client Communication</span>
              <span className="px-3 py-1 bg-[#333333] rounded-full text-xs">Project Management</span>
              <span className="px-3 py-1 bg-[#333333] rounded-full text-xs">Mentoring</span>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-6">Awards & Recognition</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-[#2a2a2a] border-none">
            <CardContent className="p-5">
              <div className="w-12 h-12 rounded-full bg-[#333333] flex items-center justify-center mb-4">
                <i className="fas fa-trophy text-HeighLightColor text-xl"></i>
              </div>
              <h4 className="font-semibold mb-1">Design Excellence Award</h4>
              <p className="text-xs text-HeighLightColor mb-2">2023</p>
              <p className="text-sm text-myText">
                Awarded for outstanding contribution to financial app interface design.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#2a2a2a] border-none">
            <CardContent className="p-5">
              <div className="w-12 h-12 rounded-full bg-[#333333] flex items-center justify-center mb-4">
                <i className="fas fa-medal text-HeighLightColor text-xl"></i>
              </div>
              <h4 className="font-semibold mb-1">UX Designer of the Year</h4>
              <p className="text-xs text-HeighLightColor mb-2">2021</p>
              <p className="text-sm text-myText">
                Recognized by Design Association for innovative approach to user experience.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#2a2a2a] border-none">
            <CardContent className="p-5">
              <div className="w-12 h-12 rounded-full bg-[#333333] flex items-center justify-center mb-4">
                <i className="fas fa-star text-HeighLightColor text-xl"></i>
              </div>
              <h4 className="font-semibold mb-1">Creative Innovation Prize</h4>
              <p className="text-xs text-HeighLightColor mb-2">2019</p>
              <p className="text-sm text-myText">
                Awarded for groundbreaking approach to data visualization interfaces.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;