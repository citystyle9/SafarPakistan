/* SAFAR-E-PAKISTAN INTERACTIVE ENGINE (Vanilla JS)
   Controls language matrix, famous destination grid search, historic chronological filters,
   itinerary planners, interactive 3D flip card builders, currency converters, and modal controls */

// ==========================================
// 1. EXTENSIVE TRAVEL DATABASE (STATIC ASSETS)
// ==========================================

const TOURIST_PLACES = [
  {
    id: "hunza-valley",
    name: "Hunza Valley",
    nameUrdu: "وادیء ہنزہ",
    province: "Gilgit-Baltistan",
    provinceUrdu: "گلگت بلتستان",
    image: "/src/assets/images/pakistan_hero_hunza_1781247088392.jpg",
    descEn: "Tucked inside high mountain folds, Hunza holds ancient terraced farmlands, crystal glaciers, and hundreds-of-years-old forts. Historically serving as a crucial junction along the Silk Road, Hunza boasts one of the highest literacy rates in South Asia.",
    descUr: "برفانی چوٹیوں کے سائے تلے آباد ہنزہ اپنی خوبصورت آبشاروں، قدیم مٹی کے گھروں اور بلتت فورٹ جیسی جادوئی عمارات کی وجہ سے دنیا بھر کے مہم جوؤں کا اولین مسکن ہے۔ یہاں کی شرح خواندگی نہ صرف قابلِ رشک ہے بلکہ یہاں کے باسی بے انتہا مہمان نواز ہیں۔",
    bestSeason: "April to October (Spring Blossoms / Autumn Gold)",
    entryFee: "Free (Baltit Fort ticket PKR 1,000 for international tourists)",
    transitInfo: "Around 12-hour scenic taxi ride or tour coach from Islamabad along Karakoram Highway (KKH). Scheduled flights operate to Gilgit Airport.",
    highlights: ["Baltit & Altit Forts", "Karimabad Royal Bazaar", "Eagles Nest Sunset Peaks", "Hunza River rafting path"],
    category: "Highlands"
  },
  {
    id: "badshahi-mosque",
    name: "Badshahi Mosque",
    nameUrdu: "بادشاہی مسجد",
    province: "Punjab",
    provinceUrdu: "پنجاب",
    image: "/src/assets/images/lahore_badshahi_mosque_1781247109043.jpg",
    descEn: "Commissioned by the Mughal Emperor Aurangzeb in 1673, this red sandstone architectural wonder sits adjacent to Lahore Fort. Able to accommodate 100,000 worshipers, its majestic white marble domes symbolize Lahore's imperial past.",
    descUr: "شہنشاہ اورنگزیب عالمگیر نے 1673ء میں اسے تعمیر کروایا۔ یہ مغل فنِ تعمیر کا ایک عظیم شاہکار ہے جو قلعہ لاہور کے بالمقابل واقع ہے۔ اس کے سفید سنگِ مرمر کے تین شاندار گنبد اور چار بلند و بالا مینار مغلیہ فن کمال کی یاد دلاتے ہیں۔",
    bestSeason: "October to March (Mild & Pleasant Winter)",
    entryFee: "Free for all visitors (Shoe storage fee: PKR 50)",
    transitInfo: "Located in the heart of Lahore Walled City, easily accessible via metro buses, uber services, and scenic rickshaws.",
    highlights: ["Intricate Stucco tracery", "Mughal Heritage Museum", "Allama Iqbal Mausoleum", "Grand Courtyard walks"],
    category: "Heritage"
  },
  {
    id: "faisal-mosque",
    name: "Faisal Mosque",
    nameUrdu: "فیصل مسجد",
    province: "Federal Capital",
    provinceUrdu: "اسلام آباد",
    image: "/src/assets/images/faisal_mosque_1781247145872.jpg",
    descEn: "Designed by renowned Turkish architect Vedat Dalokay, Faisal Mosque mimics a desert Bedouin tent nestled against the Margalla Hills. Lacking traditional domes, its triangular modern structures represent Pakistan's futuristic architectural vision.",
    descUr: "ترک معمار ویدات دالوکے کی تخلیق کردہ یہ خوبصورت مسجد روایتی گنبدوں کے بغیر ایک صحرائی بدو خیمے کی صورت لیے کھڑی ہے۔ مارگلہ کے خوبصورت پہاڑوں کے دامن میں واقع یہ شاندار ڈھانچہ پاکستان کے دارالحکومت کا سب سے مشہور نشان ہے۔",
    bestSeason: "Year round (Specially beautiful during early sunset)",
    entryFee: "Free access",
    transitInfo: "Situated at the northern stretch of Islamabad, accessible easily within 15 minutes drive from any hotel in the federal scope.",
    highlights: ["Massive Turkish Chandelier", "Book Gallery & Library", "Stunning Margalla Hill vistas", "Refined geometric calligraphy"],
    category: "Modern"
  },
  {
    id: "attabad-lake",
    name: "Attabad Lake",
    nameUrdu: "عطا آباد جھیل",
    province: "Gilgit-Baltistan",
    provinceUrdu: "گلگت بلتستان",
    image: "/src/assets/images/attabad_lake_1781247126157.jpg",
    descEn: "Formed accidentally by a massive landslide in 2010, this majestic turquoise lake cuts through high rocky peaks. Today, it serves as a booming tourism hub for boating, jet-skiing, and staying in premium lakeside cabins.",
    descUr: "2010ء میں ایک المناک پہاڑی تودہ گرنے کے پسمانظر میں بننے والی یہ نیلگوں جھیل آج دنیا کی سب سے پرکشش جھیلوں میں گنی جاتی ہے۔ اس کا نیلا شفاف پانی گہرے پہاڑی سائے کے بیچوں بیچ چمکتا ہوا مہم جو سیاحوں کو جزیرہ نما کشتی رانی کا موقع دیتا ہے۔",
    bestSeason: "May to September (Best water color and smooth temperatures)",
    entryFee: "Free access (Boating & Jet ski rates vary PKR 1,500 - 3,500)",
    transitInfo: "Located on the Karakoram Highway, approximately 45 minutes drive north from Karimabad, Hunza.",
    highlights: ["Speedboat tours through ravines", "High mountain jet skiing", "Lakeside wood cottages", "Stunning reflection photography"],
    category: "Waterways"
  },
  {
    id: "mohenjo-daro",
    name: "Mohenjo-Daro Archaeological Site",
    nameUrdu: "موہنجودڑو",
    province: "Sindh",
    provinceUrdu: "سندھ",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
    descEn: "Built around 2500 BCE, Mohenjo-Daro was one of the largest settlements of the ancient Indus Valley Civilization. Boasting advanced grid-planned roads, complex underground drainage sewers, and monumental public baths.",
    descUr: "تعمیر کم و بیش 2500 قبل مسیح میں ہوئی۔ یہ وادیء سندھ کی عظیم الشان تہذیب کا سب سے بڑا مرکز مانا جاتا ہے۔ پختہ اینٹوں سے بنے راستے، نکاسی آب کا شاندار نظام اور تاریخی اجتماعی غسل خانے یہاں کے پختہ تمدن کا منہ بولتا ثبوت ہیں۔",
    bestSeason: "November to February (Cool temperatures suitable for walking tours)",
    entryFee: "PKR 300 for locals, PKR 1,000 for foreigners",
    transitInfo: "Easiest via regional flights to Mohenjo-Daro airfield or a 5-hour highway drive from Sukkur.",
    highlights: ["The Great Bath complex", "The Priest-King Sculpture Site", "Ancient grid urban sewage pipes", "Heritage Museum Treasures"],
    category: "Heritage"
  },
  {
    id: "swat-valley",
    name: "Swat Valley (Malam Jabba)",
    nameUrdu: "وادیء سوات",
    province: "Khyber Pakhtunkhwa",
    provinceUrdu: "خیبر پختونخوا",
    image: "https://images.unsplash.com/photo-1627582522736-60912f293ac9?auto=format&fit=crop&w=800&q=80",
    descEn: "Commonly hailed as the Switzerland of the East due to its emerald woodlands, alpine streams, and snowy ski slopes. Swat also harbors rich Gandhara archaeological heritage and old Buddhist monolith carvings.",
    descUr: "اپنی سرسبز چراگاہوں، دیار کے گہرے جنگلات اور برف پوش چوٹیوں کی بنیاد پر اسے مشرق کا سوئٹزرلینڈ پکارا جاتا ہے۔ سوات اپنے اندر قدیم بدھ مت دور کی گندھارا تہذیب کے انمول نقوش بھی چھپائے ہوئے ہے۔",
    bestSeason: "December to February (Skiing / Snow), June to August (Fresh greenery)",
    entryFee: "Free access (Malam Jabba Ski Resort Chairlift PKR 1,000)",
    transitInfo: "Around 3.5 hours drive from Islamabad via Swat Motorway (M-16), a smooth and modern highway route.",
    highlights: ["Malam Jabba High Ski Slopes", "Fizagat Riverside Park", "Kalam forest walks", "Ancient Udegram Fort ruins"],
    category: "Highlands"
  }
];

