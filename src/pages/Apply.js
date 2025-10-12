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
    // Уязвимая часть: вставляем пользовательский ввод прямо в innerHTML
  const message = (
  <>
    <strong>Спасибо, {formData.name}!</strong> Мы свяжемся по {formData.email}.
  </>
  );
    document.getElementById("apply-response").innerHTML = message; // XSS risk
    console.log("Заявка отправлена:", formData);
    // Для демонстрации не перенаправляем, оставляем вывод на странице
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

        <div id="apply-response" className="mt-6 text-green-700" aria-live="polite"></div>

        <p className="text-gray-500 mt-6 text-sm">
          (Учебный пример: в уязвимой версии показывается XSS при вводе HTML в поле имени).
        </p>
      </div>
    </section>
  );
}

export default Apply;