import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import leedCode from '../assets/Leetcode.png';

interface SidebarProps {
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  return (
    <div className="p-6 w-full h-full md:h-auto overflow-y-auto">
      {/* Close button for mobile */}
      <div className="md:hidden flex justify-end mb-4">
        <Button variant="ghost" className="text-myTextBig hover:bg-[#333333]" onClick={onClose}>
          <X className="h-6 w-6" />
        </Button>
      </div>

      <div className="flex flex-col items-center mb-6">
        <div className="w-24 h-24 rounded-full bg-[#333333] overflow-hidden mb-4">
          <img
            src="https://readdy.ai/api/search-image?query=professional%20cartoon%20avatar%20of%20a%20male%20designer%20with%20beard%20and%20glasses%2C%20minimalist%20style%2C%20dark%20background%2C%20professional%20looking%2C%20high%20quality%20digital%20illustration&width=200&height=200&seq=1&orientation=squarish"
            alt="Richard Hanrick"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <h2 className="text-xl font-bold mb-1">Vineeth Annam</h2>
        <p className="text-sm text-myText">Software Developer</p>
      </div>
      <div className="space-y-4 mb-6">
        <div className="flex items-center transition-transform duration-300 hover:translate-x-2">
          <div className="w-8 h-8 rounded-full bg-[#333333] flex items-center justify-center mr-3">
            <i className="fas fa-envelope text-HeighLightColor"></i>
          </div>
          <div>
            <p className="text-xs text-myText">Email</p>
            <p className="text-sm">vineethannam6@gmail.com</p>
          </div>
        </div>
        {/* <div className="flex items-center transition-transform duration-300 hover:translate-x-2">
          <div className="w-8 h-8 rounded-full bg-[#333333] flex items-center justify-center mr-3">
            <i className="fas fa-phone text-HeighLightColor"></i>
          </div>
          <div>
            <p className="text-xs text-myText">Phone</p>
            <p className="text-sm">+1 (123) 456-7890</p>
          </div>
        </div> */}
        <div className="flex items-center transition-transform duration-300 hover:translate-x-2">
          <div className="w-8 h-8 rounded-full bg-[#333333] flex items-center justify-center mr-3">
            <i className="fas fa-calendar text-HeighLightColor"></i>
          </div>
          <div>
            <p className="text-xs text-myText">Birthday</p>
            <p className="text-sm">Sepetember 27, 2002</p>
          </div>
        </div>
        <div className="flex items-center transition-transform duration-300 hover:translate-x-2">
          <div className="w-8 h-8 rounded-full bg-[#333333] flex items-center justify-center mr-3">
            <i className="fas fa-map-marker-alt text-HeighLightColor"></i>
          </div>
          <div>
            <p className="text-xs text-myText">Location</p>
            <p className="text-sm">India, Telangana, Hyderabad</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-3 mt-auto">
        <a href="#" className="w-8 h-8 rounded-full bg-[#333333] flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110">
          <img src={leedCode} className='w-6 h-6'/>
        </a>
        <a href="#" className="w-8 h-8 rounded-full bg-[#333333] flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110">
          <i className="fab fa-facebook-f text-white hover:text-HeighLightColor"></i>
        </a>
        <a href="#" className="w-8 h-8 rounded-full bg-[#333333] flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110">
          <i className="fab fa-instagram text-myText hover:text-HeighLightColor"></i>
        </a>
        <a href="#" className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110">
          <i className="fab fa-linkedin-in text-white "></i>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;