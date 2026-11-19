
'use strict';const DATA=[{"label":"Промышленное оборудование и техника","desc":"Сложная техника заслуживает понятной презентации. Помогите покупателю оценить преимущества вашего оборудования ещё до общения с менеджером. Превратите сайт в убедительный инструмент B2B-продаж.","img":"v17-desktop-card_01.jpg","mobile":"v17-mobile-card_01.jpg","hover":"Сложная техника заслуживает понятной презентации."},{"label":"Строительство и недвижимость","desc":"Продавайте не квадратные метры, а уверенность в выборе. Позвольте покупателю заранее почувствовать пространство и оценить преимущества объекта. Выделяйте свои проекты среди конкурентов и превращайте интерес в обращения.","img":"v17-desktop-card_02.jpg","mobile":"v17-mobile-card_02.jpg","hover":"Продавайте не квадратные метры, а уверенность в выборе."},{"label":"Инженерия","desc":"Пусть сложные решения говорят сами за себя. Донесите преимущества ваших технологий до заказчика понятным языком. Помогите быстрее разобраться в предложении и увереннее принимать решения о сотрудничестве.","img":"v17-desktop-card_03.jpg","mobile":"v17-mobile-card_03.jpg","hover":"Пусть сложные решения говорят сами за себя."},{"label":"Мебель","desc":"Покажите, почему качество стоит своей цены. Раскройте мастерство исполнения, ценность материалов и внимание к деталям. Помогите покупателю выбирать вашу мебель за качество, а не только сравнивать ценники.","img":"v17-desktop-card_04.jpg","mobile":"v17-mobile-card_04.jpg","hover":"Покажите, почему качество стоит своей цены."},{"label":"Техника и авто","desc":"Ваш профессионализм — ваше главное преимущество. Подчеркните качество материалов, точность работы и индивидуальный подход. Укрепляйте доверие клиентов и помогайте им увидеть, за что они платят.","img":"v17-desktop-card_05.jpg","mobile":"v17-mobile-card_05.jpg","hover":"Ваш профессионализм — ваше главное преимущество."},{"label":"IT и цифровые продукты","desc":"Технологии продаются лучше, когда их ценность понятна. Помогите потенциальным заказчикам увидеть пользу вашего продукта в реальных сценариях. Сократите путь от первого знакомства до заинтересованного обращения.","img":"v17-desktop-card_06.jpg","mobile":"v17-mobile-card_06.jpg","hover":"Технологии продаются лучше, когда их ценность понятна."},{"label":"Хорека","desc":"Атмосфера, которая приглашает ещё до первого визита. Помогите гостям представить отдых, ужин или идеальное торжество именно у вас. Сделайте выбор заведения эмоционально привлекательным, а бронирование — более уверенным.","img":"v17-desktop-card_07.jpg","mobile":"v17-mobile-card_07.jpg","hover":"Атмосфера, которая приглашает ещё до первого визита."},{"label":"Интеллектуальные и интерактивные услуги","desc":"Сделайте ценность вашего опыта очевидной. Покажите клиентам, какие задачи решают ваши технологии и профессиональные знания. Укрепляйте доверие и обосновывайте стоимость сложных услуг понятными преимуществами.","img":"v17-desktop-card_08.jpg","mobile":"v17-mobile-card_08.jpg","hover":"Сделайте ценность вашего опыта очевидной."},{"label":"Медицина","desc":"Доверие начинается с понимания. Помогите пациентам разобраться в возможностях процедур, технологиях и преимуществах вашей клиники. Подчеркните профессиональный подход и сделайте стоимость услуг более понятной.","img":"v17-desktop-card_09.jpg","mobile":"v17-mobile-card_09.jpg","hover":"Доверие начинается с понимания."},{"label":"Выставки","desc":"Выставка начинается задолго до открытия дверей. Представьте экспозицию современно и наглядно. Помогите посетителям находить интересующие компании, планировать маршрут и заранее понимать ценность участия.","img":"v17-desktop-card_10.jpg","mobile":"v17-mobile-card_10.jpg","hover":"Выставка начинается задолго до открытия дверей."},{"label":"Интернет-магазины","desc":"Превратите интерес к товару в уверенность при покупке. Помогите покупателю разобраться в ассортименте, оценить качество и выбрать подходящий вариант. Создайте удобный путь от знакомства с продуктом до заказа.","img":"v17-desktop-card_11.jpg","mobile":"v17-mobile-card_11.jpg","hover":"Превратите интерес к товару в уверенность при покупке."},{"label":"Территории и пространства","desc":"Передайте ценность места, прежде чем его посетят. Раскройте атмосферу загородного клуба, возможности территории или потенциал будущего проекта. Помогите гостям, инвесторам и заказчикам увидеть ваши преимущества заранее.","img":"v17-desktop-card_12.jpg","mobile":"v17-mobile-card_12.jpg","hover":"Передайте ценность места, прежде чем его посетят."},{"label":"Индивидуальный проект","desc":"Решение, созданное именно под ваш бизнес. Расскажите нам о своей задаче — мы предложим индивидуальный формат презентации, который поможет показать ценность вашего продукта.","img":"v17-desktop-card_13.jpg","mobile":"v17-mobile-card_13.jpg","hover":"Решение, созданное именно под ваш бизнес."}];
const gallery = document.getElementById('gallery');
const stage = document.getElementById('stage');
const title = document.getElementById('activeName');
const preview = document.getElementById('preview');
const orbit = document.querySelector('.orbit-trace');
const N = DATA.length;
const STEP = Math.PI * 2 / N;
const START = 11;
const DURATION = 360;
let position = 0;
let target = 0;
let drag = null;
let activeIndex = START;
let frontIndex = START;
let transition = null;
let suppressPointerClick = false;
let frameId = null;
let previousFocus = null;
let layoutWidth = 0;
let layoutHeight = 0;
let settledIndex = START;
let hapticPending = false;
let lastHaptic = -Infinity;
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");

