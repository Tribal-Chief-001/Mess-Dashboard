/* ═══════════════════════════════════════════════ */
/*  MESS INTEL V2 — Data + Logic + Views           */
/* ═══════════════════════════════════════════════ */

// ─── CONSTANTS ───
const DAYS = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
const DAY_LABELS = { monday: 'Mon', tuesday: 'Tue', wednesday: 'Wed', thursday: 'Thu', friday: 'Fri', saturday: 'Sat', sunday: 'Sun' };
const DAY_FULL = { monday: 'Monday', tuesday: 'Tuesday', wednesday: 'Wednesday', thursday: 'Thursday', friday: 'Friday', saturday: 'Saturday', sunday: 'Sunday' };
const MEALS = ['breakfast', 'lunch', 'highTea', 'dinner'];

const MEAL_TIMES = {
  breakfast: { label: 'BREAKFAST', time: '07:30 – 09:30', start: 7.5, end: 9.5 },
  lunch: { label: 'LUNCH', time: '12:15 – 14:30', start: 12.25, end: 14.5 },
  highTea: { label: 'SNACKS', time: '17:15 – 18:15', start: 17.25, end: 18.25 },
  dinner: { label: 'DINNER', time: '19:15 – 21:30', start: 19.25, end: 21.5 }
};

// Food image mapping
const FOOD_IMAGES = {
  breakfast: 'assets/food/breakfast.png',
  lunch: 'assets/food/curry.png',
  highTea: 'assets/food/snacks.png',
  dinner: 'assets/food/dal.png'
};

const CATEGORY_IMAGES = {
  biryani: 'assets/food/biryani.png',
  curry: 'assets/food/curry.png',
  breakfast: 'assets/food/breakfast.png',
  snacks: 'assets/food/snacks.png',
  dessert: 'assets/food/dessert.png',
  dal: 'assets/food/dal.png',
  roti: 'assets/food/roti.png',
  beverages: 'assets/food/beverages.png',
};

