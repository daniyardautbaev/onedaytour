
import React, { memo } from "react";
import { Link } from "react-router-dom";
import "./TourCard.css";

const KZT = new Intl.NumberFormat("kk-KZ", { style: "currency", currency: "KZT", maximumFractionDigits: 0 });

function TourCardBase({
  id,
  image,
  title,
  description,
  price,
  locations = [],
  isVip = false,
  rating,
  durationHours,
  nextDateISO,
}) {
  const dateLabel = nextDateISO ? new Intl.DateTimeFormat("kk-KZ", { dateStyle: "medium", timeZone: "Asia/Almaty" }).format(new Date(nextDateISO)) : null;

  return (
    <article className={`tour-card ${isVip ? "tour-card-vip" : ""}`}>
      <Link to={`/tours/${id}`} className="tour-image" aria-label={`Открыть тур: ${title}`}>
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          loading="lazy"
          decoding="async"
        />
        {isVip && <span className="tour-badge" aria-label="VIP тур">HOT</span>}
      </Link>

      <div className="tour-content">
        <h3 className="tour-title">
          <Link to={`/tours/${id}`}>{title}</Link>
        </h3>

        {typeof rating === "number" && (
          <div className="tour-meta" aria-label={`Рейтинг ${rating} из 5`}>
            ⭐ {rating.toFixed(1)}{durationHours ? <span className="dot">•</span> : null}
            {durationHours ? <span>{durationHours} ч</span> : null}
            {dateLabel ? (<><span className="dot">•</span><time dateTime={nextDateISO}>с {dateLabel}</time></>) : null}
          </div>
        )}

        {description && <p className="tour-desc" dangerouslySetInnerHTML={{ __html: description }} />}

        {Array.isArray(locations) && locations.length > 0 && (
          <ul className="tour-locations" aria-label="Локации">
            {locations.map((loc, i) => (
              <li key={i} className="location-item">
                <span className="location-icon" aria-hidden>📍</span>
                <span className="location-text" dangerouslySetInnerHTML={{ __html: loc }} />
              </li>
            ))}
          </ul>
        )}

        <div className="tour-footer">
          <Link to={`/contact`} className="tour-btn">Get More</Link>
          <div className="tour-price">{price != null ? KZT.format(price) : "—"}</div>
        </div>
      </div>
    </article>
  );
}

const TourCard = memo(TourCardBase);
export default TourCard;