const els = DATA.map((item, index) => {
  const card = document.createElement('button');
  card.className = 'card';
  card.type = 'button';
  card.setAttribute('aria-label', item.label);
  card.innerHTML = `<picture><source media="(max-width: 699px)" srcset="${item.mobile}"><img class="photo" alt="" draggable="false" decoding="async" src="${item.img}"></picture><div class="depth-shade" aria-hidden="true"></div><div class="rim"></div><div class="content"></div><div class="hover-desc"></div>`;
  card.querySelector('.content').textContent = item.label;
  card.querySelector('.hover-desc').textContent = item.hover;
  card.addEventListener('click', event => {
    if (suppressPointerClick && event.detail !== 0) return;
    updatePosition(performance.now());
    // Use the visible angle, including completed turns and an ongoing transition.
    const offset = normalize(index - START + position / STEP);
    if (Math.abs(offset) > .01) {
      beginTransition(Math.round((position - offset * STEP) / STEP) * STEP);
    } else {
      openCard(index);
    }
  });
  gallery.appendChild(card);
  return card;
});

function normalize(offset) {
  return ((offset + N / 2) % N + N) % N - N / 2;
}

function layout() {
  const width = stage.clientWidth;
  const height = stage.clientHeight;
  const resized = width !== layoutWidth || height !== layoutHeight;
  layoutWidth = width;
  layoutHeight = height;
  const mobile = width < 700;
  const radius = Math.min(width * (mobile ? .82 : .445), mobile ? 440 : 745);
  const preferredWidth = mobile ? Math.min(248, width * .70) : Math.min(348, Math.max(270, width * .217));
  const cardWidth = Math.min(preferredWidth, Math.max(132, (height - 200) * .72));
  const cardHeight = cardWidth / 1.285;
  const radiusY = Math.min(height * (mobile && height < 700 ? .07 : height < 560 ? .09 : .15), 140);
  const preferredCenter = height < 560 ? height * .46 : height * (mobile ? .53 : .54);
  const centerY = mobile && height >= 560 ? Math.min(preferredCenter, height - 200 - radiusY - cardHeight / 2) : preferredCenter;

  // The ellipse follows the feet of the cards, including depth scaling.
  const backScale = mobile ? .44 : .54;
  const frontScale = mobile ? 1 : 1.04;
  const scaleMiddle = (frontScale + backScale) / 2;
  const scaleDepth = (frontScale - backScale) / 2;
  const orbitCenter = centerY + cardHeight * scaleMiddle / 2;
  const orbitRadiusY = radiusY + cardHeight * scaleDepth / 2;
  if (resized) {
    orbit.style.top = orbitCenter + 'px';
    orbit.style.width = radius * 2 + 'px';
    orbit.style.height = orbitRadiusY * 2 + 'px';
  }

  const nearest = ((START - Math.round(position / STEP)) % N + N) % N;
  const frontOffset = normalize(frontIndex - START + position / STEP);
  // Keep the selected card above its neighbours until most of the step is travelled.
  if (Math.abs(frontOffset) > .64) frontIndex = nearest;

  for (let index = 0; index < N; index++) {
    const angle = (index - START) * STEP + position;
    const depth = Math.cos(angle);
    const side = Math.sin(angle);
    const frontDepth = Math.max(0, depth);
    const separation = cardWidth * (mobile ? .9 : .16) * side * frontDepth * frontDepth;
    const x = side * radius + separation;
    // The front arc is flatter, so the card slides sideways before receding.
    const shapedDepth = depth >= 0 ? 1 - Math.pow(1 - depth, 1.55) : depth;
    const y = centerY + shapedDepth * radiusY;
    const scale = scaleMiddle + shapedDepth * scaleDepth;
    // A shallower turn retains image proportions and readable side-card titles.
    const tilt = -side * (mobile ? 18 : 24);
    const card = els[index];
    if (resized) {
      card.style.width = cardWidth + 'px';
      card.style.height = cardHeight + 'px';
    }
    card.style.transform = `translate3d(calc(-50% + ${x.toFixed(2)}px),${(y - cardHeight / 2).toFixed(2)}px,0) perspective(1400px) rotateY(${tilt.toFixed(2)}deg) scale(${scale.toFixed(4)})`;
    const distance = (depth + 1) / 2;
    card.style.opacity = (.48 + distance * .52).toFixed(3);
    card.querySelector('.depth-shade').style.opacity = (.42 * (1 - distance)).toFixed(3);
    card.style.zIndex = String(index === frontIndex ? 300 : Math.round((depth + 1) * 100));
    const isActive = index === frontIndex;
    card.classList.toggle('is-active', isActive);
    card.tabIndex = isActive ? 0 : -1;
  }

  if (nearest !== activeIndex) {
    activeIndex = nearest;
    title.textContent = DATA[activeIndex].label;
  }
}

