import React from "react";
import "./Reviews.css";

const DEFAULT_REVIEWS = [
  { quote: "Amazing experience! Almaty is stunning.", author: "John, USA" },
  { quote: "Лучший тур, в котором я когда-либо был!", author: "Алексей, Казахстан" },
  { quote: "Our guide was fantastic and so knowledgeable.", author: "Emma, UK" },
];

export default function Reviews({ reviews = DEFAULT_REVIEWS }) {
  return (
    <section className="reviews" aria-labelledby="reviews-title">
      <div className="reviews-container">
        <h2 id="reviews-title" className="reviews-title">Отзывы</h2>
        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <figure key={i} className="review-card">
              <blockquote className="review-quote">“{r.quote}”</blockquote>
              <figcaption className="review-author">— {r.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}