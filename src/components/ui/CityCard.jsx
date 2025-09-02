import React from "react";

const CityCard = ({ city, index }) => {
  return (
    <div className="city-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="city-image relative overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-6xl hidden">
          🏙️
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-800">
          {city.rating} ⭐
        </div>
      </div>
      
      <div className="city-content">
        <h3 className="city-name">{city.name}</h3>
        <p className="city-description">{city.description}</p>
        
        <div className="city-meta">
          <div className="city-price">{city.price}</div>
        </div>
        
        <div className="city-features">
          {city.features.map((feature, idx) => (
            <span key={idx} className="feature-tag">
              {feature}
            </span>
          ))}
        </div>
        
        <div className="city-actions">
          <button className="btn btn-primary">
            Book Now
          </button>
          <button className="btn btn-secondary">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CityCard;