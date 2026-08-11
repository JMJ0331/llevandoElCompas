(() => {
  const images = {
    nacionales: [
      ['Política','Senado retoma agenda de reformas para el nuevo período legislativo','Las comisiones revisan propuestas y fijan un calendario de trabajo para las próximas semanas.','https://images.unsplash.com/photo-1591124135464-e657dea6bd10?q=80&w=900&auto=format&fit=crop'],
      ['Seguridad','Autoridades amplían operativo preventivo en zonas de alta circulación','El plan contempla coordinación entre patrullas, organismos de emergencia y gobiernos locales.','https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=900&auto=format&fit=crop'],
      ['Infraestructura','Nuevos proyectos viales conectarán comunidades del Cibao','La inversión prioriza corredores que facilitan el transporte de personas y mercancías.','https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=900&auto=format&fit=crop'],
      ['Gobierno','Instituciones presentan avances de sus programas de servicio público','El balance incluye metas cumplidas, proyectos en ejecución y próximos objetivos.','https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=900&auto=format&fit=crop']
    ],
    economia: [
      ['Mercados','Empresas locales aceleran inversión en tecnología y logística','El sector privado busca mejorar productividad y ampliar su presencia regional.','https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=900&auto=format&fit=crop'],
      ['Finanzas','Banca reporta mayor demanda de soluciones digitales','Los servicios financieros continúan migrando hacia canales rápidos y accesibles.','https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=900&auto=format&fit=crop'],
      ['Turismo','Destinos del Caribe preparan nueva temporada de visitantes','Hoteles y operadores presentan nuevas experiencias para viajeros nacionales e internacionales.','https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=900&auto=format&fit=crop'],
      ['Comercio','Pequeños negocios fortalecen sus ventas con herramientas digitales','La adopción tecnológica abre nuevas oportunidades para comercios y emprendedores.','https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=900&auto=format&fit=crop']
    ],
    deportes: [
      ['Béisbol','Los equipos afinan sus estrategias para la próxima jornada','Los entrenadores preparan rotaciones y alineaciones para una fecha decisiva.','https://images.unsplash.com/photo-1508344928928-7165b67de128?q=80&w=900&auto=format&fit=crop'],
      ['Baloncesto','La liga nacional entra en una semana clave de competición','Los principales conjuntos llegan con récords parejos a la recta final.','https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=900&auto=format&fit=crop'],
      ['Fútbol','Clubes dominicanos preparan nuevos torneos de formación','Las academias apuestan por el desarrollo de jóvenes talentos.','https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=900&auto=format&fit=crop'],
      ['Atletismo','Corredores dominicanos se preparan para el calendario internacional','La preparación combina competencias locales y campamentos especializados.','https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=900&auto=format&fit=crop']
    ],
    cultura: [
      ['Arte','Museos amplían su agenda con exposiciones de artistas dominicanos','La nueva temporada reúne pintura, fotografía y propuestas contemporáneas.','https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=900&auto=format&fit=crop'],
      ['Música','La escena local prepara una agenda de conciertos para agosto','Artistas emergentes y nombres establecidos compartirán escenarios en varias ciudades.','https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=900&auto=format&fit=crop'],
      ['Patrimonio','La Zona Colonial suma nuevas actividades culturales','Los espacios históricos reciben programación para residentes y visitantes.','https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=900&auto=format&fit=crop'],
      ['Cine','Realizadores dominicanos presentan proyectos para nuevos festivales','La producción independiente gana espacio en circuitos regionales.','https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=900&auto=format&fit=crop']
    ],
    mundo: [
      ['América','Gobiernos regionales coordinan agenda económica para el segundo semestre','La cooperación comercial ocupa un lugar central en las reuniones de la región.','https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=900&auto=format&fit=crop'],
      ['Europa','Nuevas medidas energéticas marcan la agenda de varios países','Los gobiernos buscan equilibrar costos, abastecimiento y transición energética.','https://images.unsplash.com/photo-1465447142348-e9952c393450?q=80&w=900&auto=format&fit=crop'],
      ['Tecnología','La inteligencia artificial acelera cambios en industrias globales','Empresas y gobiernos revisan políticas para aprovechar la nueva tecnología.','https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=900&auto=format&fit=crop'],
      ['Clima','Países del Caribe refuerzan sus planes ante temporadas extremas','Las autoridades preparan protocolos de prevención y respuesta.','https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=900&auto=format&fit=crop']
    ],
    opinion: [
      ['Análisis','El reto de informar con claridad en una era de ruido digital','Una reflexión sobre responsabilidad editorial, contexto y confianza pública.','https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=900&auto=format&fit=crop'],
      ['Columna','Ciudad y movilidad: pensar más allá del automóvil','Las decisiones urbanas también definen productividad, tiempo y calidad de vida.','https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=900&auto=format&fit=crop'],
      ['Perspectiva','La educación como la infraestructura más importante','Invertir en personas produce beneficios que atraviesan generaciones.','https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=900&auto=format&fit=crop'],
      ['Firma invitada','El valor de una conversación pública respetuosa','Disentir mejor también es una forma de construir ciudadanía.','https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=900&auto=format&fit=crop']
    ],
    editorial: [
      ['Editorial','Una agenda nacional que necesita prioridades claras','La conversación pública debe concentrarse en resultados medibles y soluciones duraderas.','https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=900&auto=format&fit=crop'],
      ['Editorial','Instituciones fuertes para decisiones que perduren','La calidad institucional importa tanto como las decisiones concretas.','https://images.unsplash.com/photo-1521292270410-a8c4d716d518?q=80&w=900&auto=format&fit=crop'],
      ['Editorial','La información local también merece protagonismo','Las comunidades necesitan cobertura cercana, útil y verificable.','https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=900&auto=format&fit=crop'],
      ['Editorial','El futuro se construye con participación','La ciudadanía tiene un papel activo en los cambios que espera.','https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=900&auto=format&fit=crop']
    ],
    provincias: [
      ['Santiago','Comercio y servicios preparan nuevas inversiones para la ciudad','Empresarios y autoridades coordinan proyectos para fortalecer la actividad local.','https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=900&auto=format&fit=crop'],
      ['Puerto Plata','El turismo comunitario gana espacio en nuevos circuitos','Los operadores buscan conectar visitantes con experiencias locales.','https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=900&auto=format&fit=crop'],
      ['La Romana','Productores impulsan nuevas rutas para el mercado regional','La logística y el acceso a mercados abren oportunidades para el sector productivo.','https://images.unsplash.com/photo-1565610222536-ef125c59da2e?q=80&w=900&auto=format&fit=crop'],
      ['Cibao','Comunidades organizan agenda de obras y servicios prioritarios','Las juntas locales presentan necesidades y proyectos para el próximo período.','https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=900&auto=format&fit=crop']
    ],
    home: [
      ['Nacionales','Gobierno anuncia nueva agenda de obras para el segundo semestre','La planificación contempla proyectos de infraestructura, servicios y desarrollo territorial.','https://images.unsplash.com/photo-1533139502658-0198f920d8e8?q=80&w=900&auto=format&fit=crop'],
      ['Economía','Empresas dominicanas miran nuevas oportunidades de exportación','Los sectores productivos buscan ampliar mercados y mejorar competitividad.','https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=900&auto=format&fit=crop'],
      ['Deportes','La jornada deportiva llega con partidos decisivos','Los principales equipos se preparan para una fecha que puede cambiar la clasificación.','https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=900&auto=format&fit=crop'],
      ['Cultura','La ciudad abre una nueva temporada de actividades culturales','Teatro, música y exposiciones forman parte de la programación.','https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=900&auto=format&fit=crop'],
      ['Mundo','La región debate nuevas medidas de cooperación económica','Los gobiernos revisan acuerdos para facilitar comercio e inversión.','https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=900&auto=format&fit=crop'],
      ['Provincias','Las comunidades presentan proyectos para dinamizar sus economías','Emprendedores y organizaciones locales preparan nuevas iniciativas.','https://images.unsplash.com/photo-1516321165247-4aa89a48be28?q=80&w=900&auto=format&fit=crop']
    ]
  };

  const icon = (name) => ({
    facebook:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.7.3-1 1-1z"/></svg>',
    instagram:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2"/></svg>',
    youtube:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23 12s0-4-1-5-2-1-3-1H5C3 6 2 6 1 7s-1 5-1 5 0 4 1 5 2 1 4 1h14c2 0 3 0 4-1s1-5 1-5zM10 15V9l5 3z"/></svg>',
    x:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4.2l3.2 4.6L16.3 4H19l-5.4 6.2L19.5 20h-4.2l-3.7-5.3L7.1 20H4.4l5.8-6.7z"/></svg>'
  }[name]);

  const footer = () => `<footer class="site-footer site-footer--unified"><div class="page-footer"><div><strong>Llevando el Compás</strong><span class="footer-copy">Información, análisis y opinión de República Dominicana.</span><small>© 2026 Llevando el Compás · Todos los derechos reservados</small></div><nav class="footer-links" aria-label="Enlaces del pie"><a href="${location.pathname.includes('/pages/') ? 'home.html' : 'pages/home.html'}">Portada</a><a href="${location.pathname.includes('/pages/') ? 'opinion.html' : 'pages/opinion.html'}">Opinión</a><a href="${location.pathname.includes('/pages/') ? 'editorial.html' : 'pages/editorial.html'}">Editorial</a></nav><div class="page-socials"><a href="#" aria-label="Facebook">${icon('facebook')}</a><a href="#" aria-label="Instagram">${icon('instagram')}</a><a href="#" aria-label="YouTube">${icon('youtube')}</a><a href="#" aria-label="X">${icon('x')}</a></div></div></footer>`;

  const styles = `.site-footer--unified{background:#071f4a!important;color:#fff;border-top:4px solid #d62828}.site-footer--unified .page-footer{max-width:1280px;margin:auto;padding:2rem 1.25rem;display:grid;grid-template-columns:1.6fr auto auto;align-items:center;gap:2rem}.site-footer--unified .footer-copy,.site-footer--unified small{display:block;color:rgba(255,255,255,.72);margin-top:.35rem}.site-footer--unified small{font-size:.7rem}.footer-links{display:flex;gap:1rem;flex-wrap:wrap}.footer-links a{color:#fff;text-decoration:none;font-size:.85rem}.page-socials{display:flex;gap:.55rem}.page-socials a{width:38px;height:38px;border:1px solid rgba(255,255,255,.35);border-radius:50%;display:grid;place-items:center;color:#fff}.page-socials svg{width:17px;height:17px;fill:currentColor;stroke:currentColor}.newspaper-extra{max-width:1280px;margin:0 auto;padding:0 1.25rem 3rem}.newspaper-extra__head{display:flex;align-items:end;justify-content:space-between;border-bottom:2px solid #0b3d91;margin-bottom:1rem}.newspaper-extra__grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1rem}.extra-story{border:1px solid var(--borde);background:var(--superficie);overflow:hidden;border-radius:8px}.extra-story img{width:100%;aspect-ratio:16/10;object-fit:cover;display:block}.extra-story__body{padding:.85rem}.extra-story__label{font:600 .65rem var(--fuente-mono);color:#0b3d91;text-transform:uppercase}.extra-story h3{font-size:1rem;line-height:1.25;margin:.3rem 0}.extra-story p{font-size:.8rem;color:var(--texto-suave);margin:0}.extra-ad{grid-column:1/-1;min-height:110px;border:1px dashed #b8c0ca;background:#f4f6f8;display:grid;place-items:center;color:#697586;font:600 .65rem var(--fuente-mono);letter-spacing:.08em;text-transform:uppercase}.page-sidebar .page-ad{min-height:170px}.page-sidebar .page-ad img{width:100%;height:100%;object-fit:cover}.page-top{padding-bottom:.5rem}.story-media{background:#e9eef4}.story-media img{display:block}.page-grid{padding-bottom:2rem}@media(max-width:900px){.site-footer--unified .page-footer{grid-template-columns:1fr}.newspaper-extra__grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:560px){.newspaper-extra__grid{grid-template-columns:1fr}}`;

  const pageKey = location.pathname.includes('/pages/') ? (location.pathname.split('/').pop() || '').replace('.html','') : 'home';
  const data = images[pageKey] || images.home;

  function addExtras(){
    const existing = document.querySelector('.newspaper-extra');
    if(existing) return;
    const main = document.querySelector('main');
    if(!main) return;
    const section = document.createElement('section');
    section.className='newspaper-extra';
    section.innerHTML=`<div class="newspaper-extra__head"><h2>Más noticias</h2><span>Actualizado hoy</span></div><div class="newspaper-extra__grid">${data.map((s,i)=>`<article class="extra-story"><a href="#"><img src="${s[3]}" alt="${s[1]}" loading="lazy"></a><div class="extra-story__body"><span class="extra-story__label">${s[0]}</span><h3><a href="#">${s[1]}</a></h3><p>${s[2]}</p></div></article>`).join('')}<div class="extra-ad">Espacio publicitario · 970 × 250</div></div></section>`;
    main.appendChild(section);
  }

  function addSidebarContent(){
    const sidebar=document.querySelector('.page-sidebar');
    if(!sidebar || sidebar.querySelector('.sidebar-extra')) return;
    const box=document.createElement('div'); box.className='page-card sidebar-extra';
    box.innerHTML='<h2>Lo más leído</h2><ol class="most-read"><li>Las noticias que marcan la jornada nacional</li><li>Economía y negocios: las claves del día</li><li>Agenda deportiva de hoy</li><li>Qué pasa en las provincias</li></ol>';
    sidebar.appendChild(box);
    const ad=document.createElement('div'); ad.className='page-ad sidebar-extra'; ad.textContent='Publicidad · 300 × 250'; sidebar.appendChild(ad);
  }

  function replaceFooter(){
    document.querySelectorAll('.site-footer').forEach(el=>el.remove());
    document.body.insertAdjacentHTML('beforeend',footer());
  }

  const style=document.createElement('style'); style.textContent=styles; document.head.appendChild(style);
  addExtras(); addSidebarContent(); replaceFooter();
})();
