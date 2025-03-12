
'use client';
import React, { useState, useEffect, ReactNode } from 'react';
import { Menu, X } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Animate elements when they're in view
      const elements = document.querySelectorAll('.fade-in-element');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.75;
        if (isInView) {
          element.classList.add('visible');
        }
      });
      
      // Change navbar style on scroll
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className={`text-2xl font-bold bg-gradient-to-r ${
                isScrolled 
                  ? 'from-blue-600 to-blue-900 bg-clip-text text-transparent' 
                  : 'text-white'
              } transition-colors duration-300`}>
                Aluminium Point & Decors
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`relative ${
                    isScrolled ? 'text-gray-800' : 'text-white'
                  } hover:text-blue-500 transition-colors group`}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform group-hover:scale-x-100" />
                </a>
              ))}
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-500 transition-colors`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-md">
            <div className="px-4 py-2">
              {['Home', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-gray-800 hover:text-blue-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Global Styles */}
      <style jsx global>{`
        .fade-in-element {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .fade-in-element.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .slide-in-left {
          opacity: 0;
          transform: translateX(-50px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .slide-in-left.visible {
          opacity: 1;
          transform: translateX(0);
        }
        
        .slide-in-right {
          opacity: 0;
          transform: translateX(50px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .slide-in-right.visible {
          opacity: 1;
          transform: translateX(0);
        }
        
        .scale-in {
          opacity: 0;
          transform: scale(0.8);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .scale-in.visible {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>
    </div>
  );
};

export default Layout;