// Demargo Interactive & Multi-Language System

let currentLang = localStorage.getItem('demargo_lang') || 'uz';

const translations = {
  uz: {
    nav_home: "Bosh sahifa",
    nav_logistics: "Logistika",
    nav_develop: "Dasturchilar",
    nav_calculator: "Kalkulyator",
    nav_features: "Imkoniyatlar",
    nav_faq: "FAQ",
    btn_book: "Yukni Band Qilish",
    btn_start: "Boshlash",
    
    hero_badge: "Yangi Avlod Raqamli Logistika Platformasi",
    hero_title: "Mukofotga sazovor logistika xizmatlari. Texnologiya va mutaxassislar integratsiyasi.",
    hero_subtitle: "Kompaniyalar ta'minot zanjiridagi nosozliklar sabab har kuni mablag' yo'qotmoqda. Demargo xarajatlarni tejash va taktik yaxshilanishlarni ta'minlaydigan raqamli freight forwarding orqali potensialingizni ochib beradi.",
    hero_btn_network: "Logistika Tarmog'imizni Ko'rish",
    hero_btn_demo: "Videoni Tomosha Qilish",
    
    metric_ontime: "O'z Vaqtida Yetkazish",
    metric_volume: "Boshqarilgan Yuk Hajmi",
    metric_ports: "Qamrab Olingan Portlar",
    
    float_vessel: "Kema #DM-8892",
    float_status: "Holati: Yo'lda • Jadvallarga muvofiq",
    status_live: "Jonli",
    float_customs: "Bojxona Rasmiylashtirildi",
    float_tariff: "Avtomatik Tarif Optimizatsiyasi",
    
    partners_title: "DUNYO BO'YLAB SOHADAGI ETAKCHILAR ISHONCHI",
    
    dev_title: "Yagona kod bazasi bilan barcha foydalanuvchilar qurilmalari uchun ishlab chiqing.",
    dev_desc: "Hot reload, haqiqiy native imkoniyatlar va ijodingizni qo'shing — qisqa vaqt ichida foydalanuvchilaringiz xohlagan ilovaga ega bo'lasiz. Yuk ma'lumotlari va buyurtmalarni kuzatish API'larini muammosiz birlashtiring.",
    dev_learn_more: "Ilova/dasturlash haqida ko'proq bilib oling",
    badge_latency: "Sub-10ms API Latency",
    badge_nodes: "Global Edge Webhook Tugunlari",
    
    calc_title: "Yuk Narxlari va Yetkazish Vaqtini Hisoblash",
    calc_subtitle: "Dengiz, havo va quruqlik yo'llari bo'yicha shaffof narxlarni darhol oling.",
    label_mode: "Yetkazib Berish Usuli",
    opt_ocean: "Dengiz Yuklari (FCL / LCL)",
    opt_air: "Havo Ekspress Yuklari",
    opt_road: "Avtomobil va Ichki Tashuvlar",
    label_origin: "Jo'nash Porti / Shahri",
    label_dest: "Manzil Porti / Shahri",
    label_weight: "Jami Vazn (KG)",
    res_est_cost: "Hisoblangan Yuk Qiymati",
    res_guaranteed: "Kafolatlangan Tarif",
    res_transit: "Taxminiy Transit Vaqti",
    res_co2: "Uglerod Tejamkorligi Score",
    res_btn_reserve: "Yuk Joyini Hozir Band Qilish",
    
    net_title: "180+ Xalqaro Savdo Yo'nalishlarida To'liq Shaffoflik",
    net_desc: "Qorong'i nuqtalar qolmadi. Real-vaqt rejimida IoT datchiklari va kelajakdagi kelish vaqtini bashorat qiluvchi ETA algoritmlari bilan kema, aviatashuv va yuk mashinasi yo'nalishlarini kuzating.",
    feat_1_title: "Jonli GPS va Harorat Telemetriyasi",
    feat_1_desc: "Nozik va muzlatilgan yuklarni real-vaqtdagi harorat ogohlantirishlari bilan nazorat qiling.",
    feat_2_title: "Avtomatlashtirilgan Bojxona Rasmiylashtiruvi",
    feat_2_desc: "Sun'iy intellect (AI) yordamida HS Code tasniflashi bojxona ushlanib qolishlarini 65% dan ortiqqa kamaytiradi.",
    feat_3_title: "Tirbandlikni Prognoz Qilish va Marshrutlash",
    feat_3_desc: "Tashuvchilarni avtomatik o'zgartirish orqali portlardagi kechikishlarni aylanib o'ting.",
    
    faq_title: "Savollaringiz Bormi? Bizda Javoblar Bor.",
    faq_desc: "Demargo Raqamli Logistikaga o'tish bo'yicha bilishingiz kerak bo'lgan barcha narsalar.",
    faq_q1: "Demargo qanday qilib an'anaviy ekspeditorlarga qaraganda arzonroq narxlarni kafolatlaydi?",
    faq_a1: "Demargo dengiz tashuvchilari va havo yuklari provayderlari bilan eng yaxshi tariflarni kelishish uchun minglab jo'natuvchilar yuk hajmini birlashtiradi. Bizning avtomatlashtirilgan tizimimiz vositachilar ustama haqini yo'qotadi.",
    faq_q2: "Dasturchilar Demargo API'sini qanchalik tez ulashi mumkin?",
    faq_a2: "Ko'pgina dasturlash jamoalari 2 soatdan kamroq vaqt ichida integratsiya qiladi. Biz Node.js, Python, Go va PHP uchun tayyor SDK kutubxonalarini taqdim etamiz.",
    faq_q3: "Bojxona hujjatlari va boj to'lovlarini ham hal qilasizmi?",
    faq_a3: "Ha! Tizimimiz kotirovkalar, konosament (bill of lading), tijorat hisob-fakturalarini avtomatik shakllantiradi hamda AQSH, Yevropa va Osiyo bojxona organlariga to'g'ridan-to'g'ri topshiradi.",
    
    cta_title: "Xalqaro ta'minot zanjiringizni o'zgartirishga tayyormisiz?",
    cta_subtitle: "Demargo bilan aqlli, tezroq va arzonroq yuk tashiyotgan 4,500+ korxonalarga qo'shiling.",
    cta_placeholder: "Ishchi pochtangizni kiriting",
    cta_btn: "Bepul Audit So'rash",
    
    footer_desc: "Texnologiyaga asoslangan va mutaxassislar tomonidan yetkazib beriladigan mukofotga sazovor logistika xizmatlari.",
    footer_col_solutions: "Yechimlar",
    foot_ocean: "Dengiz Yuklari (FCL/LCL)",
    foot_air: "Havo Ekspress Yuklari",
    foot_road: "Quruqlik Logistikasi",
    foot_3pl: "Omborxona va 3PL",
    footer_col_devs: "Dasturchilar",
    footer_col_contact: "Dasturchi Aloqasi"
  },
  ru: {
    nav_home: "Главная",
    nav_logistics: "Логистика",
    nav_develop: "Разработчикам",
    nav_calculator: "Калькулятор",
    nav_features: "Возможности",
    nav_faq: "FAQ",
    btn_book: "Забронировать",
    btn_start: "Начать",
    
    hero_badge: "Цифровая Логистическая Платформа Нового Поколения",
    hero_title: "Отмеченные наградами логистические услуги. Технологии и экспертиза.",
    hero_subtitle: "Бизнес ежедневно теряет средства из-за сбоев в цепочках поставок. Demargo раскрывает ваш потенциал с помощью цифрового экспедирования грузоперевозок.",
    hero_btn_network: "Наша Логистическая Сеть",
    hero_btn_demo: "Смотреть Демо",
    
    metric_ontime: "Своевременная Доставка",
    metric_volume: "Объем Грузов",
    metric_ports: "Охвачено Портов",
    
    float_vessel: "Судно #DM-8892",
    float_status: "Статус: В пути • По расписанию",
    status_live: "Онлайн",
    float_customs: "Таможня Пройдена",
    float_tariff: "Авто-Оптимизация Тарифов",
    
    partners_title: "НАМ ДОВЕРЯЮТ МИРОВЫЕ ЛИДЕРЫ ОТРАСЛИ",
    
    dev_title: "Разрабатывайте для всех устройств пользователей с единой кодовой базой.",
    dev_desc: "Добавьте hot reload, нативные возможности и свою креативность — вы получите нужное приложение в кратчайшие сроки. Объединяйте API отслеживания заказов и складов.",
    dev_learn_more: "Узнать больше о разработке",
    badge_latency: "Задержка API <10 мс",
    badge_nodes: "Глобальные Узлы Webhook",
    
    calc_title: "Расчет Стоимости и Сроков Доставки",
    calc_subtitle: "Мгновенно получайте прозрачные тарифы для морских, авиа и автоперевозок.",
    label_mode: "Способ Доставки",
    opt_ocean: "Морские Перевозки (FCL / LCL)",
    opt_air: "Авиа Экспресс",
    opt_road: "Автомобильные и Внутренние",
    label_origin: "Порт / Город Отправления",
    label_dest: "Порт / Город Назначения",
    label_weight: "Общий Вес (КГ)",
    res_est_cost: "Расчетная Стоимость",
    res_guaranteed: "Гарантированный Тариф",
    res_transit: "Срок Транзита",
    res_co2: "Экономия CO2",
    res_btn_reserve: "Забронировать Место Сейчас",
    
    net_title: "Полная Прозрачность на 180+ Мировых Маршрутах",
    net_desc: "Больше никаких слепых зон. Отслеживайте маршруты судов, авиарейсов и грузовиков в реальном времени с помощью датчиков IoT и алгоритмов прогнозирования ETA.",
    feat_1_title: "Живая Телеметрия GPS и Температуры",
    feat_1_desc: "Контролируйте скоропортящиеся и охлаждаемые грузы с уведомлениями в реальном времени.",
    feat_2_title: "Автоматизированное Таможенное Оформление",
    feat_2_desc: "Классификация ТН ВЭД с помощью ИИ сокращает задержки на таможне более чем на 65%.",
    feat_3_title: "Прогнозирование и Перенаправление Перегрузок",
    feat_3_desc: "Обходите задержки в портах благодаря автоматической смене перевозчиков.",
    
    faq_title: "Есть Вопросы? У Нас Есть Ответы.",
    faq_desc: "Все, что вам нужно знать о переходе на цифровую логистику Demargo.",
    faq_q1: "Как Demargo гарантирует более низкие тарифы по сравнению с традиционными экспедиторами?",
    faq_a1: "Demargo объединяет объемы грузов тысяч отправителей для получения лучших ставок у морских и авиаперевозчиков. Автоматизация исключает наценки посредников.",
    faq_q2: "Как быстро разработчики могут интегрировать API Demargo?",
    faq_a2: "Большинство команд внедряют API менее чем за 2 часа. Мы предоставляем готовые SDK для Node.js, Python, Go и PHP.",
    faq_q3: "Занимаетесь ли вы таможенными документами и пошлинами?",
    faq_a3: "Да! Наша платформа автоматически генерирует накладные (Bill of Lading), коммерческие инвойсы и подает декларации в таможенные органы США, ЕС, РФ и Азии.",
    
    cta_title: "Готовы трансформировать вашу цепочку поставок?",
    cta_subtitle: "Присоединяйтесь к 4,500+ компаниям, перевозящим грузы умнее и дешевле с Demargo.",
    cta_placeholder: "Введите ваш рабочий email",
    cta_btn: "Запросить Бесплатный Аудит",
    
    footer_desc: "Отмеченные наградами цифровые логистические услуги на базе технологий.",
    footer_col_solutions: "Решения",
    foot_ocean: "Морские Перевозки (FCL/LCL)",
    foot_air: "Авиа Экспресс",
    foot_road: "Наземная Логистика",
    foot_3pl: "Склады и 3PL",
    footer_col_devs: "Разработчикам",
    footer_col_contact: "Контакты Разработчика"
  },
  en: {
    nav_home: "Home",
    nav_logistics: "Logistics",
    nav_develop: "Developers",
    nav_calculator: "Rate Calculator",
    nav_features: "Features",
    nav_faq: "FAQ",
    btn_book: "Book Freight",
    btn_start: "Get Started",
    
    hero_badge: "Next-Gen Digital Freight Forwarding",
    hero_title: "Award-winning logistics services. Powered by technology, delivered by experts.",
    hero_subtitle: "Businesses are leaving money on the table every day due to flawed supply chain opportunities. Demargo unlocks your potential with digital freight forwarding that drives cost savings.",
    hero_btn_network: "See Our Logistics Network",
    hero_btn_demo: "Watch Demo Video",
    
    metric_ontime: "On-Time Delivery Rate",
    metric_volume: "Freight Volume Managed",
    metric_ports: "Global Ports Covered",
    
    float_vessel: "Vessel #DM-8892",
    float_status: "Status: In Transit • On Schedule",
    status_live: "Live",
    float_customs: "Customs Cleared",
    float_tariff: "Automated Tariff Optimization",
    
    partners_title: "TRUSTED BY INDUSTRY LEADERS WORLDWIDE",
    
    dev_title: "Develop for all your users' devices with just one codebase.",
    dev_desc: "Add hot reload, true native capabilities, and your creativity, and you'll have the app your users want in no time. Unify freight data, order tracking, and warehouse APIs effortlessly.",
    dev_learn_more: "Learn more about app/dev",
    badge_latency: "Sub-10ms API Latency",
    badge_nodes: "Global Edge Webhook Nodes",
    
    calc_title: "Calculate Freight Rates & Delivery Time",
    calc_subtitle: "Get transparent pricing across ocean, air, and overland routes instantly.",
    label_mode: "Shipping Mode",
    opt_ocean: "Ocean Freight (FCL / LCL)",
    opt_air: "Air Express Freight",
    opt_road: "Road & Inland Transport",
    label_origin: "Origin Port / City",
    label_dest: "Destination Port / City",
    label_weight: "Total Weight (KG)",
    res_est_cost: "Estimated Freight Cost",
    res_guaranteed: "Guaranteed Rate",
    res_transit: "Estimated Transit Time",
    res_co2: "Carbon Offset Score",
    res_btn_reserve: "Reserve Freight Capacity Now",
    
    net_title: "End-to-End Visibility Across 180+ Global Trade Routes",
    net_desc: "No more blind spots. Track container vessel telemetry, air cargo manifests, and inland truck routes with real-time IoT sensors and predictive ETA algorithms.",
    feat_1_title: "Live GPS & Temperature Telemetry",
    feat_1_desc: "Monitor sensitive refrigerated cargo with real-time temperature alerts.",
    feat_2_title: "Automated Customs Clearance",
    feat_2_desc: "AI-driven HS Code classification reduces customs delays by over 65%.",
    feat_3_title: "Predictive Congestion Rerouting",
    feat_3_desc: "Bypass port delays automatically with dynamic carrier switching.",
    
    faq_title: "Got Questions? We Have Answers.",
    faq_desc: "Everything you need to know about switching to Demargo Digital Logistics.",
    faq_q1: "How does Demargo guarantee lower freight costs compared to traditional forwarders?",
    faq_a1: "Demargo aggregates shipping volume across thousands of global shippers to negotiate spot and contract rates with ocean carriers and air freight providers. Our automated system eliminates middleman markups.",
    faq_q2: "How fast can developers integrate the Demargo API?",
    faq_a2: "Most development teams go live in under 2 hours. We provide pre-built SDKs for Node.js, Python, Go, and PHP.",
    faq_q3: "Do you handle customs documentation and duties?",
    faq_a3: "Yes! Our platform automatically generates bill of ladings, commercial invoices, and handles customs filing directly with US CBP, EU Customs, and Asian customs authorities.",
    
    cta_title: "Ready to transform your global supply chain?",
    cta_subtitle: "Join over 4,500+ businesses shipping smarter, faster, and cheaper with Demargo.",
    cta_placeholder: "Enter your business email",
    cta_btn: "Request Free Audit",
    
    footer_desc: "Award-winning digital logistics services powered by technology, delivered by experts.",
    footer_col_solutions: "Solutions",
    foot_ocean: "Ocean Freight (FCL/LCL)",
    foot_air: "Air Cargo Express",
    foot_road: "Overland Logistics",
    foot_3pl: "Warehousing & 3PL",
    footer_col_devs: "Developers",
    footer_col_contact: "Contact Developer"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initNavLinksScrollSpy();
  initMetricCounters();
  setLanguage(currentLang);
  calculateFreight();
});

