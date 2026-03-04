/* ═══════════════════════════════════════════════ */
/*  MESS INTEL — Data + Rendering Engine          */
/* ═══════════════════════════════════════════════ */

const DAYS = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
const DAY_LABELS = { monday: 'MON', tuesday: 'TUE', wednesday: 'WED', thursday: 'THU', friday: 'FRI', saturday: 'SAT', sunday: 'SUN' };
const DAY_FULL = { monday: 'Monday', tuesday: 'Tuesday', wednesday: 'Wednesday', thursday: 'Thursday', friday: 'Friday', saturday: 'Saturday', sunday: 'Sunday' };

const TIERS = {
  1: { label: 'nah fam', emoji: '💀', desc: 'hit up Dakshin or Bistro' },
  2: { label: 'barely', emoji: '😤', desc: "you'll survive... barely" },
  3: { label: 'mid', emoji: '🫤', desc: 'it exists' },
  4: { label: 'decent', emoji: '😋', desc: 'actually not bad' },
  5: { label: 'bussin', emoji: '🔥', desc: 'rare W' }
};

const MEAL_TIMES = {
  breakfast: { label: 'BREAKFAST', time: '07:30 – 09:00', start: 7.5, end: 9 },
  lunch: { label: 'LUNCH', time: '12:15 – 14:15', start: 12.25, end: 14.25 },
  highTea: { label: 'HIGH TEA', time: '17:15 – 18:15', start: 17.25, end: 18.25 },
  dinner: { label: 'DINNER', time: '19:10 – 20:45', start: 19.17, end: 20.75 }
};

