
# Armando Toro Cárdenas — Homepage

Homepage personal y portfolio de **Armando Toro Cárdenas**, rediseñado desde cero con **Material Design 3** y estándares web modernos.

[![Next.js](https://img.shields.io/badge/Next.js-16.4.6-black?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3.1-61dafb?logo=react&logoColor=black)](https://react.dev/)
[![Material Design 3](https://img.shields.io/badge/Material_Design_3-web_components-6750A4)](https://m3.material.io/)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

## 🌐 Demo

- Producción: [https://devcaldas-dev.github.io/home](https://devcaldas-dev.github.io/home)

## 📖 Sobre el proyecto

Este repositorio contiene el sitio personal de Armando Toro Cárdenas: una homepage con biografía, certificaciones y portfolio de proyectos. El objetivo del rediseño fue doble:

1. **Renovar la identidad visual** con Material Design 3 (tipografía, color, formas y movimiento).
2. **Modernizar la base técnica** migrando a Next.js 16 con App Router y eliminando toda dependencia de librerías de UI clásicas en favor de **web components nativos** y APIs de plataforma.

El resultado es un sitio estático, exportable a GitHub Pages, sin servidor en runtime, con cero dependencias de Chakra UI.

## 🧱 Stack técnico

| Capa | Tecnología |
|------|------------|
| Framework | [Next.js 16](https://nextjs.org/) con App Router y Turbopack |
| Runtime UI | [React 19](https://react.dev/) |
| Sistema de diseño | [Material Design 3](https://m3.material.io/) |
| Componentes web | [`@material/web`](https://github.com/material-components/material-web) 2.5.0 |
| Wrapper React | [`@cloudstrytech/ui-components`](https://www.npmjs.com/package/@cloudstrytech/ui-components) 1.0.28 |
| Iconografía | [Material Symbols Outlined](https://fonts.google.com/icons) |
| Linter | ESLint 10 (flat config) + `eslint-config-next` |
| Formatter | Prettier 3 |
| Export estático | `output: 'export'` con `basePath: '/home'` |
| Deploy | GitHub Actions → GitHub Pages |
| Guías de referencia | [Modern Web Guidance](https://github.com/googlechrome/modern-web-guidance) |

## ✨ Características

- **Material Design 3** con tokens `--md-sys-*` y `--cst-*` aplicados a color, tipografía y formas.
- **Web components nativos** envueltos en React con `@cloudstrytech/ui-components`, sin capas adicionales.
- **Modo claro / oscuro** persistido en `localStorage` (`portfolio-color-scheme`) y con preferencia del sistema como fallback.
- **Icono de cambio de tema** accesible (`md-icon-button` + Material Symbols, `aria-label` dinámico, área táctil ≥48px).
- **Diálogos nativos** (`<dialog>`) para certificaciones, con foco y cierre gestionados por el navegador.
- **Layouts con CSS Grid** y tipografía fluida con `clamp()`.
- **Export estático** compatible con GitHub Pages (`out/`), sin servidor en producción.
- **Migración ruta a ruta** desde Pages Router a App Router, con respaldos `.pilot.bak` para rollback.
- **Accesibilidad** como criterio de cierre: HTML semántico, roles, foco visible y contraste por tokens.

## 📁 Estructura del proyecto

```text
├── app/                        # App Router (Material Web)
│   ├── layout.jsx              # Layout raíz, fuentes, metadata
│   ├── page.jsx                # Homepage
│   ├── globals.css             # Tokens M3, layout, tema
│   └── portfolio/
│       ├── page.jsx            # Índice de proyectos
│       ├── aitetalk/page.jsx
│       ├── f101bs/page.jsx
│       ├── caridad-ui/page.jsx
│       ├── mostlyEntertainment/page.jsx
│       └── musicgallery/page.jsx
├── components/
│   └── m3/                     # Componentes Material Web reutilizables
│       ├── branding.jsx
│       ├── site-header.jsx
│       ├── site-layout.jsx
│       ├── footer-m3.jsx
│       ├── page-hero.jsx
│       ├── matrix-rain.jsx
│       ├── portfolio-index.jsx
│       └── portfolio-project.jsx
├── pages/                      # Pages Router (mínimo residual)
│   ├── _app.js                 # (opcional) sin provider tras Fase 5
│   ├── _document.js            # (opcional) sin Chakra tras Fase 5
│   ├── 404.js
│   └── **/*.pilot.bak          # Respaldos de rutas migradas
├── public/
│   └── images/                 # Thumbnails de proyectos
├── docs/                       # Local-only, ignorado por .gitignore
│   ├── PLAN_MAESTRO.md
│   ├── STATUS_MATRIX.md
│   └── adr/                    # ADR-001 a ADR-008
├── .github/workflows/nextjs.yml # CI/CD a GitHub Pages
├── next.config.js
├── eslint.config.mjs
├── package.json
└── README.md
```

> **Nota:** `docs/` está excluido del repositorio mediante `.gitignore`. Contiene el plan maestro, los ADR y el estado del proyecto, como material de trabajo local para agentes y desarrolladores.

## 🚀 Empezar

### Requisitos

- **Node.js** 20 o superior
- **npm** 10 o superior
- Sistema operativo: Linux, macOS o Windows con WSL/PowerShell

### Instalación

```bash
git clone https://github.com/devCaldas-dev/home.git
cd home
npm install
```

### Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo con Turbopack |
| `npm run build` | Genera el export estático en `out/` |
| `npm run lint` | Ejecuta ESLint 10 con flat config |
| `npm run prettier` | Formatea el código con Prettier |

### Desarrollo local

```bash
npm run dev
```

Abre [http://localhost:3000/home](http://localhost:3000/home). El prefijo `/home` es necesario por el `basePath` configurado.

### Build y export estático

```bash
npm run build
```

El sitio se exporta a `out/`. Para previsualizarlo:

```bash
npx serve out
```

> El build sobrescribe `out/`. Si el directorio está versionado, restaura con `git checkout -- out/` después del build.

## 🎨 Theming con Material Design 3

Los tokens de diseño viven en `app/globals.css` como variables CSS:

```css
:root {
  --md-sys-color-primary: #6750A4;
  --md-sys-color-on-primary: #FFFFFF;
  --md-sys-color-surface: #FEF7FF;
  --md-sys-color-on-surface: #1D1B20;
  /* ... */
}
```

El **color semilla** actual es `#6750A4` (púrpura por defecto de M3). Para cambiarlo, regenera la paleta con una herramienta como [Material Theme Builder](https://material-foundation.github.io/material-theme-builder/) y reemplaza los valores en `globals.css`.

El **modo claro/oscuro** se controla con el atributo `data-theme` en `<html>`:

```js
document.documentElement.dataset.theme = 'dark' // o 'light'
```

La preferencia se persiste en `localStorage` y se inicializa desde `prefers-color-scheme` cuando no hay elección previa.

## 🧩 Componentes Material Web

Todos los componentes reutilizables viven en `components/m3/` y se marcan como `'use client'` para que los web components se registren únicamente en el navegador.

- **`site-layout.jsx`** — layout compuesto (header + main + footer) para todas las rutas M3.
- **`site-header.jsx`** — navegación con branding, enlaces y botón de tema.
- **`branding.jsx`** — logo textual con enlace a `/`.
- **`footer-m3.jsx`** — footer compartido.
- **`page-hero.jsx`** — cabecera reutilizable con eyebrow, título, subtítulo y media opcional.
- **`portfolio-index.jsx`** — grid de proyectos con imágenes (`next/image`) y tarjetas M3.
- **`portfolio-project.jsx`** — plantilla de detalle de proyecto con iframe embed.
- **`matrix-rain.jsx`** — animación decorativa en canvas.

Los componentes se apoyan en `md-*` de `@material/web` mediante el wrapper `@cloudstrytech/ui-components`. No se usa ninguna librería de UI adicional.

## 🔀 Historia de la migración

Este proyecto migró en tres movimientos, cada uno con su ADR:

1. **Fase 1 — Framework**: Next 15 → 16, React 18 → 19, `next lint` → ESLint 10 flat config. Chakra fijado temporalmente en 2.x.
2. **Fase 2–4 — Migración ruta a ruta**: Pages Router + Chakra → App Router + Material Web. La homepage fue la ruta piloto; luego el portfolio en dos lotes.
3. **Fase 5 — Eliminación de Chakra**: remoción de `@chakra-ui/*`, `@emotion/*` y `framer-motion` (si no se usa), borrado de `components/chakra.jsx` y del tema Chakra, limpieza de `_app.js`/`_document.js`.

> El orden completo y las decisiones están documentados en `docs/adr/` (local-only): ADR-001 (orden original), ADR-007 (pin de Chakra 2), ADR-008 (migración ruta a ruta, supersede ADR-001).

## 🛣️ Roadmap

- [x] Migración a Next.js 16 y React 19
- [x] Migración a App Router
- [x] Sistema de diseño Material Design 3
- [x] Migración de rutas de portfolio
- [x] Eliminación de Chakra UI
- [ ] Instrumentación de Core Web Vitals (LCP, CLS, INP) con `web-vitals` o Lighthouse
- [ ] Auditoría de accesibilidad (teclado, foco, contraste) en rutas M3
- [ ] Migración de `pages/404.js` a `app/not-found.jsx`
- [ ] Decisiones sobre versionado de `out/`
- [ ] Adopción de View Transitions donde aplique

## 🤝 Contribución

Proyecto personal. Issues y sugerencias son bienvenidos a través del [repositorio](https://github.com/devCaldas-dev/home/issues).

Si propones un cambio estructural, abre primero un issue describiendo el problema y la alternativa.

## 📄 Licencia

[MIT](LICENSE) © Armando Toro Cárdenas

## 📬 Contacto

- GitHub: [@devCaldas-dev](https://github.com/devCaldas-dev)
- Portfolio: [https://devcaldas-dev.github.io/home/portfolio](https://devcaldas-dev.github.io/home/portfolio)
- Blog: [https://web-developer-blog.vercel.app/](https://web-developer-blog.vercel.app/)

---

Construido con estándares web modernos, Material Design 3 y una buena dosis de migración incremental.
