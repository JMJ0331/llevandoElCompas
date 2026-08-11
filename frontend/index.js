/* Llevando el Compás — frontend vanilla JS */
(function () {
  "use strict";

  var style = document.createElement("style");
  style.textContent = `
    :root{--naranja:#1E6FD9;--crema:#F5F7FA;--bg-alt:#F5F7FA;--publicidad:#F5F7FA}
    [data-theme="oscuro"]{--crema:#101E33;--bg-alt:#101E33}
    .brand{margin:0!important;display:flex;align-items:center}
    .site-header__inner{justify-content:flex-start}
    .site-header__tools{margin-left:auto}
    .nav-principal a:hover,.nav-principal a.is-active{border-color:var(--rojo)!important}
    .section__bearing,.eyebrow--economia,.eyebrow--mundo,.eyebrow--nacionales,.eyebrow--cultura{color:var(--azul-oscuro)!important}
    .tag--naranja{background:var(--azul)!important}
    .hero__lead-media .tag--rojo{display:inline-flex;align-items:center;gap:.35rem;font-size:.62rem;letter-spacing:.08em}
    .hero__lead-media .tag--rojo::before{content:"";width:6px;height:6px;border-radius:50%;background:#fff}
    .layout{gap:1.5rem;align-items:start}
    .sidebar{gap:1rem}
    .widget{padding:1rem}
    .utility-widgets{display:grid;gap:.75rem}
    .weather-widget,.lottery-widget{background:var(--superficie);border:1px solid var(--borde);border-radius:var(--radio-md);padding:.85rem}
    .weather-widget__top,.lottery-widget__top{display:flex;align-items:center;justify-content:space-between;gap:.75rem}
    .weather-widget__title,.lottery-widget__title{font-weight:700;font-size:.82rem}
    .weather-widget__temp{font-family:var(--fuente-display);font-size:1.45rem;font-weight:700}
    .weather-widget__meta{font-size:.72rem;color:var(--texto-suave)}
    .lottery-results{display:grid;grid-template-columns:repeat(3,1fr);gap:.4rem;margin-top:.6rem}
    .lottery-result{padding:.45rem .25rem;text-align:center;border:1px solid var(--borde);border-radius:4px}
    .lottery-result strong{display:block;color:var(--azul-oscuro);font-family:var(--fuente-mono);font-size:.95rem}
    .lottery-result span{display:block;color:var(--texto-suave);font-size:.58rem;text-transform:uppercase;margin-top:.15rem}
    .editorial-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem}
    .editorial-card{padding:1rem;background:var(--bg-alt);border-left:4px solid var(--azul-oscuro);border-radius:0 var(--radio-md) var(--radio-md) 0}
    .editorial-card h3{font-size:1.15rem;line-height:1.25}
    .editorial-card p{margin:.4rem 0 0;color:var(--texto-suave);font-size:.88rem}
    .ad-slot{background:var(--publicidad);border:1px dashed var(--gris-300);min-height:120px;display:flex;align-items:center;justify-content:center;color:var(--gris-500);font-family:var(--fuente-mono);font-size:.65rem;letter-spacing:.08em;text-transform:uppercase}
    .ad-slot--main{min-height:140px;margin:1.5rem 0}.ad-slot--sidebar{min-height:180px;margin-bottom:1rem}
    .site-footer{background:#071F4A!important}
    .social-list a svg{width:17px;height:17px;display:block}
    @media(min-width:860px){.layout{display:grid;grid-template-columns:minmax(0,1fr) 300px}.sidebar{width:auto}}
    @media(max-width:700px){.editorial-grid{grid-template-columns:1fr}}
  `;
  document.head.appendChild(style);

  var fechaEl=document.getElementById("fecha-hoy");
  if(fechaEl){var hoy=new Date(),texto=hoy.toLocaleDateString("es-DO",{weekday:"long",day:"numeric",month:"long"});fechaEl.textContent=texto.charAt(0).toUpperCase()+texto.slice(1)}

  var menuToggle=document.getElementById("menuToggle"),nav=document.getElementById("navPrincipal");
  if(menuToggle&&nav)menuToggle.addEventListener("click",function(){var abierto=menuToggle.getAttribute("aria-expanded")==="true";menuToggle.setAttribute("aria-expanded",String(!abierto));menuToggle.setAttribute("aria-label",abierto?"Abrir menú de navegación":"Cerrar menú de navegación");nav.classList.toggle("is-open",!abierto)});

  var searchToggle=document.getElementById("searchToggle"),searchPanel=document.getElementById("searchPanel");
  if(searchToggle&&searchPanel)searchToggle.addEventListener("click",function(){var abierto=searchToggle.getAttribute("aria-expanded")==="true";searchToggle.setAttribute("aria-expanded",String(!abierto));searchPanel.hidden=abierto;if(!abierto){var input=searchPanel.querySelector("input[type='search']");if(input)input.focus()}});

  var themeToggle=document.getElementById("themeToggle"),KEY="llevando-el-compas-tema";
  function setTheme(t){if(t==="oscuro")document.documentElement.setAttribute("data-theme","oscuro");else document.documentElement.removeAttribute("data-theme");if(themeToggle){themeToggle.setAttribute("aria-pressed",String(t==="oscuro"));themeToggle.setAttribute("aria-label",t==="oscuro"?"Activar modo claro":"Activar modo oscuro")}}
  var saved=null;try{saved=localStorage.getItem(KEY)}catch(e){};setTheme(saved||(matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches?"oscuro":"claro"));
  if(themeToggle)themeToggle.addEventListener("click",function(){var next=document.documentElement.getAttribute("data-theme")==="oscuro"?"claro":"oscuro";setTheme(next);try{localStorage.setItem(KEY,next)}catch(e){}});

  var rutas={"Portada":"pages/home.html","Nacionales":"pages/nacionales.html","Economía":"pages/economia.html","Deportes":"pages/deportes.html","Cultura & Entretenimiento":"pages/cultura.html","Mundo":"pages/mundo.html","Opinión":"pages/opinion.html","Provincias":"pages/provincias.html"};
  if(nav){nav.querySelectorAll("a").forEach(function(a){var n=a.textContent.trim();if(rutas[n])a.href=rutas[n]});var ul=nav.querySelector("ul");if(ul&&!ul.querySelector('a[href="pages/editorial.html"]')){var li=document.createElement("li"),a=document.createElement("a");a.href="pages/editorial.html";a.textContent="Editorial";li.appendChild(a);ul.appendChild(li)}}

  var sidebar=document.querySelector(".sidebar");
  if(sidebar&&!sidebar.querySelector(".utility-widgets")){
    var widgets=document.createElement("div");widgets.className="utility-widgets";widgets.innerHTML='<section class="weather-widget" aria-label="Información del clima"><div class="weather-widget__top"><strong class="weather-widget__title">Clima</strong><span class="weather-widget__temp">28 °C</span></div><div class="weather-widget__meta">Santiago de los Caballeros · Parcialmente nublado</div></section><section class="lottery-widget" aria-label="Resultados de lotería"><div class="lottery-widget__top"><strong class="lottery-widget__title">Resultados de lotería</strong><span class="weather-widget__meta">Hoy</span></div><div class="lottery-results"><div class="lottery-result"><strong>14</strong><span>Primera</span></div><div class="lottery-result"><strong>27</strong><span>Segunda</span></div><div class="lottery-result"><strong>36</strong><span>Tercera</span></div></div></div></section>';sidebar.insertBefore(widgets,sidebar.firstChild);
    var ads=document.createElement("div");ads.innerHTML='<div class="ad-slot ad-slot--sidebar">Espacio publicitario · 300 × 250</div><div class="ad-slot ad-slot--sidebar">Espacio publicitario · 300 × 600</div>';sidebar.appendChild(ads)
  }

  var main=document.querySelector(".layout__main");
  if(main&&!main.querySelector(".ad-slot--main")){var ad=document.createElement("div");ad.className="ad-slot ad-slot--main";ad.textContent="Espacio publicitario · 970 × 90";var first=main.querySelector(".section");if(first)first.parentNode.insertBefore(ad,first)}
  if(main&&!document.getElementById("editorial-opiniones")){var e=document.createElement("section");e.id="editorial-opiniones";e.className="section";e.innerHTML='<div class="section__head"><h2 class="section__title">Editorial y Opiniones</h2></div><div class="editorial-grid"><article class="editorial-card"><h3><a href="pages/editorial.html">Editorial</a></h3><p>La voz editorial de Llevando el Compás sobre los temas que marcan el país.</p></article><article class="editorial-card"><h3><a href="pages/opinion.html">Opiniones</a></h3><p>Análisis, columnas y perspectivas de nuestros colaboradores.</p></article></div>';main.appendChild(e)}

  var icons={facebook:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.7.3-1 1-1z"/></svg>',instagram:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',youtube:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="3" fill="currentColor"/><path d="M10 9l5 3-5 3z" fill="#fff"/></svg>',x:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5 4h4.2l3.2 4.6L16.3 4H19l-5.4 6.2L19.5 20h-4.2l-3.7-5.3L7.1 20H4.4l5.8-6.7z"/></svg>'};
  document.querySelectorAll(".social-list a").forEach(function(a){var label=(a.getAttribute("aria-label")||"").toLowerCase();var key=label.indexOf("facebook")>=0?"facebook":label.indexOf("instagram")>=0?"instagram":label.indexOf("youtube")>=0?"youtube":label.indexOf("x")>=0?"x":null;if(key){a.innerHTML=icons[key];a.setAttribute("data-social",key)}});

  var track=document.getElementById("destacadasTrack");document.querySelectorAll(".carousel-btn").forEach(function(btn){btn.addEventListener("click",function(){if(!track)return;var card=track.querySelector(".story-card--carousel"),step=card?card.getBoundingClientRect().width+20:280;track.scrollBy({left:step*(parseInt(btn.dataset.dir,10)||1),behavior:"smooth"})})});

  var shared=document.createElement("script");shared.src="components/site.js";shared.defer=true;document.body.appendChild(shared);
})();
