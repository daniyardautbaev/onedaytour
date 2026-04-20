import React from "react";
import { Link } from "react-router-dom";
import { useLang } from "../context/LangContext";
import "./About.css";

const STATS = ["500+", "3", "12+", "4.9"];

export default function About() {
  const { t } = useLang();
  const ta = t.about;

  return (
    <div className="about-page">

      <section className="about-hero">
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <span className="section-eyebrow">{ta.heroEyebrow}</span>
          <h1 className="about-hero-title">
            {ta.heroTitle} <span className="accent-text">{ta.heroTitleAccent}</span>
          </h1>
          <p className="about-hero-sub">{ta.heroSub}</p>
        </div>
      </section>

      <section className="about-story">
        <div className="about-story-inner">
          <div className="story-text">
            <span className="section-eyebrow">{ta.storyEyebrow}</span>
            <h2 className="section-heading">
              {ta.storyH} <span className="accent-text">{ta.storyHAccent}</span>
            </h2>
            <p>{ta.p1}</p>
            <p>{ta.p2}</p>
            <p>{ta.p3}</p>
            <Link to="/apply" className="about-cta-btn">{ta.storyCta}</Link>
          </div>
          <div className="story-image">
            <img src="https://i.pinimg.com/736x/8d/b6/f4/8db6f4b2b79bf652243e9f693a4a2e4b.jpg" alt="Mountains of Almaty" loading="lazy" />
            <div className="story-image-badge">
              <span className="badge-num">500+</span>
              <span className="badge-label">{ta.stats[0]}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-stats">
        <div className="stats-inner">
          {STATS.map((v, i) => (
            <div key={i} className="stat-item">
              <span className="stat-value">{v}</span>
              <span className="stat-label">{ta.stats[i]}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="about-values">
        <div className="about-values-inner">
          <div className="values-header">
            <span className="section-eyebrow">{ta.valuesEyebrow}</span>
            <h2 className="section-heading">
              {ta.valuesH} <span className="accent-text">{ta.valuesHAccent}</span>
            </h2>
            <div className="divider-ornament"><span className="divider-ornament-dot" /></div>
          </div>
          <div className="values-grid">
            {["🏔️","🤝","🌍","📷"].map((icon, i) => (
              <div key={i} className="value-card">
                <span className="value-icon">{icon}</span>
                <h3 className="value-title">{ta.values[i].title}</h3>
                <p className="value-desc">{ta.values[i].desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta-section">
        <div className="about-cta-inner">
          <h2 className="about-cta-title">{ta.ctaTitle}</h2>
          <p className="about-cta-sub">{ta.ctaSub}</p>
          <div className="about-cta-btns">
            <Link to="/tours" className="btn-primary">{ta.ctaBtn}</Link>
            <a href="https://wa.me/77072439005" target="_blank" rel="noopener noreferrer" className="btn-secondary">{ta.ctaWa}</a>
          </div>
        </div>
      </section>

    </div>
  );
}
