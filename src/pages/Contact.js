// src/pages/Contact.js

import ContactUs from "../components/ContactUs";

const Contact = () => {
  return (
    <section className="bg-amber-50 min-h-[70vh] flex items-center justify-center px-4 py-16" aria-labelledby="contact-title">
      <div className="max-w-xl w-full text-center bg-white rounded-2xl shadow-lg p-10">
        <h1 id="contact-title" className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
          Свяжитесь с нами
        </h1>
        <p className="text-gray-500 mb-8 text-base sm:text-lg">
          Мы всегда на связи и рады помочь вам с любыми вопросами по турам.
        </p>

        <ul className="space-y-4">
          <li>
            <a
              href="mailto:onedaytour@gmail.com"
              className="block w-full py-4 px-6 rounded-xl font-semibold text-white text-lg bg-gradient-to-r from-blue-500 to-green-500 shadow-md hover:shadow-lg hover:-translate-y-1 transform transition"
            >
              ✉️ onedaytour@gmail.com
            </a>
          </li>
          <li>
            <a
              href="tel:+77072439005"
              className="block w-full py-4 px-6 rounded-xl font-semibold text-white text-lg bg-gradient-to-r from-orange-400 to-orange-600 shadow-md hover:shadow-lg hover:-translate-y-1 transform transition"
            >
              📞 +7 707 243 90 05
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/77072439005"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 px-6 rounded-xl font-semibold text-white text-lg bg-gradient-to-r from-green-400 to-green-600 shadow-md hover:shadow-lg hover:-translate-y-1 transform transition"
            >
              💬 WhatsApp Chat
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
