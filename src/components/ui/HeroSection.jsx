import React from "react";

const HeroSection = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-center p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/10"></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="hero-title">
          Luxury Awaits
        </h1>
        <p className="hero-subtitle">
          Discover unparalleled comfort and elegance in our world-class luxury hotels. 
          Experience exceptional service, stunning locations, and unforgettable memories.
        </p>
        <div className="flex gap-4 justify-center flex-wrap mb-16">
          <a href="#cities" className="btn btn-primary btn-large">
            Explore Destinations
          </a>
          <a href="#bookings" className="btn btn-secondary btn-large">
            Book Now
          </a>
        </div>
        <div className="hero-stats">
          <div className="text-center">
            <span className="stat-number">500+</span>
            <span className="stat-label">Luxury Suites</span>
          </div>
          <div className="text-center">
            <span className="stat-number">50+</span>
            <span className="stat-label">Destinations</span>
          </div>
          <div className="text-center">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Concierge</span>
          </div>
          <div className="text-center">
            <span className="stat-number">5★</span>
            <span className="stat-label">Service Rating</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;