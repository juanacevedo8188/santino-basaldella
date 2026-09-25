// Español = el HTML tal cual. Acá solo va el inglés; si falta una clave, queda en español.
const EN = {
  meta: {
    title: 'Santino Basaldella — Made of water.',
    description: 'Santino Basaldella. Argentine SUP Race athlete, double South American champion at ODESUR 2026, qualified for the Lima 2027 Pan American Games, Pan American medalist and five-time Argentine champion. Discover his journey and be part of what comes next.'
  },
  partner: 'Join the team <span aria-hidden="true">↗</span>',
  'hero.eyebrow': 'SANTINO BASALDELLA / ARGENTINE ATHLETE',
  'hero.title': 'MADE<br>OF <span>WATER.</span>',
  'hero.intro': 'Passion is the starting point.<br>The world, the next start line.',
  'hero.cta': 'See the latest <span aria-hidden="true">↗</span>',
  'hero.bottom': 'DOUBLE GOLD · ODESUR GAMES 2026<br><strong>Sprint and technical race. Qualified for the Lima 2027 Pan American Games.</strong>',
  'hero.stat1': 'ARGENTINE<br>CHAMPION',
  'hero.stat2': 'WORLD<br>CHAMPIONSHIPS',
  ticker: '<span>DOUBLE GOLD · ODESUR 2026</span><span>QUALIFIED FOR THE LIMA 2027 PAN AMERICAN GAMES</span><span>5× ARGENTINE CHAMPION</span><span>PAN AMERICAN BRONZE · SANTIAGO 2023</span><span>5 WORLD CHAMPIONSHIPS</span>',
  'latest.caption': 'TWO GOLDS. THE SAME PASSION.',
  'latest.eyebrow': 'LATEST RESULTS',
  'latest.title': 'THE PRESENT<br>SHINES <em>GOLD.</em>',
  'latest.intro': 'Double South American champion at the 2026 ODESUR Games. A result that defines his path and a new qualification to keep representing Argentina.',
  'latest.medals': '<article><span>GOLD / ODESUR 2026</span><h3>Sprint</h3><p>South American champion</p></article><article><span>GOLD / ODESUR 2026</span><h3>Technical race</h3><p>South American champion</p></article>',
  'latest.qualification': '<span>QUALIFIED</span><h3>PAN AMERICAN GAMES<br><strong>LIMA 2027</strong></h3><p>A new international goal. The next chapter already has a destination.</p>',
  'latest.raceCaption': 'ODESUR 2026 · RACING',
  'results.caption': 'ARGENTINA ON THE PODIUM.',
  'results.eyebrow': 'THE JOURNEY',
  'results.title': 'THE WORK<br>SPEAKS FOR <em>ITSELF.</em>',
  'results.intro': 'Representing Argentina since 2022. Pan American Games medalist in Santiago 2023 at 17, double gold at ODESUR 2026, five consecutive Argentine titles and five World Championships.',
  'tab.podium': 'Podiums',
  'tab.worlds': 'Worlds',
  'tab.circuit': 'Circuit',
  'tab.awards': 'Awards',
  'list.podium': `
        <article class="gold-result"><b>01</b><div><h3>ODESUR Games · Sprint</h3><p>South American champion · 2026</p></div><span>GOLD</span></article>
        <article class="gold-result"><b>01</b><div><h3>ODESUR Games · Technical race</h3><p>South American champion · 2026</p></div><span>GOLD</span></article>
        <article><b>03</b><div><h3>Pan American Surf Games</h3><p>Playa Venao, Panama · 2026</p></div><span>BRONZE</span></article>
        <article><b>02</b><div><h3>SUP Copa América · Overall</h3><p>Colombia · 2025</p></div><span>SILVER</span></article>
        <article><b>02</b><div><h3>ALAS Latin Tour · Grand Final</h3><p>El Salvador · 2024</p></div><span>SILVER</span></article>
        <article><b>02</b><div><h3>Pan American Surf Games</h3><p>Punta Rocas, Peru · 2024</p></div><span>SILVER</span></article>
        <article><b>02</b><div><h3>Lake Rocks · Euro Tour</h3><p>Austria · Technical Race · 2024</p></div><span>SILVER</span></article>
        <article><b>03</b><div><h3>SUP Copa América · Open</h3><p>Colombia · 2024</p></div><span>BRONZE</span></article>
        <article><b>03</b><div><h3>Pan American Games</h3><p>Santiago, Chile · 2023</p></div><span>BRONZE</span></article>
        <article><b>03</b><div><h3>South American Beach Games</h3><p>Santa Marta, Colombia · 2023</p></div><span>BRONZE</span></article>
      `,
  'list.worlds': `
        <article><b>11</b><div><h3>ISA · El Salvador · 2025</h3><p>11th place</p></div></article>
        <article><b>12</b><div><h3>ISA · Denmark · 2024</h3><p>12th place</p></div></article>
        <article><b class="no-rank" aria-hidden="true"><svg viewBox="0 0 32 24" width="34" height="26"><path d="M2 9c3 0 3-3 6-3s3 3 6 3 3-3 6-3 3 3 6 3 3-3 4-3M2 17c3 0 3-3 6-3s3 3 6 3 3-3 6-3 3 3 6 3 3-3 4-3" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg></b><div><h3>ICF · Sarasota, USA · 2024</h3><p>World Championship competitor</p></div></article>
        <article><b>08</b><div><h3>ISA · France · 2023</h3><p>8th place</p></div></article>
        <article><b class="no-rank" aria-hidden="true"><svg viewBox="0 0 32 24" width="34" height="26"><path d="M2 9c3 0 3-3 6-3s3 3 6 3 3-3 6-3 3 3 6 3 3-3 4-3M2 17c3 0 3-3 6-3s3 3 6 3 3-3 6-3 3 3 6 3 3-3 4-3" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg></b><div><h3>ISA · Puerto Rico · 2022</h3><p>Qualified for the Santiago 2023 Pan American Games</p></div></article>
      `,
  'list.circuit': `
        <article><b>02</b><div><h3>Lake Rocks Festival · Euro Tour</h3><p>Austria · Technical Race · 2024</p></div><span>SILVER</span></article>
        <article><b>T9</b><div><h3>Punta Ala · Euro Tour</h3><p>Italy · 2024 · Top 9</p></div></article>
        <article><b class="no-rank" aria-hidden="true"><svg viewBox="0 0 32 24" width="34" height="26"><path d="M2 9c3 0 3-3 6-3s3 3 6 3 3-3 6-3 3 3 6 3 3-3 4-3M2 17c3 0 3-3 6-3s3 3 6 3 3-3 6-3 3 3 6 3 3-3 4-3" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg></b><div><h3>Mondello · Euro Tour</h3><p>Italy · 2024</p></div></article>
        <article><b class="no-rank" aria-hidden="true"><svg viewBox="0 0 32 24" width="34" height="26"><path d="M2 9c3 0 3-3 6-3s3 3 6 3 3-3 6-3 3 3 6 3 3-3 4-3M2 17c3 0 3-3 6-3s3 3 6 3 3-3 6-3 3 3 6 3 3-3 4-3" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg></b><div><h3>Barcelona SUP World Festival · Euro Tour</h3><p>Spain · 2024</p></div></article>
        <article><b>02</b><div><h3>ALAS Latin Tour · Grand Final</h3><p>El Salvador · 2024</p></div><span>SILVER</span></article>
        <article><b>04</b><div><h3>ALAS Latin Tour · Grand Final</h3><p>El Salvador · 2025</p></div></article>
        <div class="photo-pair"><figure><img src="assets/euro-lake-rocks.jpeg" alt="Technical race start at the Lake Rocks Festival, Austria" loading="lazy"><figcaption>LAKE ROCKS · AUSTRIA</figcaption></figure><figure><img src="assets/euro-barcelona.jpeg" alt="Santino at the start of the Barcelona SUP World Festival" loading="lazy"><figcaption>BARCELONA SUP WORLD FESTIVAL</figcaption></figure></div>
      `,
  'list.awards': `
        <article><b>5×</b><div><h3>Argentine champion</h3><p>2022 · 2023 · 2024 · 2025 · 2026</p></div></article>
        <article><b>01</b><div><h3>Athlete of the Year</h3><p>Centennial Award, Argentine Olympic Committee</p></div></article>
        <article><b>01</b><div><h3>Olimpia de Plata</h3><p>Surf category</p></div></article>
        <article><b>2×</b><div><h3>U21 champion · Copa América</h3><p>Colombia · 2024 and 2025</p></div></article>
        <article><b>17</b><div><h3>Years old at his first Pan American Games</h3><p>Santiago 2023 · Bronze medal</p></div></article>
      `,
  waterman: '<p class="eyebrow">BEYOND THE RACE</p><h2>MY PLACE.<br><em>IN ANY</em><br>FORM.</h2><p>Water isn’t just where I compete. It’s where I learn, explore and find new ways to go a little further.</p><p>SUP Race, windsurf, windfoil, foil, SUP foil and surf. Different disciplines. One connection.</p><div class="water-tags"><span>COMPETE</span><span>EXPLORE</span><span>SHARE</span></div><figure class="water-extra"><img src="assets/surf-ola.jpeg" alt="Santino dropping into a wave" loading="lazy"><figcaption>SURF · ANOTHER WAY TO READ THE WATER</figcaption></figure>',
  'coach.eyebrow': 'BEHIND EVERY RESULT',
  'coach.title': 'NOBODY PADDLES<br><em>ALONE.</em>',
  'coach.text': 'Every podium starts long before the start line: on the water, session after session, alongside his coach. Fitness, technique and race strategy to compete at the highest level.',
  'coach.tags': '<span>TRAINING</span><span>TECHNIQUE</span><span>STRATEGY</span>',
  'coach.caption': 'SANTINO AND HIS COACH.',
  'sponsors.eyebrow': 'WHAT’S NEXT, WE BUILD TOGETHER',
  'sponsors.title': 'MUCH MORE<br>THAN A <em>LOGO.</em>',
  'sponsors.intro': 'Two golds at ODESUR and qualifying for the Lima 2027 Pan American Games open a new chapter. I’m looking for brands that share my way of living the sport, to build what comes next together.',
  'numbers.title': 'BY THE NUMBERS',
  'numbers.ig': 'Instagram followers',
  'numbers.podiums': 'International podiums',
  'numbers.countries': 'Countries raced in',
  'numbers.worlds': 'World Championships',
  'numbers.note': 'Data as of September 2026.',
  'sponsors.benefits': '<article><span>01</span><div><h3>Your brand in motion</h3><p>Presence at races and training, with products used in real conditions.</p></div></article><article><span>02</span><div><h3>Content from the inside</h3><p>Training, travel and life on the water, told by the one living it.</p></div></article><article><span>03</span><div><h3>An authentic partnership</h3><p>Shared experiences and a collaboration that grows with the sporting journey.</p></div></article>',
  'sponsors.cta': 'Let’s build what’s next <span aria-hidden="true">↗</span>',
  'sponsors.supporters': 'BRANDS ALREADY ON BOARD',
  'sponsors.photo': 'THE NEXT CHAPTER<br><strong>COULD CARRY YOUR BRAND.</strong>',
  'nav.0': 'Home', 'nav.1': 'Latest', 'nav.2': 'Journey', 'nav.3': 'Waterman', 'nav.4': 'Team',
  'dialog.eyebrow': 'LET’S TEAM UP',
  'dialog.title': 'A STORY<br>TO <em>SHARE.</em>',
  'dialog.text': 'Race presence, content and real experiences on the water. The starting point for a tailor-made partnership.',
  'dialog.back': 'Back to the dossier <span aria-hidden="true">↗</span>',
  'alt.hero': 'Santino with his two ODESUR 2026 gold medals',
  'alt.victory': 'Santino celebrating on his board at the 2026 ODESUR Games',
  'alt.panama': 'Santino on the podium at the Pan American Surf Games in Playa Venao, Panama',
  'alt.technical': 'Santino rounding a buoy on his Flying Fish board during the ODESUR technical race',
  'alt.medal': 'Santino with the Argentine flag, a medal and a trophy',
  'alt.surf': 'Santino surfing a wave',
  'alt.coach': 'Santino and his coach standing with their boards and paddles by the water',
  'alt.board': 'Santino standing on his Flying Fish board at sunset'
};