// ─── MENU DATA ───
const MENU = {
  monday: {
    breakfast: [
      { name: 'Idli & Vada', rating: 4 },
      { name: 'Sambhar', rating: 3 },
      { name: 'Chutney', rating: 3 },
      { name: 'Banana', rating: 2 },
      { name: 'Bread, Butter & Jam', rating: 3 },
      { name: 'Milk, Tea, Coffee', rating: 2 },
    ],
    lunch: [
      { name: 'Tawa Roti', rating: 3 },
      { name: 'Jeera Aloo / Sev Tamatar', rating: 3 },
      { name: 'Dhal Fry', rating: 3 },
      { name: 'Butter Milk', rating: 2 },
      { name: 'Mix Salad', rating: 2 },
      { name: 'Plain Rice – North & South', rating: 2 },
      { name: 'More Kuzhambu', rating: 2 },
      { name: 'Raw Banana Poriyal', rating: 2 },
      { name: 'Pepper Rasam', rating: 2 },
      { name: 'Pickle', rating: 2 },
    ],
    highTea: [
      { name: 'Kachori', rating: 4 },
      { name: 'Tamarind Chutney', rating: 3 },
      { name: 'Milk, Tea, Coffee', rating: 2 },
    ],
    dinner: [
      { name: 'Kadhai Mix Veg', rating: 3 },
      { name: 'Egg Gravy', rating: 3 },
      { name: 'Butter Roti / Plain Roti', rating: 2 },
      { name: 'Butter Roti / Plain Roti', rating: 2 },
      { name: 'Multi Grain Kitchadi', rating: 3 },
      { name: 'Veg Poriyal', rating: 2 },
      { name: 'Plain Rice – North & South', rating: 2 },
      { name: 'Tomato Rasam', rating: 2 },
      { name: 'Rice Kheer, Y Dhal', rating: 3 },
    ]
  },
  tuesday: {
    breakfast: [
      { name: 'Poha Jalebi', rating: 4 },
      { name: 'Pongal Chutney', rating: 3 },
      { name: 'Jeera Man', rating: 3 },
      { name: 'Mix Cutfruit Salad', rating: 3 },
      { name: 'Bread, Butter & Jam', rating: 3 },
      { name: 'Milk, Tea, Coffee', rating: 2 },
    ],
    lunch: [
      { name: 'White Channa (M.Spicy)', rating: 3 },
      { name: 'Mix Dal', rating: 3 },
      { name: 'Poori', rating: 3 },
      { name: 'Mix Salad', rating: 2 },
      { name: 'South Indian Plain Rice', rating: 2 },
      { name: 'Bottle Gourd Kuzhambu', rating: 2 },
      { name: 'Tomato Rasam', rating: 2 },
      { name: 'Butter Milk / Juice', rating: 2 },
      { name: 'Pickle', rating: 2 },
    ],
    highTea: [
      { name: 'Variety of Samosa / Aallu Gobi / Mutter', rating: 4 },
      { name: 'Red Sauce, Chutney', rating: 3 },
      { name: 'Milk, Tea, Coffee', rating: 2 },
    ],
    dinner: [
      { name: 'Butter Roti / Plain Roti', rating: 2 },
      { name: 'Fruit Custard', rating: 4 },
      { name: 'Bhindi Masala', rating: 3 },
      { name: 'Dal Tadka', rating: 3 },
      { name: 'Plain Rice – North & South', rating: 2 },
      { name: 'Pepper Rasam', rating: 2 },
      { name: 'Pickle', rating: 2 },
    ]
  },
  wednesday: {
    breakfast: [
      { name: 'Pav Bhaji, Upma', rating: 4 },
      { name: 'Chutney', rating: 3 },
      { name: 'Sprouts', rating: 2 },
      { name: 'Banana', rating: 2 },
      { name: 'Boiled Egg', rating: 3 },
      { name: 'Bread, Butter & Jam', rating: 3 },
      { name: 'Milk, Tea, Coffee', rating: 2 },
    ],
    lunch: [
      { name: 'Veg Kofta (L.Sweet)', rating: 3 },
      { name: 'Dal Tadka', rating: 3 },
      { name: 'Mutter Pulao', rating: 3 },
      { name: 'Roti', rating: 2 },
      { name: 'Fryums', rating: 2 },
      { name: 'Sweet Boondi', rating: 3 },
      { name: 'South Indian Plain Rice', rating: 2 },
      { name: 'Vegetable Sambhar', rating: 3 },
      { name: 'Paruppu Rasam', rating: 2 },
      { name: 'Pickle', rating: 2 },
    ],
    highTea: [
      { name: 'Cutlet (×2)', rating: 3 },
      { name: 'Red Chilli Sauce', rating: 3 },
      { name: 'Milk, Tea, Coffee', rating: 2 },
    ],
    dinner: [
      { name: 'Paneer Masala (L.Oil, L.Spicy)', rating: 4 },
      { name: 'Kadai Chicken Masala (L.Oil, N.Spicy)', rating: 4 },
      { name: 'Plain Dal', rating: 2 },
      { name: 'Butter Roti', rating: 3 },
      { name: 'Plain Rice – North & South', rating: 2 },
      { name: 'Ingi Rasam', rating: 2 },
      { name: 'Pickle', rating: 2 },
    ]
  },
  thursday: {
    breakfast: [
      { name: 'Aloo Paratha', rating: 5 },
      { name: 'Dahi', rating: 3 },
      { name: 'Banana', rating: 2 },
      { name: 'Bread, Butter & Jam', rating: 3 },
      { name: 'Milk, Tea, Coffee', rating: 2 },
    ],
    lunch: [
      { name: 'Rajma', rating: 4 },
      { name: 'Jeera Rice', rating: 3 },
      { name: 'Roti – Plain', rating: 2 },
      { name: 'Seasonal Veg', rating: 2 },
      { name: 'Onion', rating: 2 },
      { name: 'Mixed Veg Salad', rating: 2 },
      { name: 'Rice – Plain', rating: 2 },
      { name: 'Veg Sambar', rating: 3 },
      { name: 'Rasam', rating: 2 },
      { name: 'Beetroot Poriyal', rating: 2 },
    ],
    highTea: [
      { name: 'Cho. Noodles / Fried Idli', rating: 4 },
      { name: 'Sauce / Coconut Chutney', rating: 3 },
      { name: 'Milk, Tea, Coffee', rating: 2 },
    ],
    dinner: [
      { name: 'Egg Gravy', rating: 3 },
      { name: 'Green Peas Masala', rating: 3 },
      { name: 'Dal Fry', rating: 3 },
      { name: 'Jeera Rice', rating: 3 },
      { name: 'Butter Roti', rating: 2 },
      { name: 'Sooj. Halwa', rating: 4 },
      { name: 'Pepper Rasam', rating: 2 },
      { name: 'Pickle', rating: 2 },
      { name: 'Roti', rating: 2 },
    ]
  },
  friday: {
    breakfast: [
      { name: 'Onion Uthappam', rating: 4 },
      { name: 'Onion Tomato Chutney', rating: 3 },
      { name: 'Sprouts', rating: 2 },
      { name: 'Fruit Salad', rating: 3 },
      { name: 'Boiled Egg', rating: 3 },
      { name: 'Bread, Butter & Jam', rating: 3 },
      { name: 'Milk, Tea, Coffee', rating: 2 },
    ],
    lunch: [
      { name: 'Kadi Pakoda', rating: 3 },
      { name: 'Dal Fry', rating: 3 },
      { name: 'Plain Rice', rating: 2 },
      { name: 'Roti', rating: 2 },
      { name: 'Mix Salad', rating: 2 },
      { name: 'South Indian Plain Rice', rating: 2 },
      { name: 'Brinjal Kuzhambu', rating: 2 },
      { name: 'Veg Aviyal', rating: 3 },
    ],
    highTea: [
      { name: 'Vada Pav', rating: 5 },
      { name: 'Green Chutney', rating: 3 },
      { name: 'Milk, Tea, Coffee', rating: 2 },
    ],
    dinner: [
      { name: 'Tandoori Butter Chicken Gravy', rating: 5 },
      { name: 'Kadai Paneer', rating: 4 },
      { name: 'Dal Tadaka – Medium Spicy', rating: 3 },
      { name: 'Plain Roti', rating: 2 },
      { name: 'Plain Rice – North & South', rating: 2 },
      { name: 'Puli Rasam (Tamarind)', rating: 2 },
      { name: 'Pickle', rating: 2 },
    ]
  },
  saturday: {
    breakfast: [
      { name: 'Chole With Lemon Slice', rating: 4 },
      { name: 'Bhature', rating: 4 },
      { name: 'Mix Cutfruit Salad', rating: 3 },
      { name: 'Bread, Butter & Jam', rating: 3 },
      { name: 'Milk, Tea, Coffee', rating: 2 },
    ],
    lunch: [
      { name: 'Corn Palak', rating: 3 },
      { name: 'Ghee Rice', rating: 4 },
      { name: 'Dal Makhni', rating: 4 },
      { name: 'South Indian Plain Rice', rating: 2 },
      { name: 'Plain Roti', rating: 2 },
      { name: 'Potato Kara Poriyal', rating: 3 },
      { name: 'Pickle', rating: 2 },
      { name: 'Mix Veg. Sambar', rating: 3 },
      { name: 'Rasam', rating: 2 },
      { name: 'Butter Milk', rating: 2 },
    ],
    highTea: [
      { name: 'Bread Pakoda', rating: 3 },
      { name: 'Red Tomato Chutney', rating: 3 },
      { name: 'Milk, Tea, Coffee', rating: 2 },
    ],
    dinner: [
      { name: 'Veg. Pulao', rating: 3 },
      { name: 'Lobial Gravy', rating: 3 },
      { name: 'Plain Roti', rating: 2 },
      { name: 'Thoor Dal Fry', rating: 3 },
      { name: 'South Indian Plain Rice', rating: 2 },
      { name: 'Paruppu Rasam', rating: 2 },
      { name: 'Pickle', rating: 2 },
    ]
  },
  sunday: {
    breakfast: [
      { name: 'Masala Dosa / Mix Veg Dosa', rating: 5 },
      { name: 'Sambhar, Chutney', rating: 3 },
      { name: 'Sprouts', rating: 2 },
      { name: 'Banana', rating: 2 },
      { name: 'Boiled Egg', rating: 3 },
      { name: 'Bread, Butter & Jam', rating: 3 },
      { name: 'Milk, Tea, Coffee', rating: 2 },
    ],
    lunch: [
      { name: 'Veg Biryani', rating: 3 },
      { name: 'Chicken Biryani', rating: 5 },
      { name: 'Butter Paneer Masala', rating: 4 },
      { name: 'Dal Kolhapuri', rating: 4 },
      { name: 'Onion Raita', rating: 3 },
      { name: 'Roti', rating: 2 },
      { name: 'Pickle', rating: 2 },
    ],
    highTea: [
      { name: 'White / Red Sauce Pasta', rating: 3 },
      { name: 'Sauce / Chutney', rating: 3 },
      { name: 'Milk, Tea, Coffee', rating: 2 },
    ],
    dinner: [
      { name: 'Aloo White Peas Masala', rating: 3 },
      { name: 'Dal Makhani', rating: 4 },
      { name: 'Plain Rice', rating: 2 },
      { name: 'Roti', rating: 2 },
      { name: 'South Indian Plain Rice', rating: 2 },
      { name: 'Bhindi Poriyal', rating: 2 },
      { name: 'Paruppu Rasam (Pulses)', rating: 2 },
      { name: 'Veg Sorba Soup', rating: 2 },
      { name: 'Gulab Jamun', rating: 5 },
    ]
  }
};

