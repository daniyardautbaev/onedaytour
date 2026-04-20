import React from "react";
import { useLang } from "../context/LangContext";
import "./Reviews.css";

const DEFAULT_REVIEWS = [
  { quote: { en: "Absolutely jaw-dropping. Charyn Canyon at sunrise was something I'll never forget. Our guide knew every secret viewpoint.", ru: "Просто невероятно. Рассвет в Чарынском каньоне — это то, что я никогда не забуду. Наш гид знал каждую тайную смотровую площадку.", kk: "Таңқаларлық. Шарын каньонындағы таңертең — бұл ешқашан ұмытылмайды. Гидіміз барлық құпия көріністі білді." }, author: "James K.", country: "United States", stars: 5, avatar: "J", tour: "Zhetysu Canyon Adventure" },
  { quote: { en: "The best tour I've ever been on! Professional guide, beautiful places, everything on schedule. Highly recommend!", ru: "Лучший тур, в котором я когда-либо участвовал! Профессиональный гид, красивые места и всё по расписанию. Советую всем!", kk: "Мен қатысқан ең жақсы тур! Кәсіби гид, әдемі жерлер, барлығы кестеде. Баршаға ұсынамын!" }, author: "Алексей М.", country: "Россия", stars: 5, avatar: "А", tour: "VIP Grand Zhetysu" },
  { quote: { en: "From Medeu to Kok-Tobe in one day — the city tour packed everything perfectly. Small group made it feel personal.", ru: "От Медео до Кок-Тобе за один день — городской тур идеально охватил всё. Маленькая группа придала личный характер.", kk: "Медеуден Кок-Тобеге бір күнде — қала туры бәрін тамаша қамтыды. Шағын топ жеке сезімді сездірді." }, author: "Emma L.", country: "United Kingdom", stars: 5, avatar: "E", tour: "Almaty City Tour" },
  { quote: { en: "Kaindy Lake with its sunken forest is straight out of a dream. OneDayTour made everything seamless.", ru: "Озеро Кайнды с затопленным лесом — прямо из сна. OneDayTour сделал всё идеально.", kk: "Батып кеткен ормандары бар Қайнды көлі — тікелей арманнан. OneDayTour бәрін мінсіз ұйымдастырды." }, author: "Sofia R.", country: "Spain", stars: 5, avatar: "S", tour: "Zhetysu Canyon Adventure" },
  { quote: { en: "The VIP tour was worth every tenge. Moon Canyon alone is a reason to visit Kazakhstan. Pure luxury.", ru: "VIP-тур стоил каждого тенге. Лунный каньон сам по себе — повод посетить Казахстан. Чистая роскошь.", kk: "VIP тур әр теңгеге тұрарлық. Ай каньоны жалғыз Қазақстанды баруға себеп. Таза люкс." }, author: "Marcus H.", country: "Germany", stars: 5, avatar: "M", tour: "VIP Grand Zhetysu" },
];

function StarRow({ count = 5 }) {
  return (
    <div className="star-row" aria-label={`${count} stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < count ? "rv-star full" : "rv-star empty"}>★</span>
      ))}
    </div>
  );
}

export default function Reviews({ reviews = DEFAULT_REVIEWS }) {
  const { t, lang } = useLang();
  return (
    <section className="reviews" aria-labelledby="reviews-title">
      <div className="reviews-container">
        <div className="reviews-header">
          <span className="section-eyebrow">{t.reviews.eyebrow}</span>
          <h2 id="reviews-title" className="section-heading">
            {t.reviews.heading} <span className="accent-text">{t.reviews.headingAccent}</span>
          </h2>
          <div className="divider-ornament"><span className="divider-ornament-dot" /></div>
        </div>
        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <figure key={i} className="review-card">
              <div className="review-top">
                <div className="review-avatar">{r.avatar}</div>
                <div className="review-meta">
                  <span className="review-author">{r.author}</span>
                  <span className="review-country">{r.country}</span>
                </div>
              </div>
              <StarRow count={r.stars} />
              <blockquote className="review-quote">"{r.quote[lang] ?? r.quote.en}"</blockquote>
              {r.tour && <div className="review-tour-tag">📍 {r.tour}</div>}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