// ScrollSpy and Active Nav Links
function initNavLinksScrollSpy() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Click handler
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Scroll active detection
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.scrollY;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    if (current) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('active');
        }
      });
    }
  });
}

function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Language Switcher Function
function setLanguage(lang) {
  if (!translations[lang]) lang = 'uz';
  currentLang = lang;
  localStorage.setItem('demargo_lang', lang);

  // Update select input value
  const langSelect = document.getElementById('lang-select');
  if (langSelect) langSelect.value = lang;

  const dict = translations[lang];

  // Translate all text elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Translate placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // Recalculate freight to update language specific labels (e.g. days)
  calculateFreight();
}

// Code Editor Tab Switcher
function switchCodeTab(lang) {
  const tabs = document.querySelectorAll('.code-tab');
  tabs.forEach(tab => tab.classList.remove('active'));

  const activeTab = Array.from(tabs).find(tab => tab.textContent.toLowerCase().includes(lang));
  if (activeTab) activeTab.classList.add('active');

  document.getElementById('code-js').classList.add('hidden');
  document.getElementById('code-py').classList.add('hidden');
  document.getElementById('code-curl').classList.add('hidden');

  if (lang === 'js') document.getElementById('code-js').classList.remove('hidden');
  if (lang === 'py') document.getElementById('code-py').classList.remove('hidden');
  if (lang === 'curl') document.getElementById('code-curl').classList.remove('hidden');
}