// ─── MENU DATA (cross-checked against hostel menu board photos) ───
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
      { name: 'Kachori', rating: 3 },
      { name: 'Tamarind Chutney', rating: 3 },
      { name: 'Milk, Tea, Coffee', rating: 2 },
    ],
    dinner: [
      { name: 'Kadhai Mix Veg', rating: 3 },
      { name: 'Egg Gravy', rating: 3 },
      { name: 'Butter Roti / Plain Roti', rating: 2 },
      { name: 'Butter Roti / Plain Roti', rating: 2 },
      { name: 'Multi Grain Kitchadi', rating: 2 },
      { name: 'Veg Poriyal', rating: 2 },
      { name: 'Plain Rice – North & South', rating: 2 },
      { name: 'Tomato Rasam', rating: 2 },
      { name: 'Rice Kheer / Y Dhal', rating: 4 },
      { name: 'Pickle', rating: 2 },
    ]
  },
  tuesday: {
    breakfast: [
      { name: 'Poha', rating: 3 },
      { name: 'Jalebi', rating: 4 },
      { name: 'Pongal Chutney', rating: 3 },
      { name: 'Jeera Man', rating: 2 },
      { name: 'Mix Cutfruit Salad', rating: 3 },
      { name: 'Bread, Butter & Jam', rating: 3 },
      { name: 'Milk, Tea, Coffee', rating: 2 },
    ],
    lunch: [
      { name: 'White Channa (M.Spicy)', rating: 3 },
      { name: 'Mix Dal', rating: 2 },
      { name: 'Poori', rating: 4 },
      { name: 'Mix Salad', rating: 2 },
      { name: 'South Indian Plain Rice', rating: 2 },
      { name: 'Bottle Gourd Kuzhambu', rating: 2 },
      { name: 'Tomato Rasam', rating: 2 },
      { name: 'Butter Milk / Juice', rating: 2 },
      { name: 'Pickle', rating: 2 },
    ],
    highTea: [
      { name: 'Variety of Samosa / Aallu Gobi / Mutter', rating: 4 },
      { name: 'Red Sauce & Chutney', rating: 3 },
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
      { name: 'Pav Bhaji', rating: 4 },
      { name: 'Upma', rating: 2 },
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
      { name: 'Aloo Paratha', rating: 4 },
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
      { name: 'Onion', rating: 1 },
      { name: 'Mixed Veg Salad', rating: 2 },
      { name: 'Rice – Plain', rating: 2 },
      { name: 'Veg Sambar', rating: 3 },
      { name: 'Rasam', rating: 2 },
      { name: 'Beetroot Poriyal', rating: 2 },
      { name: 'Pickle', rating: 2 },
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
      { name: 'Butter Roti', rating: 3 },
      { name: 'Sooji Halwa', rating: 3 },
      { name: 'Pepper Rasam', rating: 2 },
      { name: 'Roti', rating: 2 },
      { name: 'Pickle', rating: 2 },
    ]
  },
  friday: {
    breakfast: [
      { name: 'Onion Uthappam', rating: 3 },
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
      { name: 'Veg Aviyal', rating: 2 },
      { name: 'Pickle', rating: 2 },
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
      { name: 'Chole with Lemon Slice', rating: 5 },
      { name: 'Bhature', rating: 5 },
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
      { name: 'Mix Veg Sambar', rating: 3 },
      { name: 'Rasam', rating: 2 },
      { name: 'Butter Milk', rating: 2 },
      { name: 'Pickle', rating: 2 },
    ],
    highTea: [
      { name: 'Bread Pakoda', rating: 3 },
      { name: 'Red Tomato Chutney', rating: 3 },
      { name: 'Milk, Tea, Coffee', rating: 2 },
    ],
    dinner: [
      { name: 'Veg Pulao', rating: 3 },
      { name: 'Lobial Gravy', rating: 2 },
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
      { name: 'Sambhar & Chutney', rating: 3 },
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

// ─── HELPERS ───
function getTodayKey() {
  return DAYS[new Date().getDay() === 0 ? 6 : new Date().getDay() - 1];
}

function getCurrentMeal() {
  const h = new Date().getHours() + new Date().getMinutes() / 60;
  for (const [key, m] of Object.entries(MEAL_TIMES)) {
    if (h >= m.start && h <= m.end) return key;
  }
  return null;
}

function getNextMeal() {
  const now = new Date();
  const h = now.getHours() + now.getMinutes() / 60;
  const ordered = Object.entries(MEAL_TIMES);
  for (const [key, m] of ordered) {
    if (h < m.start) {
      const diffMin = Math.round((m.start - h) * 60);
      const hrs = Math.floor(diffMin / 60);
      const mins = diffMin % 60;
      return { meal: m.label, time: hrs > 0 ? `${hrs}h ${mins}m` : `${mins}m` };
    }
  }
  // After dinner — next is tomorrow's breakfast
  const diffMin = Math.round((24 - h + 7.5) * 60);
  const hrs = Math.floor(diffMin / 60);
  const mins = diffMin % 60;
  return { meal: 'BREAKFAST', time: `${hrs}h ${mins}m` };
}

function getRating(day, meal, itemIndex) {
  const key = `rating_${day}_${meal}_${itemIndex}`;
  const stored = localStorage.getItem(key);
  if (stored !== null) return parseInt(stored);
  return MENU[day][meal][itemIndex].rating;
}

function setRating(day, meal, itemIndex, rating) {
  localStorage.setItem(`rating_${day}_${meal}_${itemIndex}`, rating);
}

function getMealAvg(day, meal) {
  const items = MENU[day][meal];
  if (!items || items.length === 0) return 0;
  const total = items.reduce((sum, _, i) => sum + getRating(day, meal, i), 0);
  return total / items.length;
}

function getDayAvg(day) {
  const meals = Object.keys(MENU[day]);
  let total = 0, count = 0;
  meals.forEach(meal => {
    MENU[day][meal].forEach((_, i) => {
      total += getRating(day, meal, i);
      count++;
    });
  });
  return count ? total / count : 0;
}

function getVerdict(avg) {
  if (avg < 2) return { emoji: '🚨', text: 'ABORT MISSION', sub: 'Dakshin or Bistro. now.', cls: 'verdict-abort' };
  if (avg < 2.5) return { emoji: '⚠️', text: 'SURVIVAL MODE', sub: 'pack snacks just in case', cls: 'verdict-warning' };
  if (avg < 3.2) return { emoji: '🫤', text: 'IT IS WHAT IT IS', sub: "you'll live, probably", cls: 'verdict-mid' };
  if (avg < 3.8) return { emoji: '👍', text: 'DECENT DAY', sub: 'not bad honestly', cls: 'verdict-decent' };
  return { emoji: '🏆', text: 'LEGENDARY', sub: 'mark your calendars', cls: 'verdict-legendary' };
}

// ─── STATE ───
let selectedDay = getTodayKey();
let statusInterval = null;

// ─── SPARKLE ANIMATION ───
function sparkle(el) {
  const rect = el.getBoundingClientRect();
  const sparkleCount = 6;
  for (let i = 0; i < sparkleCount; i++) {
    const s = document.createElement('div');
    s.className = 'sparkle-particle';
    s.style.left = (rect.left + rect.width / 2) + 'px';
    s.style.top = (rect.top + rect.height / 2) + 'px';
    const angle = (Math.PI * 2 * i) / sparkleCount;
    const dist = 20 + Math.random() * 20;
    s.style.setProperty('--dx', Math.cos(angle) * dist + 'px');
    s.style.setProperty('--dy', Math.sin(angle) * dist + 'px');
    document.body.appendChild(s);
    s.addEventListener('animationend', () => s.remove());
  }
}

// ─── RENDER ───
function renderStatusBar() {
  const el = document.getElementById('status-bar');
  const meal = getCurrentMeal();
  const today = DAY_FULL[getTodayKey()];

  if (meal) {
    const info = MEAL_TIMES[meal];
    const avg = getMealAvg(getTodayKey(), meal);
    el.innerHTML = `
      <div class="status-content">
        <div class="status-left">
          <div class="status-dot"></div>
          <span class="status-label"><strong>${info.label}</strong> is live · ${today}</span>
        </div>
        <span class="status-right">meal score ${avg.toFixed(1)}/5</span>
      </div>`;
  } else {
    const next = getNextMeal();
    el.innerHTML = `
      <div class="status-content">
        <div class="status-left">
          <div class="status-dot closed"></div>
          <span class="status-label"><strong>Kitchen closed</strong> · ${today}</span>
        </div>
        <span class="status-right">${next.meal} in ${next.time}</span>
      </div>`;
  }
}

function renderDaySelector() {
  const el = document.getElementById('day-selector');
  const today = getTodayKey();
  el.innerHTML = DAYS.map(d => {
    const classes = ['day-pill'];
    if (d === selectedDay) classes.push('active');
    if (d === today) classes.push('today');
    return `<button class="${classes.join(' ')}" data-day="${d}">${DAY_LABELS[d]}</button>`;
  }).join('');

  el.querySelectorAll('.day-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedDay = btn.dataset.day;
      renderDaySelector();
      renderDayContent();
    });
  });
}

