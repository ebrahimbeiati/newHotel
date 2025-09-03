import React, { useState, useEffect } from "react";

const Header = () => {
  const [theme, setTheme] = useState('light');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Load theme from localStorage or detect system preference
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemTheme;
    
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-700 z-50 h-16 sm:h-20 transition-all duration-300 w-full">
      <div className="flex items-center justify-between h-16 sm:h-20 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <a href="#hero" className="font-display text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 no-underline" onClick={(e) => {
          e.preventDefault();
          scrollToSection('hero');
        }}>
          🏨 Luxury Hotel
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#hero" 
            className="text-gray-700 dark:text-gray-300 no-underline font-medium transition-colors duration-150 relative hover:text-blue-600 dark:hover:text-blue-400 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
          >
            Home
          </a>
          <a 
            href="#cities" 
            className="text-gray-700 dark:text-gray-300 no-underline font-medium transition-colors duration-150 relative hover:text-blue-600 dark:hover:text-blue-400 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('cities');
            }}
          >
            Destinations
          </a>
          <a 
            href="#bookings" 
            className="text-gray-700 dark:text-gray-300 no-underline font-medium transition-colors duration-150 relative hover:text-blue-600 dark:hover:text-blue-400 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('bookings');
            }}
          >
            Bookings
          </a>
          <a 
            href="#restaurant" 
            className="text-gray-700 dark:text-gray-300 no-underline font-medium transition-colors duration-150 relative hover:text-blue-600 dark:hover:text-blue-400 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('restaurant');
            }}
          >
            Restaurant
          </a>
          <button 
            className="bg-transparent border-none text-gray-700 dark:text-gray-300 cursor-pointer p-2 rounded transition-colors duration-150 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-4">
          <button 
            className="bg-transparent border-none text-gray-700 dark:text-gray-300 cursor-pointer p-2 rounded transition-colors duration-150 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button
            className="bg-transparent border-none text-gray-700 dark:text-gray-300 cursor-pointer p-2 rounded transition-colors duration-150 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg">
          <nav className="px-4 py-4 space-y-2">
            <a 
              href="#hero" 
              className="block text-gray-700 dark:text-gray-300 no-underline font-medium py-3 px-4 rounded-lg transition-colors duration-150 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('hero');
              }}
            >
              Home
            </a>
            <a 
              href="#cities" 
              className="block text-gray-700 dark:text-gray-300 no-underline font-medium py-3 px-4 rounded-lg transition-colors duration-150 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('cities');
              }}
            >
              Destinations
            </a>
            <a 
              href="#bookings" 
              className="block text-gray-700 dark:text-gray-300 no-underline font-medium py-3 px-4 rounded-lg transition-colors duration-150 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('bookings');
              }}
            >
              Bookings
            </a>
            <a 
              href="#restaurant" 
              className="block text-gray-700 dark:text-gray-300 no-underline font-medium py-3 px-4 rounded-lg transition-colors duration-150 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('restaurant');
              }}
            >
              Restaurant
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;