// ─── VERDICTS ───
const VERDICTS = [
  { min: 0, max: 1.5, emoji: '💀', label: 'ABORT MISSION', desc: 'skip and order in', cls: 'verdict-abort' },
  { min: 1.5, max: 2.5, emoji: '⚠️', label: 'SURVIVAL MODE', desc: 'pack snacks just in case', cls: 'verdict-warning' },
  { min: 2.5, max: 3.2, emoji: '😐', label: 'IT IS WHAT IT IS', desc: "you'll live, probably", cls: 'verdict-mid' },
  { min: 3.2, max: 4.2, emoji: '😋', label: 'ACTUALLY DECENT', desc: 'worth the walk', cls: 'verdict-decent' },
  { min: 4.2, max: 5.1, emoji: '🔥', label: 'LEGENDARY', desc: 'run, don\'t walk', cls: 'verdict-legendary' },
];

// ─── HELPERS ───
function getTodayKey() {
  return DAYS[new Date().getDay() === 0 ? 6 : new Date().getDay() - 1];
}

function getCurrentMeal() {
  const h = new Date().getHours() + new Date().getMinutes() / 60;
  for (const [key, m] of Object.entries(MEAL_TIMES)) {
    if (h >= m.start && h < m.end) return key;
  }
  return null;
}

function getNextMeal() {
  const now = new Date();
  const h = now.getHours() + now.getMinutes() / 60 + now.getSeconds() / 3600;
  const orderedMeals = ['breakfast', 'lunch', 'highTea', 'dinner'];

  for (const meal of orderedMeals) {
    if (h < MEAL_TIMES[meal].start) {
      const diffH = MEAL_TIMES[meal].start - h;
      const totalSecs = Math.floor(diffH * 3600);
      const hours = Math.floor(totalSecs / 3600);
      const mins = Math.floor((totalSecs % 3600) / 60);
      const secs = totalSecs % 60;
      return { meal: MEAL_TIMES[meal].label, hours, mins, secs, key: meal, startH: MEAL_TIMES[meal].start };
    }
  }
  // After dinner → breakfast tomorrow
  const diffH = (24 - h) + MEAL_TIMES.breakfast.start;
  const totalSecs = Math.floor(diffH * 3600);
  const hours = Math.floor(totalSecs / 3600);
  const mins = Math.floor((totalSecs % 3600) / 60);
  const secs = totalSecs % 60;
  return { meal: 'BREAKFAST', hours, mins, secs, key: 'breakfast', startH: MEAL_TIMES.breakfast.start };
}

