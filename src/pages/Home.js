// src/pages/Home.js
import React from "react";

import HeroSection from "../components/HeroSection";
import TourList from "../components/TourList";
import WhyChooseUs from "../components/WhyChooseUs";
import Reviews from "../components/Reviews";

function Home() {
  return (
    <div>
      {/* Герой-секция */}
      <HeroSection />

      {/* Популярные туры */}
      <section style={{ padding: "50px 20px", textAlign: "center" }}>
        <h2>Популярные туры</h2>
        <TourList />
      </section>

      {/* Почему выбирают нас */}
      <section style={{ padding: "50px 20px", backgroundColor: "#f9f9f9" }}>
        <WhyChooseUs />
      </section>

      {/* Отзывы */}
      <section style={{ padding: "50px 20px" }}>
        <h2>Отзывы клиентов</h2>
        <Reviews />
      </section>
    </div>
  );
}

export default Home;
