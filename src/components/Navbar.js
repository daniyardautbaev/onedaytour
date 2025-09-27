import React, { useEffect, useId, useRef, useState, useCallback } from "react";
// Optional: if you use React Router, uncomment the next line and swap <a> for <Link>
// import { Link } from "react-router-dom";
import "./Navbar.css";

/**
 * Accessible, keyboard-navigable navbar with:
 * - Mobile menu (hamburger)
 * - Tours dropdown (hover + click + keyboard)
 * - ARIA attributes and ESC/arrow key handling
 * - Language switcher stub (kk / ru / en)
 */

const DEFAULT_TOURS = [
  { id: 1, name: "Горы Алматы", href: "/tours/almaty-mountains" },
  { id: 2, name: "Конный тур", href: "/tours/horseback" },
];

export default function Navbar({ tours = DEFAULT_TOURS, onLangChange }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // for "Туры"
  const [lang, setLang] = useState("ru");

  const menuButtonRef = useRef(null);
  const menuRef = useRef(null);
  const navRef = useRef(null);
  const listboxId = useId();

  // Close menus on outside click
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

  // Keyboard handling for dropdown items
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
      case "Home":
        e.preventDefault();
        items[0].focus();
        break;
      case "End":
        e.preventDefault();
        items[items.length - 1].focus();
        break;
      default:
        break;
    }
  }, []);

  // Open dropdown on hover (desktop) and close on leave
  const onHoverEnter = () => setMenuOpen(true);
  const onHoverLeave = () => setMenuOpen(false);

  // Lang switch stub
  const cycleLang = () => {
    const order = ["kk", "ru", "en"];
    const next = order[(order.indexOf(lang) + 1) % order.length];
    setLang(next);
    onLangChange?.(next);
  };

  return (
    <nav ref={navRef} className="navbar" aria-label="Главная навигация">
      {/* Logo */}
      <div className="logo">
        {/* Swap <a> with <Link to="/"> if using React Router */}
        <a href="/" className="logo-link" aria-label="Almaty Tour — на главную">ALMATY TOUR</a>
      </div>

      {/* Desktop links */}
      <ul className="nav-links" role="menubar">
        <li role="none">
          <a role="menuitem" href="/" className="nav-link">Home</a>
        </li>

        {/* Dropdown: Туры */}
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
            onKeyDown={(e) => {
              if (["ArrowDown", "Enter", " "].includes(e.key)) {
                e.preventDefault();
                setMenuOpen(true);
                // Focus first item on open
                requestAnimationFrame(() => {
                  const first = menuRef.current?.querySelector('[role="menuitem"]');
                  first && first.focus();
                });
              }
            }}
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
                {/* Swap <a> with <Link to={tour.href}> if using React Router */}
                <a
                  role="menuitem"
                  className="dropdown-item"
                  href={tour.id || "#"}
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={() => setMenuOpen(false)}
                >
                  {tour.name}
                </a>
              </li>
            ))}
          </ul>
        </li>

        <li role="none">
          <a role="menuitem" href="/contact" className="nav-link">Contact</a>
        </li>
        <li role="none">
          <a role="menuitem" href="/about" className="nav-link">About Us</a>
        </li>
      </ul>

      {/* Right side controls */}
      <div className="nav-actions">
        <button
          type="button"
          className="lang-switch"
          title="Сменить язык"
          aria-label={`Текущий язык: ${lang}. Нажмите, чтобы сменить.`}
          onClick={cycleLang}
        >
          🌐 <span className="lang-code">{lang.toUpperCase()}</span>
        </button>

        {/* Mobile hamburger */}
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

      {/* Mobile drawer */}
      <div className={`mobile-drawer ${mobileOpen ? "open" : ""}`}>
        <a className="mobile-link" href="/" onClick={() => setMobileOpen(false)}>Home</a>
        <details className="mobile-dropdown" open={false}>
          <summary>Tours</summary>
          <div className="mobile-dropdown-items">
            {tours.map((t) => (
              <a key={t.id} className="mobile-sublink" href={t.href || "#"} onClick={() => setMobileOpen(false)}>
                {t.name}
              </a>
            ))}
          </div>
        </details>
        <a className="mobile-link" href="/contact" onClick={() => setMobileOpen(false)}>Contact</a>
        <a className="mobile-link" href="/about" onClick={() => setMobileOpen(false)}>About Us</a>
      </div>
    </nav>
  );
}