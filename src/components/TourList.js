import React from "react";
import { Link } from "react-router-dom";
import toursData from "../data/toursData";
import TourCard from "./TourCard";
import "./TourList.css";

/**
 * Renders a responsive grid of tours with an empty state.
 * Pass `tours` to override the default dataset (e.g., from API/TanStack Query).
 */
export default function TourList({ tours = toursData }) {
  const hasTours = Array.isArray(tours) && tours.length > 0;

  return (
    <section className="tours-section" aria-labelledby="tours-title">
      <h2 id="tours-title" className="tours-title">Туры</h2>
      <div className="tours-dots" aria-hidden>• • • • • •</div>

      {hasTours ? (
        <div className="tours-grid">
          {tours.map((tour) => (
            <TourCard key={tour.id} {...tour} />
          ))}
        </div>
      ) : (
        <div className="tours-empty">
          <p>Пока нет доступных туров. Загляните позже или свяжитесь с нами.</p>
          <Link to="/apply" className="tours-cta">Оставить заявку</Link>
        </div>
      )}
    </section>
  );
}