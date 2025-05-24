import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const ContactSection: React.FC = () => {
  return (
    <div className="bg-myColor rounded-xl p-6 mb-6">
      <div className="mb-8">
        <div className="w-full h-[400px] rounded-xl overflow-hidden mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3119.3839370360097!2d-121.49083492392386!3d38.57703597172696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ad12eba94c7d5%3A0xe215d2f49c95ee15!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1621436610983!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="map"
          ></iframe>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-bold mb-6">Contact Form</h3>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                className="w-full bg-[#2a2a2a] border-none rounded-lg p-3 text-myTextBig focus:ring-[#d4af37] focus:ring-2 outline-none"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full bg-[#2a2a2a] border-none rounded-lg p-3 text-myTextBig focus:ring-[#d4af37] focus:ring-2 outline-none"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full bg-[#2a2a2a] border-none rounded-lg p-3 text-myTextBig focus:ring-[#d4af37] focus:ring-2 outline-none resize-none"
                placeholder="Your Message"
              ></textarea>
            </div>
            <Button className="bg-HeighLightColor hover:bg-HeighLightDarkColor text-myTextBig px-6 py-3 !rounded-button whitespace-nowrap cursor-pointer">
              Send Message <i className="fas fa-paper-plane ml-2"></i>
            </Button>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-6">Contact Information</h3>
          <div className="space-y-6">
            <div className="flex">
              <div className="w-12 h-12 rounded-full bg-[#333333] flex items-center justify-center mr-4">
                <i className="fas fa-map-marker-alt text-HeighLightColor"></i>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Location</h4>
                <p className="text-myText">Sacramento, California, USA</p>
              </div>
            </div>
            <div className="flex">
              <div className="w-12 h-12 rounded-full bg-[#333333] flex items-center justify-center mr-4">
                <i className="fas fa-envelope text-HeighLightColor"></i>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <p className="text-myText">rich@designportfolio.com</p>
              </div>
            </div>
            <div className="flex">
              <div className="w-12 h-12 rounded-full bg-[#333333] flex items-center justify-center mr-4">
                <i className="fas fa-phone text-HeighLightColor"></i>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Phone</h4>
                <p className="text-myText">+1 (123) 456-7890</p>
              </div>
            </div>
            <div className="flex">
              <div className="w-12 h-12 rounded-full bg-[#333333] flex items-center justify-center mr-4">
                <i className="fas fa-share-alt text-HeighLightColor"></i>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Social Profiles</h4>
                <div className="flex space-x-3 mt-2">
                  <a href="#" className="w-8 h-8 rounded-full bg-[#333333] flex items-center justify-center cursor-pointer">
                    <i className="fab fa-twitter text-myText hover:text-HeighLightColor"></i>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-[#333333] flex items-center justify-center cursor-pointer">
                    <i className="fab fa-facebook-f text-myText hover:text-HeighLightColor"></i>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-[#333333] flex items-center justify-center cursor-pointer">
                    <i className="fab fa-instagram text-myText hover:text-HeighLightColor"></i>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-[#333333] flex items-center justify-center cursor-pointer">
                    <i className="fab fa-linkedin-in text-myText hover:text-HeighLightColor"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-[#2a2a2a] rounded-xl p-5">
            <h4 className="font-semibold mb-3">Availability</h4>
            <p className="text-sm text-myText mb-4">
              I'm currently available for freelance work and consulting projects. My typical response time is within 24 hours.
            </p>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Monday - Friday</span>
                <span className="text-sm text-HeighLightColor">9:00 AM - 6:00 PM</span>
              </div>
              <Separator className="bg-[#333333]" />
              <div className="flex justify-between items-center">
                <span className="text-sm">Saturday</span>
                <span className="text-sm text-HeighLightColor">10:00 AM - 2:00 PM</span>
              </div>
              <Separator className="bg-[#333333]" />
              <div className="flex justify-between items-center">
                <span className="text-sm">Sunday</span>
                <span className="text-sm text-myText">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;