const HISTORY_TIMELINE = [
  {
    year: "3000 BCE — 1500 BCE",
    era: "ancient",
    titleEn: "The Great Indus Civilization",
    titleUr: "وادیء سندھ کی سنہری تہذیب",
    descEn: "The dawn of urban civilization. Grand grid-patterned cities of Harappa and Mohenjo-Daro develop. Sophisticated bronze metallurgy, sewage systems, and maritime trading systems flourish in the plains.",
    descUr: "ایک منظم شہری تمدن کا آغاز۔ ہڑپہ اور موہنجودڑو جیسے شاندار شہر پروان چڑھے جہاں پانی کے پختہ نکاسی کا نظام، تانبے و کانسی کے آلات اور بحری تجارتی تعلقات رائج تھے۔"
  },
  {
    year: "500 BCE — 300 CE",
    era: "ancient",
    titleEn: "The Kingdom of Gandhara Art",
    titleUr: "گندھارا سلطنت کا شوزاہ",
    descEn: "Flourishing at Taxila and Peshawar valley, Gandhara becomes the ultimate nursery for Greco-Buddhist philosophy, global education, and fine stone sculptures under Great king Kanishka.",
    descUr: "ٹیکسلا اور وادیء پشاور کشن سلطنت کے زیر اثر یونانی اور بدھ فلسفے کا ایک حسین امتزاج بن کر ابھرے۔ یہ فنِ سنگ تراشی اور علم و عرفان کا گڑھ بن گیا تھا۔"
  },
  {
    year: "1526 CE — 1707 CE",
    era: "mughals",
    titleEn: "Imperial Mughal Grandeur",
    titleUr: "عظیم مغلیہ تاج وریاں",
    descEn: "Lahore transforms into a major imperial capital. Wonders like Badshahi Mosque, Shalimar Gardens, Lahore Fort, and Taj Mahal-era masonry set structural design benchmarks globally.",
    descUr: "پنجاب مغل سلطنت کا ایک اہم مرکز بن گیا۔بادشاہی مسجد، شالیمار باغات اور شاہی قلعہ جیسی بے نظیر عمارات اسی دورِ جاہ و جلال کی یادگار ہیں۔"
  },
  {
    year: "1947 CE",
    era: "independence",
    titleEn: "Independence & Islamic Republic Born",
    titleUr: "آزادی اور قیامِ پاکستان - 1947",
    descEn: "Led by Quaid-e-Azam Muhammad Ali Jinnah, Pakistan secures democratic independence. A sovereign homeland emerges on the globe’s geographic map, marking immense local strive.",
    descUr: "قائد اعظم محمد علی جناح کی لازوال سیاسی جدوجہد کے نتیجے میں پاکستان ایک آزاد جمہوری مملکت کے طور پر دنیا کے نقشے پر نمودار ہوا۔"
  },
  {
    year: "2010 CE — Present",
    era: "modern-tourism",
    titleEn: "Digital Tourism Boom & Globetrotting Era",
    titleUr: "جدید ملٹی میڈیا اور سیاحت کا فروغ",
    descEn: "Constructing infrastructure motorways through Gilgit-Baltistan and launching flexible E-Visa models triggers global travel writers to prioritize Pakistan as the #1 untouched sanctuary of hospitality.",
    descUr: "سڑکوں کی جدت اور آن لائن ویزا حصول کے نظام سے پاکستان دنیا کے پرجوش سیاحوں کی پسندیدہ ترین آماجگاہ بن گیا، جہاں کی منفرد ثقافتی خوبصورتی کا چرچا چہار سو ہے۔"
  }
];

