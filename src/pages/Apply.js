// src/pages/Apply.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Apply.css";

function Apply() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Заявка отправлена:", formData);
    alert("Спасибо! Мы свяжемся с вами.");
    navigate("/"); // после отправки — на главную
  };

  return (
    <div className="apply-page">
      <div className="apply-form">
        <h2>Оставить заявку</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Телефон"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Электронная почта"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <div className="apply-actions">
            <button type="submit" className="btn-submit">Отправить</button>
            <button type="button" className="btn-back" onClick={() => navigate(-1)}>
              Назад
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Apply;