function getMealProgress(mealKey) {
  if (!mealKey) return 0;
  const now = new Date();
  const h = now.getHours() + now.getMinutes() / 60 + now.getSeconds() / 3600;
  const mt = MEAL_TIMES[mealKey];
  const total = mt.end - mt.start;
  const elapsed = h - mt.start;
  return Math.max(0, Math.min(1, elapsed / total));
}

function getMealTimeRemaining(mealKey) {
  if (!mealKey) return null;
  const now = new Date();
  const h = now.getHours() + now.getMinutes() / 60 + now.getSeconds() / 3600;
  const mt = MEAL_TIMES[mealKey];
  const diffH = mt.end - h;
  if (diffH <= 0) return null;
  const totalSecs = Math.floor(diffH * 3600);
  const hours = Math.floor(totalSecs / 3600);
  const mins = Math.floor((totalSecs % 3600) / 60);
  const secs = totalSecs % 60;
  return { hours, mins, secs };
}

// LocalStorage for ratings
function getRatingKey(day, meal, itemIdx) {
  return `mi_${day}_${meal}_${itemIdx}`;
}

function getSavedRating(day, meal, itemIdx) {
  const v = localStorage.getItem(getRatingKey(day, meal, itemIdx));
  return v ? parseInt(v) : null;
}

function saveRating(day, meal, itemIdx, rating) {
  localStorage.setItem(getRatingKey(day, meal, itemIdx), rating);
  // Push to Firebase community ratings
  if (typeof submitCommunityRating === 'function') {
    submitCommunityRating(day, meal, itemIdx, rating);
  }
}

function getUserRating(day, meal, itemIdx) {
  return getSavedRating(day, meal, itemIdx) ?? MENU[day][meal][itemIdx].rating;
}

function getItemRating(day, meal, itemIdx) {
  // Prefer community average if available, fallback to user/default
  if (typeof getCommunityRating === 'function') {
    const community = getCommunityRating(day, meal, itemIdx);
    if (community && community.count > 0) return community.avg;
  }
  return getUserRating(day, meal, itemIdx);
}

function getItemCommunityData(day, meal, itemIdx) {
  if (typeof getCommunityRating === 'function') {
    return getCommunityRating(day, meal, itemIdx);
  }
  return null;
}

function getMealAvg(day, meal) {
  const items = MENU[day][meal];
  if (!items || items.length === 0) return 0;
  const sum = items.reduce((a, _, i) => a + getItemRating(day, meal, i), 0);
  return sum / items.length;
}

function getDayAvg(day) {
  const meals = MEALS.filter(m => MENU[day][m]);
  if (meals.length === 0) return 0;
  const sum = meals.reduce((a, m) => a + getMealAvg(day, m), 0);
  return sum / meals.length;
}

function getVerdict(avg) {
  return VERDICTS.find(v => avg >= v.min && avg < v.max) || VERDICTS[2];
}

function getTierClass(rating) {
  if (rating <= 1.5) return 'tier-1';
  if (rating <= 2.5) return 'tier-2';
  if (rating <= 3.2) return 'tier-3';
  if (rating <= 4.2) return 'tier-4';
  return 'tier-5';
}

function getTierColor(rating) {
  if (rating <= 1.5) return '#ff3b3b';
  if (rating <= 2.5) return '#ff8c00';
  if (rating <= 3.2) return '#888';
  if (rating <= 4.2) return '#34d399';
  return '#fbbf24';
}

function getMealImage(mealKey, day) {
  // Check if lunch has biryani
  if (mealKey === 'lunch' && MENU[day]?.lunch) {
    const hasBiryani = MENU[day].lunch.some(i => i.name.toLowerCase().includes('biryani'));
    if (hasBiryani) return CATEGORY_IMAGES.biryani;
  }
  if (mealKey === 'dinner') {
    const hasDesert = MENU[day]?.dinner?.some(i =>
      i.name.toLowerCase().includes('gulab') || i.name.toLowerCase().includes('kheer'));
    if (hasDesert) return CATEGORY_IMAGES.dessert;
  }
  return FOOD_IMAGES[mealKey] || FOOD_IMAGES.lunch;
}

function getHeroDish(day, meal) {
  const items = MENU[day][meal];
  if (!items) return null;
  let best = 0; let bestIdx = 0;
  items.forEach((_, i) => {
    const r = getItemRating(day, meal, i);
    if (r > best) { best = r; bestIdx = i; }
  });
  return best >= 4 ? bestIdx : null;
}

// ─── THEME ───
function initTheme() {
  const saved = localStorage.getItem('mi_theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('mi_theme', next);
}

// ─── ONBOARDING ───
function initOnboarding() {
  const el = document.getElementById('onboarding');
  if (localStorage.getItem('mi_onboarded')) {
    el.classList.add('hidden');
    return;
  }
  document.getElementById('onboarding-dismiss').onclick = () => {
    el.classList.add('hidden');
    localStorage.setItem('mi_onboarded', '1');
  };
}

// ─── TOAST ───
function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2500);
}

