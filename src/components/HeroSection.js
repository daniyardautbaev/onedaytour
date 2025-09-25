// src/components/HeroSection.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";

function HeroSection() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/apply"); // переход на страницу заявки
  };

  return (
    <div className="hero">
      <div className="hero-overlay">
        <h1 className="hero-title">OneDayTour</h1>
        <p className="hero-subtitle">
          Ваш проводник в незабываемые приключения по горам и за границей.
        </p>
        <button className="hero-btn" onClick={handleClick}>
          Оставить заявку
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
