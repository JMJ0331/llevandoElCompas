/* =========================================================
   LLEVANDO EL COMPÁS — interacciones de interfaz (vanilla JS)
   Solo frontend: sin backend, sin frameworks.
   ========================================================= */
(function () {
  "use strict";

  /* Capa visual adicional: permite evolucionar el frontend sin introducir frameworks. */
  var style = document.createElement("style");
  style.textContent = `
    :root{--naranja:#1E6FD9;--crema:#F5F7FA;--bg-alt:#F5F7FA;--publicidad:#F5F7FA}
    [data-theme="oscuro"]{--crema:#101E33;--bg-alt:#101E33}
    :focus-visible{outline-color:var(--azul)}
    .site-header{box-shadow:0 2px 10px rgba(11,61,145,.06)}
    .nav-principal a:hover,.nav-principal a.is-active{border-color:var(--rojo)}
    .layout{gap:1.5rem;align-items:start}
    .sidebar{gap:1rem}
    .widget{padding:1rem}
    .section{padding-top:2rem}
    .section__head{margin-bottom:.85rem;padding-bottom:.6rem}
    .section__bearing{color:var(--azul-oscuro)}
    .eyebrow--economia,.eyebrow--mundo,.eyebrow--nacionales,.eyebrow--cultura{color:var(--azul-oscuro)}
    .tag--naranja{background:var(--azul)}
    .hero__lead-media .tag--rojo{top:.7rem;left:.7rem;font-size:.62rem;letter-spacing:.08em;display:inline-flex;align-items:center;gap:.35rem}
    .hero__lead-media .tag--rojo::before{content:"";width:6px;height:6px;border-radius:50%;background:#fff}
    .ad-slot{background:var(--publicidad);border:1px dashed var(--gris-300);min-height:120px;display:flex;align-items:center;justify-content:center;color:var(--gris-500);font-family:var(--fuente-mono);font-size:.65rem;letter-spacing:.08em;text-transform:uppercase}
    .ad-slot--leaderboard{min-height:90px;margin:1rem auto}.ad-slot--main{min-height:140px;margin:1.5rem 0}.ad-slot--sidebar{min-height:180px;margin:0 0 1rem}
    .utility-widgets{display:grid;grid-template-columns:1fr;gap:.75rem;margin-top:.75rem}
    .weather-widget,.lottery-widget{background:var(--superficie);border:1px solid var(--borde);border-radius:var(--radio-md);padding:.85rem}
    .weather-widget__top,.lottery-widget__top{display:flex;align-items:center;justify-content:space-between;gap:.75rem}
    .weather-widget__title,.lottery-widget__title{font-weight:700;font-size:.82rem}.weather-widget__temp{font-family:var(--fuente-display);font-size:1.45rem;font-weight:700}.weather-widget__meta{font-size:.72rem;color:var(--texto-suave)}
    .lottery-results{display:grid;grid-template-columns:repeat(3,1fr);gap:.4rem;margin-top:.6rem}.lottery-result{padding:.45rem .25rem;text-align:center;border:1px solid var(--borde);border-radius:4px}.lottery-result strong{display:block;color:var(--azul-oscuro);font-family:var(--fuente-mono);font-size:.95rem}.lottery-result span{display:block;color:var(--texto-suave);font-size:.58rem;text-transform:uppercase;margin-top:.15rem}
    .editorial-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem}.editorial-card{padding:1rem;background:var(--bg-alt);border-left:4px solid var(--azul-oscuro);border-radius:0 var(--radio-md) var(--radio-md) 0}.editorial-card h3{font-size:1.15rem;line-height:1.25}.editorial-card p{margin:.4rem 0 0;color:var(--texto-suave);font-size:.88rem}
    .site-footer{background:#071F4A}.sidebar .widget + .widget{margin-top:0}
    @media(min-width:860px){.layout{display:grid;grid-template-columns:minmax(0,1fr) 300px}.sidebar{width:auto}}
    @media(max-width:700px){.editorial-grid{grid-template-columns:1fr}}
  `;
  document.head.appendChild(style);

  /* Fecha */
  var fechaEl = document.getElementById("fecha-hoy");
  if (fechaEl) {
    var hoy = new Date();
    var opciones = { weekday: "long", day: "numeric", month: "long" };
    var texto = hoy.toLocaleDateString("es-DO", opciones);
    fechaEl.textContent = texto.charAt(0).toUpperCase() + texto.slice(1);
  }

  /* Menú móvil */
  var menuToggle = document.getElementById("menuToggle");
  var navPrincipal = document.getElementById("navPrincipal");
  if (menuToggle && navPrincipal) {
    menuToggle.addEventListener("click", function () {
      var abierto = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!abierto));
      menuToggle.setAttribute("aria-label", abierto ? "Abrir menú de navegación" : "Cerrar menú de navegación");
      navPrincipal.classList.toggle("is-open", !abierto);
    });
  }

  /* Búsqueda */
  var searchToggle = document.getElementById("searchToggle");
  var searchPanel = document.getElementById("searchPanel");
  if (searchToggle && searchPanel) {
    searchToggle.addEventListener("click", function () {
      var abierto = searchToggle.getAttribute("aria-expanded") === "true";
      searchToggle.setAttribute("aria-expanded", String(!abierto));
      searchPanel.hidden = abierto;
      if (!abierto) { var input = searchPanel.querySelector("input[type='search']"); if (input) input.focus(); }
    });
  }

  /* Modo oscuro */
  var themeToggle = document.getElementById("themeToggle");
  var STORAGE_KEY = "llevando-el-compas-tema";
  function aplicarTema(tema) {
    if (tema === "oscuro") document.documentElement.setAttribute("data-theme", "oscuro");
    else document.documentElement.removeAttribute("data-theme");
    if (themeToggle) {
      themeToggle.setAttribute("aria-pressed", String(tema === "oscuro"));
      themeToggle.setAttribute("aria-label", tema === "oscuro" ? "Activar modo claro" : "Activar modo oscuro");
    }
  }
  function obtenerTemaGuardado() { try { return window.localStorage.getItem(STORAGE_KEY); } catch (err) { return null; } }
  function guardarTema(tema) { try { window.localStorage.setItem(STORAGE_KEY, tema); } catch (err) {} }
  var temaGuardado = obtenerTemaGuardado();
  var prefiereOscuro = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  aplicarTema(temaGuardado || (prefiereOscuro ? "oscuro" : "claro"));
  if (themeToggle) themeToggle.addEventListener("click", function () { var actual = document.documentElement.getAttribute("data-theme") === "oscuro"; var nuevoTema = actual ? "claro" : "oscuro"; aplicarTema(nuevoTema); guardarTema(nuevoTema); });

  /* Carrusel */
  var carouselTrack = document.getElementById("destacadasTrack");
  var carouselBtns = document.querySelectorAll(".carousel-btn");
  if (carouselTrack && carouselBtns.length) carouselBtns.forEach(function (btn) { btn.addEventListener("click", function () { var direccion = parseInt(btn.getAttribute("data-dir"), 10) || 1; var tarjeta = carouselTrack.querySelector(".story-card--carousel"); var salto = tarjeta ? tarjeta.getBoundingClientRect().width + 20 : 280; carouselTrack.scrollBy({ left: salto * direccion, behavior: "smooth" }); }); });

  /* Páginas independientes */
  var rutas = {"Portada":"pages/home.html","Nacionales":"pages/nacionales.html","Economía":"pages/economia.html","Deportes":"pages/deportes.html","Cultura & Entretenimiento":"pages/cultura.html","Mundo":"pages/mundo.html","Opinión":"pages/opinion.html","Provincias":"pages/provincias.html"};
  if (navPrincipal) {
    navPrincipal.querySelectorAll("a").forEach(function (enlace) { var nombre = enlace.textContent.trim(); if (rutas[nombre]) enlace.setAttribute("href", rutas[nombre]); });
    var ul = navPrincipal.querySelector("ul");
    if (ul && !Array.prototype.some.call(ul.querySelectorAll("a"), function(a){return a.textContent.trim()==="Editorial";})) { var li=document.createElement("li"); var a=document.createElement("a"); a.href="pages/editorial.html"; a.textContent="Editorial"; li.appendChild(a); ul.appendChild(li); }
  }

  /* Widgets de clima y lotería: UI lista para conectar fuentes reales posteriormente. */
  var sidebar = document.querySelector(".sidebar");
  if (sidebar) {
    var widgets = document.createElement("div");
    widgets.className = "utility-widgets";
    widgets.innerHTML = '<section class="weather-widget" data-weather-widget aria-label="Clima"><div class="weather-widget__top"><strong class="weather-widget__title">Clima</strong><span class="weather-widget__temp" data-weather-temp>28 °C</span></div><div class="weather-widget__meta" data-weather-meta>Santiago de los Caballeros · Condición actual</div></section>' +
      '<section class="lottery-widget" data-lottery-widget aria-label="Resultados de lotería"><div class="lottery-widget__top"><strong class="lottery-widget__title">Resultados de lotería</strong><span class="weather-widget__meta">Hoy</span></div><div class="lottery-results"><div class="lottery-result"><strong data-lottery-number>14</strong><span>Primera</span></div><div class="lottery-result"><strong data-lottery-number>27</strong><span>Segunda</span></div><div class="lottery-result"><strong data-lottery-number>36</strong><span>Tercera</span></div></div></section>';
    sidebar.insertBefore(widgets, sidebar.firstChild);
    var ads = document.createElement("div");
    ads.innerHTML = '<div class="ad-slot ad-slot--sidebar">Espacio publicitario</div><div class="ad-slot ad-slot--sidebar">Espacio publicitario</div>';
    sidebar.appendChild(ads);
  }

  /* Más inventario publicitario en el contenido principal. */
  var mainColumn = document.querySelector(".layout__main");
  if (mainColumn) {
    var ad = document.createElement("div"); ad.className="ad-slot ad-slot--main"; ad.textContent="Espacio publicitario";
    var firstSection = mainColumn.querySelector(".section"); if (firstSection) firstSection.parentNode.insertBefore(ad, firstSection);
  }

  /* Editorial y Opinión: bloques visuales explícitos en portada. */
  if (mainColumn && !document.getElementById("editorial-opiniones")) {
    var editorial = document.createElement("section");
    editorial.id="editorial-opiniones"; editorial.className="section";
    editorial.innerHTML='<div class="section__head"><h2 class="section__title">Editorial y Opiniones</h2><a class="section__link" href="pages/opinion.html">Ver sección →</a></div><div class="editorial-grid"><article class="editorial-card"><h3><a href="pages/editorial.html">Editorial</a></h3><p>La posición y voz editorial de Llevando el Compás.</p></article><article class="editorial-card"><h3><a href="pages/opinion.html">Opiniones</a></h3><p>Análisis, columnas y perspectivas de nuestros colaboradores.</p></article></div>';
    mainColumn.appendChild(editorial);
  }

  /* Iconos sociales por atributo o por enlaces comunes del footer. */
  var icons = {
    facebook:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.7.3-1 1-1z"/></svg>',
    instagram:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    youtube:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="3" fill="currentColor"/><path d="M10 9l5 3-5 3z" fill="#fff"/></svg>',
    x:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5 4h4.2l3.2 4.6L16.3 4H19l-5.4 6.2L19.5 20h-4.2l-3.7-5.3L7.1 20H4.4l5.8-6.7z"/></svg>'
  };
  document.querySelectorAll("a[data-social]").forEach(function (link) { var key=link.getAttribute("data-social"); if(icons[key]){link.innerHTML=icons[key];link.setAttribute("aria-label",key);} });

  /* Cerrar menú al navegar */
  document.querySelectorAll('a[href^="#"]').forEach(function (enlace) { enlace.addEventListener("click", function () { if(navPrincipal && navPrincipal.classList.contains("is-open")){navPrincipal.classList.remove("is-open");if(menuToggle)menuToggle.setAttribute("aria-expanded","false");} }); });
})();