// ─── STAR COMPONENT ───
function createStars(day, meal, itemIdx, container) {
  const userRating = getUserRating(day, meal, itemIdx);
  const community = getItemCommunityData(day, meal, itemIdx);
  container.innerHTML = '';

  // Stars wrapper
  const starsWrap = document.createElement('div');
  starsWrap.className = 'stars-wrap';

  for (let i = 1; i <= 5; i++) {
    const star = document.createElement('span');
    star.className = 'star' + (i <= userRating ? ' filled' : '');
    star.textContent = '★';
    star.dataset.value = i;
    star.addEventListener('click', (e) => {
      e.stopPropagation();
      const newRating = parseInt(star.dataset.value);
      saveRating(day, meal, itemIdx, newRating);
      // Animate
      star.classList.add('pop');
      setTimeout(() => star.classList.remove('pop'), 350);
      // Re-render stars
      createStars(day, meal, itemIdx, container);
      // Update averages in current view
      refreshCurrentView();
      showToast('⭐ Rating submitted to community!');
    });
    star.addEventListener('mouseenter', () => {
      starsWrap.querySelectorAll('.star').forEach((s, idx) => {
        s.classList.toggle('filled', idx < i);
      });
    });
    star.addEventListener('mouseleave', () => {
      starsWrap.querySelectorAll('.star').forEach((s, idx) => {
        s.classList.toggle('filled', idx < userRating);
      });
    });
    starsWrap.appendChild(star);
  }

  container.appendChild(starsWrap);

  // Community rating label
  if (community && community.count > 0) {
    const label = document.createElement('div');
    label.className = 'community-rating';
    label.innerHTML = `<span class="cr-avg">★${community.avg}</span><span class="cr-votes">·  ${community.count} vote${community.count !== 1 ? 's' : ''}</span>`;
    container.appendChild(label);
  }
}

// ─── ROUTER ───
let currentView = 'today';

function navigate(view) {
  if (currentView === view) return;
  currentView = view;
  document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
  document.getElementById(`view-${view}`).classList.remove('hidden');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.toggle('active', n.dataset.view === view));
  window.location.hash = view;
  renderView(view);
}

function initRouter() {
  const hash = window.location.hash.replace('#', '');
  const valid = ['today', 'weekly', 'stats'];
  currentView = valid.includes(hash) ? hash : 'today';

  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => navigate(btn.dataset.view));
  });

  document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
  document.getElementById(`view-${currentView}`).classList.remove('hidden');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.toggle('active', n.dataset.view === currentView));

  renderView(currentView);
}

function renderView(view) {
  switch (view) {
    case 'today': renderTodayView(); break;
    case 'weekly': renderWeeklyView(); break;
    case 'stats': renderStatsView(); break;
  }
}

function refreshCurrentView() {
  renderView(currentView);
}

// ─── TODAY VIEW ───
function renderTodayView() {
  const el = document.getElementById('view-today');
  const today = getTodayKey();
  const currentMeal = getCurrentMeal();
  const dayAvg = getDayAvg(today);
  const verdict = getVerdict(dayAvg);

  let html = '';

  // Hero
  html += `<div class="today-hero">
    <div class="today-greeting">field report</div>
    <h1 class="today-title">${DAY_FULL[today]}</h1>
  </div>`;

  // Countdown card
  if (currentMeal) {
    const progress = getMealProgress(currentMeal);
    const mt = MEAL_TIMES[currentMeal];
    const remaining = getMealTimeRemaining(currentMeal);
    html += renderCountdownRing(mt.label, null, progress, true, remaining, mt.time);
  } else {
    const next = getNextMeal();
    html += renderCountdownRing(next.meal, null, 0, false, { hours: next.hours, mins: next.mins, secs: next.secs }, null);
  }

  // Verdict pill
  html += `<div style="text-align:center">
    <div class="verdict-pill">
      <span class="v-emoji">${verdict.emoji}</span>
      <span class="${verdict.cls}">${verdict.label}</span>
      <span class="v-score">${dayAvg.toFixed(1)}/5</span>
    </div>
  </div>`;

  // Meal cards
  MEALS.forEach((meal, mealIdx) => {
    if (!MENU[today][meal]) return;
    const avg = getMealAvg(today, meal);
    const isNow = meal === currentMeal;
    const heroDish = getHeroDish(today, meal);
    const imgUrl = getMealImage(meal, today);

    html += `<div class="meal-card${isNow ? ' is-now' : ''}" style="animation-delay:${0.1 + mealIdx * 0.08}s">
      <div class="meal-card-hero" style="background-image:url('${imgUrl}')"></div>
      <div class="meal-card-header">
        <div class="meal-card-left">
          ${isNow ? '<div class="meal-now-dot"></div>' : ''}
          <span class="meal-card-label">${MEAL_TIMES[meal].label}</span>
        </div>
        <div class="meal-card-meta">
          <span class="meal-card-time">${MEAL_TIMES[meal].time}</span>
          <span class="meal-card-avg ${getTierClass(avg)}">${avg.toFixed(1)}</span>
        </div>
      </div>`;

    // Worth going meter
    const worthPct = Math.round((avg / 5) * 100);
    html += `<div class="worth-meter">
      <span class="worth-meter-label">worth it?</span>
      <div class="worth-meter-bar">
        <div class="worth-meter-fill" style="width:${worthPct}%; background:${getTierColor(avg)}"></div>
      </div>
      <span class="worth-meter-value" style="color:${getTierColor(avg)}">${worthPct}%</span>
    </div>`;

    html += `<div class="meal-card-body"><ul class="food-list">`;
    MENU[today][meal].forEach((item, i) => {
      const isHero = heroDish === i;
      html += `<li class="food-item${isHero ? ' hero-dish' : ''}">
        <span class="food-name">${item.name}</span>
        <div class="rating-row">
          <div class="star-rating" data-day="${today}" data-meal="${meal}" data-idx="${i}"></div>
        </div>
      </li>`;
    });
    html += `</ul></div></div>`;
  });

  el.innerHTML = html;

  // Initialize star ratings
  el.querySelectorAll('.star-rating').forEach(container => {
    const { day, meal, idx } = container.dataset;
    createStars(day, meal, parseInt(idx), container);
  });
}

