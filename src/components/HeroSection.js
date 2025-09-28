import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";

export default function HeroSection() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/apply");
  };

  return (
    <section className="hero" aria-label="Hero section">
      <div className="hero-overlay">
        <h1 className="hero-title">OneDayTour</h1>
        <p className="hero-subtitle">
          Your guide to unforgettable adventures in the Almaty.
        </p>
        <button
          className="hero-btn"
          onClick={handleClick}
          aria-label="Перейти на страницу заявки"
        >
          Contact us
        </button>
      </div>
    </section>
  );
}