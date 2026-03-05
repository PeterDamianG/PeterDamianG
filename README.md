# Personal Web — Peter DG

Portfolio personal de Peter Damián Gómez, Web Developer.

🌐 **[peterdg.com.ar](https://peterdg.com.ar)**

## Stack

| Rol | Herramienta |
|-----|-------------|
| Build / Dev server | [Vite](https://vite.dev) |
| UI framework | [Preact](https://preactjs.com) (~3KB, API idéntica a React) |
| Package manager / Runtime | [Bun](https://bun.sh) |
| Tests | [Vitest](https://vitest.dev) + [@testing-library/preact](https://testing-library.com/docs/preact-testing-library/intro/) |
| Cobertura | [@vitest/coverage-v8](https://vitest.dev/guide/coverage) |
| Linting | ESLint (airbnb + jsx-a11y + prettier) |
| Estilos | CSS puro + CSS Modules |

## Comandos

```bash
bun install          # Instalar dependencias
bun run dev          # Servidor de desarrollo (http://localhost:5173)
bun run build        # Build de producción → dist/
bun run preview      # Previsualizar el build localmente
bun run test         # Ejecutar tests unitarios (verbose)
bun run coverage     # Tests con cobertura (objetivo ≥90%)
bun run lint         # ESLint
bun run prettier     # Formatear y verificar código
```

Ejecutar un test específico:
```bash
bun run test tests/components/icons/Icons.test.js
```

## Estructura

```
src/
├── App.tsx                    # Componente raíz
├── main.tsx                   # Entry point (render + theme init)
├── components/
│   ├── icons/                 # SVG icons
│   ├── layout/
│   │   ├── appbar/            # AppBar, ThemeChanger, Drawer
│   │   └── footer/            # Footer
│   ├── main/
│   │   ├── sections/          # Hero, About, Proyects, Contact
│   │   └── WrapperSection.tsx # IntersectionObserver + lazy mounting
│   ├── placeholders/          # SVG placeholders para Suspense
│   ├── ui/                    # Componentes UI reutilizables
│   └── utils/                 # ErrorBoundary, setPathHash
├── data/
│   └── siteData.ts            # ★ Fuente única de datos del sitio
├── hooks/
│   ├── useTheme.ts            # Manejo de tema claro/oscuro
│   ├── useMediaQuery.ts       # Media queries con matchMedia
│   ├── useIntersectionObserver.ts
│   └── useFunctionOverTime.tsx
└── styles/
    ├── globals.css
    └── themes.css             # CSS custom properties para temas
```

## Personalización

Todo el contenido editable está en **[src/data/siteData.ts](src/data/siteData.ts)**:

- `PERSONAL_INFO` — nombre, email, URLs de redes sociales, CV
- `LIST_PROJECTS` — lista de proyectos
- `DRAWER_TEXT` — frases del drawer de escritorio
- `CERTIFICATIONS` — certificaciones profesionales

## Diseño responsive

Solo dos breakpoints:
- **Mobile** ≤767px
- **Desktop** ≥768px

## Accesibilidad

- HTML semántico: `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`
- Skip-to-content link para screen readers
- `aria-label` en todos los elementos interactivos
- `alt` descriptivo en todas las imágenes
- Hotkeys de navegación: H (hero), A (about), P (proyects), C (contact), T (theme), M (menu), Esc (cerrar)

## Browser support

Chrome, Firefox, Safari, Edge, Brave — últimos 5 años (~2020+)

## Deploy

El build en `dist/` es completamente estático. Funciona en:
- `https://peterdg.com.ar/` (dominio personalizado)
- `https://peterdamiang.github.io/PeterDamianG/` (GitHub Pages fallback)

El archivo `vite.config.ts` usa `base: './'` para rutas relativas que funcionan en ambos.
