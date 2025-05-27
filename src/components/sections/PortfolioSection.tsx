import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const PortfolioSection: React.FC = () => {
  return (
    <div className="bg-myColor rounded-xl p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 col-span-1 md:col-span-2">
            <Card className="bg-[#2a2a2a] border-none overflow-hidden cursor-pointer">
              <CardContent className="p-0">
                <div className="relative group">
                  <img
                    src="https://readdy.ai/api/search-image?query=dark%20mode%20dashboard%20UI%20design%20with%20purple%20and%20blue%20data%20visualization%20charts%2C%20analytics%20interface%2C%20modern%20minimal%20design%2C%20dark%20background%20with%20glowing%20elements%2C%20professional%20UI%20mockup&width=400&height=300&seq=4&orientation=landscape"
                    alt="Dashboard Project"
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
                  <h3 className="font-semibold mb-1">Revive</h3>
                  <p className="text-sm text-myText">Web Development</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-[#2a2a2a] border-none overflow-hidden cursor-pointer">
              <CardContent className="p-0">
                <div className="relative group">
                  <img
                    src="https://readdy.ai/api/search-image?query=clean%20modern%20web%20application%20UI%20design%2C%20light%20mode%20interface%20with%20data%20visualization%2C%20minimalist%20design%2C%20professional%20UI%20mockup%20with%20charts%20and%20graphs&width=400&height=300&seq=5&orientation=landscape"
                    alt="Application Project"
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
                  <h3 className="font-semibold mb-1">Orion</h3>
                  <p className="text-sm text-myText">Web Development</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-[#2a2a2a] border-none overflow-hidden cursor-pointer">
              <CardContent className="p-0">
                <div className="relative group">
                  <img
                    src="https://readdy.ai/api/search-image?query=financial%20dashboard%20UI%20design%20with%20colorful%20data%20visualization%2C%20modern%20interface%20with%20charts%20and%20statistics%2C%20professional%20fintech%20application%20design&width=400&height=300&seq=6&orientation=landscape"
                    alt="Finance Project"
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
                  <h3 className="font-semibold mb-1">Funds</h3>
                  <p className="text-sm text-myText">Web Design</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-[#2a2a2a] border-none overflow-hidden cursor-pointer">
              <CardContent className="p-0">
                <div className="relative group">
                  <img
                    src="https://readdy.ai/api/search-image?query=mobile%20app%20UI%20design%20for%20banking%20application%2C%20dark%20mode%20interface%20with%20purple%20accents%2C%20financial%20app%20screens%2C%20professional%20mobile%20interface%20design&width=300&height=400&seq=7&orientation=portrait"
                    alt="Mobile App"
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
                  <h3 className="font-semibold mb-1">Snapshot</h3>
                  <p className="text-sm text-myText">Applications</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-[#2a2a2a] border-none overflow-hidden cursor-pointer">
              <CardContent className="p-0">
                <div className="relative group">
                  <img
                    src="https://readdy.ai/api/search-image?query=abstract%20geometric%20design%20with%20vibrant%20colors%20on%20dark%20background%2C%20modern%20art%20composition%20with%20circles%20and%20triangles%2C%20professional%20graphic%20design&width=400&height=300&seq=8&orientation=landscape"
                    alt="Design Project"
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
                  <h3 className="font-semibold mb-1">OXM</h3>
                  <p className="text-sm text-myText">Graphic Design</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-[#2a2a2a] border-none overflow-hidden cursor-pointer">
              <CardContent className="p-0">
                <div className="relative group">
                  <img
                    src="https://readdy.ai/api/search-image?query=colorful%20data%20visualization%20dashboard%20with%203D%20charts%20and%20graphs%2C%20modern%20UI%20design%2C%20professional%20analytics%20interface&width=400&height=300&seq=9&orientation=landscape"
                    alt="Analytics Project"
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
                  <h3 className="font-semibold mb-1">MetricSpot</h3>
                  <p className="text-sm text-myText">Web Design</p>
                </div>
              </CardContent>
            </Card>
          </div>
      </div>
    </div>
  );
};

export default PortfolioSection;