/* =========================================================
   LLEVANDO EL COMPÁS — interacciones de interfaz (vanilla JS)
   Solo maquetación de cliente: sin backend, sin frameworks.
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Fecha de hoy en la barra de utilidad ---------- */
  var fechaEl = document.getElementById("fecha-hoy");
  if (fechaEl) {
    var hoy = new Date();
    var opciones = { weekday: "long", day: "numeric", month: "long" };
    var texto = hoy.toLocaleDateString("es-DO", opciones);
    fechaEl.textContent = texto.charAt(0).toUpperCase() + texto.slice(1);
  }

  /* ---------- Menú móvil ---------- */
  var menuToggle = document.getElementById("menuToggle");
  var navPrincipal = document.getElementById("navPrincipal");

  if (menuToggle && navPrincipal) {
    menuToggle.addEventListener("click", function () {
      var abierto = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!abierto));
      menuToggle.setAttribute(
        "aria-label",
        abierto ? "Abrir menú de navegación" : "Cerrar menú de navegación"
      );
      navPrincipal.classList.toggle("is-open", !abierto);
    });
  }

  /* ---------- Panel de búsqueda ---------- */
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

  /* ---------- Modo oscuro ---------- */
  var themeToggle = document.getElementById("themeToggle");
  var STORAGE_KEY = "llevando-el-compas-tema";

  function aplicarTema(tema) {
    if (tema === "oscuro") {
      document.documentElement.setAttribute("data-theme", "oscuro");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    if (themeToggle) {
      themeToggle.setAttribute("aria-pressed", String(tema === "oscuro"));
      themeToggle.setAttribute(
        "aria-label",
        tema === "oscuro" ? "Activar modo claro" : "Activar modo oscuro"
      );
    }
  }

  function obtenerTemaGuardado() {
    try {
      return window.localStorage.getItem(STORAGE_KEY);
    } catch (err) {
      return null;
    }
  }

  function guardarTema(tema) {
    try {
      window.localStorage.setItem(STORAGE_KEY, tema);
    } catch (err) {
      /* almacenamiento no disponible: se ignora silenciosamente */
    }
  }

  var temaGuardado = obtenerTemaGuardado();
  var prefiereOscuro =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

  aplicarTema(temaGuardado || (prefiereOscuro ? "oscuro" : "claro"));

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var actual = document.documentElement.getAttribute("data-theme") === "oscuro";
      var nuevoTema = actual ? "claro" : "oscuro";
      aplicarTema(nuevoTema);
      guardarTema(nuevoTema);
    });
  }

  /* ---------- Carrusel de destacadas ---------- */
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

  /* ---------- Cerrar menú/búsqueda al usar un enlace interno ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (enlace) {
    enlace.addEventListener("click", function () {
      if (navPrincipal && navPrincipal.classList.contains("is-open")) {
        navPrincipal.classList.remove("is-open");
        if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
})();