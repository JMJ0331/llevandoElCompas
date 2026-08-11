# Prompt de Desarrollo Backend: Llevando el Compás

**Rol:** Actúa como un Senior Backend Developer, Arquitecto de Software y Experto en Laravel + Livewire.

**Objetivo:** Desarrollar la arquitectura, base de datos y la lógica del panel de administración (CMS) para un periódico digital llamado "Llevando el Compás". El frontend ya está maquetado 100% en HTML, CSS y JavaScript nativo. 

### Restricciones Estrictas de Frontend:
1. **PROHIBIDO** alterar las tecnologías del frontend. No uses React, Vue, Angular, Alpine.js, Tailwind, ni Bootstrap. 
2. Las vistas de Blade deben limitarse a inyectar los datos dinámicos dentro de las etiquetas HTML y clases CSS ya existentes. 
3. El proyecto debe seguir los más altos estándares de PHP y estar preparado para un flujo de trabajo profesional con Git.

### Requerimiento Principal (Auto-administrable):
El sitio debe ser un CMS completo (puedes sugerir el uso de FilamentPHP o construir un panel nativo con Livewire). Un usuario sin conocimientos de programación debe poder editar el 100% del contenido desde un dashboard intuitivo.

### Módulos y Funcionalidades a Desarrollar:

#### 1. Personalización Global (Diseño Dinámico):
*   **Colores:** Crea un sistema en la base de datos (tabla de `settings`) que permita al administrador cambiar los colores principales del sitio. Genera una ruta o un inyector en el `<head>` que sobrescriba las variables de CSS (ej. `--color-primary`, `--color-secondary`) con los valores guardados en la BD.
*   **Modo Oscuro:** El HTML ya incluye un botón de `themeToggle`. El backend debe respetar esta lógica de JS y almacenar la preferencia de color (claro/oscuro).

#### 2. Gestión del Hero (Noticia Principal):
El bloque principal (`<section class="hero">`) debe ser altamente dinámico. El administrador debe poder elegir el formato del medio visual:
*   **Imagen Única:** Subir y mostrar una sola foto.
*   **Video:** Subir un archivo de video (MP4) o pegar un enlace (YouTube/Vimeo) para que se reproduzca.
*   **Slider / Carrusel:** Subir múltiples imágenes y definir desde el panel el intervalo de tiempo (en segundos) en el que irán rotando automáticamente.

#### 3. CRUDs Requeridos (Basados en la estructura del portal):
Crea las migraciones, modelos y componentes Livewire para las siguientes entidades:
*   **Categorías:** Portada, Nacionales, Economía, Deportes, Cultura, Mundo, Opinión, Provincias.
*   **Noticias (Artículos):** Con campos para antetítulo (eyebrow), título, extracto (dek), cuerpo de la noticia, autor, tiempo de lectura, fecha de publicación, imagen destacada, etiquetas (tags) y un booleano para marcarla como "Destacada" (para el carrusel).
*   **Opinión / Editoriales:** Un Custom Post Type o categoría especial que incluya el nombre del columnista y su avatar (iniciales o foto).
*   **Última Hora (Breaking News):** Un CRUD simple de textos cortos que alimentarán el `<ul class="breaking__list">`.
*   **Usuarios/Autores:** Roles y permisos (Administrador, Editor, Redactor).

#### 4. Integración de APIs y Web Scraping (Servicios de Utilidad):
El HTML tiene espacios en la barra superior (`utility-bar`) y en el `sidebar`. Implementa comandos automáticos (Jobs/Schedules) o integraciones Livewire para consumir APIs gratuitas y mostrar esta información en tiempo real:
*   **Clima:** Consume la API de OpenWeatherMap. Configura por defecto las coordenadas para Santiago de los Caballeros (ciudad base indicada en la cabecera) y permite cambiar la ciudad desde el panel.
*   **Lotería Dominicana:** Implementa un scraper ligero (usando Goutte o el HTTP Client de Laravel) o busca una API gratuita local para extraer los resultados diarios de las loterías (Leidsa, Nacional, etc.) y mostrarlos en un widget.
*   **Divisas (Extra):** Integra un widget que consuma la tasa de cambio del dólar y el euro (usando una API financiera gratuita o scrapeando el Banco Central) para agregarlo a la sección de Economía.

#### 5. Sidebar y Elementos Adicionales:
*   **Lo más leído:** Lógica para contar visitas de cada artículo y generar automáticamente la lista `<ol class="popular-list">` con las 5 noticias más vistas de la semana.
*   **Tags:** Generación dinámica de la nube de etiquetas (`<ul class="tag-cloud">`).
*   **Publicidad:** Un módulo simple para que el administrador pueda subir imágenes o pegar scripts de AdSense en los espacios designados (ej. `<div class="widget--ad__box">`).

### Entregables que necesito de ti ahora mismo:
1. Estructura recomendada de las migraciones de Base de Datos (SQL).
2. El código del controlador o componente Livewire principal encargado de gestionar la lógica del Hero (Imagen/Video/Slider con temporizador).
3. El código del componente Livewire que consumirá y cacheará los datos de las APIs (Clima, Lotería, Divisas) para no sobrecargar las peticiones.
4. Un ejemplo de cómo inyectarías la configuración de colores dinámicos en la vista principal de Blade sin romper el CSS existente.