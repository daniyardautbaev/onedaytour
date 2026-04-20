import React from "react";
import { Link } from "react-router-dom";
import { useLang } from "../context/LangContext";
import "./Footer.css";

export default function Footer() {
  const { t } = useLang();
  const tf = t.footer;

  return (
    <footer className="footer" aria-labelledby="footer-brand">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="brand-logo" id="footer-brand">ALMATY TOUR</Link>
          <p className="brand-tagline">{tf.tagline}</p>
          <div className="brand-socials">
            <a className="social-btn" href="https://wa.me/77072439005" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">💬</a>
            <a className="social-btn" href="https://t.me/onedaytour" target="_blank" rel="noopener noreferrer" aria-label="Telegram">✈️</a>
            <a className="social-btn" href="mailto:onedaytour@gmail.com" aria-label="Email">✉️</a>
          </div>
        </div>

        <nav aria-label="Footer navigation">
          <h3 className="col-title">{tf.navTitle}</h3>
          <ul className="link-list">
            <li><Link to="/">{tf.nav.home}</Link></li>
            <li><Link to="/tours">{tf.nav.tours}</Link></li>
            <li><Link to="/about">{tf.nav.about}</Link></li>
            <li><Link to="/contact">{tf.nav.contact}</Link></li>
          </ul>
        </nav>

        <div className="footer-about">
          <h3 className="col-title">{tf.aboutTitle}</h3>
          <p>{tf.aboutText}</p>
        </div>

        <address className="footer-contacts" aria-label="Contact information">
          <h3 className="col-title">{tf.contactTitle}</h3>
          <ul className="contact-list">
            <li><a href="tel:+77786680335" className="contact-link">📞 +7 778 668 03 35</a></li>
            <li><a href="mailto:onedaytour@gmail.com" className="contact-link">✉️ onedaytour@gmail.com</a></li>
            <li><a href="https://wa.me/77072439005" target="_blank" rel="noopener noreferrer" className="contact-link">💬 WhatsApp</a></li>
          </ul>
        </address>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">{tf.copy}</span>
        <span className="footer-made">
          {tf.made.split("♥").map((part, i, arr) =>
            i < arr.length - 1
              ? <React.Fragment key={i}>{part}<span>♥</span></React.Fragment>
              : part
          )}
        </span>
      </div>
    </footer>
  );
}
