import React from "react";
import { useLang } from "../context/LangContext";
import "./Contact.css";

export default function Contact() {
  const { t } = useLang();
  const tc = t.contact;

  return (
    <div className="contact-page">
      <div className="contact-card">
        <span className="section-eyebrow">{t.apply.eyebrow}</span>
        <h1 className="contact-title">{tc.title}</h1>
        <p className="contact-sub">{tc.sub}</p>

        <div className="contact-options">
          <a href="mailto:onedaytour@gmail.com" className="co-card co-email">
            <span className="co-ico">✉️</span>
            <div className="co-info">
              <span className="co-label">onedaytour@gmail.com</span>
              <span className="co-hint">We reply same day</span>
            </div>
            <span className="co-arrow">→</span>
          </a>
          <a href="tel:+77072439005" className="co-card co-phone">
            <span className="co-ico">📞</span>
            <div className="co-info">
              <span className="co-label">+7 707 243 90 05</span>
              <span className="co-hint">Mon – Sun  9:00–21:00</span>
            </div>
            <span className="co-arrow">→</span>
          </a>
          <a href="https://wa.me/77072439005" target="_blank" rel="noopener noreferrer" className="co-card co-wa">
            <span className="co-ico">💬</span>
            <div className="co-info">
              <span className="co-label">WhatsApp</span>
              <span className="co-hint">Reply within 15 min</span>
            </div>
            <span className="co-arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
