import React from "react";
import { useLang } from "../context/LangContext";
import "./WhyChooseUs.css";

const ICONS = ["🗺️", "👥", "🗣️", "📸"];

export default function WhyChooseUs() {
  const { t } = useLang();
  const { items } = t.why;

  return (
    <section className="why-us" aria-labelledby="why-title">
      <div className="why-inner">
        <div className="why-header">
          <span className="section-eyebrow">{t.why.eyebrow}</span>
          <h2 id="why-title" className="section-heading">
            {t.why.heading} <span className="accent-text">{t.why.headingAccent}</span>
          </h2>
          <div className="divider-ornament"><span className="divider-ornament-dot" /></div>
        </div>

        <div className="why-grid">
          {items.map((item, i) => (
            <div key={i} className="why-card">
              <div className="why-card-inner">
                <div className="why-front">
                  <span className="why-icon">{ICONS[i]}</span>
                  <h3 className="why-card-title">{item.title}</h3>
                  <span className="why-flip-hint">{t.why.hint}</span>
                </div>
                <div className="why-back">
                  <span className="why-icon-sm">{ICONS[i]}</span>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