const ITINERARIES = [
  {
    title: "Karakoram Alpine Peaks Adventure",
    titleUr: "شاہراہِ قراقرم کے شاندار افق",
    duration: "5 Days",
    category: "mountain",
    days: [
      {
        day: "Day 1",
        dayUr: "پہلا دن",
        theme: "Islamabad to Naran Gateway",
        activity: "Scenic drive along the Hazara motorway, pine forests surrounding Balakot, with a resting stop beside Kunhar River.",
        elevation: "2,409m (7,903ft)",
        highlight: "Fresh trout fish dinner in Naran cold bazaar."
      },
      {
        day: "Day 2",
        dayUr: "دوسرا دن",
        theme: "Babusar Sky Pass to Gilgit",
        activity: "Winding climb up Babusar top pass (4,173m), viewing frozen high meadows, descend to Chilas meeting point of three world mountain chains.",
        elevation: "1,500m (4,921ft) to 4,173m",
        highlight: "Standing on the road juncture where Himalayas, Karakoram and Hindu Kush converge."
      },
      {
        day: "Day 3",
        dayUr: "تیسرا دن",
        theme: "Karimabad Royal Castle Exploration",
        activity: "Arriving at Karimabad Palace, hiking the narrow tracks of Altit Fort gardens, and dining in traditional Hunza Apricot Cafes.",
        elevation: "2,438m (7,998ft)",
        highlight: "Sunset photos over Rakaposhi Peak from Eagles Nest lookout."
      },
      {
        day: "Day 4",
        dayUr: "چوتھا دن",
        theme: "Attabad Lakes boat cruise",
        activity: "Exploring Attabad Turquoise Lake waters inside a swift speedboat to view the dramatic suspension suspension bridges.",
        elevation: "2,438m (7,998ft)",
        highlight: "Navigating inside Passu cones cathedral-like massive rock ridges."
      },
      {
        day: "Day 5",
        dayUr: "پانچواں دن",
        theme: "Journey Back with Souvenirs",
        activity: "Buying dry fruit packs and handmade wool rugs, driving back to Gilgit for return flight or comfortable road coach to Capital.",
        elevation: "540m (1,772ft)",
        highlight: "Scenic flight over Nanga Parbat killer peak mountain."
      }
    ]
  },
  {
    title: "Imperial Punjab Heritage Tour",
    titleUr: "مغلائی پنجاب کی تاریخی سیر",
    duration: "3 Days",
    category: "culture",
    days: [
      {
        day: "Day 1",
        dayUr: "پہلا دن",
        theme: "Gardens, Domes & Historic Forts",
        activity: "Guided tour inside Lahore Walled City, tracing Shahi Hamam royal bath mosaic corridors and Lahore Fort Sheesh Mahal mirrored halls.",
        elevation: "217m (712ft)",
        highlight: "Spicy twilight dinner at the famous Food Street overlooking Badshahi Mosque."
      },
      {
        day: "Day 2",
        dayUr: "دوسرا دن",
        theme: "Patriotic Borders & Flags",
        activity: "Afternoon drive to Wagah Border, sitting in the crowd amphitheater to witness the high-stepping patriotic flag ceremony with military guards.",
        elevation: "217m (712ft)",
        highlight: "Roguish drum rolls and chanting crowds matching live band beats."
      },
      {
        day: "Day 3",
        dayUr: "تیسرا دن",
        theme: "Ancient Salt Mines and Shrines",
        activity: "Exiting for Khewra Salt Mines (the 2nd largest globally), exploring mosques carved from glowing red-pink salt slabs inside historical mining shafts.",
        elevation: "290m (951ft)",
        highlight: "Riding the miniature train tour into salt brick reservoirs."
      }
    ]
  }
];

const GOURMET_DISHES = [
  {
    name: "Chicken Biryani",
    urdu: "بریانی",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=550&q=80",
    slogan: "The Undisputed King of Plates",
    desc: "A baseline masterpiece of premium basmati rice layers with highly spiced saffron, slow and steam-cooked with aromatic ginger, chili, and marinated meats. Perfectly paired with cumin raita."
  },
  {
    name: "Lahori Siri Paye",
    urdu: "سری پائے",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=550&q=80",
    slogan: "Rich Slow-Cooked Morning Fuel",
    desc: "Slow stewed goat trotters cooked overnight in a thick broth of garlic, cardamom, and heavy spices. Best eaten in local clay bakeries with fluffy whole wheat tandoori Naan."
  },
  {
    name: "Kashmiri Pink Chai",
    urdu: "کشمیری چائے",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=550&q=80",
    slogan: "Elegant Tea Brewed with Salt & Pistachios",
    desc: "Premium green tea leaves aerated in water with pinch baking soda, forming a natural majestic pink shade. Crowned with crushed almonds, cardamoms, and salted milk froth."
  }
];

