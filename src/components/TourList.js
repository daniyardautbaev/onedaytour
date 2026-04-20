import React from "react";
import { Link } from "react-router-dom";
import { useLang } from "../context/LangContext";
import toursData from "../data/toursData";
import TourCard from "./TourCard";
import "./TourList.css";

export default function TourList({ tours = toursData }) {
  const { t } = useLang();
  const hasTours = Array.isArray(tours) && tours.length > 0;

  return (
    <section className="tours-section" aria-labelledby="tours-title">
      <div className="tours-header">
        <span className="section-eyebrow">{t.tourList.eyebrow}</span>
        <h2 id="tours-title" className="section-heading">
          {t.tourList.heading} <span className="accent-text">{t.tourList.headingAccent}</span>
        </h2>
        <div className="divider-ornament">
          <span className="divider-ornament-dot" />
        </div>
      </div>

      {hasTours ? (
        <div className="tours-grid">
          {tours.map(tour => <TourCard key={tour.id} {...tour} />)}
        </div>
      ) : (
        <div className="tours-empty">
          <p>No tours available yet. Check back soon.</p>
          <Link to="/apply" className="tours-cta">Leave a request</Link>
        </div>
      )}
    </section>
  );
}
