import React, { useState } from "react";
import Order from "../../utils/Order";

const MenuItem = ({ item, onOrderUpdate }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={`menu-item group ${item.popular ? 'popular' : ''} ${item.chefSpecial ? 'chef-special' : ''}`}>
      {/* Image Section */}
      <div className="menu-item-image relative overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-6xl hidden">
          🍽️
        </div>
        
        {/* Overlay Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {item.popular && (
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
              ⭐ Popular
            </span>
          )}
          {item.chefSpecial && (
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
              👨‍🍳 Chef's Special
            </span>
          )}
          {item.vegan && (
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
              🌱 Vegan
            </span>
          )}
        </div>
        
        {/* Rating Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-800 shadow-lg">
          {item.rating} ⭐
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="menu-item-content">
        <div className="menu-item-header">
          <h3 className="menu-item-name">{item.name}</h3>
          <span className="menu-item-price">${item.price}</span>
        </div>
        
        <p className="menu-item-description">{item.description}</p>
        
        {/* Enhanced Meta Information */}
        <div className="menu-item-meta">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {item.prepTime}
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {item.calories} cal
            </div>
          </div>
          <span className="menu-item-category">{item.category}</span>
        </div>
        
        {/* Allergens */}
        {item.allergens && item.allergens.length > 0 && (
          <div className="allergens-info mb-4">
            <div className="flex flex-wrap gap-1">
              {item.allergens.map((allergen, index) => (
                <span key={index} className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-medium">
                  {allergen}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {/* Order Controls */}
        <div className="menu-item-actions">
          <Order
            orderType={item.name}
            price={item.price}
            onOrderUpdate={onOrderUpdate}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuItem;