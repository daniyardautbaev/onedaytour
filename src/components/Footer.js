// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white mt-12 border-t-4 border-orange-700">
      {/* контейнер с тремя колонками */}
      <div className="max-w-6xl mx-auto flex justify-between items-start px-6 py-8 text-center">
        
        {/* О нас */}
        <div className="w-1/3 px-4 border-r border-orange-700">
          <h3 className="text-lg font-bold mb-2">О нас</h3>
          <p className="text-sm leading-relaxed">
            Мы — команда профессионалов, объединенных страстью к путешествиям и вниманием к деталям. 
            Уже почти год мы радуем клиентов уникальными турами по Алмате. 
          </p>
        </div>

        {/* Контакты */}
        <div className="w-1/3 px-4 border-r border-orange-700">
          <h3 className="text-lg font-bold mb-2">Контакты</h3>
          <p className="text-sm">📞 +7 707 243 90 05</p>
          <p className="text-sm">✉️ onedaytour@gmail.com</p>
        </div>

        {/* Логотип */}
        <div className="w-1/3 px-4">
          <h2 className="text-2xl font-extrabold">Almaty Tour</h2>
          <p className="text-sm mt-1 italic">Открой Алмату с нами!</p>
        </div>
      </div>

      {/* Нижняя полоса */}
      <div className="border-t border-orange-700 py-3 text-center text-sm bg-orange-600">
        © 2025 Almaty Tour. Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;
