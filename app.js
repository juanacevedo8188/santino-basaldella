// Menú: marca la sección que está en pantalla.
const links = [...document.querySelectorAll('.site-nav a')];
const sections = links.map(link => document.querySelector(link.getAttribute('href')));
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    links.forEach(link => {
      if (link.getAttribute('href') === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  });
}, { rootMargin: '-45% 0px -50% 0px' });
sections.forEach(section => observer.observe(section));

// Sombra del encabezado al bajar.
const header = document.querySelector('.header');
const onScroll = () => header.classList.toggle('scrolled', scrollY > 8);
addEventListener('scroll', onScroll, { passive: true }); onScroll();

// Contacto.
const dialog = document.querySelector('#contact-dialog');
document.querySelector('#contact-open').addEventListener('click', () => dialog.showModal());
dialog.querySelectorAll('.close,.close-bottom').forEach(button => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', event => { if (event.target === dialog) { const box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); } });

// Pestañas de resultados.
const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectTab(tab){ tabs.forEach(item => {const active=item===tab;item.setAttribute('aria-selected',String(active));item.tabIndex=active?0:-1;document.getElementById(item.getAttribute('aria-controls')).hidden=!active;}); }
tabs.forEach((tab,i) => { tab.addEventListener('click',() => selectTab(tab)); tab.addEventListener('keydown',event => {let n;if(event.key==='ArrowRight')n=(i+1)%tabs.length;else if(event.key==='ArrowLeft')n=(i+tabs.length-1)%tabs.length;else if(event.key==='Home')n=0;else if(event.key==='End')n=tabs.length-1;else return;event.preventDefault();selectTab(tabs[n]);tabs[n].focus();}); });
