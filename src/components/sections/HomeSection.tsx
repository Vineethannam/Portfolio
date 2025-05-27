import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const HomeSection: React.FC = () => {
  return (
    <div className="bg-myColor rounded-xl p-6">
      <div className="mb-10">
        <p className="text-gray-300 mb-6">
          <span className="text-4xl font-bold">Hello, <br />This is <span className=' text-HeighLightColor'>Vineeth Annam</span> <br />I'm a Professional Software Developer.</span> <br/>
          Full-Stack Developer | React + TypeScript | React Router | Java Spring | MySQL
          I build fast, scalable web apps with:
           Frontend: React, JavaScript/TypeScript - Clean, responsive UIs.
           Backend: Java Spring Boot - Secure REST APIs.
           Database: MySQL – Optimized queries & performance tuning.

        </p>
       
      </div>
      <h3 className="text-xl font-bold mb-6">What I'm Doing</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-[#2a2a2a] rounded-xl p-6 flex">
          <div className="w-12 h-12 p-6 rounded-xl bg-[#333333] flex items-center justify-center mr-4">
            <i className="fas fa-desktop text-HeighLightColor text-xl"></i>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Frontend Development</h4>
            <p className="text-sm text-myText">I specialize in building high-performance, responsive web applications using React.js, TypeScript, and modern JavaScript (ES6+). With a focus on clean, maintainable code, I develop dynamic user interfaces with reusable components, efficient state management (Context API), and pixel-perfect styling using CSS3, Flexbox, and Tailwind/Material-UI. I prioritize optimized performance (code splitting, lazy loading) and rigorous testing (Jest) to ensure seamless, bug-free experiences across all devices. My workflow leverages tools like Vite, Webpack, and Git for streamlined development and collaboration.</p>
          </div>
        </div>
        <div className="bg-[#2a2a2a] rounded-xl p-6 flex">
          <div className="w-12 h-12 p-6 rounded-xl bg-[#333333] flex items-center justify-center mr-4">
            <i className="fas fa-code text-HeighLightColor text-xl"></i>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Backend Development</h4>
            <p className="text-sm text-myText"> I build scalable, secure server-side solutions using Java Spring Boot and MySQL. My backend work focuses on creating high-performance REST APIs, implementing robust authentication (JWT/OAuth), and designing efficient database structures with proper indexing and query optimization. I ensure maintainable code and optimize application performance through caching strategies and connection pooling. My solutions emphasize data integrity, security best practices, and seamless integration with frontend systems.</p>
          </div>
        </div>
        {/* <div className="bg-[#2a2a2a] rounded-xl p-6 flex">
          <div className="w-12 h-12 rounded-xl bg-[#333333] flex items-center justify-center mr-4">
            <i className="fas fa-mobile-alt text-HeighLightColor text-xl"></i>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Mobile Apps</h4>
            <p className="text-sm text-myText">Professional development of applications for iOS and Android.</p>
          </div>
        </div>
        <div className="bg-[#2a2a2a] rounded-xl p-6 flex">
          <div className="w-12 h-12 rounded-xl bg-[#333333] flex items-center justify-center mr-4">
            <i className="fas fa-camera text-HeighLightColor text-xl"></i>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Photography</h4>
            <p className="text-sm text-myText">I make high-quality photos of any category at a professional level.</p>
          </div>
        </div> */}
      </div>
      {/* <h3 className="text-xl font-bold mb-6">Testimonials</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#2a2a2a] rounded-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
              <img
                src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20business%20woman%20with%20short%20hair%2C%20neutral%20expression%2C%20corporate%20attire%2C%20studio%20lighting%2C%20professional%20photography%2C%20clean%20background&width=100&height=100&seq=2&orientation=squarish"
                alt="Client"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-semibold">Emma Johnson</h4>
              <p className="text-sm text-myText">Marketing Director</p>
            </div>
          </div>
          <p className="text-sm text-gray-300">
            "Richard's attention to detail and creative approach transformed our website completely.
            The user experience is seamless and our conversion rates have increased by 40%."
          </p>
        </div>
        <div className="bg-[#2a2a2a] rounded-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
              <img
                src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20business%20man%20with%20glasses%2C%20neutral%20expression%2C%20corporate%20attire%2C%20studio%20lighting%2C%20professional%20photography%2C%20clean%20background&width=100&height=100&seq=3&orientation=squarish"
                alt="Client"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-semibold">Michael Chen</h4>
              <p className="text-sm text-myText">CEO, TechStart</p>
            </div>
          </div>
          <p className="text-sm text-gray-300">
            "Working with Richard was a game-changer for our startup. His UI/UX expertise helped us
            create an intuitive app that our users love. Highly recommended!"
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default HomeSection;