function renderCountdownRing(title, subtitle, progress, isLive, remaining, timeRange) {
  const circumference = 2 * Math.PI * 26;
  const offset = circumference * (1 - progress);
  const pad = n => String(n).padStart(2, '0');

  let timerHtml = '';
  if (remaining) {
    const h = remaining.hours;
    const m = remaining.mins;
    const s = remaining.secs;
    timerHtml = `<div class="countdown-timer">`;
    if (h > 0) {
      timerHtml += `<span class="ct-digit ct-h">${pad(h)}</span><span class="ct-sep">:</span>`;
    }
    timerHtml += `<span class="ct-digit ct-m">${pad(m)}</span><span class="ct-sep">:</span><span class="ct-digit ct-secs ct-s">${pad(s)}</span>`;
    timerHtml += `</div>`;
  }

  let statusSub = '';
  if (isLive && timeRange) {
    statusSub = `serving · ${timeRange}`;
  } else if (!isLive) {
    statusSub = 'kitchen closed';
  }

  return `<div class="countdown-card${isLive ? ' is-serving' : ' is-waiting'}">
    <div class="countdown-ring${isLive ? ' is-live' : ''}">
      <svg viewBox="0 0 60 60">
        <circle class="ring-bg" cx="30" cy="30" r="26"/>
        <circle class="ring-progress" cx="30" cy="30" r="26"
          stroke-dasharray="${circumference}"
          stroke-dashoffset="${offset}"/>
      </svg>
      <div class="countdown-label">${isLive ? '⏱' : '⏳'}</div>
    </div>
    <div class="countdown-info">
      <div class="countdown-status">
        ${isLive ? '<span class="live-dot"></span>' : ''}
        <span class="ct-title-text">${title}</span>
      </div>
      ${timerHtml}
      <div class="countdown-sub">${statusSub}</div>
    </div>
  </div>`;
}

function updateCountdownDom() {
  const card = document.querySelector('.countdown-card');
  if (!card) return;

  const currentMeal = getCurrentMeal();
  const pad = n => String(n).padStart(2, '0');

  let progress = 0;
  let remaining = null;

  if (currentMeal) {
    progress = getMealProgress(currentMeal);
    remaining = getMealTimeRemaining(currentMeal);

    // Check if we just transitioned to a new state
    if (!card.classList.contains('is-serving')) {
      renderTodayView(); // Full re-render needed for structural changes
      return;
    }
  } else {
    const next = getNextMeal();
    progress = 0;
    remaining = { hours: next.hours, mins: next.mins, secs: next.secs };

    if (card.classList.contains('is-serving')) {
      renderTodayView();
      return;
    }
  }

  // Soft update DOM elements
  if (remaining) {
    const elH = card.querySelector('.ct-h');
    const elM = card.querySelector('.ct-m');
    const elS = card.querySelector('.ct-s');

    if (elH && remaining.hours > 0) elH.textContent = pad(remaining.hours);
    if (elM) elM.textContent = pad(remaining.mins);
    if (elS) elS.textContent = pad(remaining.secs);
  }

  const ringProgress = card.querySelector('.ring-progress');
  if (ringProgress) {
    const circumference = 2 * Math.PI * 26;
    const offset = circumference * (1 - progress);
    ringProgress.style.strokeDashoffset = offset;
  }
}

// ─── WEEKLY VIEW ───
let expandedDay = null;

