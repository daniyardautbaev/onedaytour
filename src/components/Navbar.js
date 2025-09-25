// src/components/Navbar.js
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const tours = [
    { id: 1, name: "Горы Алматы" },
    { id: 2, name: "Конный тур" },
  ]; // можно подключить из TourList.js

  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="navbar">
      {/* Логотип */}
      <div className="logo">ALMATY TOUR</div>

      {/* Навигация */}
      <ul className="nav-links">
        <li>Дом</li>

        {/* Туры с выпадающим меню */}
        <li
          className="dropdown"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          Туры
          {showDropdown && (
            <ul className="dropdown-menu">
              {tours.map((tour) => (
                <li key={tour.id}>{tour.name}</li>
              ))}
            </ul>
          )}
        </li>

        <li>Контакты</li>
        <li>About Us</li>
      </ul>

      {/* Иконка смены языка */}
      <div className="lang-switch" title="Сменить язык">
        🌐
      </div>
    </nav>
  );
};

export default Navbar;
