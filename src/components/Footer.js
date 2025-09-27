import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" aria-labelledby="footer-title">
      <div className="footer-inner">
        <div className="footer-brand">
          <h2 id="footer-title" className="brand-title">Almaty Tour</h2>
          <p className="brand-tag">Открой Алмату с нами!</p>
          <div className="brand-badge">© 2025 Almaty Tour</div>
        </div>

        <nav className="footer-nav" aria-label="Навигация">
          <h3 className="col-title">Навигация</h3>
          <ul className="link-list" role="list">
            <li><a href="/">Дом</a></li>
            <li><a href="/tours">Туры</a></li>
            <li><a href="/contacts">Контакты</a></li>
            <li><a href="/about">О нас</a></li>
          </ul>
        </nav>

        <div className="footer-about">
          <h3 className="col-title">О нас</h3>
          <p>Мы — команда профессионалов, объединенных страстью к путешествиям и вниманием к деталям. Уже почти год радуем клиентов авторскими турами по Алматы и за его пределами.</p>
        </div>

        <address className="footer-contacts" aria-label="Контакты">
          <h3 className="col-title">Контакты</h3>
          <ul className="contact-list" role="list">
            <li>
              <a href="tel:+77786680335" className="contact-link" aria-label="Позвонить по номеру +7 707 243 90 05">📞 +77786680335</a>
            </li>
            <li>
              <a href="mailto:zhanibekbeisenov8@gmail.com" className="contact-link">✉️ onedaytour@gmail.com</a>
            </li>
          </ul>
          <div className="socials" aria-label="Социальные сети">
         
            <a className="social" href="#" aria-label="WhatsApp">💬</a>
            <a className="social" href="#" aria-label="Telegram">✈️</a>
          </div>
        </address>
      </div>

      <div className="footer-bottom">
        <p className="legal">Все права защищены.</p>
        <ul className="legal-links" role="list">
          <li><a href="/terms">Условия</a></li>
          <li><a href="/privacy">Конфиденциальность</a></li>
        </ul>
      </div>
    </footer>
  );
}