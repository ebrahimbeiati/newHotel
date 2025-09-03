import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 dark:bg-gray-900 text-gray-300 py-12 sm:py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-6 sm:mb-8 text-center">
          <h3 className="text-white mb-3 sm:mb-4 text-2xl sm:text-3xl font-display">
            🏨 Luxury Hotel
          </h3>
          <p className="text-gray-300 dark:text-gray-400 max-w-lg mx-auto leading-relaxed text-base sm:text-lg px-4">
            Experience the pinnacle of luxury hospitality with our world-class accommodations, 
            exceptional service, and unforgettable destinations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h4 className="text-white mb-4 font-display text-xl">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-300 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#cities" className="text-gray-300 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300">Destinations</a>
              </li>
              <li>
                <a href="#bookings" className="text-gray-300 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300">Bookings</a>
              </li>
              <li>
                <a href="#restaurant" className="text-gray-300 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300">Restaurant</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4 font-display text-xl">Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300 dark:text-gray-400">24/7 Concierge</span>
              </li>
              <li>
                <span className="text-gray-300 dark:text-gray-400">Room Service</span>
              </li>
              <li>
                <span className="text-gray-300 dark:text-gray-400">Spa & Wellness</span>
              </li>
              <li>
                <span className="text-gray-300 dark:text-gray-400">Business Center</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4 font-display text-xl">Contact</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300 dark:text-gray-400">📞 +1 (555) 123-4567</span>
              </li>
              <li>
                <span className="text-gray-300 dark:text-gray-400">✉️ info@luxuryhotel.com</span>
              </li>
              <li>
                <span className="text-gray-300 dark:text-gray-400">📍 123 Luxury Avenue</span>
              </li>
              <li>
                <span className="text-gray-300 dark:text-gray-400">🌐 www.luxuryhotel.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 dark:border-gray-600 pt-4 sm:pt-6 text-center text-gray-400 dark:text-gray-500 text-xs sm:text-sm px-4">
          <p>&copy; 2024 Luxury Hotel. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;