function ease(progress) {
  return 1 - Math.pow(1 - progress, 3);
}

function updatePosition(now) {
  if (!transition) return;
  const progress = Math.max(0, Math.min(1, (now - transition.start) / transition.duration));
  position = transition.from + (transition.to - transition.from) * ease(progress);
  if (progress >= 1) transition = null;
}

function beginTransition(to, duration = DURATION) {
  const now = performance.now();
  updatePosition(now);
  const distance = Math.abs(to - position) / STEP;
  const adjustedDuration = Math.min(460, Math.max(130, duration * Math.sqrt(distance)));
  target = to;
  if (reducedMotion.matches) {
    position = target;
    transition = null;
  } else {
    transition = { from: position, to: target, start: now, duration: adjustedDuration };
  }
  hapticPending = true;
  scheduleFrame();
}

function scheduleFrame() {
  if (frameId === null && !document.hidden) frameId = requestAnimationFrame(frame);
}

function frame(now) {
  frameId = null;
  if (!drag) updatePosition(now);
  layout();
  if (transition && !drag) scheduleFrame();
  if (!transition && !drag && hapticPending) {
    hapticPending = false;
    if (activeIndex !== settledIndex && now - lastHaptic > 100 && typeof navigator.vibrate === 'function') {
      try { navigator.vibrate(8); } catch (_) { /* Browser may decline haptics. */ }
      lastHaptic = now;
    }
    settledIndex = activeIndex;
  }
}

