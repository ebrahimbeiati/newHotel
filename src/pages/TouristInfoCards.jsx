import React from "react";
import CityCard from "../components/ui/CityCard";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const TouristInfoCards = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation(0.2);
  
  const cities = [
    {
      name: "Tokyo",
      description: "Experience the perfect blend of ancient traditions and cutting-edge technology in Japan's vibrant capital.",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "https://www.gotokyo.org",
      color: "#ef4444",
      rating: 4.9,
      price: "From $180/night",
      features: ["Cherry Blossoms", "Sushi", "Temples"]
    },
    {
      name: "Santorini",
      description: "Discover the breathtaking beauty of white-washed buildings against the deep blue Aegean Sea.",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "https://www.santorini.gr",
      color: "#f59e0b",
      rating: 4.8,
      price: "From $220/night",
      features: ["Sunset Views", "Wine Tasting", "Beaches"]
    },
    {
      name: "Dubai",
      description: "Luxury meets innovation in this futuristic city of skyscrapers, shopping, and world-class entertainment.",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "https://www.visitdubai.com",
      color: "#3b82f6",
      rating: 4.7,
      price: "From $300/night",
      features: ["Burj Khalifa", "Shopping", "Desert Safari"]
    },
    {
      name: "Bali",
      description: "Immerse yourself in tropical paradise with stunning beaches, ancient temples, and lush rice terraces.",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "https://www.balitourismboard.org",
      color: "#10b981",
      rating: 4.9,
      price: "From $120/night",
      features: ["Beaches", "Temples", "Rice Terraces"]
    },
    {
      name: "Paris",
      description: "The City of Light offers timeless romance, world-class art, and the finest cuisine in the world.",
      image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "https://www.parisinfo.com",
      color: "#8b5cf6",
      rating: 4.8,
      price: "From $250/night",
      features: ["Eiffel Tower", "Louvre", "Cafes"]
    },
    {
      name: "New York",
      description: "The city that never sleeps - experience Broadway, Central Park, and the iconic skyline.",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "https://www.nycgo.com",
      color: "#dc2626",
      rating: 4.6,
      price: "From $280/night",
      features: ["Broadway", "Central Park", "Museums"]
    },
    {
      name: "Sydney",
      description: "Australia's harbor city combines stunning beaches, iconic landmarks, and a vibrant cultural scene.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "https://www.sydney.com",
      color: "#06b6d4",
      rating: 4.7,
      price: "From $200/night",
      features: ["Opera House", "Harbor Bridge", "Beaches"]
    },
    {
      name: "Reykjavik",
      description: "Discover the land of fire and ice with Northern Lights, geysers, and otherworldly landscapes.",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "https://www.visitreykjavik.is",
      color: "#6366f1",
      rating: 4.8,
      price: "From $160/night",
      features: ["Northern Lights", "Geysers", "Hot Springs"]
    }
  ];

  return (
    <div className="py-12 sm:py-20 bg-gray-100 dark:bg-gray-800 w-full transition-colors duration-300" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`section-header ${isSectionVisible ? 'animate-fade-in-up' : ''}`}>
          <div className="section-title">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Luxury Destinations</h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">Discover breathtaking destinations and create unforgettable memories</p>
          </div>
        </div>
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 ${isSectionVisible ? 'animate-fade-in-up' : ''}`}>
          {cities.map((city, index) => (
            <CityCard
              key={city.name}
              city={city}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;