import React from "react";
import "./WhyChooseUs.css"; // подключаем стили

const WhyChooseUs = () => {
  const items = [
    { 
      text: "Unique Itineraries", 
      icon: "🗺️", 
      desc: "Авторские маршруты, которых нет в Google." 
    },
    { 
      text: "Small Groups", 
      icon: "👥", 
      desc: "Никакой толпы — максимум 10 человек в туре." 
    },
    { 
      text: "Bilingual Guides", 
      icon: "🗣️", 
      desc: "Говорим на русском и английском, вам будет комфортно." 
    },
    { 
      text: "Free Photos", 
      icon: "📸", 
      desc: "Профессиональные фото в подарок — воспоминания навсегда." 
    },
  ];

  return (
    <section className="why-us">
      <h2 className="text">Why Choose Us</h2>
      <div className="why-grid">
        {items.map((item, i) => (
          <div key={i} className="why-card">
            <div className="front">
              <span className="icon">{item.icon}</span>
              <h3>{item.text}</h3>
            </div>
            <div className="back">
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
