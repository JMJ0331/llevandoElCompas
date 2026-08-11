/* =========================================================
   LLEVANDO EL COMPÁS — interacciones de interfaz (vanilla JS)
   Solo frontend: sin backend, sin frameworks.
   ========================================================= */
(function () {
  "use strict";

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
      if (!abierto) {
        var input = searchPanel.querySelector("input[type='search']");
        if (input) input.focus();
      }
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
  if (themeToggle) themeToggle.addEventListener("click", function () {
    var actual = document.documentElement.getAttribute("data-theme") === "oscuro";
    var nuevoTema = actual ? "claro" : "oscuro";
    aplicarTema(nuevoTema); guardarTema(nuevoTema);
  });

  /* Carrusel */
  var carouselTrack = document.getElementById("destacadasTrack");
  var carouselBtns = document.querySelectorAll(".carousel-btn");
  if (carouselTrack && carouselBtns.length) {
    carouselBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var direccion = parseInt(btn.getAttribute("data-dir"), 10) || 1;
        var tarjeta = carouselTrack.querySelector(".story-card--carousel");
        var salto = tarjeta ? tarjeta.getBoundingClientRect().width + 20 : 280;
        carouselTrack.scrollBy({ left: salto * direccion, behavior: "smooth" });
      });
    });
  }

  /* Navegación: cada sección apunta a una página independiente. */
  var rutas = {
    "Portada": "pages/home.html",
    "Nacionales": "pages/nacionales.html",
    "Economía": "pages/economia.html",
    "Deportes": "pages/deportes.html",
    "Cultura & Entretenimiento": "pages/cultura.html",
    "Mundo": "pages/mundo.html",
    "Opinión": "pages/opinion.html",
    "Provincias": "pages/provincias.html"
  };
  if (navPrincipal) {
    navPrincipal.querySelectorAll("a").forEach(function (enlace) {
      var nombre = enlace.textContent.trim();
      if (rutas[nombre]) enlace.setAttribute("href", rutas[nombre]);
    });
    var editorialLi = document.createElement("li");
    var editorialLink = document.createElement("a");
    editorialLink.href = "pages/editorial.html";
    editorialLink.textContent = "Editorial";
    editorialLi.appendChild(editorialLink);
    navPrincipal.querySelector("ul").appendChild(editorialLi);
  }

  /* Clima: widget ligero preparado para conectar una API posteriormente. */
  var weather = document.querySelector("[data-weather-widget]");
  if (weather) {
    var temp = weather.querySelector("[data-weather-temp]");
    var meta = weather.querySelector("[data-weather-meta]");
    if (temp && meta) {
      temp.textContent = "28 °C";
      meta.textContent = "Santiago de los Caballeros · Condición actual";
    }
  }

  /* Lotería: resultados visuales de ejemplo hasta conectar la fuente de datos. */
  var lottery = document.querySelector("[data-lottery-widget]");
  if (lottery) lottery.querySelectorAll("[data-lottery-number]").forEach(function (el, index) {
    el.textContent = ["14", "27", "36"][index] || "—";
  });

  /* Iconos sociales SVG, sin dependencias externas. */
  var icons = {
    facebook: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.7.3-1 1-1z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="3" fill="currentColor"/><path d="M10 9l5 3-5 3z" fill="#fff"/></svg>',
    x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5 4h4.2l3.2 4.6L16.3 4H19l-5.4 6.2L19.5 20h-4.2l-3.7-5.3L7.1 20H4.4l5.8-6.7z"/></svg>'
  };
  document.querySelectorAll("a[data-social]").forEach(function (link) {
    var key = link.getAttribute("data-social");
    if (icons[key]) { link.innerHTML = icons[key]; link.setAttribute("aria-label", key); }
  });

  /* Cerrar menú móvil después de navegar. */
  document.querySelectorAll('a[href^="#"]').forEach(function (enlace) {
    enlace.addEventListener("click", function () {
      if (navPrincipal && navPrincipal.classList.contains("is-open")) {
        navPrincipal.classList.remove("is-open");
        if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
})();
