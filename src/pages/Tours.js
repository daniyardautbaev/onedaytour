import React from "react";
import { useLang } from "../context/LangContext";
import tours from "../data/toursData";
import TourCard from "../components/TourCard";
import "./Tours.css";

export default function Tours() {
  const { t } = useLang();

  return (
    <div className="tours-page">
      <div className="tours-page-header">
        <span className="section-eyebrow">{t.tours.eyebrow}</span>
        <h1 className="section-heading">
          {t.tours.heading} <span className="accent-text">{t.tours.headingAccent}</span>
        </h1>
        <div className="divider-ornament"><span className="divider-ornament-dot" /></div>
      </div>
      <div className="tours-page-grid">
        {tours.map(tour => <TourCard key={tour.id} {...tour} />)}
      </div>
    </div>
  );
}
