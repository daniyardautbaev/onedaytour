import React, { useEffect, useId, useRef, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLang } from "../context/LangContext";
import "./Navbar.css";

const LANG_ORDER = ["en", "ru", "kk"];

export default function Navbar({ tours = [] }) {
  const { lang, setLang, t } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuButtonRef = useRef(null);
  const menuRef = useRef(null);
  const navRef = useRef(null);
  const listboxId = useId();
  const navigate = useNavigate();

  useEffect(() => {
    function onDocClick(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
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
    const idx = Array.from(items).indexOf(document.activeElement);
    if (e.key === "Escape") { setMenuOpen(false); menuButtonRef.current?.focus(); }
    else if (e.key === "ArrowDown") { e.preventDefault(); items[(idx + 1) % items.length].focus(); }
    else if (e.key === "ArrowUp")   { e.preventDefault(); items[(idx - 1 + items.length) % items.length].focus(); }
  }, []);

  const cycleLang = () => {
    const next = LANG_ORDER[(LANG_ORDER.indexOf(lang) + 1) % LANG_ORDER.length];
    setLang(next);
  };

  return (
    <nav ref={navRef} className="navbar" aria-label="Main navigation">
      <div className="logo">
        <Link to="/" className="logo-link">ALMATY TOUR</Link>
      </div>

      <ul className="nav-links" role="menubar">
        <li role="none">
          <Link role="menuitem" to="/" className="nav-link">{t.nav.home}</Link>
        </li>
        <li
          role="none"
          className="dropdown"
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
        >
          <button
            ref={menuButtonRef}
            type="button"
            className="nav-link dropdown-trigger"
            aria-haspopup="true"
            aria-expanded={menuOpen}
            aria-controls={listboxId}
            onClick={() => setMenuOpen(v => !v)}
          >
            {t.nav.tours}
            <span className={`chevron ${menuOpen ? "open" : ""}`} aria-hidden>▾</span>
          </button>
          <ul
            id={listboxId}
            ref={menuRef}
            className={`dropdown-menu ${menuOpen ? "show" : ""}`}
            role="menu"
            aria-label={t.nav.tours}
            onKeyDown={onMenuKeyDown}
          >
            {tours.map((tour) => (
              <li key={tour.id} role="none">
                <button
                  role="menuitem"
                  className="dropdown-item"
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={() => { setMenuOpen(false); navigate(`/tours/${tour.id}`); }}
                >
                  {tour.title}
                </button>
              </li>
            ))}
          </ul>
        </li>
        <li role="none">
          <Link role="menuitem" to="/contact" className="nav-link">{t.nav.contact}</Link>
        </li>
        <li role="none">
          <Link role="menuitem" to="/about" className="nav-link">{t.nav.about}</Link>
        </li>
      </ul>

      <div className="nav-actions">
        <button type="button" className="lang-switch" onClick={cycleLang} title="Switch language">
          🌐 <span className="lang-code">{lang.toUpperCase()}</span>
        </button>
        <button
          type="button"
          className={`hamburger ${mobileOpen ? "is-active" : ""}`}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(v => !v)}
        >
          <span aria-hidden className="bar" />
          <span aria-hidden className="bar" />
          <span aria-hidden className="bar" />
        </button>
      </div>

      <div className={`mobile-drawer ${mobileOpen ? "open" : ""}`}>
        <Link className="mobile-link" to="/" onClick={() => setMobileOpen(false)}>{t.nav.home}</Link>
        <details className="mobile-dropdown">
          <summary>{t.nav.tours}</summary>
          <div className="mobile-dropdown-items">
            {tours.map(tour => (
              <Link
                key={tour.id}
                to={`/tours/${tour.id}`}
                className="mobile-sublink"
                onClick={() => setMobileOpen(false)}
              >
                {tour.title}
              </Link>
            ))}
          </div>
        </details>
        <Link className="mobile-link" to="/contact" onClick={() => setMobileOpen(false)}>{t.nav.contact}</Link>
        <Link className="mobile-link" to="/about"   onClick={() => setMobileOpen(false)}>{t.nav.about}</Link>
        <div className="mobile-lang">
          <button type="button" className="lang-switch" onClick={cycleLang}>
            🌐 <span className="lang-code">{lang.toUpperCase()}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
