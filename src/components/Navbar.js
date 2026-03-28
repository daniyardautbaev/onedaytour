// src/components/Navbar.js
import React, { useEffect, useId, useRef, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const DEFAULT_TOURS = [
  { id: 1, name: "Горы Алматы", description: "Красивый тур в горы Алматы с видами и прогулками." },
  { id: 2, name: "Конный тур", description: "Поездка на лошадях по живописным местам." },
];

export default function Navbar({ tours = DEFAULT_TOURS, onLangChange }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState("ru");

  const menuButtonRef = useRef(null);
  const menuRef = useRef(null);
  const navRef = useRef(null);
  const listboxId = useId();
  const navigate = useNavigate();

  useEffect(() => {
    function onDocClick(e) {
      if (!navRef.current) return;
      const within = navRef.current.contains(e.target);
      if (!within) {
        setMenuOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  const onMenuKeyDown = useCallback((e) => {
    const items = menuRef.current?.querySelectorAll('[role="menuitem"]');
    if (!items || items.length === 0) return;
    const currentIndex = Array.from(items).indexOf(document.activeElement);

    switch (e.key) {
      case "Escape":
        setMenuOpen(false);
        menuButtonRef.current?.focus();
        break;
      case "ArrowDown":
        e.preventDefault();
        items[(currentIndex + 1) % items.length].focus();
        break;
      case "ArrowUp":
        e.preventDefault();
        items[(currentIndex - 1 + items.length) % items.length].focus();
        break;
      default:
        break;
    }
  }, []);

  const onHoverEnter = () => setMenuOpen(true);
  const onHoverLeave = () => setMenuOpen(false);

  const cycleLang = () => {
    const order = ["kk", "ru", "en"];
    const next = order[(order.indexOf(lang) + 1) % order.length];
    setLang(next);
    onLangChange?.(next);
  };

  return (
    <nav ref={navRef} className="navbar" aria-label="Главная навигация">
      <div className="logo">
        <Link to="/" className="logo-link">ALMATY TOUR</Link>
      </div>

      <ul className="nav-links" role="menubar">
        <li role="none">
          <Link role="menuitem" to="/" className="nav-link">Home</Link>
        </li>

        <li
          role="none"
          className="dropdown"
          onMouseEnter={onHoverEnter}
          onMouseLeave={onHoverLeave}
        >
          <button
            ref={menuButtonRef}
            type="button"
            className="nav-link dropdown-trigger"
            aria-haspopup="true"
            aria-expanded={menuOpen}
            aria-controls={listboxId}
            onClick={() => setMenuOpen((v) => !v)}
          >
            Tours
            <span className={`chevron ${menuOpen ? "open" : ""}`} aria-hidden>▾</span>
          </button>

          <ul
            id={listboxId}
            ref={menuRef}
            className={`dropdown-menu ${menuOpen ? "show" : ""}`}
            role="menu"
            aria-label="Список туров"
            onKeyDown={onMenuKeyDown}
          >
            {tours.map((tour) => (
              <li key={tour.id} role="none">
                <button
                  role="menuitem"
                  className="dropdown-item"
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={() => {
                    setMenuOpen(false);
                    navigate(`/tours/${tour.id}`);
                  }}
                >
                  {tour.name}
                </button>
              </li>
            ))}
          </ul>
        </li>

        <li role="none"><Link role="menuitem" to="/contact" className="nav-link">Contact</Link></li>
        <li role="none"><Link role="menuitem" to="/about" className="nav-link">About Us</Link></li>
      </ul>

      <div className="nav-actions">
        <button type="button" className="lang-switch" onClick={cycleLang}>
          🌐 <span className="lang-code">{lang.toUpperCase()}</span>
        </button>

        <button
          type="button"
          className={`hamburger ${mobileOpen ? "is-active" : ""}`}
          aria-label="Открыть меню"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span aria-hidden className="bar" />
          <span aria-hidden className="bar" />
          <span aria-hidden className="bar" />
        </button>
      </div>

      {/* мобильное меню */}
      <div className={`mobile-drawer ${mobileOpen ? "open" : ""}`}>
        <Link className="mobile-link" to="/" onClick={() => setMobileOpen(false)}>Home</Link>
        <details className="mobile-dropdown">
          <summary>Tours</summary>
          <div className="mobile-dropdown-items">
            {tours.map((t) => (
              <Link
                key={t.id}
                to={`/tours/${t.id}`}
                className="mobile-sublink"
                onClick={() => setMobileOpen(false)}
              >
                {t.name}
              </Link>
            ))}
          </div>
        </details>
        <Link className="mobile-link" to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
        <Link className="mobile-link" to="/about" onClick={() => setMobileOpen(false)}>About Us</Link>
      </div>
    </nav>
  );
}