function copyCode() {
  const activeCode = document.querySelector('.code-body pre:not(.hidden) code');
  if (activeCode) {
    navigator.clipboard.writeText(activeCode.innerText).then(() => {
      const btn = document.querySelector('.btn-copy');
      btn.innerHTML = '<i class="fa-solid fa-check text-green"></i>';
      setTimeout(() => {
        btn.innerHTML = '<i class="fa-regular fa-copy"></i>';
      }, 2000);
    });
  }
}

// Freight Rate Calculator with Russian Ports & International Distance Routing
function calculateFreight() {
  const mode = document.getElementById('calc-mode').value;
  const origin = document.getElementById('calc-origin').value;
  const dest = document.getElementById('calc-dest').value;
  const weight = parseFloat(document.getElementById('calc-weight').value) || 1000;

  let baseRatePerKg = 0.45; // Ocean rate
  let minDays = 14;
  let maxDays = 22;
  let co2Reduction = '-42%';

  if (mode === 'air') {
    baseRatePerKg = 2.80;
    minDays = 3;
    maxDays = 5;
    co2Reduction = '-25%';
  } else if (mode === 'road') {
    baseRatePerKg = 0.85;
    minDays = 7;
    maxDays = 10;
    co2Reduction = '-35%';
  }

  // Distance & Port Modifiers including Russia
  let routeFactor = 1.0;
  
  if (origin === dest) {
    routeFactor = 0.3; // Intra-city / local
  } else if (origin.startsWith('RU') || dest.startsWith('RU')) {
    // Russia routes
    if ((origin.startsWith('RU') && dest === 'UZTAS') || (origin === 'UZTAS' && dest.startsWith('RU'))) {
      routeFactor = 0.95; // Central Asia - Russia corridor
      minDays = mode === 'air' ? 2 : (mode === 'road' ? 5 : 12);
      maxDays = minDays + 4;
    } else {
      routeFactor = 1.35; // Russia international corridor
      minDays = mode === 'air' ? 3 : (mode === 'road' ? 8 : 18);
      maxDays = minDays + 5;
    }
  } else if ((origin === 'CNSHA' && dest === 'NLTAM') || (origin === 'USLAX' && dest === 'NLTAM')) {
    routeFactor = 1.45; // Transpacific / Transatlantic
  }

  let totalCost = Math.round(weight * baseRatePerKg * routeFactor + 350);
  if (totalCost < 450) totalCost = 450;

  const formattedPrice = totalCost.toLocaleString('en-US');

  // Days unit translation
  let dayUnit = 'Kun';
  if (currentLang === 'ru') dayUnit = 'Дней';
  if (currentLang === 'en') dayUnit = 'Days';

  document.getElementById('result-price').textContent = formattedPrice;
  document.getElementById('result-days').textContent = `${minDays} - ${maxDays} ${dayUnit}`;
  document.getElementById('result-co2').textContent = `${co2Reduction} CO2`;
}

