// src/pages/Apply.js  (secure)
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Apply.css";

/**
 * Простая функция для удаления HTML-тегов (fallback).
 * Для production лучше использовать DOMPurify.
 */
function stripTags(input) {
  if (typeof input !== "string") return input;
  return input.replace(/<\/?[^>]+(>|$)/g, "");
}

function Apply() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [submittedMessage, setSubmittedMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Базовая валидация
    if (!formData.name.trim()) {
      alert("Пожалуйста, введите имя.");
      return;
    }
    if (formData.email && !validateEmail(formData.email)) {
      alert("Пожалуйста, введите корректный email.");
      return;
    }

    // Не выводим user input через innerHTML — используем безопасный текст
    const safeName = stripTags(formData.name);
    const safeEmail = stripTags(formData.email);

    // Обновляем состояние — React экранирует спецсимволы
    setSubmittedMessage(`Спасибо, ${safeName}! Мы свяжемся по ${safeEmail || "указанному телефону"}.`);

    // Логируем минимально (без вывода полного объекта, чтобы не утекли данные)
    console.log("Заявка отправлена (имя):", safeName);

    // Можно перенаправить, но в учебном примере оставим сообщение
    // navigate("/"); 
  };

  return (
    <section className="bg-amber-50 min-h-[70vh] flex items-center justify-center px-4 py-16" aria-labelledby="contact-title">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-lg p-10">
        <h1 id="contact-title" className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
          Отправить заявку
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4" aria-label="Apply form">
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Ваше имя" className="w-full p-3 border rounded" />
          <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Телефон" className="w-full p-3 border rounded" />
          <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full p-3 border rounded" />
          <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded">Отправить</button>
        </form>

        {/* Безопасный вывод — React экранирует содержимое */}
        {submittedMessage && <div id="apply-response" className="mt-6 text-green-700" aria-live="polite">{submittedMessage}</div>}

        <p className="text-gray-500 mt-6 text-sm">
          (Безопасная версия: пользовательский ввод очищается и выводится как текст. Для production — используйте DOMPurify.)
        </p>
      </div>
    </section>
  );
}

export default Apply;