function renderDayContent() {
  const el = document.getElementById('day-content');
  const day = selectedDay;
  const avg = getDayAvg(day);
  const verdict = getVerdict(avg);
  const currentMeal = getCurrentMeal();
  const isToday = day === getTodayKey();

  let html = `
    <div class="day-header">
      <div class="day-name">${DAY_FULL[day]}</div>
      <div class="verdict-card ${verdict.cls}">
        <span class="verdict-emoji">${verdict.emoji}</span>
        <div class="verdict-info">
          <div class="verdict-text">${verdict.text}</div>
          <div class="verdict-sub">${verdict.sub}</div>
        </div>
        <span class="verdict-score">${avg.toFixed(1)} / 5</span>
      </div>
    </div>`;

  const mealOrder = ['breakfast', 'lunch', 'highTea', 'dinner'];
  mealOrder.forEach((meal, mi) => {
    if (!MENU[day][meal]) return;
    const info = MEAL_TIMES[meal];
    const mealAvg = getMealAvg(day, meal);
    const isNow = isToday && currentMeal === meal;
    const tierClass = mealAvg < 2 ? 'tier-1' : mealAvg < 2.5 ? 'tier-2' : mealAvg < 3.2 ? 'tier-3' : mealAvg < 3.8 ? 'tier-4' : 'tier-5';

    html += `
    <div class="meal-section animate-in stagger-${mi + 1} ${isNow ? 'is-now' : ''}">
      <div class="meal-header">
        <div class="meal-left">
          ${isNow ? '<div class="meal-now-dot"></div>' : ''}
          <span class="meal-label">${info.label}</span>
        </div>
        <div class="meal-meta">
          <span class="meal-time">${info.time}</span>
          <span class="meal-avg ${tierClass}">${mealAvg.toFixed(1)}</span>
        </div>
      </div>
      <ul class="food-list">`;

    MENU[day][meal].forEach((item, i) => {
      const r = getRating(day, meal, i);
      const tier = TIERS[r];
      html += `
        <li class="food-item" data-day="${day}" data-meal="${meal}" data-index="${i}">
          <span class="food-name">${item.name}</span>
          <div class="food-rating">
            <span class="rating-badge tier-${r}">${tier.emoji} ${tier.label}</span>
            <span class="rating-score">${r}/5</span>
          </div>
        </li>`;
    });

    html += '</ul></div>';
  });

  el.innerHTML = html;
  el.style.animation = 'none';
  el.offsetHeight; // trigger reflow
  el.style.animation = 'fadeIn 0.4s var(--ease)';

  // Click-to-rate
  el.querySelectorAll('.food-item').forEach(item => {
    item.addEventListener('click', () => {
      const d = item.dataset.day;
      const m = item.dataset.meal;
      const idx = parseInt(item.dataset.index);
      let current = getRating(d, m, idx);
      current = current >= 5 ? 1 : current + 1;
      setRating(d, m, idx, current);

      // sparkle animation
      const badge = item.querySelector('.rating-badge');
      if (badge) {
        sparkle(badge);
        badge.classList.add('badge-pop');
        badge.addEventListener('animationend', () => badge.classList.remove('badge-pop'), { once: true });
      }

      renderDayContent();
      renderStats();
      renderStatusBar();
    });
  });
}

