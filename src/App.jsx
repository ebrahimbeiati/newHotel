import React from "react";
import Header from "./components/layout/Header";
import HeroSection from "./components/ui/HeroSection";
import Bookings from "./pages/Bookings";
import TouristInfoCards from "./pages/TouristInfoCards";
import Footer from "./components/layout/Footer";
import Restaurant from "./pages/Restaurant";
import "./App.css";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden">
      <Header />
      <main className="flex-1 pt-16 sm:pt-20 w-full">
        <section id="hero" className="w-full">
          <HeroSection />
        </section>
        <section id="cities" className="w-full">
          <TouristInfoCards />
        </section>
        <section id="bookings" className="w-full">
          <Bookings />
        </section>
        <section id="restaurant" className="w-full">
          <Restaurant />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