(() => {
  const texts = [...document.querySelectorAll('[data-i18n]')];
  const alts = [...document.querySelectorAll('[data-i18n-alt]')];
  const description = document.querySelector('meta[name="description"]');
  const ES = {
    meta: { title: document.title, description: description.content },
    text: new Map(texts.map(el => [el, el.innerHTML])),
    alt: new Map(alts.map(el => [el, el.alt]))
  };
  const buttons = [...document.querySelectorAll('.lang-switch [data-lang]')];

  function setLang(lang) {
    const en = lang === 'en';
    texts.forEach(el => { const key = el.dataset.i18n; el.innerHTML = en && EN[key] ? EN[key] : ES.text.get(el); });
    alts.forEach(el => { const key = el.dataset.i18nAlt; el.alt = en && EN[key] ? EN[key] : ES.alt.get(el); });
    document.documentElement.lang = lang;
    document.title = en ? EN.meta.title : ES.meta.title;
    description.content = en ? EN.meta.description : ES.meta.description;
    buttons.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  buttons.forEach(b => b.addEventListener('click', () => {
    setLang(b.dataset.lang);
    const url = new URL(location.href);
    if (b.dataset.lang === 'en') url.searchParams.set('lang', 'en'); else url.searchParams.delete('lang');
    history.replaceState(null, '', url);
  }));

  // Prioridad: ?lang= en el link > elección guardada > español.
  let lang = new URLSearchParams(location.search).get('lang');
  if (!lang) { try { lang = localStorage.getItem('lang'); } catch (e) {} }
  if (lang === 'en') setLang('en');
})();
