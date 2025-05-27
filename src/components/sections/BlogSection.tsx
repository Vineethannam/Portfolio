import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BlogSection: React.FC = () => {
  return (
    <div className="bg-myColor rounded-xl p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-[#2a2a2a] border-none overflow-hidden cursor-pointer">
          <CardContent className="p-0">
            <img
              src="https://readdy.ai/api/search-image?query=pantone%20color%20swatch%20in%20pink%20shade%20on%20light%20background%2C%20minimalist%20design%2C%20professional%20photography%20of%20color%20palette&width=600&height=300&seq=10&orientation=landscape"
              alt="Design Conferences"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs text-myText">Design • May 24, 2025</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Design Conferences in 2025</h3>
              <p className="text-sm text-myText mb-4">
                Insights on special conferences focusing on design trends and innovations for the upcoming year.
              </p>
              <Button variant="ghost" className="text-HeighLightColor hover:text-HeighLightDarkColor p-0 !rounded-button whitespace-nowrap cursor-pointer">
                Read More <i className="fas fa-arrow-right ml-2"></i>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#2a2a2a] border-none overflow-hidden cursor-pointer">
          <CardContent className="p-0">
            <img
              src="https://readdy.ai/api/search-image?query=professional%20typography%20sample%20with%20various%20fonts%20on%20orange%20background%2C%20graphic%20design%20typography%20showcase%2C%20modern%20font%20display&width=600&height=300&seq=11&orientation=landscape"
              alt="Best Fonts"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs text-myText">Typography • May 20, 2025</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Best Fonts Every Designer Should Know</h3>
              <p className="text-sm text-myText mb-4">
                An exploration of essential typefaces that can elevate your design projects to the next level.
              </p>
              <Button variant="ghost" className="text-HeighLightColor hover:text-HeighLightDarkColor p-0 !rounded-button whitespace-nowrap cursor-pointer">
                Read More <i className="fas fa-arrow-right ml-2"></i>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#2a2a2a] border-none overflow-hidden cursor-pointer">
          <CardContent className="p-0">
            <img
              src="https://readdy.ai/api/search-image?query=geometric%20pattern%20with%20triangles%20in%20blue%20and%20purple%20on%20light%20background%2C%20modern%20abstract%20design%2C%20professional%20pattern%20design&width=600&height=300&seq=12&orientation=landscape"
              alt="Design Patterns"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs text-myText">Patterns • May 15, 2025</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Emerging Design Patterns for 2025</h3>
              <p className="text-sm text-myText mb-4">
                Discover the latest design patterns that are shaping the industry and how to implement them.
              </p>
              <Button variant="ghost" className="text-HeighLightColor hover:text-HeighLightDarkColor p-0 !rounded-button whitespace-nowrap cursor-pointer">
                Read More <i className="fas fa-arrow-right ml-2"></i>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#2a2a2a] border-none overflow-hidden cursor-pointer">
          <CardContent className="p-0">
            <img
              src="https://readdy.ai/api/search-image?query=modern%20UI%20design%20tools%20and%20software%20interface%20on%20computer%20screen%2C%20professional%20design%20workspace%2C%20creative%20design%20tools&width=600&height=300&seq=13&orientation=landscape"
              alt="Design Tools"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs text-myText">Tools • May 10, 2025</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Essential Design Tools for Professionals</h3>
              <p className="text-sm text-myText mb-4">
                A comprehensive guide to the must-have tools that every designer should have in their arsenal.
              </p>
              <Button variant="ghost" className="text-HeighLightColor hover:text-HeighLightDarkColor p-0 !rounded-button whitespace-nowrap cursor-pointer">
                Read More <i className="fas fa-arrow-right ml-2"></i>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BlogSection;