const LANGUAGE_PHRASES = [
  {
    english: "Greetings / Peace be on you",
    romanUrdu: "As-salam-o-Alaikum",
    urdu: "اَلسَّلَامُ عَلَيْكُمْ",
    literal: "The premium universal opening greeting across all towns.",
    audioText: "assalam o alaikum"
  },
  {
    english: "Thank You So Much",
    romanUrdu: "Shukriya",
    urdu: "شکریہ",
    literal: "Say this when served steaming green tea or treated to complimentary local sweets.",
    audioText: "shukriya"
  },
  {
    english: "Welcome / Join Us",
    romanUrdu: "Khush-Amdeed",
    urdu: "خوش آمدید",
    literal: "Common slogan printed over entry arches and repeated by host households.",
    audioText: "khush amdeed"
  },
  {
    english: "It is Beautiful / God has willed it",
    romanUrdu: "Masha'Allah",
    urdu: "ماشااللہ",
    literal: "Uttered upon standing across stunning peaks, rivers, or laughing children.",
    audioText: "masha allah"
  }
];

// ==========================================
// 2. ACTIVE APPLICATION STATES (MUTABLE)
// ==========================================

let activeLanguage = 'en'; // 'en', 'ur', 'both'
let searchQuery = '';
let selectedRegionFilter = 'All'; // Region category
let activeEraFilter = 'all'; // History categories
let activeItineraryIdx = 0;
let activeDayIdx = 0;
let activeCultureCategory = 'food'; // 'food' or 'language'

// ==========================================
// 3. CORE DOM NODES EVENT INITIALIZERS
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  // Execute lucide vector compilation
  lucide.createIcons();

  // Draw Dynamic Interfaces
  renderTouristPlaces();
  renderRegionFilterButtons();
  renderEraFilterButtons();
  renderHistoryTimeline();
  renderItineraryTabs();
  renderActiveDayPlanner();
  renderCultureCorridor();

  // Launch initial rate calculator setup
  calculateExchange();
});

// ==========================================
// 4. LANGUAGE SWITCHER HANDLER
// ==========================================

function changeLanguage(langCode) {
  activeLanguage = langCode;

  const btnEn = document.getElementById("lang-btn-en");
  const btnBoth = document.getElementById("lang-btn-both");
  const btnUr = document.getElementById("lang-btn-ur");

  // Reset inactive tab classes
  [btnEn, btnBoth, btnUr].forEach(btn => {
    btn.className = "px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-all text-gray-300 hover:text-white";
  });
  btnUr.className = "px-3.5 py-0.5 rounded-full text-sm font-urdu transition-all text-gray-300 hover:text-white leading-normal";

  // Mark active CSS buttons
  if (langCode === 'en') {
    btnEn.className = "px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-all bg-pak-green text-white shadow-md";
  } else if (langCode === 'both') {
    btnBoth.className = "px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-all bg-pak-green text-white shadow-md";
  } else if (langCode === 'ur') {
    btnUr.className = "px-3.5 py-0.5 rounded-full text-sm font-urdu transition-all bg-pak-green text-white shadow-md leading-normal";
  }

  // Handle Slogans translation switches across the webpage manually with CSS classes adjustments
  const enHeroTitle = document.getElementById("hero-title-en");
  const urHeroTitle = document.getElementById("hero-title-ur");
  const enHeroDesc = document.getElementById("hero-desc-en");
  const urHeroDesc = document.getElementById("hero-desc-ur");

  const placesUrHeader = document.getElementById("places-title-ur");
  const historyUrHeader = document.getElementById("history-title-ur");
  const plannerUrHeader = document.getElementById("planner-title-ur");
  const cultureUrHeader = document.getElementById("culture-title-ur");
  const essentialsUrHeader = document.getElementById("essentials-title-ur");

  if (langCode === 'en') {
    enHeroTitle.classList.remove("hidden");
    urHeroTitle.classList.add("hidden");
    enHeroDesc.classList.remove("hidden");
    urHeroDesc.classList.add("hidden");

    placesUrHeader.classList.add("hidden");
    historyUrHeader.classList.add("hidden");
    plannerUrHeader.classList.add("hidden");
    cultureUrHeader.classList.add("hidden");
    essentialsUrHeader.classList.add("hidden");
  } else if (langCode === 'ur') {
    enHeroTitle.classList.add("hidden");
    urHeroTitle.classList.remove("hidden");
    enHeroDesc.classList.add("hidden");
    urHeroDesc.classList.remove("hidden");

    placesUrHeader.classList.remove("hidden");
    historyUrHeader.classList.remove("hidden");
    plannerUrHeader.classList.remove("hidden");
    cultureUrHeader.classList.remove("hidden");
    essentialsUrHeader.classList.remove("hidden");
  } else {
    // Both bilingual modes
    enHeroTitle.classList.remove("hidden");
    urHeroTitle.classList.remove("hidden");
    enHeroDesc.classList.remove("hidden");
    urHeroDesc.classList.remove("hidden");

    placesUrHeader.classList.remove("hidden");
    historyUrHeader.classList.remove("hidden");
    plannerUrHeader.classList.remove("hidden");
    cultureUrHeader.classList.remove("hidden");
    essentialsUrHeader.classList.remove("hidden");
  }

  // Re-render components holding language matrices
  renderTouristPlaces();
  renderHistoryTimeline();
  renderActiveDayPlanner();
  renderCultureCorridor();
}

// ==========================================
// 5. REGION PORTFOLIO CLASSIFIER RENDERERS
// ==========================================

