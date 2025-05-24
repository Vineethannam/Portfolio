import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MyLifeSection: React.FC = () => {
  return (
    <div className="bg-myColor rounded-xl p-6 mb-6">
      <div className="mb-10">
        <h3 className="text-xl font-bold mb-6">Personal Interests</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-[#2a2a2a] border-none overflow-hidden">
            <CardContent className="p-0">
              <img
                src="https://readdy.ai/api/search-image?query=professional%20photography%20of%20mountain%20landscape%20at%20sunset%2C%20dramatic%20lighting%2C%20beautiful%20nature%20scene%20with%20vibrant%20colors%2C%20high%20quality%20landscape%20photography&width=400&height=250&seq=22&orientation=landscape"
                alt="Photography"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h4 className="font-semibold mb-2 flex items-center">
                  <i className="fas fa-camera text-HeighLightColor mr-2"></i> Photography
                </h4>
                <p className="text-sm text-myText">
                  I'm passionate about landscape and urban photography. Capturing unique perspectives helps inform my design aesthetic.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#2a2a2a] border-none overflow-hidden">
            <CardContent className="p-0">
              <img
                src="https://readdy.ai/api/search-image?query=person%20hiking%20on%20mountain%20trail%20with%20backpack%2C%20adventure%20travel%20photography%2C%20outdoor%20exploration%20scene%2C%20professional%20nature%20photography&width=400&height=250&seq=23&orientation=landscape"
                alt="Hiking"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h4 className="font-semibold mb-2 flex items-center">
                  <i className="fas fa-hiking text-HeighLightColor mr-2"></i> Hiking & Travel
                </h4>
                <p className="text-sm text-myText">
                  Exploring new places and cultures provides fresh inspiration for my creative work and broadens my design perspective.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#2a2a2a] border-none overflow-hidden">
            <CardContent className="p-0">
              <img
                src="https://readdy.ai/api/search-image?query=modern%20minimalist%20interior%20design%20with%20art%20books%20and%20coffee%2C%20stylish%20home%20office%20space%2C%20contemporary%20furniture%2C%20professional%20interior%20photography&width=400&height=250&seq=24&orientation=landscape"
                alt="Interior Design"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h4 className="font-semibold mb-2 flex items-center">
                  <i className="fas fa-home text-HeighLightColor mr-2"></i> Interior Design
                </h4>
                <p className="text-sm text-myText">
                  I enjoy creating harmonious living spaces that reflect my aesthetic sensibilities and appreciation for functional design.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="mb-10">
        <h3 className="text-xl font-bold mb-6">Recent Adventures</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-[#2a2a2a] border-none overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                <img
                  src="https://readdy.ai/api/search-image?query=beautiful%20cityscape%20of%20Tokyo%20at%20night%20with%20neon%20lights%20and%20skyscrapers%2C%20urban%20photography%2C%20vibrant%20city%20scene%2C%20professional%20travel%20photography&width=600&height=350&seq=25&orientation=landscape"
                  alt="Tokyo Trip"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-5">
                  <h4 className="font-semibold text-myTextBig">Tokyo Design Exploration</h4>
                  <p className="text-sm text-gray-300">May 2025</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-myText mb-4">
                  Spent two weeks in Tokyo studying Japanese design principles and aesthetics. Visited numerous design studios and traditional craft workshops to gain inspiration for my projects.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#333333] rounded-full text-xs">Travel</span>
                  <span className="px-3 py-1 bg-[#333333] rounded-full text-xs">Design Research</span>
                  <span className="px-3 py-1 bg-[#333333] rounded-full text-xs">Cultural Exploration</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#2a2a2a] border-none overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20conference%20hall%20with%20audience%20and%20speaker%20on%20stage%2C%20design%20conference%20event%2C%20business%20presentation%2C%20professional%20event%20photography&width=600&height=350&seq=26&orientation=landscape"
                  alt="Design Conference"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-5">
                  <h4 className="font-semibold text-myTextBig">Global Design Summit</h4>
                  <p className="text-sm text-gray-300">March 2025</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-myText mb-4">
                  Presented my research on "The Future of Adaptive Interfaces" at the Global Design Summit in Barcelona. Connected with leading designers and technologists from around the world.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#333333] rounded-full text-xs">Speaking</span>
                  <span className="px-3 py-1 bg-[#333333] rounded-full text-xs">Networking</span>
                  <span className="px-3 py-1 bg-[#333333] rounded-full text-xs">Professional Development</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-6">Creative Side Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-[#2a2a2a] border-none">
            <CardContent className="p-5">
              <div className="w-12 h-12 rounded-full bg-[#333333] flex items-center justify-center mb-4">
                <i className="fas fa-book text-HeighLightColor text-xl"></i>
              </div>
              <h4 className="font-semibold mb-2">Design Blog</h4>
              <p className="text-sm text-myText mb-4">
                I write weekly articles about design trends, tools, and techniques to share knowledge with the community.
              </p>
              <Button variant="ghost" className="text-HeighLightColor hover:text-HeighLightDarkColor p-0 !rounded-button whitespace-nowrap cursor-pointer">
                Visit Blog <i className="fas fa-arrow-right ml-2"></i>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-[#2a2a2a] border-none">
            <CardContent className="p-5">
              <div className="w-12 h-12 rounded-full bg-[#333333] flex items-center justify-center mb-4">
                <i className="fas fa-paint-brush text-HeighLightColor text-xl"></i>
              </div>
              <h4 className="font-semibold mb-2">Digital Art Series</h4>
              <p className="text-sm text-myText mb-4">
                Creating a series of abstract digital artworks exploring the intersection of technology and nature.
              </p>
              <Button variant="ghost" className="text-HeighLightColor hover:text-HeighLightDarkColor p-0 !rounded-button whitespace-nowrap cursor-pointer">
                View Gallery <i className="fas fa-arrow-right ml-2"></i>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-[#2a2a2a] border-none">
            <CardContent className="p-5">
              <div className="w-12 h-12 rounded-full bg-[#333333] flex items-center justify-center mb-4">
                <i className="fas fa-chalkboard-teacher text-HeighLightColor text-xl"></i>
              </div>
              <h4 className="font-semibold mb-2">Design Workshops</h4>
              <p className="text-sm text-myText mb-4">
                I conduct monthly workshops for aspiring designers to help them develop their skills and portfolio.
              </p>
              <Button variant="ghost" className="text-HeighLightColor hover:text-HeighLightDarkColor p-0 !rounded-button whitespace-nowrap cursor-pointer">
                Learn More <i className="fas fa-arrow-right ml-2"></i>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MyLifeSection;