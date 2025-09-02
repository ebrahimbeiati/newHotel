import React, { useState, useEffect } from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200 z-50 h-20 transition-all duration-300">
      <div className="flex items-center justify-between h-20 max-w-7xl mx-auto px-6">
        <a href="#hero" className="font-display text-2xl font-bold text-primary no-underline" onClick={(e) => {
          e.preventDefault();
          scrollToSection('hero');
        }}>
          🏨 Luxury Hotel
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#hero" 
            className="text-gray-700 no-underline font-medium transition-colors duration-150 relative hover:text-primary after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
          >
            Home
          </a>
          <a 
            href="#cities" 
            className="text-gray-700 no-underline font-medium transition-colors duration-150 relative hover:text-primary after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('cities');
            }}
          >
            Destinations
          </a>
          <a 
            href="#bookings" 
            className="text-gray-700 no-underline font-medium transition-colors duration-150 relative hover:text-primary after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('bookings');
            }}
          >
            Bookings
          </a>
          <a 
            href="#restaurant" 
            className="text-gray-700 no-underline font-medium transition-colors duration-150 relative hover:text-primary after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('restaurant');
            }}
          >
            Restaurant
          </a>
          <button 
            className="bg-transparent border-none text-gray-700 cursor-pointer p-2 rounded transition-colors duration-150 hover:bg-gray-100"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;