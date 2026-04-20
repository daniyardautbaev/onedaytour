import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useLang } from "../context/LangContext";
import DETAIL from "../data/tourDetailsData";
import "./TourDetails.css";

const KZT = new Intl.NumberFormat("kk-KZ", { style: "currency", currency: "KZT", maximumFractionDigits: 0 });
const DIFF_COLOR = { Easy: "#22c55e", Moderate: "#f59e0b", Challenging: "#ef4444" };

function StarRow({ rating }) {
  if (typeof rating !== "number") return null;
  const full = Math.round(rating);
  return (
    <span className="td-stars">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < full ? "td-star full" : "td-star empty"}>★</span>
      ))}
      <span className="td-rating-val">{rating.toFixed(1)}</span>
    </span>
  );
}

function ImageGallery({ images, title }) {
  const [active, setActive] = useState(0);
  if (!images || images.length === 0) return null;
  return (
    <div className="gallery">
      <div className="gallery-main">
        <img src={images[active]} alt={`${title} ${active + 1}`} />
        {images.length > 1 && (
          <>
            <button className="gal-btn gal-prev" onClick={() => setActive(i => (i - 1 + images.length) % images.length)} aria-label="Previous">‹</button>
            <button className="gal-btn gal-next" onClick={() => setActive(i => (i + 1) % images.length)} aria-label="Next">›</button>
            <div className="gal-dots">
              {images.map((_, i) => (
                <button key={i} className={`gal-dot${i === active ? " active" : ""}`} onClick={() => setActive(i)} aria-label={`Image ${i + 1}`} />
              ))}
            </div>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="gallery-thumbs">
          {images.map((src, i) => (
            <button key={i} className={`gallery-thumb${i === active ? " active" : ""}`} onClick={() => setActive(i)}>
              <img src={src} alt={`${title} ${i + 1}`} loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function TourDetails() {
  const { id } = useParams();
  const { t, lang } = useLang();
  const td = t.detail;
  const tc = t.card;
  const tour = DETAIL[id];

  if (!tour) {
    return (
      <div className="td-not-found">
        <span>🗺️</span>
        <h2>{td.notFound}</h2>
        <Link to="/tours" className="td-back-btn">{td.back}</Link>
      </div>
    );
  }

  const title = tour.title[lang] ?? tour.title.en;
  const description = tour.description[lang] ?? tour.description.en;
  const extraTitle = tour.extraInfo.title[lang] ?? tour.extraInfo.title.en;
  const extraText = tour.extraInfo.text[lang] ?? tour.extraInfo.text.en;
  const included = tour.included[lang] ?? tour.included.en;
  const highlights = tour.highlights[lang] ?? tour.highlights.en;
  const diffLabel = tc.diff[tour.difficulty] ?? tour.difficulty;

  return (
    <div className="td-page">

      {/* ── Hero ──────────────────────────────────────── */}
      <section className="td-hero">
        <img className="td-hero-img" src={tour.hero} alt={title} />
        <div className="td-hero-overlay" />
        <div className="td-hero-content">
          <Link to="/tours" className="td-breadcrumb">{td.back}</Link>
          <h1 className="td-title">{title}</h1>
          <p className="td-subtitle">{description}</p>
          <div className="td-stat-chips">
            {tour.difficulty && (
              <span className="td-chip td-chip-diff" style={{ "--diff": DIFF_COLOR[tour.difficulty] || "#888" }}>
                {diffLabel}
              </span>
            )}
            {tour.durationHours && <span className="td-chip">⏱ {tour.durationHours} {td.duration}</span>}
            {tour.groupSize && <span className="td-chip">👥 {tour.groupSize} {td.people}</span>}
            <span className="td-chip">
              <StarRow rating={tour.rating} />
            </span>
          </div>
        </div>
      </section>

      {/* ── Price Bar ─────────────────────────────────── */}
      <div className="td-price-bar">
        <div className="td-price-block">
          <span className="td-price-from">{td.from}</span>
          <span className="td-price-amt">{KZT.format(tour.price)}</span>
          <span className="td-price-per">{td.perPerson}</span>
        </div>
        <div className="td-price-actions">
          <a href="https://wa.me/77072439005" target="_blank" rel="noopener noreferrer" className="td-btn td-btn-wa">
            {td.bookWa}
          </a>
          <Link to="/apply" className="td-btn td-btn-apply">{td.apply}</Link>
        </div>
      </div>

      {/* ── Main Content ──────────────────────────────── */}
      <div className="td-body">

        {/* Highlights + Included */}
        <div className="td-two-col">
          {highlights.length > 0 && (
            <div className="td-section">
              <h2 className="td-section-title">
                <span className="td-sec-icon">✨</span> {td.hlTitle}
              </h2>
              <ul className="td-hl-list">
                {highlights.map((h, i) => (
                  <li key={i}><span className="td-hl-dot" />{h}</li>
                ))}
              </ul>
            </div>
          )}

          {included.length > 0 && (
            <div className="td-section">
              <h2 className="td-section-title">
                <span className="td-sec-icon">✅</span> {td.incTitle}
              </h2>
              <ul className="td-inc-list">
                {included.map((item, i) => (
                  <li key={i}><span className="td-check">✓</span>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Locations */}
        <div className="td-section td-section-full">
          <h2 className="td-section-title">
            <span className="td-sec-icon">📍</span> {td.locTitle}
          </h2>
          <div className="td-locations">
            {tour.locations.map((loc, i) => {
              const locTitle = loc.title[lang] ?? loc.title.en;
              const locDesc  = loc.description[lang] ?? loc.description.en;
              const locFact  = loc.fact[lang] ?? loc.fact.en;
              return (
                <div key={i} className="td-location-card">
                  <div className="td-loc-num">{String(i + 1).padStart(2, "0")}</div>
                  <div className="td-loc-main">
                    <h3 className="td-loc-title">{locTitle}</h3>
                    <p className="td-loc-desc">{locDesc}</p>
                    <div className="td-loc-fact">
                      <span className="fact-label">{td.factLabel}</span>
                      {locFact}
                    </div>
                    <ImageGallery images={loc.images} title={locTitle} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Extra Info Block */}
        <div className="td-extra-block">
          <div className="td-extra-icon">{tour.extraInfo.icon}</div>
          <div className="td-extra-text">
            <h2 className="td-extra-title">{extraTitle}</h2>
            <p>{extraText}</p>
          </div>
        </div>

      </div>

      {/* ── Bottom CTA ────────────────────────────────── */}
      <section className="td-cta">
        <div className="td-cta-inner">
          <h2 className="td-cta-title">{title}</h2>
          <p className="td-cta-sub">{description}</p>
          <div className="td-cta-btns">
            <a href="https://wa.me/77072439005" target="_blank" rel="noopener noreferrer" className="td-btn td-btn-wa td-btn-lg">
              {td.bookWa}
            </a>
            <Link to="/apply" className="td-btn td-btn-apply td-btn-lg">{td.apply}</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
