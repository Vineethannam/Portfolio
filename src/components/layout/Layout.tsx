import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Layout = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setSidebarOpen(false); // Close sidebar on tab change in mobile
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-myTextBig font-sans">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-8">
        {/* Mobile Menu Button */}
        <div className="md:hidden mb-4">
          <Button
            variant="ghost"
            className="text-myTextBig hover:bg-[#333333]"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Sidebar with mobile responsiveness */}
          <div className={`
            md:w-[280px] bg-myColor rounded-xl
            fixed md:relative top-0 left-0 h-full md:h-auto z-50
            transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            md:mr-6
          `}>
            <Sidebar onClose={() => setSidebarOpen(false)} />
          </div>

          {/* Overlay for mobile */}
          {isSidebarOpen && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Main Content */}
          <MainContent activeTab={activeTab} handleTabChange={handleTabChange} />
        </div>
      </div>
    </div>
  );
};

export default Layout;