'use client';
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { services } from '../../data/services';

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-200 rounded-full opacity-50 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4 fade-in-element">
          Our Premium Services
        </h2>
        
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16 fade-in-element">
          We provide comprehensive solutions tailored to your unique requirements, 
          delivering exceptional quality and outstanding customer service.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl 
                        transform hover:-translate-y-2 transition-all duration-500 
                        ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
            >
              <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <div className="p-6">
                <div className="text-4xl mb-4 bg-blue-100 w-16 h-16 flex items-center justify-center rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 group">
                      <ChevronRight
                        size={16}
                        className="text-blue-600 mr-2 transform group-hover:translate-x-1 transition-transform"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;