function renderRegionFilterButtons() {
  const container = document.getElementById("region-filters");
  if (!container) return;

  const regions = ["All", "Gilgit-Baltistan", "Punjab", "Federal Capital", "Swat & KP (Khyber Pakhtunkhwa)", "Sindh"];

  container.innerHTML = regions.map(reg => {
    const cleanReg = reg === "Swat & KP (Khyber Pakhtunkhwa)" ? "Khyber Pakhtunkhwa" : reg;
    const isSelected = selectedRegionFilter === cleanReg;
    return `
      <button
        onclick="applyRegionFilter('${cleanReg}')"
        class="px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
          isSelected
            ? "bg-emerald-950 text-pak-gold font-bold border border-emerald-900 shadow-sm"
            : "bg-white text-gray-650 border border-emerald-950/5 hover:bg-emerald-50"
        }"
      >
        ${reg}
      </button>
    `;
  }).join("");
}

function applyRegionFilter(regName) {
  selectedRegionFilter = regName;
  renderRegionFilterButtons();
  renderTouristPlaces();
}

function filterTouristPlaces() {
  const input = document.getElementById("search-input");
  searchQuery = input ? input.value.toLowerCase().trim() : '';
  renderTouristPlaces();
}

function renderTouristPlaces() {
  const grid = document.getElementById("places-grid");
  const fallback = document.getElementById("no-places-fallback");
  if (!grid) return;

  // Filter conditions
  const filtered = TOURIST_PLACES.filter(place => {
    // Category checks
    if (selectedRegionFilter !== 'All' && place.province !== selectedRegionFilter) {
      return false;
    }
    // Search tags match
    if (searchQuery) {
      const isMatch = place.name.toLowerCase().includes(searchQuery) ||
                      place.nameUrdu.includes(searchQuery) ||
                      place.province.toLowerCase().includes(searchQuery) ||
                      place.category.toLowerCase().includes(searchQuery);
      if (!isMatch) return false;
    }
    return true;
  });

  // Display triggers
  if (filtered.length === 0) {
    grid.innerHTML = '';
    fallback.classList.remove("hidden");
    return;
  }
  fallback.classList.add("hidden");

  grid.innerHTML = filtered.map(place => {
    // English-Urdu text selection based on languageState
    const title = activeLanguage === 'ur' ? place.nameUrdu : place.name;
    const province = activeLanguage === 'ur' ? place.provinceUrdu : place.province;
    const description = activeLanguage === 'ur' ? place.descUr : place.descEn;
    
    // Highlight first tag
    const mainTag = place.category;

    return `
      <article class="place-card bg-white rounded-3xl overflow-hidden border border-emerald-950/5 shadow-3xs flex flex-col justify-between" id="card-${place.id}">
        <!-- Header Visual Image context -->
        <div class="relative h-48 overflow-hidden bg-emerald-900 text-white select-none">
          <img
            src="${place.image}"
            alt="${place.name}"
            class="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          <!-- Province banner tag -->
          <span class="absolute top-4 left-4 bg-emerald-950/80 backdrop-blur-xs text-white border border-emerald-500/20 text-[9px] font-mono font-semibold tracking-wider px-2.5 py-0.5 rounded-full uppercase">
            ${province}
          </span>

          <!-- Landmark Category tag -->
          <span class="absolute bottom-4 right-4 bg-pak-gold text-emerald-950 text-[8px] font-mono font-black uppercase tracking-widest px-2 py-0.5 rounded-sm">
            ${mainTag}
          </span>
        </div>

        <!-- Details text section -->
        <div class="p-6 flex-grow flex flex-col justify-between space-y-4">
          <div class="space-y-2">
            <h4 class="text-lg md:text-xl font-serif font-black tracking-tight text-gray-950 leading-none">
              ${title}
            </h4>
            
            <!-- Optional bilingual small text -->
            ${activeLanguage === 'both' ? `
              <p class="font-urdu text-[11px] text-pak-gold leading-none pr-1 mt-1 font-bold">${place.nameUrdu}</p>
            ` : ''}

            <p class="text-xs text-gray-550 leading-relaxed font-light line-clamp-3">
              ${description}
            </p>
          </div>

          <!-- Actions CTA trigger -->
          <button
            onclick="triggerPlaceModal('${place.id}')"
            class="w-full border border-emerald-950/10 hover:border-pak-green hover:bg-emerald-50 text-pak-green py-2 px-4 rounded-full text-xs font-semibold cursor-pointer transition-all flex items-center justify-center space-x-1"
          >
            <span>View Complete Guide</span>
            <i data-lucide="arrow-right-circle" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </article>
    `;
  }).join("");

  lucide.createIcons();
}

// ==========================================
// 6. HISTORICAL TIMELINE FILTERS & BUILDERS
// ==========================================

function renderEraFilterButtons() {
  const container = document.getElementById("era-filters");
  if (!container) return;

  const eras = [
    { key: "all", label: "All Eras", labelUr: "تمام ادوار" },
    { key: "ancient", label: "Ancient Roots", labelUr: "قدیم عہد" },
    { key: "mughals", label: "Mughal Empire", labelUr: "مغل عمارات" },
    { key: "independence", label: "Independence", labelUr: "آزادی" }
  ];

  container.innerHTML = eras.map(item => {
    const isSelected = activeEraFilter === item.key;
    const label = activeLanguage === 'ur' ? item.labelUr : item.label;
    return `
      <button
        onclick="applyEraFilter('${item.key}')"
        class="px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
          isSelected
            ? "bg-pak-green text-white font-bold shadow-md shadow-emerald-950/20"
            : "text-gray-550 hover:text-gray-900 border border-transparent hover:bg-emerald-50"
        }"
      >
        ${label}
      </button>
    `;
  }).join("");
}

function applyEraFilter(eraKey) {
  activeEraFilter = eraKey;
  renderEraFilterButtons();
  renderHistoryTimeline();
}

