import React from "react";
import { Link } from "react-router-dom";
import { useLang } from "../context/LangContext";
import "./Apply.css";

const CONTACTS = [
  { href: "https://wa.me/77072439005", label: "WhatsApp", sub: "Reply within 15 min", icon: "💬", cls: "contact-wa", external: true },
  { href: "tel:+77786680335",           label: "+7 778 668 03 35", sub: "Mon – Sun  9:00–21:00", icon: "📞", cls: "contact-phone", external: false },
  { href: "mailto:onedaytour@gmail.com", label: "onedaytour@gmail.com", sub: "We reply same day", icon: "✉️", cls: "contact-email", external: false },
  { href: "https://t.me/onedaytour",    label: "Telegram", sub: "@onedaytour", icon: "✈️", cls: "contact-tg", external: true },
];

export default function Apply() {
  const { t } = useLang();
  const ta = t.apply;

  return (
    <div className="apply-page">
      <div className="apply-visual">
        <div className="apply-visual-overlay" />
        <div className="apply-visual-content">
          <h2 className="apply-visual-title">
            {ta.visualTitle} <span>{ta.visualAccent}</span> {ta.visualSuffix}
          </h2>
          <p className="apply-visual-sub">{ta.visualSub}</p>
          <div className="apply-visual-badges">
            {ta.badges.map((b, i) => <span key={i}>{b}</span>)}
          </div>
        </div>
      </div>

      <div className="apply-panel">
        <div className="apply-panel-inner">
          <span className="section-eyebrow">{ta.eyebrow}</span>
          <h1 className="apply-title">
            {ta.title} <span className="accent-text">{ta.titleAccent}</span>
          </h1>
          <p className="apply-sub">{ta.sub}</p>

          <div className="contact-options">
            {CONTACTS.map((c, i) => (
              <a
                key={i}
                href={c.href}
                className={`contact-option ${c.cls}`}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <span className="co-icon">{c.icon}</span>
                <div className="co-text">
                  <span className="co-label">{c.label}</span>
                  <span className="co-sub">{c.sub}</span>
                </div>
                <span className="co-arrow">→</span>
              </a>
            ))}
          </div>

          <p className="apply-back-link">
            {ta.backText} <Link to="/tours">{ta.backLink}</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
