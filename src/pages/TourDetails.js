// src/pages/TourDetails.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import "./TourDetails.css";

const TOURS = {
  1: {
    id: 1,
    title: "Горы Алматы",
    description:
      "Невероятное путешествие в живописные горы Алматы. Красивые виды, свежий воздух и незабываемые впечатления.",
    price: "от  80$",
    locations: [
      {
        title: "Медео",
        description: "Знаменитый высокогорный каток и живописная долина.",
        fact: "Медео — самый большой высокогорный каток в мире.",
        images: [
          "https://i.pinimg.com/736x/b5/df/2e/b5df2eeaa052e4174be877a70fca058e.jpg",
          "https://images.pexels.com/photos/13266743/pexels-photo-13266743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://i.pinimg.com/736x/3c/99/91/3c99918eaffb158d9a1ac4badd1c7598.jpg",
        ],
      },
      {
        title: "Шымбулак",
        description: "Горнолыжный курорт мирового уровня.",
        fact: "На высоте 3200 м всегда свежий воздух и невероятные виды.",
        images: [
          "https://picsum.photos/800/500?random=14",
          "https://picsum.photos/800/500?random=15",
          "https://picsum.photos/800/500?random=16",
        ],
      },
    ],
    extraInfo: {
      icon: "⛰️",
      title: "Легенды и факты о горах",
      text: "Алматинские горы — это источник вдохновения и легенд. Кочевники считали горы священными: здесь они искали защиты и мудрости. Сегодня вы сможете пройти по тропам, где каждый камень хранит историю, и насладиться красотой природы, сохранившей первозданную силу.",
    },
  },
  2: {
    id: 2,
    title: "Конный тур",
    description:
      "Увлекательный конный тур по живописным местам Алматы. Отличный отдых на природе и полное погружение в атмосферу.",
    price: "от 80$ ",
    locations: [
      {
        title: "Alatay Mountains",
        description: "Зелёная равнина с бескрайними просторами для верховой езды.",
        fact: "Здесь можно увидеть настоящих кочевых пастухов.",
        images: [
          "https://toptrip.kz/wp-content/uploads/2020/11/toptrip_horse_tour-e1671557970449.jpg",
          "https://media.s7cdn.online/api/v1/img/resize/1072/*/webp/media.s7cdn.online/S7PCabinService/media/6e3aea13-ca61-44d7-9e12-bfb57ae34b3a?ns=s7Media&v=1&iopts=q:75",
          "https://modo.kg/wp-content/uploads/2023/07/18-1024x599.jpg",
        ],
      },
    ],
    extraInfo: {
      icon: "🐎",
      title: "Кони в истории Казахстана",
      text: "Казахстан — родина первых одомашненных лошадей. Лошадь всегда была символом свободы, силы и верного спутника кочевников. В конном туре вы почувствуете дыхание степи, узнаете больше о традициях коневодства и обретёте уникальный опыт общения с этими величественными животными.",
    },
  },
};

export default function TourDetails() {
  const { id } = useParams();
  const tour = TOURS[id];

  if (!tour) {
    return <h2 className="not-found">Тур не найден</h2>;
  }

  return (
    <div className="tour-details-fullwidth">
      <h1 className="tour-title">{tour.title}</h1>
      <p className="tour-description">{tour.description}</p>
      <p className="tour-price">{tour.price}</p>

      <h2 className="locations-title">Локации тура</h2>

      {tour.locations.map((loc, index) => (
        <div key={index} className="location-fullwidth">
          <h3 className="location-title">{loc.title}</h3>
          <div className="location-images-row">
            {loc.images.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`${loc.title} ${idx + 1}`}
                className="location-image"
              />
            ))}
          </div>
          <p className="location-description">{loc.description}</p>
          <p className="location-fact">💡 {loc.fact}</p>
        </div>
      ))}

      {/* Креативный блок */}
      <div className="extra-block">
        <div className="extra-icon">{tour.extraInfo.icon}</div>
        <h2 className="extra-title">{tour.extraInfo.title}</h2>
        <p className="extra-text">{tour.extraInfo.text}</p>
      </div>

      <Link to="/" className="back-link">← Назад</Link>
    </div>
  );
}