function bookQuote() {
  const price = document.getElementById('result-price').textContent;
  let msg = `Yuk joyini band qilish so'rovi yuborildi!\nKafolatlangan tarif: $${price} USD.\nMutaxassisimiz 5 daqiqada siz bilan bog'lanadi.`;
  
  if (currentLang === 'ru') {
    msg = `Запрос на бронирование отправлен!\nГарантированная ставка: $${price} USD.\nНаш специалист свяжется с вами в течение 5 минут.`;
  } else if (currentLang === 'en') {
    msg = `Booking request submitted!\nGuaranteed Rate: $${price} USD.\nOur freight dispatcher will contact you within 5 minutes.`;
  }
  
  alert(msg);
}

function toggleFaq(button) {
  const faqItem = button.parentElement;
  const isActive = faqItem.classList.contains('active');

  document.querySelectorAll('.faq-item').forEach(item => {
    item.classList.remove('active');
  });

  if (!isActive) {
    faqItem.classList.add('active');
  }
}

function initMetricCounters() {
  const counters = document.querySelectorAll('.metric-number');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseFloat(entry.target.getAttribute('data-target'));
        animateCounter(entry.target, target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
  let current = 0;
  const increment = target / 40;
  const isPercent = element.textContent.includes('%');
  const isMoney = element.textContent.includes('$');
  const isPlus = element.textContent.includes('+');

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    let display = current.toFixed(target % 1 !== 0 ? 1 : 0);
    if (isMoney) display = '$' + display + 'B+';
    else if (isPercent) display = display + '%';
    else if (isPlus) display = display + '+';
    
    element.textContent = display;
  }, 30);
}
