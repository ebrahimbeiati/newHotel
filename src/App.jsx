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
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <section id="hero">
          <HeroSection />
        </section>
        <section id="cities">
          <TouristInfoCards />
        </section>
        <section id="bookings">
          <Bookings />
        </section>
        <section id="restaurant">
          <Restaurant />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
