import React from "react";

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreDestinations = (e) => {
    e.preventDefault();
    scrollToSection('cities');
  };

  const handleBookNow = (e) => {
    e.preventDefault();
    scrollToSection('bookings');
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800 flex items-center justify-center text-white text-center p-4 sm:p-8 relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-white/10 dark:bg-black/20"></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-br from-white to-gray-100 bg-clip-text text-transparent">
          Luxury Awaits
        </h1>
        <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 leading-relaxed font-light max-w-3xl mx-auto px-4">
          Discover unparalleled comfort and elegance in our world-class luxury hotels. 
          Experience exceptional service, stunning locations, and unforgettable memories.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-16 px-4">
          <button 
            onClick={handleExploreDestinations}
            className="btn btn-primary btn-large w-full sm:w-auto"
          >
            Explore Destinations
          </button>
          <button 
            onClick={handleBookNow}
            className="btn btn-secondary btn-large w-full sm:w-auto"
          >
            Book Now
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-white/20 px-4">
          <div className="text-center">
            <span className="text-2xl sm:text-4xl font-bold text-white block mb-1 sm:mb-2">500+</span>
            <span className="text-xs sm:text-sm opacity-80 uppercase tracking-wider font-medium">Luxury Suites</span>
          </div>
          <div className="text-center">
            <span className="text-2xl sm:text-4xl font-bold text-white block mb-1 sm:mb-2">50+</span>
            <span className="text-xs sm:text-sm opacity-80 uppercase tracking-wider font-medium">Destinations</span>
          </div>
          <div className="text-center">
            <span className="text-2xl sm:text-4xl font-bold text-white block mb-1 sm:mb-2">24/7</span>
            <span className="text-xs sm:text-sm opacity-80 uppercase tracking-wider font-medium">Concierge</span>
          </div>
          <div className="text-center">
            <span className="text-2xl sm:text-4xl font-bold text-white block mb-1 sm:mb-2">5★</span>
            <span className="text-xs sm:text-sm opacity-80 uppercase tracking-wider font-medium">Service Rating</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;