function renderWeeklyView() {
  const el = document.getElementById('view-weekly');
  const today = getTodayKey();

  let html = `<div class="weekly-header">
    <div class="weekly-title">Weekly Overview</div>
  </div><div class="weekly-grid">`;

  DAYS.forEach((day, dayIdx) => {
    const avg = getDayAvg(day);
    const verdict = getVerdict(avg);
    const isToday = day === today;
    const isExpanded = expandedDay === day;

    html += `<div class="weekly-day-card${isToday ? ' is-today' : ''}${isExpanded ? ' expanded' : ''}"
      data-day="${day}" style="animation-delay:${dayIdx * 0.05}s"
      onclick="toggleWeeklyDay('${day}')">
      <div class="weekly-day-left">
        <span class="weekly-day-verdict">${verdict.emoji}</span>
        <div>
          <div class="weekly-day-name">${DAY_LABELS[day]}${isToday ? ' · Today' : ''}</div>
          <div class="weekly-day-desc">${verdict.desc}</div>
        </div>
      </div>
      <div class="weekly-day-right">
        <span class="weekly-day-score ${getTierClass(avg)}">${avg.toFixed(1)}</span>
        <span class="weekly-day-chevron">▼</span>
      </div>`;

    // Expanded detail
    html += `<div class="weekly-day-detail">`;
    MEALS.forEach(meal => {
      if (!MENU[day][meal]) return;
      const mealAvg = getMealAvg(day, meal);
      html += `<div class="weekly-meal-mini">
        <div class="weekly-meal-mini-header">${MEAL_TIMES[meal].label} · ${mealAvg.toFixed(1)}/5</div>
        <ul class="food-list">`;
      MENU[day][meal].forEach((item, i) => {
        html += `<li class="food-item">
          <span class="food-name">${item.name}</span>
          <div class="rating-row">
            <div class="star-rating" data-day="${day}" data-meal="${meal}" data-idx="${i}"></div>
          </div>
        </li>`;
      });
      html += `</ul></div>`;
    });
    html += `</div></div>`;
  });

  html += `</div>`;
  el.innerHTML = html;

  // Initialize stars for expanded day
  if (expandedDay) {
    el.querySelectorAll(`.weekly-day-card.expanded .star-rating`).forEach(container => {
      const { day, meal, idx } = container.dataset;
      createStars(day, meal, parseInt(idx), container);
    });
  }
}

function toggleWeeklyDay(day) {
  expandedDay = expandedDay === day ? null : day;
  renderWeeklyView();
}

// ─── STATS VIEW ───
function renderStatsView() {
  const el = document.getElementById('view-stats');
  const today = getTodayKey();

  let html = `<div class="stats-header">
    <div class="stats-title">Weekly Debrief</div>
  </div>`;

  // Bar chart — daily averages
  html += `<div class="chart-card" style="animation-delay:0.1s">
    <div class="chart-title">Daily Averages</div>
    <div class="bar-chart">`;

  const maxAvg = 5;
  DAYS.forEach(day => {
    const avg = getDayAvg(day);
    const pct = (avg / maxAvg) * 100;
    const color = getTierColor(avg);
    const isToday = day === today;
    html += `<div class="bar-col">
      <div class="bar-value">${avg.toFixed(1)}</div>
      <div class="bar" style="height:${pct}%; background:${color}; ${isToday ? 'box-shadow:0 0 10px ' + color : ''}"></div>
      <div class="bar-label" style="${isToday ? 'color:' + color + ';font-weight:600' : ''}">${DAY_LABELS[day]}</div>
    </div>`;
  });
  html += `</div></div>`;

  // Donut chart — rating distribution
  const ratingDist = [0, 0, 0, 0, 0];
  let totalItems = 0;
  DAYS.forEach(day => {
    MEALS.forEach(meal => {
      if (!MENU[day][meal]) return;
      MENU[day][meal].forEach((_, i) => {
        const r = getItemRating(day, meal, i);
        ratingDist[r - 1]++;
        totalItems++;
      });
    });
  });

  const donutColors = ['#ff3b3b', '#ff8c00', '#888', '#34d399', '#fbbf24'];
  const donutLabels = ['awful', 'barely', 'mid', 'decent', 'bussin'];
  const circumference = 2 * Math.PI * 50;
  let cumOffset = 0;

  html += `<div class="chart-card" style="animation-delay:0.2s">
    <div class="chart-title">Rating Distribution</div>
    <div class="donut-container">
      <div class="donut-chart">
        <svg viewBox="0 0 120 120">`;

  ratingDist.forEach((count, i) => {
    const pct = totalItems > 0 ? count / totalItems : 0;
    const dashLen = pct * circumference;
    html += `<circle cx="60" cy="60" r="50"
      stroke="${donutColors[i]}"
      stroke-dasharray="${dashLen} ${circumference - dashLen}"
      stroke-dashoffset="${-cumOffset}"
      opacity="0.85"/>`;
    cumOffset += dashLen;
  });

  const weeklyAvg = DAYS.reduce((s, d) => s + getDayAvg(d), 0) / 7;
  html += `</svg>
    <div class="donut-center">
      <div class="donut-center-value">${weeklyAvg.toFixed(1)}</div>
      <div class="donut-center-label">avg</div>
    </div>
  </div>
  <div class="donut-legend">`;

  ratingDist.forEach((count, i) => {
    const pct = totalItems > 0 ? ((count / totalItems) * 100).toFixed(0) : 0;
    html += `<div class="donut-legend-item">
      <div class="donut-legend-dot" style="background:${donutColors[i]}"></div>
      <span>★${i + 1} ${donutLabels[i]} — ${pct}%</span>
    </div>`;
  });

  html += `</div></div></div>`;

  // Achievements
  const dayAvgs = DAYS.map(d => ({ day: d, avg: getDayAvg(d) }));
  const bestDay = dayAvgs.reduce((a, b) => a.avg > b.avg ? a : b);
  const worstDay = dayAvgs.reduce((a, b) => a.avg < b.avg ? a : b);

  // Find GOAT dish
  let goatDish = { name: '-', rating: 0 };
  DAYS.forEach(day => {
    MEALS.forEach(meal => {
      if (!MENU[day][meal]) return;
      MENU[day][meal].forEach((item, i) => {
        const r = getItemRating(day, meal, i);
        if (r > goatDish.rating) goatDish = { name: item.name, rating: r };
      });
    });
  });

  // Count bussin days (avg >= 3.5)
  const bussinDays = dayAvgs.filter(d => d.avg >= 3.5).length;

  // Count rated items
  let ratedCount = 0;
  DAYS.forEach(day => {
    MEALS.forEach(meal => {
      if (!MENU[day][meal]) return;
      MENU[day][meal].forEach((_, i) => {
        if (getSavedRating(day, meal, i) !== null) ratedCount++;
      });
    });
  });

  html += `<div class="chart-card" style="animation-delay:0.3s">
    <div class="chart-title">Highlights</div>
    <div class="achievements-grid">
      <div class="achievement-card" style="animation-delay:0.35s">
        <div class="achievement-emoji">🏆</div>
        <div class="achievement-title">${DAY_FULL[bestDay.day]}</div>
        <div class="achievement-desc">best day · ${bestDay.avg.toFixed(1)}/5</div>
      </div>
      <div class="achievement-card" style="animation-delay:0.4s">
        <div class="achievement-emoji">💀</div>
        <div class="achievement-title">${DAY_FULL[worstDay.day]}</div>
        <div class="achievement-desc">worst day · ${worstDay.avg.toFixed(1)}/5</div>
      </div>
      <div class="achievement-card" style="animation-delay:0.45s">
        <div class="achievement-emoji">👑</div>
        <div class="achievement-title">${goatDish.name}</div>
        <div class="achievement-desc">GOAT dish · ${goatDish.rating}/5</div>
      </div>
      <div class="achievement-card" style="animation-delay:0.5s">
        <div class="achievement-emoji">📊</div>
        <div class="achievement-title">${weeklyAvg.toFixed(1)}</div>
        <div class="achievement-desc">weekly average</div>
      </div>
      <div class="achievement-card" style="animation-delay:0.55s">
        <div class="achievement-emoji">🍽️</div>
        <div class="achievement-title">${bussinDays}</div>
        <div class="achievement-desc">bussin days</div>
      </div>
      <div class="achievement-card" style="animation-delay:0.6s">
        <div class="achievement-emoji">⭐</div>
        <div class="achievement-title">${ratedCount}/${totalItems}</div>
        <div class="achievement-desc">items rated</div>
      </div>
    </div>
  </div>`;

  // Community status badge
  const fbActive = typeof isFirebaseActive === 'function' && isFirebaseActive();
  html += `<div class="community-status-card">
    <div class="community-status-dot ${fbActive ? 'active' : ''}"></div>
    <span>${fbActive ? 'community ratings live' : 'offline mode — ratings local only'}</span>
  </div>`;

  // Footer
  html += `<div style="text-align:center; padding:24px 0 8px;">
    <p style="font-family:var(--font-mono);font-size:10px;color:var(--text-muted);letter-spacing:1px;">
      ratings powered by the community. your vote shapes the average.<br>
      tap any star to rate · synced across all students
    </p>
  </div>`;

  el.innerHTML = html;
}

