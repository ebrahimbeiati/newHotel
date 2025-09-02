import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h3 className="text-white mb-4 text-3xl font-display">
            🏨 Luxury Hotel
          </h3>
          <p className="text-gray-300 max-w-lg mx-auto leading-relaxed text-lg">
            Experience the pinnacle of luxury hospitality with our world-class accommodations, 
            exceptional service, and unforgettable destinations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-white mb-4 font-display text-xl">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-300 hover:text-accent transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#cities" className="text-gray-300 hover:text-accent transition-colors duration-300">Destinations</a>
              </li>
              <li>
                <a href="#bookings" className="text-gray-300 hover:text-accent transition-colors duration-300">Bookings</a>
              </li>
              <li>
                <a href="#restaurant" className="text-gray-300 hover:text-accent transition-colors duration-300">Restaurant</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4 font-display text-xl">Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">24/7 Concierge</span>
              </li>
              <li>
                <span className="text-gray-300">Room Service</span>
              </li>
              <li>
                <span className="text-gray-300">Spa & Wellness</span>
              </li>
              <li>
                <span className="text-gray-300">Business Center</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4 font-display text-xl">Contact</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">📞 +1 (555) 123-4567</span>
              </li>
              <li>
                <span className="text-gray-300">✉️ info@luxuryhotel.com</span>
              </li>
              <li>
                <span className="text-gray-300">📍 123 Luxury Avenue</span>
              </li>
              <li>
                <span className="text-gray-300">🌐 www.luxuryhotel.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Luxury Hotel. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;