import TourCard from "./TourCard"

const tours = [
  {
    image: "https://i.pinimg.com/736x/5b/23/54/5b23546f45b945768ca00a4cced91cb1.jpg",
    title: "Однодневный тур 6 локаций",
    price: "11,500 ₸/Человек",
    locations: ["Чарын каньон", "Озеро Каинды", "Долина замков", "Река Чарын", "Озеро Кольсай", "Черный каньон"],
    isVip: false,
  },
  {
    image: "https://i.pinimg.com/736x/96/ec/f8/96ecf8a1306b2a753eebe8fb2c45f090.jpg",
    title: "Однодневный VIP тур 7 локаций",
    price: "24,000 ₸/Человек",
    locations: [
      "Чарын каньон",
      "Река Чарын",
      "Долина замков",
      "Черный каньон",
      "Озеро Кольсай",
      "Лунный каньон",
      "Озеро Каинды",
    ],
    isVip: true,
  },
  {
    image: "https://i.pinimg.com/736x/5e/44/9a/5e449a04106b25afd0dfe0dd4b7137f5.jpg",
    title: "Тур по Алматы",
    price: "10,000 ₸/Человек",
    locations: ["Медеу", "Зеленый базар", "Шымбулак", "Парк 28 Панфиловцев", "Кок Тобе", "Вознесенский собор"],
    isVip: false,
  },
]

const TourList = () => {
  return (
    <section className="tours-section">
      <h2 className="tours-title text-2xl font-bold mb-4 text-center">Туры</h2>
      <div className="tours-dots text-center text-gray-400 mb-6">• • • • • •</div>

      {/* сетка карточек */}
      <div className="tours-grid">
        {tours.map((tour, index) => (
          <TourCard key={index} {...tour} />
        ))}
      </div>
    </section>
  )
}

export default TourList
