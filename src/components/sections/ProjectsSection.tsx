import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import crm from '../assets/CRM.png'
import skillhub from '../assets/skillhub.png'
import infozit from '../assets/infozit.png'

const ProjectsSection: React.FC = () => {
  return (
    <div className="bg-myColor rounded-xl p-6">
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-6">Current Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <Card className="bg-[#2a2a2a] border-none overflow-hidden">
            <CardContent className="p-0">
              <img
                src={crm}
                alt="FinTrack Dashboard"
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
                  <h4 className="font-semibold text-lg mb-2 sm:mb-0">CRM</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#333333] rounded-full text-xs">Leads Management</span>
                    <span className="px-3 py-1 bg-[#333333] rounded-full text-xs">Dashboard</span>
                  </div>
                </div>
                <p className="text-sm text-myText mb-4">
                  Built a CRM system to streamline lead management, client communication, and sales tracking. Enabled businesses to manage customer data, assign leads, track interactions, and automate follow-ups for improved engagement and efficiency
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-[#333333] rounded text-xs">React</span>
                    <span className="px-2 py-1 bg-[#333333] rounded text-xs">JavaScript</span>
                    <span className="px-2 py-1 bg-[#333333] rounded text-xs">NodeJS</span>
                    <span className="px-2 py-1 bg-[#333333] rounded text-xs">ShadCN</span>
                  </div>
                  <a href='https://crm.infozit.com/' target='_blank' className="text-HeighLightColor hover:text-HeighLightDarkColor p-0 !rounded-button whitespace-nowrap cursor-pointer">
                    View Details <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#2a2a2a] border-none overflow-hidden">
            <CardContent className="p-0">
              <img
                src={skillhub}
                alt="FitLife Mobile App"
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
                  <h4 className="font-semibold text-lg mb-2 sm:mb-0">Teks SkillHub</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#333333] rounded-full text-xs">Web Application</span>
                    <span className="px-3 py-1 bg-[#333333] rounded-full text-xs">Education Platform</span>
                  </div>
                </div>
                <p className="text-sm text-myText mb-4">
                  Developed Teks SkillHub, an online learning platform that offers video-based courses, user enrollment, and progress tracking. Enables instructors to upload content and learners to access structured courses across various subjects with a smooth and responsive user experience.
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-[#333333] rounded text-xs">React</span>
                    <span className="px-2 py-1 bg-[#333333] rounded text-xs">JavaScript</span>
                    <span className="px-2 py-1 bg-[#333333] rounded text-xs">NodeJS</span>
                    <span className="px-2 py-1 bg-[#333333] rounded text-xs">BootStrap</span>
                  </div>
                  <a href="https://teksskillhub.com/" target='_blank' className="text-HeighLightColor hover:text-HeighLightDarkColor p-0 !rounded-button whitespace-nowrap cursor-pointer">
                    View Details <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-6">Recent Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card className="bg-[#2a2a2a] border-none overflow-hidden cursor-pointer">
            <CardContent className="p-0">
              <div className="relative group">
                <img
                  src={infozit}
                  alt="Luxe E-commerce"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <a href='https://infozit.com/' target='_blank' className="text-center">
                    <i className="fas fa-eye text-HeighLightColor text-2xl mb-2"></i>
                    <h4 className="text-myTextBig font-medium">View Project</h4>
                  </a>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">InfozIT</h3>
                <p className="text-sm text-myText">Wesite</p>
              </div>
            </CardContent>
          </Card>
          
          {/* <Card className="bg-[#2a2a2a] border-none overflow-hidden cursor-pointer">
            <CardContent className="p-0">
              <div className="relative group">
                <img
                  src="https://readdy.ai/api/search-image?query=music%20streaming%20app%20interface%20design%2C%20dark%20theme%20with%20vibrant%20color%20accents%2C%20playlist%20and%20player%20UI%2C%20professional%20mobile%20application%20design%20for%20audio%20content&width=400&height=300&seq=17&orientation=landscape"
                  alt="Harmony Music App"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <div className="text-center">
                    <i className="fas fa-eye text-HeighLightColor text-2xl mb-2"></i>
                    <h4 className="text-myTextBig font-medium">View Project</h4>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">Harmony Music App</h3>
                <p className="text-sm text-myText">Mobile App</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#2a2a2a] border-none overflow-hidden cursor-pointer">
            <CardContent className="p-0">
              <div className="relative group">
                <img
                  src="https://readdy.ai/api/search-image?query=corporate%20website%20design%20for%20technology%20company%2C%20modern%20professional%20interface%20with%20blue%20gradient%2C%20service%20showcase%20page%2C%20clean%20business%20web%20design&width=400&height=300&seq=18&orientation=landscape"
                  alt="TechCore Website"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <div className="text-center">
                    <i className="fas fa-eye text-HeighLightColor text-2xl mb-2"></i>
                    <h4 className="text-myTextBig font-medium">View Project</h4>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">TechCore Website</h3>
                <p className="text-sm text-myText">Web Development</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#2a2a2a] border-none overflow-hidden cursor-pointer">
            <CardContent className="p-0">
              <div className="relative group">
                <img
                  src="https://readdy.ai/api/search-image?query=restaurant%20booking%20app%20interface%20design%2C%20food%20ordering%20system%20UI%2C%20elegant%20dark%20theme%20with%20food%20photography%2C%20professional%20mobile%20application%20for%20culinary%20business&width=400&height=300&seq=19&orientation=landscape"
                  alt="Culinary Connect"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <div className="text-center">
                    <i className="fas fa-eye text-HeighLightColor text-2xl mb-2"></i>
                    <h4 className="text-myTextBig font-medium">View Project</h4>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">Culinary Connect</h3>
                <p className="text-sm text-myText">Mobile App</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#2a2a2a] border-none overflow-hidden cursor-pointer">
            <CardContent className="p-0">
              <div className="relative group">
                <img
                  src="https://readdy.ai/api/search-image?query=brand%20identity%20design%20for%20coffee%20shop%2C%20logo%20and%20packaging%20mockups%2C%20color%20palette%20and%20typography%20samples%2C%20professional%20branding%20project%20presentation&width=400&height=300&seq=20&orientation=landscape"
                  alt="Brew & Bean Branding"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <div className="text-center">
                    <i className="fas fa-eye text-HeighLightColor text-2xl mb-2"></i>
                    <h4 className="text-myTextBig font-medium">View Project</h4>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">Brew & Bean Branding</h3>
                <p className="text-sm text-myText">Brand Identity</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#2a2a2a] border-none overflow-hidden cursor-pointer">
            <CardContent className="p-0">
              <div className="relative group">
                <img
                  src="https://readdy.ai/api/search-image?query=social%20media%20dashboard%20UI%20design%2C%20content%20management%20interface%2C%20analytics%20and%20scheduling%20tools%2C%20professional%20social%20media%20marketing%20platform%20design&width=400&height=300&seq=21&orientation=landscape"
                  alt="SocialPulse Dashboard"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <div className="text-center">
                    <i className="fas fa-eye text-HeighLightColor text-2xl mb-2"></i>
                    <h4 className="text-myTextBig font-medium">View Project</h4>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">SocialPulse Dashboard</h3>
                <p className="text-sm text-myText">Web Application</p>
              </div>
            </CardContent>
          </Card> */}
        </div>
      </div>
      
      {/* <div>
        <h3 className="text-xl font-bold mb-6">Client Projects</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="bg-[#2a2a2a] rounded-xl p-5 flex flex-col items-center justify-center text-center cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-[#333333] flex items-center justify-center mb-3">
              <i className="fab fa-apple text-HeighLightColor text-2xl"></i>
            </div>
            <h4 className="font-semibold">Apple Inc.</h4>
            <p className="text-xs text-myText mt-1">UI/UX Consultation</p>
          </div>
          
          <div className="bg-[#2a2a2a] rounded-xl p-5 flex flex-col items-center justify-center text-center cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-[#333333] flex items-center justify-center mb-3">
              <i className="fab fa-spotify text-HeighLightColor text-2xl"></i>
            </div>
            <h4 className="font-semibold">Spotify</h4>
            <p className="text-xs text-myText mt-1">Mobile App Redesign</p>
          </div>
          
          <div className="bg-[#2a2a2a] rounded-xl p-5 flex flex-col items-center justify-center text-center cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-[#333333] flex items-center justify-center mb-3">
              <i className="fab fa-airbnb text-HeighLightColor text-2xl"></i>
            </div>
            <h4 className="font-semibold">Airbnb</h4>
            <p className="text-xs text-myText mt-1">Web Experience Design</p>
          </div>
          
          <div className="bg-[#2a2a2a] rounded-xl p-5 flex flex-col items-center justify-center text-center cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-[#333333] flex items-center justify-center mb-3">
              <i className="fab fa-uber text-HeighLightColor text-2xl"></i>
            </div>
            <h4 className="font-semibold">Uber</h4>
            <p className="text-xs text-myText mt-1">Driver App Interface</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ProjectsSection;