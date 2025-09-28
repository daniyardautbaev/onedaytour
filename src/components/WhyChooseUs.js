import React from "react";
import "./WhyChooseUs.css"; // подключаем стили

const WhyChooseUs = () => {
  const items = [
    { 
      text: "Unique Itineraries", 
      icon: "🗺️", 
      desc: "Author's routes that are not on Google." 
    },
    { 
      text: "Small Groups", 
      icon: "👥", 
      desc: "No crowds - maximum 3 people per tour." 
    },
    { 
      text: "Bilingual Guides", 
      icon: "🗣️", 
      desc: "We speak in any langugae), you will feel comfortable." 
    },
    { 
      text: "Free Photos", 
      icon: "📸", 
      desc: "Professional photos as a gift - memories forever." 
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