function renderHistoryTimeline() {
  const container = document.getElementById("timeline-container");
  if (!container) return;

  const filtered = HISTORY_TIMELINE.filter(node => {
    return activeEraFilter === 'all' || node.era === activeEraFilter;
  });

  container.innerHTML = filtered.map((node, index) => {
    const title = activeLanguage === 'ur' ? node.titleUr : node.titleEn;
    const description = activeLanguage === 'ur' ? node.descUr : node.descEn;
    
    // Reverse side templates alternate rows on wide desktops
    const alignmentClass = index % 2 === 0 ? "md:pr-14 md:text-right" : "md:pl-14 md:left-1/2";
    const nodePositionClass = index % 2 === 0 ? "md:left-auto md:right-1/2 md:-mr-[1px]" : "";

    return `
      <div class="relative pl-10 md:pl-0 md:w-1/2 ${nodePositionClass} slide-in-node" style="animation-delay: ${index * 100}ms">
        
        <!-- Center timeline dot indicator -->
        <div class="absolute left-0 top-1.5 md:left-auto md:right-0 md:translate-x-[7px] w-3 h-3 bg-pak-green rounded-full timeline-dot z-10" />

        <!-- Actual text bubble -->
        <div class="p-6 bg-white border border-emerald-950/5 rounded-2.5xl shadow-3xs hover:border-emerald-300 transition-all ${alignmentClass}">
          <span class="inline-block text-pak-gold text-[10px] font-mono font-black tracking-wider bg-emerald-950 px-2.5 py-0.5 rounded-full mb-3 shadow-inner">
            ${node.year}
          </span>
          
          <h4 class="text-base md:text-lg font-serif font-black tracking-tight text-gray-950 mb-2 leading-tight">
            ${title}
          </h4>

          <!-- Optional bilingual small text inside history bubble -->
          ${activeLanguage === 'both' ? `
            <h5 class="font-urdu text-sm text-pak-gold leading-none pb-2 font-bold">${node.titleUr}</h5>
          ` : ''}

          <p class="text-xs text-gray-500 font-light leading-relaxed">
            ${description}
          </p>
        </div>

      </div>
    `;
  }).join("");
}

// ==========================================
// 7. ITINERARY DAY PLANNER CONTROLLER
// ==========================================

function renderItineraryTabs() {
  const container = document.getElementById("itinerary-tabs");
  if (!container) return;

  container.innerHTML = ITINERARIES.map((it, idx) => {
    const isSelected = activeItineraryIdx === idx;
    const title = activeLanguage === 'ur' ? it.titleUr : it.title;
    
    return `
      <button
        onclick="switchItinerary(${idx})"
        class="flex-1 text-left p-5 rounded-2.5xl border transition-all cursor-pointer ${
          isSelected
            ? "bg-[#012517] text-[#fcfbf7] border-emerald-900 shadow-md"
            : "bg-white text-gray-650 border-emerald-950/5 hover:bg-emerald-50"
        }"
      >
        <span class="text-[9px] font-mono tracking-widest font-extrabold uppercase ${isSelected ? 'text-pak-gold' : 'text-gray-400'} block mb-1">
          THEME ROUTE ${idx + 1} • ${it.duration}
        </span>
        <h4 class="text-sm md:text-base font-serif font-bold text-current">
          ${title}
        </h4>
      </button>
    `;
  }).join("");
}

function switchItinerary(itIdx) {
  activeItineraryIdx = itIdx;
  activeDayIdx = 0; // Reset active day tab to 1st tab of the new tour route
  renderItineraryTabs();
  renderActiveDayPlanner();
}

function selectPlannerDay(dayIdx) {
  activeDayIdx = dayIdx;
  renderActiveDayPlanner();
}

function renderActiveDayPlanner() {
  const rail = document.getElementById("day-selector-rail");
  const contentBox = document.getElementById("active-day-content");
  if (!rail || !contentBox) return;

  const activeItinerary = ITINERARIES[activeItineraryIdx];
  const totalDays = activeItinerary.days;

  // Render day select buttons on the left
  rail.innerHTML = totalDays.map((item, idx) => {
    const isSelected = activeDayIdx === idx;
    const dayLabel = activeLanguage === 'ur' ? item.dayUr : item.day;
    return `
      <button
        onclick="selectPlannerDay(${idx})"
        class="px-4 py-2.5 lg:p-4 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center justify-between text-left cursor-pointer ${
          isSelected
            ? "bg-pak-green text-white shadow-md font-bold"
            : "bg-emerald-50 text-gray-550 hover:bg-emerald-100"
        }"
      >
        <span>${dayLabel}</span>
        <i data-lucide="chevron-right" class="hidden lg:block w-3 h-3 ml-2 ${isSelected ? 'opacity-100' : 'opacity-0'}"></i>
      </button>
    `;
  }).join("");

  // Render active Day descriptions on the right
  const currentDay = totalDays[activeDayIdx];
  const heading = activeLanguage === 'ur' ? currentDay.dayUr : `${currentDay.day} Forecast & Itinerary`;

  contentBox.innerHTML = `
    <div class="space-y-6">
      
      <!-- Day Headers -->
      <div class="border-b border-emerald-50 pb-4 flex flex-col sm:flex-row justify-between items-baseline gap-2">
        <div>
          <span class="text-[9px] font-mono text-pak-gold tracking-widest uppercase font-extrabold">Active Exploration Segment</span>
          <h4 class="text-lg md:text-2xl font-serif font-black tracking-tight text-gray-950 mt-1">
            ${heading}
          </h4>
        </div>
        <div class="flex items-center space-x-2 text-pak-green font-mono text-xs bg-emerald-50 px-3 py-1 rounded-full">
          <i data-lucide="trending-up" class="w-3.5 h-3.5 text-pak-gold"></i>
          <span>Elevation: ${currentDay.elevation}</span>
        </div>
      </div>

      <!-- Specific Theme text -->
      <div class="space-y-2">
        <h5 class="text-sm md:text-base font-bold text-emerald-900">${currentDay.theme}</h5>
        <p class="text-xs md:text-sm text-gray-555 leading-relaxed font-light">
          ${currentDay.activity}
        </p>
      </div>

      <!-- Highlight boxes -->
      <div class="bg-pak-light border border-emerald-950/5 rounded-2xl p-5 flex items-center gap-4">
        <div class="bg-pak-gold/15 p-2 rounded-lg text-pak-gold">
          <i data-lucide="award" class="w-5 h-5 text-[#91712a]"></i>
        </div>
        <div>
          <h6 class="text-[9px] font-mono font-bold tracking-wider text-gray-400 uppercase">Today's Photogenic Prize Highlight</h6>
          <p class="text-xs font-semibold text-[#8a681e] mt-0.5">${currentDay.highlight}</p>
        </div>
      </div>

      <!-- Checklist tracker interactive nodes -->
      <div class="space-y-2">
        <h6 class="text-[10px] font-mono font-bold uppercase tracking-widest text-[#a8b7ad]">Interactive Day Checklist Checklist</h6>
        <div class="flex flex-col sm:flex-row gap-3">
          <label class="flex items-center space-x-2.5 bg-white border border-emerald-950/5 px-4 py-2.5 rounded-xl cursor-pointer select-none">
            <input type="checkbox" defaultchecked class="accent-pak-green w-4 h-4 rounded" />
            <span class="text-xs text-gray-550 font-light">Pack thermal layer jackets</span>
          </label>
          <label class="flex items-center space-x-2.5 bg-white border border-emerald-950/5 px-4 py-2.5 rounded-xl cursor-pointer select-none" id="check-camera">
            <input type="checkbox" defaultchecked class="accent-pak-green w-4 h-4 rounded" />
            <span class="text-xs text-gray-550 font-light">Charge camera batteries</span>
          </label>
        </div>
      </div>

    </div>
  `;

  lucide.createIcons();
}

