// src/components/TourList.js
import TourCard from "./TourCard"
import tours from "../data/toursData"   // ✅ берём туры из общего файла

const TourList = () => {
  return (
    <section className="tours-section">
      <h2 className="tours-title text-2xl font-bold mb-4 text-center">Туры</h2>
      <div className="tours-dots text-center text-gray-400 mb-6">• • • • • •</div>

      <div className="tours-grid">
        {tours.map((tour) => (
          <TourCard key={tour.id} {...tour} id={tour.id} />
        ))}
      </div>
    </section>
  )
}

export default TourList
