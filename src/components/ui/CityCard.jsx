import React from "react";

const CityCard = ({ city, index }) => {
  const handleBookNow = () => {
    // Scroll to bookings section
    const bookingsSection = document.getElementById('bookings');
    if (bookingsSection) {
      bookingsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = () => {
    // Open city link in new tab
    if (city.link) {
      window.open(city.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="city-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="city-image relative overflow-hidden h-48 sm:h-64">
        <img 
          src={city.image} 
          alt={city.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-4xl sm:text-6xl hidden">
          🏙️
        </div>
        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold text-gray-800">
          {city.rating} ⭐
        </div>
      </div>
      
      <div className="city-content p-4 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2 sm:mb-3">{city.name}</h3>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed line-clamp-3">{city.description}</p>
        
        <div className="city-meta mb-3 sm:mb-4">
          <div className="text-lg sm:text-xl font-bold text-green-600 dark:text-green-400">{city.price}</div>
        </div>
        
        <div className="city-features flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
          {city.features.map((feature, idx) => (
            <span key={idx} className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full font-medium">
              {feature}
            </span>
          ))}
        </div>
        
        <div className="city-actions flex flex-col sm:flex-row gap-2 sm:gap-3">
          <button 
            className="btn btn-primary text-sm sm:text-base py-2 sm:py-3 flex-1"
            onClick={handleBookNow}
          >
            Book Now
          </button>
          <button 
            className="btn btn-secondary text-sm sm:text-base py-2 sm:py-3 flex-1"
            onClick={handleLearnMore}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CityCard;