const TourCard = ({ image, title, description, price, locations, isVip }) => {
  return (
    <div className={`tour-card ${isVip ? "tour-card-vip" : ""}`}>
      <div className="tour-image">
        <img src={image || "/placeholder.svg"} alt={title} />
      </div>
      <div className="tour-content">
        <h3 className="tour-title">{title}</h3>
        <div className="tour-locations">
          {locations.map((location, index) => (
            <div key={index} className="location-item">
              <span className="location-icon">📍</span>
              <span className="location-text">{location}</span>
            </div>
          ))}
        </div>
        <div className="tour-footer">
          <div className="tour-price">{price}</div>
          <button className="tour-btn">Подробнее</button>
        </div>
      </div>
    </div>
  )
}

export default TourCard
