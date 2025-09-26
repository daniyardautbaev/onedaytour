import { useParams } from "react-router-dom";
import tours from "../data/toursData";
import "./TourDetails.css";

export default function TourDetails() {
  const { id } = useParams();
  const tour = tours.find((t) => t.id === parseInt(id));

  if (!tour) {
    return <h2>Тур не найден</h2>;
  }

  const locationsInfo = {
    "Чарын каньон": {
      images: [
        "https://i.pinimg.com/736x/52/b3/bf/52b3bfa645538ed3589e16025d9ca0d7.jpg",
        "https://i.pinimg.com/736x/65/5c/c7/655cc74f142499139586b6712e920425.jpg",
        "https://i.pinimg.com/1200x/69/d2/31/69d2317709aaeeefd105333a35d0d6b2.jpg"
      ],
      description: "Чарынский каньон — уникальный природный объект, протянувшийся на 154 км вдоль реки Чарын.",
      fact: "Возраст каньона — около 12 миллионов лет."
    },
    "Озеро Каинды": {
      images: [
        "https://i.pinimg.com/736x/96/ec/f8/96ecf8a1306b2a753eebe8fb2c45f090.jpg",
        "https://i.pinimg.com/736x/41/0e/62/410e623e2bcf1f98d7b4f41638d3d5b3.jpg",
        "https://i.pinimg.com/736x/0a/6b/42/0a6b428aefc2a1d5b5b5f9ecb68c1f7e.jpg"
      ],
      description: "Озеро Каинды, также известное как «Затонувший лес», образовалось в 1911 году после землетрясения.",
      fact: "Высота озера над уровнем моря — 1667 м."
    }
  };

  return (
    <div className="tour-details-fullwidth">
      <h1 className="tour-title">{tour.title}</h1>
      <p className="tour-description">{tour.description}</p>
      <p className="tour-price">Цена: {tour.price}</p>

      <h2 className="locations-title">Локации</h2>
      {tour.locations.map((location, index) => (
        <div key={index} className="location-fullwidth">
          <h3 className="location-title">{location}</h3>
          <div className="location-images-row">
            {locationsInfo[location]?.images.map((img, idx) => (
              <img key={idx} src={img} alt={`${location} ${idx+1}`} className="location-image"/>
            ))}
          </div>
          <p className="location-description">{locationsInfo[location]?.description}</p>
          <p className="location-fact"><strong>Интересный факт:</strong> {locationsInfo[location]?.fact}</p>
        </div>
      ))}
    </div>
  );
}
