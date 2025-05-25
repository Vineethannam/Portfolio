import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const EducationSection: React.FC = () => {
  return (
    <div className="bg-myColor rounded-xl p-6 mb-6">
      <div className="mb-10">
        <h3 className="text-xl font-bold mb-6">My Education Journey</h3>
        <div className="space-y-8">
          {/* <div className="relative pl-6 border-l-2 border-[#333333]">
            <div className="absolute w-3 h-3 bg-HeighLightColor rounded-full -left-[7px] top-1"></div>
            <h4 className="font-semibold">Master of Fine Arts in Graphic Design</h4>
            <p className="text-sm text-HeighLightColor mb-2">University of Arts, London • 2012 - 2014</p>
            <p className="text-sm text-myText mb-4">
              Specialized in digital interface design and user experience. Graduated with honors and received the Dean's Award for Outstanding Achievement.
            </p>
            <div className="bg-[#2a2a2a] rounded-lg p-4">
              <h5 className="text-sm font-medium mb-2">Key Achievements:</h5>
              <ul className="text-sm text-myText space-y-2 list-disc pl-5">
                <li>Thesis on "The Evolution of Digital Interface Design" received departmental recognition</li>
                <li>Led a team of 5 students in creating a comprehensive brand identity for a local business</li>
                <li>Participated in the International Design Exhibition in Paris</li>
              </ul>
            </div>
          </div> */}
          
          <div className="relative pl-6 border-l-2 border-[#333333]">
            <div className="absolute w-3 h-3 bg-HeighLightColor rounded-full -left-[7px] top-1"></div>
            <h4 className="font-semibold">Bachelor of Computer Science</h4>
            <p className="text-sm text-HeighLightColor mb-2">Noble Degree Collage, Osmania University • 2020 - 2023</p>
            <p className="text-sm text-myText mb-4">
              A comprehensive program blending theory and practice in computing fundamentals, software development, and problem-solving.
            </p>
            <div className="bg-[#2a2a2a] rounded-lg p-4">
              <h5 className="text-sm font-medium mb-2">Key Achievements:</h5>
              <ul className="text-sm text-myText space-y-2 list-disc pl-5">
                <li>Software Engineering (OOP, Design Patterns)</li>
                <li>Algorithms & Data Structures (Optimization, Complexity Analysis)</li>
                <li>Database Systems (SQL, NoSQL, Data Modeling)</li>
                <li>Web & Mobile Development (Frontend/Backend, Responsive Design)</li>
              </ul>
            </div>
          </div>
          <div className="relative pl-6 border-l-2 border-[#333333]">
            <div className="absolute w-3 h-3 bg-HeighLightColor rounded-full -left-[7px] top-1"></div>
            <h4 className="font-semibold">Intermediate Education Description (MPC Stream)</h4>
            <p className="text-sm text-HeighLightColor mb-2">Telangana Model School & Collage • 2018 - 2020</p>
            <p className="text-sm text-myText mb-4">
              Completed Intermediate education with a focus on Mathematics, Physics, and Chemistry (MPC). Developed strong analytical and problem-solving skills through rigorous training in theoretical concepts and practical applications. Built a solid foundation for further studies in engineering and technology-related fields.
            </p>
            {/* <div className="bg-[#2a2a2a] rounded-lg p-4">
              <h5 className="text-sm font-medium mb-2">Key Courses:</h5>
              <ul className="text-sm text-myText space-y-2 list-disc pl-5">
                <li>Software Engineering (OOP, Design Patterns)</li>
                <li>Algorithms & Data Structures (Optimization, Complexity Analysis)</li>
                <li>Database Systems (SQL, NoSQL, Data Modeling)</li>
                <li>Web & Mobile Development (Frontend/Backend, Responsive Design)</li>
              </ul>
            </div> */}
          </div>
          
          <div className="relative pl-6 border-l-2 border-[#333333]">
            <div className="absolute w-3 h-3 bg-HeighLightColor rounded-full -left-[7px] top-1"></div>
            <h4 className="font-semibold">Certificate in Full Stack Development</h4>
            <p className="text-sm text-HeighLightColor mb-2">Tech Academy • 2024</p>
            <p className="text-sm text-myText mb-4">
              Successfully completed a comprehensive Java Full Stack Development course, covering core and advanced Java, Spring Boot, REST APIs, Hibernate, MySQL, front-end technologies (HTML, CSS, JavaScript, React.js), and hands-on full stack project development. Gained practical experience in building end-to-end web applications and integrating front-end with back-end services.
            </p>
            <div className="bg-[#2a2a2a] rounded-lg p-4">
              <h5 className="text-sm font-medium mb-2">Technologies Learned:</h5>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 bg-[#333333] rounded-full text-xs">ReactJS</span>
                <span className="px-3 py-1 bg-[#333333] rounded-full text-xs">Java</span>
                <span className="px-3 py-1 bg-[#333333] rounded-full text-xs">Spring Boot</span>
                <span className="px-3 py-1 bg-[#333333] rounded-full text-xs">JavaScript</span>
                <span className="px-3 py-1 bg-[#333333] rounded-full text-xs">TypeScript</span>
                <span className="px-3 py-1 bg-[#333333] rounded-full text-xs">HTML5</span>
                <span className="px-3 py-1 bg-[#333333] rounded-full text-xs">CSS3</span>
                <span className="px-3 py-1 bg-[#333333] rounded-full text-xs">Responsive Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* <div>
        <h3 className="text-xl font-bold mb-6">Additional Education & Certifications</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card className="bg-[#2a2a2a] border-none">
            <CardContent className="p-5">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[#333333] flex items-center justify-center mr-3">
                  <i className="fas fa-certificate text-HeighLightColor"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Adobe Certified Expert</h4>
                  <p className="text-xs text-myText">2018</p>
                </div>
              </div>
              <p className="text-sm text-myText">
                Professional certification in Adobe Creative Suite, including Photoshop, Illustrator, and XD.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#2a2a2a] border-none">
            <CardContent className="p-5">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[#333333] flex items-center justify-center mr-3">
                  <i className="fas fa-award text-HeighLightColor"></i>
                </div>
                <div>
                  <h4 className="font-semibold">UX Design Professional</h4>
                  <p className="text-xs text-myText">2020</p>
                </div>
              </div>
              <p className="text-sm text-myText">
                Google certification in user experience design, research methods, and prototyping.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#2a2a2a] border-none">
            <CardContent className="p-5">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[#333333] flex items-center justify-center mr-3">
                  <i className="fas fa-laptop-code text-HeighLightColor"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Front-End Development</h4>
                  <p className="text-xs text-myText">2019</p>
                </div>
              </div>
              <p className="text-sm text-myText">
                Advanced certification in modern front-end frameworks including React and Vue.js.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#2a2a2a] border-none">
            <CardContent className="p-5">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[#333333] flex items-center justify-center mr-3">
                  <i className="fas fa-chalkboard-teacher text-HeighLightColor"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Design Leadership Workshop</h4>
                  <p className="text-xs text-myText">2021</p>
                </div>
              </div>
              <p className="text-sm text-myText">
                Intensive workshop on design team management and creative leadership strategies.
              </p>
            </CardContent>
          </Card>
        </div>
      </div> */}
    </div>
  );
};

export default EducationSection;