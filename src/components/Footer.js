import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" aria-labelledby="footer-title">
      <div className="footer-inner">
        <div className="footer-brand">
          <h2 id="footer-title" className="brand-title">Almaty Tour</h2>
          <p className="brand-tag">Discover Almaty with us!</p>
          <div className="brand-badge">© 2025 Almaty Tour</div>
        </div>
        
        <nav className="footer-nav" aria-label="Navigation">
          <h3 className="col-title">Navigation</h3>
          <ul className="link-list" role="list">
            <li><a href="/">Home</a></li>
            <li><a href="/tours">Tours</a></li>
            <li><a href="/contacts">Contacts</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
        
        <div className="footer-about">
          <h3 className="col-title">About Us</h3>
          <p>Professional team passionate about travel, creating unforgettable Almaty experiences for our guests.</p>
        </div>
        
        <address className="footer-contacts" aria-label="Contacts">
          <h3 className="col-title">Contact</h3>
          <ul className="contact-list" role="list">
            <li>
              <a href="tel:+77786680335" className="contact-link" aria-label="Call +77786680335">
                📞 +7 778 668 03 35
              </a>
            </li>
            <li>
              <a href="mailto:onedaytour@gmail.com" className="contact-link">
                ✉️ onedaytour@gmail.com
              </a>
            </li>
          </ul>
          <div className="socials" aria-label="Social Media">
            <a className="social" href="#" aria-label="WhatsApp">💬</a>
            <a className="social" href="#" aria-label="Telegram">✈️</a>
          </div>
        </address>
      </div>
    </footer>
  );
}