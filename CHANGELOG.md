# Changelog

## [2.0.0] — 2026-03-03

### Migración completa: Next.js → Vite + Preact

#### Stack

- **Reemplazado** Next.js 12 por **Vite** + **Preact** (~3KB vs ~40KB)
- **Reemplazado** npm/Node por **Bun** como runtime y package manager
- **Reemplazado** Jest por **Vitest** (API compatible, más rápido)
- **Reemplazado** `@testing-library/react` por `@testing-library/preact`
- **Eliminados** todos los tests E2E (Playwright)

#### Librerías eliminadas → APIs nativas

| Eliminada | Reemplazada por |
|-----------|----------------|
| `next-themes` | `useTheme` hook (localStorage + `data-theme`) |
| `react-responsive` | `useMediaQuery` hook (matchMedia API) |
| `react-intersection-observer` | `useIntersectionObserver` hook |
| `react-hotkeys-hook` | `useEffect` + `addEventListener('keydown')` |
| `react-error-boundary` | `ErrorBoundary` class component propio |
| `next/image` | `<img>` nativo con `loading='lazy'/'eager'` |
| `next/dynamic` | `React.lazy` + `Suspense` |
| `next/head` | Meta tags estáticos en `index.html` |

#### Nuevos archivos

- `index.html` — Entry point Vite con meta tags SEO completos, skip-link
- `src/main.tsx` — Entry point, inicializa tema antes del primer paint
- `src/App.tsx` — Componente raíz
- `src/data/siteData.ts` — Fuente única de datos del sitio
- `src/hooks/useTheme.ts`
- `src/hooks/useMediaQuery.ts`
- `src/hooks/useIntersectionObserver.ts`
- `src/components/utils/errorfallback/ErrorBoundary.tsx`
- `vite.config.ts`, `vitest.config.ts`, `vitest.setup.ts`
- `public/CNAME`
- `.github/workflows/deploy.yml`

#### Archivos eliminados

- `next.config.js`, `next-env.d.ts`
- `jest.config.js`, `jest.setup.js`
- `playwright.config.ts`, `e2e/`
- `src/pages/` (Next.js pages)
- `.github/workflows/playwright.yml`

#### Responsive simplificado

- Eliminado breakpoint de 1280px
- Solo mobile (≤767px) y desktop (≥768px)

#### Cobertura de tests

- 59 tests unitarios, todos pasan
- Nuevos tests: `useTheme`, `useMediaQuery`, `useIntersectionObserver`, `ErrorBoundary`

#### Accesibilidad mejorada

- Skip-to-content link: `<a href="#main-content">Ir al contenido principal</a>`
- Noscript warning con `role="alert"`
- ARIA labels en overlay: `role="dialog"`, `aria-modal="true"`
- Botones con `aria-label` descriptivos

---

## [1.x.x] — Historia anterior

Ver commits del repositorio.