// ==========================================
// 8. CULTURAL CORRIDOR SYSTEM (GASTRO & PHRASES)
// ==========================================

function switchCultureMode(mode) {
  activeCultureCategory = mode;

  const btnFood = document.getElementById("culture-btn-food");
  const btnLang = document.getElementById("culture-btn-language");

  if (mode === 'food') {
    btnFood.className = "px-6 py-3 rounded-full text-xs font-bold flex items-center gap-2 transition-all bg-pak-green text-white shadow-md border border-transparent shadow-emerald-950/20";
    btnLang.className = "px-6 py-3 rounded-full text-xs font-bold flex items-center gap-2 transition-all bg-white text-gray-650 border border-emerald-950/5 hover:bg-emerald-50";
  } else {
    btnFood.className = "px-6 py-3 rounded-full text-xs font-bold flex items-center gap-2 transition-all bg-white text-gray-650 border border-emerald-950/5 hover:bg-emerald-50";
    btnLang.className = "px-6 py-3 rounded-full text-xs font-bold flex items-center gap-2 transition-all bg-pak-green text-white shadow-md border border-transparent shadow-emerald-950/20";
  }

  renderCultureCorridor();
}

function renderCultureCorridor() {
  const container = document.getElementById("culture-grid-container");
  if (!container) return;

  if (activeCultureCategory === 'food') {
    // Generate Gourmet Cards
    container.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        ${GOURMET_DISHES.map((dish, index) => {
          return `
            <div
              class="flip-card h-80 rounded-3xl"
              onclick="toggleFlipCard(this)"
            >
              <div class="flip-card-inner">
                
                <!-- FRONT SIDE (Visual image and title) -->
                <div class="flip-card-front bg-white border border-emerald-950/5 shadow-3xs flex flex-col justify-between overflow-hidden">
                  <div class="relative h-2/3 select-none">
                    <img src="${dish.image}" alt="${dish.name}" class="w-full h-full object-cover" />
                    <div class="absolute inset-0 bg-gradient-to-t from-emerald-950/65 to-transparent" />
                  </div>
                  <div class="p-5 flex-grow flex justify-between items-center text-left bg-white">
                    <div>
                      <h4 class="font-serif font-black text-gray-950 text-base leading-none">${dish.name}</h4>
                      <p class="text-[9px] font-mono tracking-wide text-gray-400 mt-1 uppercase">Click to view local recipe secrets</p>
                    </div>
                    <span class="font-urdu text-xl text-pak-gold font-bold pr-1">${dish.urdu}</span>
                  </div>
                </div>

                <!-- BACK SIDE (Slogan and recipe descriptions) -->
                <div class="flip-card-back bg-emerald-950 border border-emerald-900 p-6 flex flex-col justify-between text-left rounded-3xl">
                  <div class="space-y-4 text-[#fcfbf7]">
                    <div class="flex justify-between items-center border-b border-white/10 pb-2">
                      <span class="font-urdu text-lg text-pak-gold leading-none font-bold">${dish.urdu}</span>
                      <i data-lucide="info" class="w-4 h-4 text-emerald-300"></i>
                    </div>
                    <h5 class="text-sm font-serif font-bold text-white">${dish.slogan}</h5>
                    <p class="text-xs text-emerald-100/80 font-light leading-relaxed">
                      ${dish.desc}
                    </p>
                  </div>
                  
                  <div class="text-[9px] text-center font-mono tracking-widest text-[#a1b8aa] uppercase pt-2 border-t border-white/5">
                    Click card to flip back
                  </div>
                </div>

              </div>
            </div>
          `;
        }).join("")}
      </div>
    `;
  } else {
    // Generate Language Vocabulary Cards
    container.innerHTML = `
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        ${LANGUAGE_PHRASES.map((item, index) => {
          return `
            <div
              class="flip-card h-72 rounded-3xl"
              onclick="toggleFlipCard(this)"
            >
              <div class="flip-card-inner">
                
                <!-- FRONT SIDE -->
                <div class="flip-card-front bg-white border border-emerald-950/5 shadow-3xs p-6 flex flex-col justify-between text-left">
                  <div class="space-y-3">
                    <div class="bg-emerald-50 text-pak-green w-9 h-9 rounded-lg flex items-center justify-center border border-emerald-100 shadow-inner">
                      <i data-lucide="languages" class="w-4 h-4 text-pak-gold"></i>
                    </div>
                    <h4 class="text-sm text-gray-400 font-mono tracking-wider font-extrabold uppercase">English phrase</h4>
                    <p class="text-base font-serif font-bold text-gray-950 leading-tight">${item.english}</p>
                  </div>

                  <div class="text-[9px] font-mono tracking-wide text-gray-400 uppercase pt-2 border-t border-emerald-50 flex justify-between">
                    <span>Click to speak Urdu</span>
                    <i data-lucide="eye" class="w-3 h-3 text-pak-gold"></i>
                  </div>
                </div>

                <!-- BACK SIDE -->
                <div class="flip-card-back bg-pak-green border border-emerald-900 p-6 flex flex-col justify-between text-left rounded-3xl">
                  <div class="space-y-4 text-white">
                    <div class="flex justify-between items-center pb-2 border-b border-white/10">
                      <span class="bg-emerald-950/80 text-white font-mono text-[9px] px-2 py-0.5 rounded-full border border-white/5">PRONUNCIATION</span>
                      <button onclick="overrideSpeakUrdu('${item.audioText}'); event.stopPropagation();" class="text-pak-gold hover:text-white transition-colors bg-emerald-950/50 p-1.5 rounded-full cursor-pointer border border-emerald-800">
                        <i data-lucide="volume-2" class="w-4 h-4"></i>
                      </button>
                    </div>

                    <div class="space-y-1">
                      <h4 class="font-urdu text-2xl font-bold text-pak-gold leading-normal text-right">${item.urdu}</h4>
                      <p class="text-xs font-bold text-white tracking-wide font-sans italic text-left">"${item.romanUrdu}"</p>
                    </div>

                    <p class="text-[11px] text-emerald-100/95 font-light leading-relaxed">
                      ${item.literal}
                    </p>
                  </div>

                  <div class="text-[9px] text-center font-mono tracking-widest text-[#a1b8aa] uppercase border-t border-white/5 pt-1 select-none">
                    Click card to flip back
                  </div>
                </div>

              </div>
            </div>
          `;
        }).join("")}
      </div>
    `;
  }

  lucide.createIcons();
}

// Flash card interactive flips
function toggleFlipCard(cardEl) {
  cardEl.classList.toggle("is-flipped");
}

// Built-in speech synthesizers to vocalize Urdu greetings
function overrideSpeakUrdu(phraseText) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(phraseText);
    utterance.lang = 'ur-PK'; // Urdu language localization regional specs
    utterance.rate = 0.85; // slightly slower pronunciation for foreign learners
    window.speechSynthesis.speak(utterance);
  } else {
    alert("Voice synthesis is currently locked in your host browser environment.");
  }
}

// ==========================================
// 9. DYNAMIC RATE CALCULATOR ENGINE
// ==========================================

function calculateExchange() {
  const amountInput = document.getElementById("currency-amount");
  const selectNode = document.getElementById("currency-select");
  const outputNode = document.getElementById("currency-output");
  const logRateNode = document.getElementById("conversion-rate-log");

  if (!amountInput || !selectNode || !outputNode) return;

  const amount = parseFloat(amountInput.value) || 0;
  const currency = selectNode.value;

  // Static market scale factors
  const rates = {
    USD: 278.4,
    EUR: 301.2,
    GBP: 354.6,
    CAD: 203.1,
    AED: 75.8
  };

  const scaleFactor = rates[currency] || 278.4;
  const result = amount * scaleFactor;

  // Print localized stats
  outputNode.innerHTML = `₨ ${result.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })} <span class="text-base text-white tracking-tight font-medium">PKR</span>`;
  logRateNode.innerHTML = `Current budget scale rate: 1 ${currency} = ~${scaleFactor} PKR`;
}

// ==========================================
// 10. MODAL DISPLAY SYSTEM
// ==========================================

function triggerPlaceModal(placeId) {
  const modal = document.getElementById("places-modal");
  const place = TOURIST_PLACES.find(item => item.id === placeId);

  if (!modal || !place) return;

  // Bind values dynamically
  document.getElementById("modal-image").src = place.image;
  document.getElementById("modal-image").alt = place.name;
  document.getElementById("modal-province").innerHTML = activeLanguage === 'ur' ? place.provinceUrdu : place.province;
  document.getElementById("modal-title-en").innerHTML = place.name;
  document.getElementById("modal-title-ur").innerHTML = place.nameUrdu;
  document.getElementById("modal-desc-en").innerHTML = place.descEn;
  document.getElementById("modal-desc-ur").innerHTML = place.descUr;
  document.getElementById("modal-season").innerHTML = place.bestSeason;
  document.getElementById("modal-fee").innerHTML = place.entryFee;
  document.getElementById("modal-travel").innerHTML = place.transitInfo;

  // Highlights list
  const hlContainer = document.getElementById("modal-highlights");
  hlContainer.innerHTML = place.highlights.map(hl => {
    return `
      <span class="bg-emerald-50 text-pak-green border border-emerald-100 px-3 py-1 rounded-full text-[11px] font-medium">
        ✨ ${hl}
      </span>
    `;
  }).join("");

  // Lock scroll on background page
  document.body.classList.add("overflow-hidden");

  // Show
  modal.classList.remove("hidden");
  
  lucide.createIcons();
}

function closePlacesModal() {
  const modal = document.getElementById("places-modal");
  if (!modal) return;

  modal.classList.add("hidden");
  
  // Re-enable scroll
  document.body.classList.remove("overflow-hidden");
}
