// Rich per-tour data for the TourDetails page (multilingual)
const DETAIL = {
  1: {
    id: 1,
    hero: "https://i.pinimg.com/736x/8d/b6/f4/8db6f4b2b79bf652243e9f693a4a2e4b.jpg",
    rating: 4.9,
    durationHours: 10,
    groupSize: "2–8",
    difficulty: "Easy",
    price: 15000,
    title: {
      en: "Almaty City Tour",
      ru: "Городской тур по Алматы",
      kk: "Алматы қала туры",
    },
    description: {
      en: "Discover the soul of Almaty in one unforgettable day — from the world's highest skating rink to panoramic hilltop views.",
      ru: "Откройте душу Алматы за один незабываемый день — от самого высокогорного катка в мире до панорамных видов с холма.",
      kk: "Бір ұмытылмас күнде Алматының жанын ашыңыз — дүниедегі ең биік мұзайдақтан жотаның панорамалық көрінісіне дейін.",
    },
    extraInfo: {
      icon: "⛰️",
      title: {
        en: "Legends of the Almaty Mountains",
        ru: "Легенды Алматинских гор",
        kk: "Алматы тауларының аңыздары",
      },
      text: {
        en: "The Almaty mountains are a source of inspiration and legend. Nomads considered these peaks sacred — here they sought protection and wisdom. Walk paths where every stone holds history, and enjoy nature that has preserved its primal power for millennia.",
        ru: "Алматинские горы — источник вдохновения и легенд. Кочевники считали эти вершины священными: здесь они искали защиты и мудрости. Пройдите по тропам, где каждый камень хранит историю, и насладитесь природой, сохранившей свою первозданную силу.",
        kk: "Алматы таулары шабыт пен аңыздардың қайнар көзі. Көшпенділер бұл шыңдарды қасиетті деп санады — мұнда олар қорғаныс пен даналық іздеді. Тарих сақтаған жолдармен жүріңіз.",
      },
    },
    included: {
      en: ["Professional bilingual guide (EN/RU)", "Comfortable transport", "All entry fees", "Professional photo session", "Traditional tea ceremony"],
      ru: ["Профессиональный двуязычный гид (EN/RU)", "Комфортный транспорт", "Все входные билеты", "Профессиональная фотосессия", "Традиционная чайная церемония"],
      kk: ["Кәсіби екітілді гид (EN/RU)", "Ыңғайлы көлік", "Барлық кіру билеттері", "Кәсіби фотосессия", "Дәстүрлі шай рәсімі"],
    },
    highlights: {
      en: ["Highest skating rink in the world at Medeu (1691m)", "Cable car to Shymbulak ski resort", "Soviet mosaics & monuments at Panfilov Park", "Panoramic sunset views from Kok-Tobe"],
      ru: ["Самый высокогорный каток в мире Медео (1691м)", "Канатная дорога на горнолыжный курорт Шымбулак", "Советские мозаики и памятники в парке Панфилова", "Панорамный вид на закат с Кок-Тобе"],
      kk: ["Дүниедегі ең биік мұзайдақ Медеу (1691м)", "Шымбұлақ шаңғы курортына канат жол", "Панфилов паркіндегі кеңес мозаикалары", "Кок-Тобеден батырылу панорамасы"],
    },
    locations: [
      {
        title: { en: "Medeu", ru: "Медео", kk: "Медеу" },
        description: {
          en: "The world's highest ice-skating rink at 1,691m altitude. Set in a picturesque valley with mountain peaks all around — a landmark of Almaty.",
          ru: "Самый высокогорный в мире каток на высоте 1691м. Расположен в живописной долине с горными вершинами со всех сторон — символ Алматы.",
          kk: "1691 м биіктіктегі дүниедегі ең биік мұзайдақ. Айналасы тау шыңдарымен қоршалған сурет тәрізді алқаптарда орналасқан.",
        },
        fact: {
          en: "Medeu holds 11 world speed-skating records set by athletes from 15 countries.",
          ru: "На Медео было установлено 11 мировых рекордов по конькобежному спорту спортсменами из 15 стран.",
          kk: "Медеуде 15 елден спортшылар 11 жер жүзілік конькі жарысы рекорды орнатты.",
        },
        images: [
          "https://i.pinimg.com/736x/b5/df/2e/b5df2eeaa052e4174be877a70fca058e.jpg",
          "https://images.pexels.com/photos/13266743/pexels-photo-13266743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://i.pinimg.com/736x/3c/99/91/3c99918eaffb158d9a1ac4badd1c7598.jpg",
        ],
      },
      {
        title: { en: "Shymbulak", ru: "Шымбулак", kk: "Шымбұлақ" },
        description: {
          en: "A world-class ski resort at 2,200m, accessible by cable car from Medeu. In summer it transforms into a stunning alpine hiking destination.",
          ru: "Горнолыжный курорт мирового уровня на высоте 2200м, доступный по канатной дороге от Медео. Летом он превращается в потрясающее альпийское место для пеших прогулок.",
          kk: "Медеуден канат жолымен жетуге болатын 2200м биіктіктегі әлемдік деңгейдегі шаңғы курорты. Жазда таудан жаяу серуендеуге арналған тамаша жерге айналады.",
        },
        fact: {
          en: "At 3,200m you can see seven Almaty mountain peaks simultaneously on a clear day.",
          ru: "На высоте 3200м в ясный день можно одновременно увидеть семь алматинских горных вершин.",
          kk: "3200м биіктікте ашық күні бір мезгілде жеті Алматы тау шыңын көруге болады.",
        },
        images: [
          "https://kompastour.com/useruploads/regions/region_fbd1db8d9a.jpg",
          "https://i.pinimg.com/736x/04/5a/46/045a46b4e76ca92fcc6888aa16a0253d.jpg",
          "https://i.pinimg.com/1200x/f4/30/fd/f430fd93450b2a05f4289c20d69add0c.jpg",
        ],
      },
    ],
  },

  2: {
    id: 2,
    hero: "https://i.pinimg.com/736x/5b/23/54/5b23546f45b945768ca00a4cced91cb1.jpg",
    rating: 4.8,
    durationHours: 14,
    groupSize: "4–12",
    difficulty: "Moderate",
    price: 22000,
    title: {
      en: "Zhetysu Canyon Adventure",
      ru: "Приключение в каньонах Жетысу",
      kk: "Жетісу каньон шытырманы",
    },
    description: {
      en: "Six legendary Kazakh landscapes in one breathtaking day — from rust canyon walls to an eerie sunken forest lake.",
      ru: "Шесть легендарных казахских пейзажей за один захватывающий день — от ржавых стен каньона до жуткого озера с затопленным лесом.",
      kk: "Бір тынымсыз күнде алты аңыздағы қазақ пейзаждары — тат басқан қабырғалардан батып кеткен орманды езелгі көлге дейін.",
    },
    extraInfo: {
      icon: "🏜️",
      title: {
        en: "The Soul of Zhetysu",
        ru: "Душа Жетысу",
        kk: "Жетісудің жаны",
      },
      text: {
        en: "Zhetysu — 'Seven Rivers' in Kazakh — is one of Central Asia's most ancient and sacred regions. Formed over millions of years by tectonic forces, the Charyn canyon system rivals the Grand Canyon in scale and grandeur. These landscapes have witnessed the rise and fall of empires, served as highways for the Silk Road, and sheltered countless generations of nomads.",
        ru: "Жетысу — «Семь рек» по-казахски — один из древнейших и священных регионов Центральной Азии. Сформированная миллионы лет назад тектоническими силами, каньонная система Чарына соперничает с Большим каньоном по масштабу и величию. Эти пейзажи были свидетелями расцвета и упадка империй, служили дорогами Шёлкового пути.",
        kk: "Жетісу — қазақша «Жеті өзен» — Орталық Азияның ең ежелгі және қасиетті аймақтарының бірі. Миллиондаған жылдар бойы тектоникалық күштермен қалыптасқан Шарын каньон жүйесі масштабы мен ұлылығымен Ұлы Каньонмен бәсекелесе алады.",
      },
    },
    included: {
      en: ["Expert naturalist guide", "4WD off-road transport", "Packed lunch & trail snacks", "All national park entry fees", "Safety equipment & first aid"],
      ru: ["Гид-натуралист эксперт", "Внедорожный транспорт 4WD", "Упакованный обед и перекусы", "Все сборы за вход в национальный парк", "Снаряжение безопасности и первая помощь"],
      kk: ["Сарапшы натуралист-гид", "4WD жол сапарлы көлік", "Буып-түйілген түскі ас және тағам", "Ұлттық паркке барлық кіру алымдары", "Қауіпсіздік жабдықтары мен алғашқы көмек"],
    },
    highlights: {
      en: ["\"Kazakhstan's Grand Canyon\" glowing at sunrise", "Kaindy Lake — eerie sunken spruce forest", "Off-road trails through Black Canyon", "Wild Charyn River viewpoints"],
      ru: ["«Большой каньон Казахстана», светящийся на восходе", "Озеро Кайнды — жуткий затопленный еловый лес", "Внедорожные маршруты через Чёрный каньон", "Смотровые площадки дикой реки Чарын"],
      kk: ["Шығанда жылтырайтын «Қазақстанның Ұлы Каньоны»", "Қайнды көлі — қорқынышты батып кеткен шырша ормандары", "Қара каньон арқылы жолсыз жолдар", "Жабайы Шарын өзенінің қарау нүктелері"],
    },
    locations: [
      {
        title: { en: "Charyn Canyon", ru: "Чарынский каньон", kk: "Шарын каньоны" },
        description: {
          en: "Kazakhstan's answer to the Grand Canyon — 90km of dramatic red-orange canyon walls carved by the Charyn River over millions of years.",
          ru: "Казахстанский ответ Большому каньону — 90 км впечатляющих красно-оранжевых стен каньона, вырезанных рекой Чарын за миллионы лет.",
          kk: "Қазақстанның Ұлы Каньонға жауабы — миллиондаған жылдар бойы Шарын өзені ойып жасаған 90 км драматикалық қызыл-қызғылт сары каньон қабырғалары.",
        },
        fact: {
          en: "Charyn Canyon is 12 million years old and is one of the best preserved canyons in the world.",
          ru: "Чарынский каньон имеет возраст 12 миллионов лет и является одним из наиболее сохранившихся каньонов в мире.",
          kk: "Шарын каньоны 12 миллион жыл жасқа толды және әлемдегі ең жақсы сақталған каньондардың бірі болып табылады.",
        },
        images: [
          "https://i.pinimg.com/736x/5b/23/54/5b23546f45b945768ca00a4cced91cb1.jpg",
          "https://i.pinimg.com/736x/96/ec/f8/96ecf8a1306b2a753eebe8fb2c45f090.jpg",
          "https://i.pinimg.com/736x/8d/b6/f4/8db6f4b2b79bf652243e9f693a4a2e4b.jpg",
        ],
      },
      {
        title: { en: "Kaindy Lake", ru: "Озеро Кайнды", kk: "Қайнды көлі" },
        description: {
          en: "A surreal glacial lake where the trunks of drowned spruce trees rise ghostly from turquoise water — formed by a 1911 earthquake and landslide.",
          ru: "Сюрреалистическое ледниковое озеро, где стволы утопленных елей призрачно поднимаются из бирюзовой воды — образовалось в результате землетрясения и оползня 1911 года.",
          kk: "Шырша ағаштарының діңдері бозғылт реңді тіреуіш суынан жоғары шығып тұратын сюрреалды мұздық көл — 1911 жылғы жер сілкінісі мен сел нәтижесінде пайда болды.",
        },
        fact: {
          en: "The water in Kaindy Lake is so cold that the submerged trees have been preserved for over 100 years.",
          ru: "Вода в озере Кайнды настолько холодная, что затопленные деревья сохранились более 100 лет.",
          kk: "Қайнды көліндегі су сонша суық, батып кеткен ағаштар 100 жылдан астам уақыт бойы сақталып қалды.",
        },
        images: [
          "https://toptrip.kz/wp-content/uploads/2020/11/toptrip_horse_tour-e1671557970449.jpg",
          "https://i.pinimg.com/736x/b5/df/2e/b5df2eeaa052e4174be877a70fca058e.jpg",
          "https://i.pinimg.com/736x/3c/99/91/3c99918eaffb158d9a1ac4badd1c7598.jpg",
        ],
      },
    ],
  },

  3: {
    id: 3,
    hero: "https://i.pinimg.com/736x/96/ec/f8/96ecf8a1306b2a753eebe8fb2c45f090.jpg",
    rating: 5.0,
    durationHours: 16,
    groupSize: "2–6",
    difficulty: "Moderate",
    price: 35000,
    title: {
      en: "VIP Grand Zhetysu — 7 Wonders",
      ru: "VIP Гранд Жетысу — 7 чудес",
      kk: "VIP Гранд Жетісу — 7 ғажайып",
    },
    description: {
      en: "The ultimate premium experience — private 4WD, gourmet picnic, drone photography, and exclusive access to all 7 Zhetysu wonders.",
      ru: "Максимальный премиум-опыт — частный 4WD, гурме-пикник, аэрофотосъёмка с дрона и эксклюзивный доступ ко всем 7 чудесам Жетысу.",
      kk: "Ең жоғары VIP тәжірибе — жеке 4WD, гурме-пикник, дрон аэрофотосуреті және Жетісудің 7 ғажайыбының барлығына эксклюзивті қол жетімділік.",
    },
    extraInfo: {
      icon: "🌟",
      title: {
        en: "The Hidden 7th Wonder — Moon Canyon",
        ru: "Скрытое 7-е чудо — Лунный каньон",
        kk: "Жасырын 7-ші ғажайып — Ай каньоны",
      },
      text: {
        en: "Moon Canyon is Zhetysu's best-kept secret — a remote, otherworldly landscape of pale clay formations that glow silver in the moonlight. Most tour operators don't even know it exists. Our VIP guests get exclusive private access to this hidden gem, making it one of the most unique experiences available anywhere in Kazakhstan.",
        ru: "Лунный каньон — самая хорошо хранимая тайна Жетысу — отдалённый, потусторонний пейзаж из бледных глиняных образований, которые светятся серебром в лунном свете. Большинство туроператоров даже не знают о его существовании. Наши VIP-гости получают эксклюзивный частный доступ к этой скрытой жемчужине.",
        kk: "Ай каньоны — Жетісудің ең жақсы сақталған сыры. Күнде жарықта күміспен жарқырайтын бозғылт сазды формациялардан тұратын алыс, басқа дүниелік ландшафт. Туристік операторлардың көпшілігі оның бар екенін де білмейді.",
      },
    },
    included: {
      en: ["Private VIP guide (EN/RU/KZ)", "Luxury private 4WD vehicle", "Gourmet picnic lunch at Kolsai", "Drone & photography package", "All entry fees", "Exclusive Moon Canyon access", "Emergency first aid kit"],
      ru: ["Частный VIP-гид (EN/RU/KZ)", "Роскошный частный внедорожник 4WD", "Гурме-пикник у озера Колсай", "Пакет дрон и фотография", "Все входные билеты", "Эксклюзивный доступ к Лунному каньону", "Аптечка первой помощи"],
      kk: ["Жеке VIP гид (EN/RU/KZ)", "Люкс жеке 4WD көлік", "Қолсайда гурме-пикник", "Дрон және фотография пакеті", "Барлық кіру билеттері", "Ай каньонына эксклюзивті кіру", "Шұғыл алғашқы көмек жинағы"],
    },
    highlights: {
      en: ["Moon Canyon — exclusive private access (not on any other tour)", "Professional drone aerial photography", "Gourmet lakeside picnic at Kolsai", "All 7 Zhetysu wonders in one epic day"],
      ru: ["Лунный каньон — эксклюзивный частный доступ (нет ни в одном другом туре)", "Профессиональная аэрофотосъёмка с дрона", "Гурме-пикник у озера Колсай", "Все 7 чудес Жетысу за один эпический день"],
      kk: ["Ай каньоны — эксклюзивті жеке кіру (басқа ешқандай турда жоқ)", "Кәсіби дрон аэрофотосуреті", "Қолсай жағасындағы гурме-пикник", "Бір эпикалық күнде Жетісудің барлық 7 ғажайыбы"],
    },
    locations: [
      {
        title: { en: "Charyn Canyon", ru: "Чарынский каньон", kk: "Шарын каньоны" },
        description: {
          en: "Start the epic VIP day at Kazakhstan's most iconic canyon — towering rust-red walls carved by millions of years of river erosion.",
          ru: "Начните эпический VIP-день у самого знакового каньона Казахстана — возвышающихся ржаво-красных стен, вырезанных миллионами лет речной эрозии.",
          kk: "VIP күнді Қазақстанның ең танымал каньонынан бастаңыз — миллиондаған жыл бойы өзен эрозиясымен ойылған биік тат-қызыл қабырғалар.",
        },
        fact: {
          en: "The Valley of Castles within Charyn Canyon is named for its striking rock formations resembling medieval fortresses.",
          ru: "Долина замков внутри Чарынского каньона названа в честь своих впечатляющих скальных образований, напоминающих средневековые крепости.",
          kk: "Шарын каньонындағы Қамалдар алқабы орта ғасырлық бекіністерді еске түсіретін керемет жартас формациялары үшін аталған.",
        },
        images: [
          "https://i.pinimg.com/736x/96/ec/f8/96ecf8a1306b2a753eebe8fb2c45f090.jpg",
          "https://i.pinimg.com/736x/5b/23/54/5b23546f45b945768ca00a4cced91cb1.jpg",
          "https://i.pinimg.com/736x/8d/b6/f4/8db6f4b2b79bf652243e9f693a4a2e4b.jpg",
        ],
      },
      {
        title: { en: "Kolsai Lakes", ru: "Озёра Кольсай", kk: "Қолсай көлдері" },
        description: {
          en: "Three emerald lakes nestled in the Tian Shan mountains — the setting for your exclusive gourmet lakeside picnic with panoramic mountain views.",
          ru: "Три изумрудных озера, утопающих в горах Тянь-Шань — место для вашего эксклюзивного гурме-пикника у озера с панорамными видами на горы.",
          kk: "Тянь-Шань тауларындағы үш зумрут көл — панорамалық тау көрінісімен эксклюзивті гурме-пикникке арналған орын.",
        },
        fact: {
          en: "Kolsai Lakes were called the 'Pearl of the Tian Shan' by early Soviet expedition teams.",
          ru: "Озёра Кольсай были названы «Жемчужиной Тянь-Шаня» первыми советскими экспедиционными группами.",
          kk: "Қолсай көлдерін алғашқы кеңес экспедициялық топтары «Тянь-Шань інжуі» деп атаған.",
        },
        images: [
          "https://kompastour.com/useruploads/regions/region_fbd1db8d9a.jpg",
          "https://i.pinimg.com/736x/04/5a/46/045a46b4e76ca92fcc6888aa16a0253d.jpg",
          "https://i.pinimg.com/1200x/f4/30/fd/f430fd93450b2a05f4289c20d69add0c.jpg",
        ],
      },
    ],
  },
};

export default DETAIL;
