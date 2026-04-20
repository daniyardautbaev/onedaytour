import React from "react";
import HeroSection from "../components/HeroSection";
import TourList from "../components/TourList";
import WhyChooseUs from "../components/WhyChooseUs";
import Reviews from "../components/Reviews";
import AlmatyTripJourney from "../components/Trip";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <AlmatyTripJourney />
      <TourList />
      <WhyChooseUs />
      <Reviews />
    </div>
  );
}
