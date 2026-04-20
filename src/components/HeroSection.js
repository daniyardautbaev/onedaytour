import React from "react";
import { useNavigate } from "react-router-dom";
import { useLang } from "../context/LangContext";
import "./HeroSection.css";

export default function HeroSection() {
  const navigate = useNavigate();
  const { t } = useLang();

  return (
    <section className="hero" aria-label="Hero section">
      <div className="hero-overlay">
        <span className="hero-eyebrow">Kazakhstan · Almaty</span>
        <h1 className="hero-title">{t.hero.title}</h1>
        <p className="hero-subtitle">{t.hero.sub}</p>
        <button
          className="hero-btn"
          onClick={() => navigate("/apply")}
          aria-label={t.hero.cta}
        >
          {t.hero.cta}
        </button>
      </div>
      <div className="hero-scroll-hint" aria-hidden>
        <span />
      </div>
    </section>
  );
}
