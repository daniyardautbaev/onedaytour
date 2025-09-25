// src/components/HeroSection.js
import React from "react";
import "./HeroSection.css"; // подключим стили

function HeroSection() {
  return (
    <div className="hero">
      <div className="hero-overlay">
        <h1>OneDayTour</h1>
        <p>Ваш проводник в незабываемые приключения по горам и за границей.</p>
        <button className="hero-btn">Оставить заявку</button>
      </div>
    </div>
  );
}

export default HeroSection;