title.textContent = DATA[activeIndex].label;
scheduleFrame();

function move(direction) {
  if (drag) return;
  beginTransition(target + direction * STEP);
}

document.getElementById('prev').addEventListener('click', () => move(1));
document.getElementById('next').addEventListener('click', () => move(-1));
document.addEventListener('keydown', event => {
  if (preview.open) return;
  if (event.key === 'Escape' && !contactRail.hidden) { setContacts(false, true); return; }
  if (event.altKey || event.ctrlKey || event.metaKey) return;
  if (event.key === 'ArrowLeft') {
    event.preventDefault();
    move(1);
  }
  if (event.key === 'ArrowRight') {
    event.preventDefault();
    move(-1);
  }
});

gallery.addEventListener('pointerdown', event => {
  if (!event.isPrimary || drag || event.button !== 0) return;
  updatePosition(performance.now());
  transition = null;
  target = position;
  suppressPointerClick = false;
  drag = {
    pointerId: event.pointerId,
    x: event.clientX,
    y: event.clientY,
    start: position,
    startStep: Math.round(position / STEP),
    lastX: event.clientX,
    lastTime: performance.now(),
    velocity: 0,
    moved: false
  };
  // Capture after horizontal dragging starts so an ordinary tap reaches its card.
});

gallery.addEventListener('pointermove', event => {
  if (!drag || event.pointerId !== drag.pointerId) return;
  const dx = event.clientX - drag.x;
  const dy = event.clientY - drag.y;
  if (!drag.moved) {
    if (Math.max(Math.abs(dx), Math.abs(dy)) <= 5) return;
    if (Math.abs(dy) > Math.abs(dx)) {
      release(event);
      return;
    }
    drag.moved = true;
    suppressPointerClick = true;
    gallery.setPointerCapture(event.pointerId);
    gallery.classList.add('dragging');
  }
  const now = performance.now();
  const elapsed = now - drag.lastTime;
  const pixelsPerStep = Math.max(155, layoutWidth * .19);
  if (elapsed > 0) {
    const speed = (event.clientX - drag.lastX) / elapsed / pixelsPerStep * STEP;
    drag.velocity = elapsed > 80 ? speed : drag.velocity * .25 + speed * .75;
  }
  drag.lastX = event.clientX;
  drag.lastTime = now;
  position = drag.start + dx / pixelsPerStep * STEP;
  target = position;
  scheduleFrame();
});

function release(event) {
  if (!drag || event.pointerId !== drag.pointerId) return;
  const moved = drag.moved;
  const startStep = drag.startStep;
  const travelled = Math.abs(position / STEP - startStep);
  // Only a fresh pointer release carries momentum. A cancelled gesture settles in place.
  const velocity = event.type === 'pointerup' && performance.now() - drag.lastTime < 80
    ? drag.velocity : 0;
  const intentional = travelled >= .22;
  const momentum = intentional
    ? Math.max(-STEP, Math.min(STEP, velocity * 100)) : 0;
  const destination = event.type !== 'pointerup'
    ? Math.round(position / STEP)
    : intentional ? Math.round((position + momentum) / STEP) : startStep;
  drag = null;
  gallery.classList.remove('dragging');
  if (gallery.hasPointerCapture(event.pointerId)) {
    gallery.releasePointerCapture(event.pointerId);
  }
  // Also settle an interrupted animation or cancelled gesture on a whole card.
  if (moved || Math.abs(position / STEP - Math.round(position / STEP)) > .001) {
    beginTransition(destination * STEP, 260);
  }
}