// ─── SHARE ───
function shareMenu() {
  const today = getTodayKey();
  const dayAvg = getDayAvg(today);
  const verdict = getVerdict(dayAvg);

  let text = `🍽️ *Mess Intel — ${DAY_FULL[today]}*\n`;
  text += `${verdict.emoji} *${verdict.label}* (${dayAvg.toFixed(1)}/5)\n\n`;

  MEALS.forEach(meal => {
    if (!MENU[today][meal]) return;
    const avg = getMealAvg(today, meal);
    text += `*${MEAL_TIMES[meal].label}* (${avg.toFixed(1)}/5)\n`;
    MENU[today][meal].forEach((item, i) => {
      const r = getItemRating(today, meal, i);
      const stars = '★'.repeat(r) + '☆'.repeat(5 - r);
      text += `  ${item.name} ${stars}\n`;
    });
    text += '\n';
  });

  text += `🔗 safal-mess.vercel.app`;

  // Try native share, fallback to WhatsApp, then clipboard
  if (navigator.share) {
    navigator.share({ title: 'Mess Intel', text }).catch(() => { });
  } else {
    const waUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  }

  showToast('📋 Menu shared!');
}

// ─── NOTIFICATIONS ───
function requestNotifications() {
  if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission();
  }
}

// ─── PWA SERVICE WORKER ───
function registerSW() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => { });
  }
}

// ─── INIT ───
document.addEventListener('DOMContentLoaded', async () => {
  initTheme();
  initOnboarding();
  initRouter();
  registerSW();

  // Header buttons
  document.getElementById('theme-btn').addEventListener('click', toggleTheme);
  document.getElementById('share-btn').addEventListener('click', shareMenu);

  // Initialize Firebase community ratings
  if (typeof initFirebase === 'function') {
    const firebaseOk = await initFirebase();
    if (firebaseOk) {
      await fetchAllAggregates();
      // Refresh view with community data
      refreshCurrentView();
      // Listen for real-time updates from other users
      listenForAggregateChanges(() => {
        refreshCurrentView();
      });
    }
  }

  // Auto-refresh countdown every second for live timer
  setInterval(() => {
    if (currentView === 'today') {
      updateCountdownDom();
    }
  }, 1000);
});
