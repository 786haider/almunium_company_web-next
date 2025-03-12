'use client';
import React from 'react';
import { Star, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-blue-700 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-600 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div className="fade-in-element">
            <h3 className="text-xl font-bold mb-4">Aluminum Point & Decors</h3>
            <p className="text-gray-400 mb-6">
              Crafting premium solutions for modern spaces since 2010. 
              Quality, innovation, and customer satisfaction are our priorities.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center
                           hover:bg-blue-600 transition-colors duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="fade-in-element">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'Portfolio', 'Contact', 'About Us', 'Testimonials'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="fade-in-element">
            <h3 className="text-xl font-bold mb-4">Working Hours</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Customer Rating</h4>
              <div className="flex space-x-1">
                {Array(5).fill(null).map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-400"
                    size={20}
                    fill="currentColor"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Aluminum Point & Decors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;