// src/pages/Tours.js
import tours from "../data/toursData"
import TourCard from "../components/TourCard"

export default function Tours() {
  return (
    <div className="tours-page">
      <h1>Наши туры</h1>
      <div className="tours-grid">
        {tours.map((tour) => (
          <TourCard key={tour.id} {...tour} />
        ))}
      </div>
    </div>
  )
}
