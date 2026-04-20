import React, { memo, useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { useLang } from "../context/LangContext";
import "./TourCard.css";

const KZT = new Intl.NumberFormat("kk-KZ", { style: "currency", currency: "KZT", maximumFractionDigits: 0 });

function stripTags(input) {
  if (typeof input !== "string") return input;
  return input.replace(/<\/?[^>]+(>|$)/g, "");
}

const DIFF_COLOR = { Easy: "#22c55e", Moderate: "#f59e0b", Challenging: "#ef4444" };

function StarRating({ rating }) {
  if (typeof rating !== "number") return null;
  const full = Math.round(rating);
  return (
    <span className="star-rating" aria-label={`Rating ${rating}`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < full ? "star star-full" : "star star-empty"}>★</span>
      ))}
      <span className="rating-value">{rating.toFixed(1)}</span>
    </span>
  );
}

function TourModal({ tour, onClose }) {
  const { t } = useLang();
  const tc = t.card;
  const td = t.detail;
  const { image, title, fullDescription, description, price, locations,
    rating, durationHours, groupSize, difficulty, included, highlights, nextDateISO } = tour;

  const dateLabel = nextDateISO
    ? new Intl.DateTimeFormat("en-US", { dateStyle: "long", timeZone: "Asia/Almaty" }).format(new Date(nextDateISO))
    : null;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = e => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return createPortal(
    <div className="tmodal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={`Tour: ${title}`}>
      <div className="tmodal" onClick={e => e.stopPropagation()}>
        <button className="tmodal-close" onClick={onClose} aria-label="Close"><span>✕</span></button>

        <div className="tmodal-hero">
          <img src={image || "/placeholder.svg"} alt={title} />
          <div className="tmodal-hero-gradient" />
          <div className="tmodal-hero-content">
            <h2 className="tmodal-title">{stripTags(title)}</h2>
            <div className="tmodal-badges">
              {difficulty && (
                <span className="badge-pill badge-difficulty" style={{ "--diff": DIFF_COLOR[difficulty] || "#888" }}>
                  {tc.diff[difficulty] ?? difficulty}
                </span>
              )}
              {durationHours && <span className="badge-pill badge-neutral">⏱ {durationHours}h</span>}
              {groupSize && <span className="badge-pill badge-neutral">👥 {groupSize}</span>}
            </div>
          </div>
        </div>

        <div className="tmodal-body">
          <div className="tmodal-meta-row">
            <StarRating rating={rating} />
            {dateLabel && (
              <span className="tmodal-next-date">
                <span className="nd-label">{tc.nextDep}</span>
                <time dateTime={nextDateISO}>{dateLabel}</time>
              </span>
            )}
          </div>
          <p className="tmodal-desc">{stripTags(fullDescription || description || "")}</p>

          {Array.isArray(highlights) && highlights.length > 0 && (
            <div className="tmodal-section">
              <h3 className="tmodal-section-title"><span className="section-icon">✨</span> {tc.highlights}</h3>
              <ul className="highlights-list">
                {highlights.map((h, i) => <li key={i}><span className="hl-dot" />{h}</li>)}
              </ul>
            </div>
          )}

          {Array.isArray(included) && included.length > 0 && (
            <div className="tmodal-section">
              <h3 className="tmodal-section-title"><span className="section-icon">✅</span> {tc.included}</h3>
              <ul className="included-list">
                {included.map((item, i) => <li key={i}><span className="check-icon">✓</span>{item}</li>)}
              </ul>
            </div>
          )}

          {Array.isArray(locations) && locations.length > 0 && (
            <div className="tmodal-section">
              <h3 className="tmodal-section-title"><span className="section-icon">📍</span> {tc.locations}</h3>
              <div className="modal-location-tags">
                {locations.map((loc, i) => <span key={i} className="loc-tag">{loc}</span>)}
              </div>
            </div>
          )}
        </div>

        <div className="tmodal-footer">
          <div className="tmodal-price">
            <span className="price-from">{tc.from}</span>
            <span className="price-amount">{price != null ? KZT.format(price) : "—"}</span>
            <span className="price-per">{tc.perPerson}</span>
          </div>
          <div className="tmodal-actions">
            <a href="https://wa.me/77072439005" target="_blank" rel="noopener noreferrer" className="tmodal-btn tmodal-btn-wa">
              <span>💬</span> {td.bookWa.replace("📲 ", "")}
            </a>
            <Link to="/apply" className="tmodal-btn tmodal-btn-apply" onClick={onClose}>{tc.apply}</Link>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

function TourCardBase({ id, image, title, description, price, locations = [], isVip = false,
  rating, durationHours, nextDateISO, fullDescription, groupSize, difficulty, included, highlights }) {
  const { t } = useLang();
  const tc = t.card;
  const [showModal, setShowModal] = useState(false);
  const openModal = useCallback(() => setShowModal(true), []);
  const closeModal = useCallback(() => setShowModal(false), []);

  return (
    <>
      <article className={`tour-card${isVip ? " tour-card-vip" : ""}`}>
        <Link to={`/tours/${id}`} className="tour-image" aria-label={`Open tour: ${title}`} tabIndex={-1}>
          <img src={image || "/placeholder.svg"} alt={title} loading="lazy" decoding="async" />
          {isVip && <span className="tour-badge">HOT</span>}
          <div className="tour-img-hover"><span>{tc.viewDetails}</span></div>
        </Link>

        <div className="tour-content">
          <h3 className="tour-title">
            <Link to={`/tours/${id}`}>{stripTags(title)}</Link>
          </h3>

          <div className="tour-meta-row">
            {typeof rating === "number" && <StarRating rating={rating} />}
            {durationHours && <span className="meta-duration">⏱ {durationHours}h</span>}
            {difficulty && (
              <span className="meta-difficulty" style={{ "--diff": DIFF_COLOR[difficulty] || "#888" }}>
                {tc.diff[difficulty] ?? difficulty}
              </span>
            )}
          </div>

          {description && <p className="tour-desc">{stripTags(description)}</p>}

          {Array.isArray(locations) && locations.length > 0 && (
            <div className="tour-chips">
              {locations.slice(0, 3).map((loc, i) => <span key={i} className="loc-chip">{loc}</span>)}
              {locations.length > 3 && (
                <span className="loc-chip loc-chip-more">+{locations.length - 3} {tc.more}</span>
              )}
            </div>
          )}

          <div className="tour-footer">
            <div className="tour-price-block">
              <span className="price-label">{tc.from}</span>
              <span className="tour-price">{price != null ? KZT.format(price) : "—"}</span>
            </div>
            <button className="tour-btn" onClick={openModal} type="button">{tc.explore}</button>
          </div>
        </div>
      </article>

      {showModal && (
        <TourModal
          tour={{ id, image, title, description, fullDescription, price, locations,
                  isVip, rating, durationHours, nextDateISO, groupSize, difficulty, included, highlights }}
          onClose={closeModal}
        />
      )}
    </>
  );
}

const TourCard = memo(TourCardBase);
export default TourCard;