function renderStats() {
  const el = document.getElementById('stats-grid');

  // Compute stats
  let bestDay = { day: '', avg: 0 };
  let worstDay = { day: '', avg: 6 };
  let goatDish = { name: '', rating: 0 };
  let totalAll = 0, countAll = 0;
  let dakshinDays = 0;

  DAYS.forEach(day => {
    const avg = getDayAvg(day);
    if (avg > bestDay.avg) bestDay = { day, avg };
    if (avg < worstDay.avg) worstDay = { day, avg };
    if (avg < 2.5) dakshinDays++;

    Object.keys(MENU[day]).forEach(meal => {
      MENU[day][meal].forEach((item, i) => {
        const r = getRating(day, meal, i);
        totalAll += r;
        countAll++;
        if (r > goatDish.rating) goatDish = { name: item.name, rating: r, day };
      });
    });
  });

  const weeklyAvg = countAll ? totalAll / countAll : 0;

  el.innerHTML = `
    <div class="stat-card">
      <div class="stat-emoji">🏆</div>
      <div class="stat-value">${DAY_FULL[bestDay.day]}</div>
      <div class="stat-label">best day · ${bestDay.avg.toFixed(1)}/5</div>
    </div>
    <div class="stat-card">
      <div class="stat-emoji">💀</div>
      <div class="stat-value">${DAY_FULL[worstDay.day]}</div>
      <div class="stat-label">worst day · ${worstDay.avg.toFixed(1)}/5</div>
    </div>
    <div class="stat-card">
      <div class="stat-emoji">🐐</div>
      <div class="stat-value">${goatDish.name}</div>
      <div class="stat-label">GOAT dish · ${goatDish.rating}/5</div>
    </div>
    <div class="stat-card">
      <div class="stat-emoji">📊</div>
      <div class="stat-value">${weeklyAvg.toFixed(1)}</div>
      <div class="stat-label">weekly average</div>
    </div>
    <div class="stat-card">
      <div class="stat-emoji">🚨</div>
      <div class="stat-value">${dakshinDays}</div>
      <div class="stat-label">Dakshin / Bistro days</div>
    </div>
    <div class="stat-card">
      <div class="stat-emoji">🍽️</div>
      <div class="stat-value">${countAll}</div>
      <div class="stat-label">items rated</div>
    </div>`;
}

// ─── INIT ───
function init() {
  renderStatusBar();
  renderDaySelector();
  renderDayContent();
  renderStats();

  // Live countdown update every 30s
  statusInterval = setInterval(renderStatusBar, 30000);
}

document.addEventListener('DOMContentLoaded', init);
