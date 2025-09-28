// src/pages/Home.js
import React from "react";

import HeroSection from "../components/HeroSection";
import TourList from "../components/TourList";
import WhyChooseUs from "../components/WhyChooseUs";
import Reviews from "../components/Reviews";
import AlmatyTripJourney from "../components/Trip";

function Home() {
  return (
    <div>
      {/* Герой-секция */}
      <HeroSection />
      
      <section className="">
        <AlmatyTripJourney></AlmatyTripJourney>
      </section>
      {/* Популярные туры */}
      <section style={{ padding: "50px 20px", textAlign: "center" }}>
        <TourList />
      </section>

      {/* Почему выбирают нас */}
      <section style={{ padding: "50px 20px", backgroundColor: "#f9f9f9" }}>
        <WhyChooseUs />
      </section>

      {/* Отзывы */}
      <section style={{ padding: "50px 20px" }}>
        <Reviews />
      </section>
    </div>
  );
}

export default Home;
