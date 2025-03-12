'use client';
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  const contactDetails = [
    { icon: Phone, title: 'Phone', content: '+1 234 567 8900' },
    { icon: Mail, title: 'Email', content: 'info@aluminumpoint.com' },
    { icon: MapPin, title: 'Address', content: '123 Business Street, City' }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 -ml-20 -mt-20 w-96 h-96 bg-blue-50 rounded-full opacity-70 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 -mr-20 -mb-20 w-96 h-96 bg-blue-100 rounded-full opacity-70 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4 fade-in-element">
          Get In Touch
        </h2>
        
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16 fade-in-element">
          Ready to transform your space? Reach out to us for a consultation and free quote.
          Our team is ready to assist you.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-lg p-8 slide-in-left">
            <div className="space-y-8">
              {contactDetails.map((item, index) => (
                <div key={index} className="flex items-center group">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center 
                                group-hover:bg-gradient-to-r from-blue-500 to-blue-700 transition-all duration-300">
                    <item.icon className="text-blue-600 group-hover:text-white transition-colors duration-300" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Map preview */}
            <div className="mt-8 rounded-lg overflow-hidden h-48 relative">
              <img 
                src="/images/map-placeholder.jpg" 
                alt="Location Map" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/10 transition-colors">
                <span className="px-4 py-2 bg-white text-blue-600 rounded-lg shadow-lg font-medium">
                  View on Maps
                </span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 slide-in-right">
            <form className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 
                             focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 
                             focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 
                           focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 
                           focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg 
                         hover:from-blue-600 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;