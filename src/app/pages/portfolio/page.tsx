'use client';
import React, { useState } from 'react';
import { portfolio } from '../../data/portfolio';

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState('all');
  const categories = ['all', 'aluminum', 'upvc', 'glass', 'interior'];

  return (
    <section id="portfolio" className="py-20 bg-white relative">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-32 h-32 bg-blue-50 rounded-full opacity-70"></div>
      <div className="absolute bottom-1/4 right-0 w-32 h-32 bg-blue-50 rounded-full opacity-70"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 fade-in-element">
          Our Latest Projects
        </h2>
        
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16 fade-in-element">
          Explore our portfolio of successful projects across various categories, 
          showcasing our expertise and attention to detail.
        </p>
        
        {/* Portfolio Filter */}
        <div className="flex justify-center flex-wrap mb-12 gap-4 fade-in-element">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full transition-all duration-300 
                        ${activeTab === tab 
                          ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio
            .filter((item) => activeTab === 'all' || item.category === activeTab)
            .map((item, index) => (
              <div
                key={index}
                className="scale-in"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="group relative overflow-hidden rounded-xl shadow-lg bg-white h-full">
                  <div className="relative w-full h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;