window.addEventListener('pointerup', release);
window.addEventListener('pointercancel', release);
gallery.addEventListener('lostpointercapture', event => {
  // Touch starts with implicit capture on the card. Transferring capture to
  // the gallery emits a bubbling event from that card, not a finished drag.
  if (event.target === gallery) release(event);
});

let wheelLock = -Infinity;
gallery.addEventListener('wheel', event => {
  const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
  if (Math.abs(delta) <= 12) return;
  event.preventDefault();
  const now = performance.now();
  if (now - wheelLock > 190) {
    move(-Math.sign(delta));
    wheelLock = now;
  }
}, { passive: false });

const contactToggle = document.getElementById('contactToggle');
const contactRail = document.getElementById('contactRail');
const communication = document.querySelector('.communication');
function setContacts(open, returnFocus = false) {
  contactRail.hidden = !open;
  if (!open) { document.getElementById("phonePanel").hidden = true; document.getElementById("phoneToggle").setAttribute("aria-expanded", "false"); }
  contactToggle.setAttribute('aria-expanded', String(open));
  contactToggle.setAttribute('aria-label', open ? 'Скрыть способы связи' : 'Показать способы связи');
  if (returnFocus) contactToggle.focus({preventScroll: true});
}
contactToggle.addEventListener('click', () => setContacts(contactRail.hidden));
document.addEventListener('pointerdown', event => {
  if (!communication.contains(event.target)) setContacts(false);
});
communication.addEventListener('focusout', event => {
  if (!communication.contains(event.relatedTarget)) setContacts(false);
});
contactRail.addEventListener('click', event => {
  if (event.target.closest('a')) setContacts(false, true);
});

function openCard(index) {
  previousFocus = document.activeElement;
  setContacts(false);
  document.getElementById('previewImage').src = DATA[index].img;
  document.getElementById('previewImage').alt = DATA[index].label;
  document.getElementById('previewTitle').textContent = DATA[index].label;
  document.getElementById('previewDesc').textContent = DATA[index].desc;
  preview.showModal();
  document.getElementById('close').focus({preventScroll: true});
}
function closeCard() { preview.close(); }
preview.addEventListener('close', () => {
  if (previousFocus?.isConnected) previousFocus.focus({preventScroll: true});
});
preview.addEventListener('keydown', event => {
  // The close button is the only interactive element inside this dialog.
  if (event.key === 'Tab') { event.preventDefault(); document.getElementById('close').focus(); }
});
document.getElementById('close').addEventListener('click', closeCard);
preview.addEventListener('click', event => { if (event.target === preview) closeCard(); });
window.addEventListener('resize', scheduleFrame);
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    if (frameId !== null) cancelAnimationFrame(frameId);
    frameId = null;
    if (drag) { drag = null; gallery.classList.remove('dragging'); }
    position = Math.round(target / STEP) * STEP;
    target = position;
    transition = null;
  } else scheduleFrame();
});
reducedMotion.addEventListener('change', () => {
  if (reducedMotion.matches && transition) { position = target; transition = null; }
  scheduleFrame();
});

const phoneToggle = document.getElementById('phoneToggle');
const phonePanel = document.getElementById('phonePanel');
phoneToggle.addEventListener('click', () => {
  phonePanel.hidden = !phonePanel.hidden;
  phoneToggle.setAttribute('aria-expanded', String(!phonePanel.hidden));
  document.getElementById('copyStatus').textContent = '';
});
document.getElementById('copyPhone').addEventListener('click', async () => {
  const status = document.getElementById('copyStatus');
  try {
    await navigator.clipboard.writeText('+79064891949');
    status.textContent = 'Номер скопирован';
  } catch (_) {
    const range = document.createRange();
    range.selectNodeContents(document.getElementById('phoneNumber'));
    const selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range);
    status.textContent = 'Номер выделен — скопируйте его вручную';
  }
});
