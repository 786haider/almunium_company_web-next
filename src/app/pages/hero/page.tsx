'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-20 min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Replace with your actual image import */}
        <img 
          src="/images/hero-bg.jpg" 
          alt="Hero" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/70" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32">
        <div className="text-center text-white">
          <div className="overflow-hidden mb-6">
            <h1 className="text-5xl md:text-7xl font-bold fade-in-element">
              Transform Your Space with
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                {' '}Premium Solutions
              </span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 fade-in-element">
            Expert craftsmanship in aluminum, UPVC, glass work, and modern interior solutions
          </p>
          
          <div className="fade-in-element">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white 
                       font-semibold rounded-lg hover:from-blue-600 hover:to-blue-800 transform 
                       hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              Get Free Quote
              <ArrowRight className="ml-2 animate-pulse" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Animated shapes */}
      <div className="absolute bottom-0 left-0 w-full h-32 z-10 overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
          <path 
            fill="#f9fafb" 
            fillOpacity="1" 
            d="M0,96L48,128C96,160,192,224,288,229.3C384,235,480,181,576,138.7C672,96,768,64,864,74.7C960,85,1056,139,1152,149.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;