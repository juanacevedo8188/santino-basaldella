// Menú: marca la sección que está en pantalla. Una sección sin botón propio
// puede indicar cuál marcar con data-nav (ej.: data-nav="equipo").
const links = [...document.querySelectorAll('.site-nav a')];
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const target = '#' + (entry.target.dataset.nav || entry.target.id);
    links.forEach(link => {
      if (link.getAttribute('href') === target) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  });
}, { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main > section').forEach(section => observer.observe(section));

// Sombra del encabezado al bajar.
const header = document.querySelector('.header');
const onScroll = () => header.classList.toggle('scrolled', scrollY > 8);
addEventListener('scroll', onScroll, { passive: true }); onScroll();

// Contacto.
const dialog = document.querySelector('#contact-dialog');
document.querySelector('#contact-open').addEventListener('click', () => dialog.showModal());
dialog.querySelectorAll('.close,.close-bottom').forEach(button => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', event => { if (event.target === dialog) { const box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); } });

// Movimiento: solo con IntersectionObserver y si el teléfono no pide reducir movimiento.
const root = document.documentElement;
const motion = !matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window;
function play(list) {
  if (!motion) return;
  [...list.children].forEach((child, i) => child.style.setProperty('--i', i));
  list.classList.remove('play'); void list.offsetWidth; list.classList.add('play');
}
if (motion) {
  root.classList.add('anim');
  const reveal = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-in');
    reveal.unobserve(entry.target);
  }), { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('[data-reveal],[data-stagger]').forEach(el => reveal.observe(el));
  // Los números de la portada cuentan desde 0.
  document.querySelectorAll('.hero-stat > strong').forEach(el => {
    const [, num, rest] = el.textContent.match(/^(\d+)(.*)$/) || [];
    if (!num) return;
    const start = performance.now() + 600, dur = 900;
    el.textContent = '0' + rest;
    const tick = now => {
      const t = Math.min(1, Math.max(0, (now - start) / dur));
      el.textContent = Math.round(num * (1 - Math.pow(1 - t, 3))) + rest;
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

// "En números": formato según idioma (12,3K / 12.3K) y conteo al aparecer.
function formatCount(el, value) {
  let text = value.toFixed(Number(el.dataset.dec) || 0);
  if (root.lang !== 'en') text = text.replace('.', ',');
  el.textContent = text + (el.dataset.suffix || '');
}
const counters = [...document.querySelectorAll('[data-count]')];
const showFinal = () => counters.forEach(el => formatCount(el, Number(el.dataset.count)));
document.addEventListener('DOMContentLoaded', showFinal);
document.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => setTimeout(showFinal)));
if (motion) {
  const countIn = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    countIn.unobserve(entry.target);
    const els = entry.target.querySelectorAll('[data-count]'), start = performance.now() + 250, dur = 1200;
    const tick = now => {
      const t = Math.min(1, Math.max(0, (now - start) / dur)), k = 1 - Math.pow(1 - t, 3);
      els.forEach(el => formatCount(el, Number(el.dataset.count) * k));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }), { threshold: 0.4 });
  document.querySelectorAll('.numbers').forEach(el => countIn.observe(el));
}

// Pestañas de resultados.
const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectTab(tab){ tabs.forEach(item => {const active=item===tab;item.setAttribute('aria-selected',String(active));item.tabIndex=active?0:-1;const panel=document.getElementById(item.getAttribute('aria-controls'));panel.hidden=!active;if(active)play(panel);}); }
tabs.forEach((tab,i) => { tab.addEventListener('click',() => selectTab(tab)); tab.addEventListener('keydown',event => {let n;if(event.key==='ArrowRight')n=(i+1)%tabs.length;else if(event.key==='ArrowLeft')n=(i+tabs.length-1)%tabs.length;else if(event.key==='Home')n=0;else if(event.key==='End')n=tabs.length-1;else return;event.preventDefault();selectTab(tabs[n]);tabs[n].focus();}); });
