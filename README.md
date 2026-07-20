# NASA Space Dashboard

Dashboard interactivo que consume tres APIs públicas de la NASA (APOD, Mars Rover Photos, NeoWs) para explorar imágenes astronómicas del día, fotos tomadas por los rovers en Marte, y asteroides cercanos a la Tierra.

## Vista previa

![APOD Section](./docs/screenshot-apod.png)
![Mars Rover Section](./docs/screenshot-rover.png)
![NeoWs Section](./docs/screenshot-neows.png)

## Stack

- **Vite + React + TypeScript**
- **TanStack Query** — manejo de fetch, cache y estados de carga/error
- **Recharts** — visualización de datos (timeline de asteroides)
- **yet-another-react-lightbox** — galería de fotos de Mars Rover
- **CSS Modules** — estilos aislados por componente
- **Vitest** — testing unitario
- **Playwright** — verificación visual y de accesibilidad durante desarrollo

## Features

### Astronomy Picture of the Day (APOD)
Imagen o video astronómico del día, con selector de fecha para explorar el archivo histórico de la NASA.

### Mars Rover Photos
Galería de fotos tomadas por los rovers Curiosity y Perseverance, filtrable por fecha terrestre, con lightbox para ver las imágenes en detalle.

### Asteroides cercanos (NeoWs)
Visualización de asteroides que se aproximan a la Tierra en un rango de 7 días, con gráfico de distancia (en distancias lunares) y detalle individual de cada objeto, incluyendo alerta visual para los potencialmente peligrosos.

## Cómo correrlo localmente

1. Clonar el repositorio
   ```bash
   git clone <url-del-repositorio>
   cd nasa-space-dashboard
   ```

2. Instalar dependencias
   ```bash
   npm install
   ```

3. Obtener una API key gratuita de NASA en [api.nasa.gov](https://api.nasa.gov)

4. Crear un archivo `.env` en la raíz con:
   ```
   VITE_NASA_API_KEY=tu_key_aca
   ```

5. Correr el proyecto
   ```bash
   npm run dev
   ```

## Decisiones técnicas

- **TanStack Query sobre `useState`/`useEffect` manual**: simplifica el manejo de cache, estados de carga/error y revalidación entre las tres APIs consumidas.
- **CSS Modules + tokens de diseño centralizados**: la paleta y el sistema de espaciado viven en `tokens.ts` y se exponen como CSS custom properties en `global.css`, evitando valores hardcodeados repetidos entre componentes.
- **Manejo cuidadoso de zonas horarias**: las fechas se calculan con componentes de fecha local en vez de `toISOString()` (que convierte a UTC), evitando bugs de "día equivocado" al consultar las APIs de la NASA.
- **Recharts con colores desde `tokens.ts`, no CSS variables**: los atributos SVG que usa la librería no siempre resuelven bien `var(--...)`, así que los colores del gráfico se toman directo de la fuente de tokens en TypeScript.
- **Accesibilidad**: estados de foco visibles y consistentes en todos los elementos interactivos (navegación por teclado), verificados explícitamente durante el desarrollo.
- **Diseño responsive sin breakpoints rígidos**: grillas con `auto-fill`/`minmax` y comportamiento adaptativo en gráficos, en vez de reglas fijas por dispositivo.

## Próximos pasos

- Revisión de UX/UI general: mejorar la distribución y jerarquía visual de las secciones, especialmente la lista de NeoWs (actualmente una columna larga que podría reorganizarse en una grilla o layout más eficiente)
- Sumar Opportunity y Spirit como rovers adicionales
- Filtro por cámara en Mars Rover Photos
- Tests end-to-end más completos con Playwright
- Modo de comparación de fechas en NeoWs
