# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun install          # Install dependencies
bun run dev          # Start dev server (http://localhost:5173)
bun run build        # Production build → dist/
bun run preview      # Preview the build locally
bun run test         # Run Vitest unit tests (verbose)
bun run coverage     # Vitest with coverage (thresholds: 90% all metrics)
bun run lint         # ESLint
bun run prettier     # Format and check src/**/*.{js,jsx,css,ts,tsx}
bun run test:e2e     # Run Playwright E2E tests (headless Chromium)
bun run test:e2e:headed  # Run E2E tests in visible browser
```

Run a single test file:
```bash
bun run test tests/components/icons/Icons.test.js
```

Run a single E2E spec:
```bash
bunx playwright test e2e/content.spec.ts
```

## Architecture

**Vite + Preact** SPA with TypeScript (strict mode). Generates fully static output for GitHub Pages. `@preact/preset-vite` automatically aliases `react`/`react-dom` to `preact/compat`.

**Source layout** (all under `src/`):
- `App.tsx` — root component (AppBar + Main + Footer)
- `main.tsx` — entry point, initializes theme before first paint
- `components/` — organized by role: `icons/`, `layout/`, `main/`, `placeholders/`, `ui/`, `utils/`
- `data/` — `siteData.ts` (single source of truth), `HeroContent.tsx`, `DrawerText.ts`, `ListProyects.ts`
- `hooks/` — `useTheme`, `useMediaQuery`, `useIntersectionObserver`, `useFunctionOverTime`
- `styles/` — global CSS including theme variables (`themes.css`, `globals.css`)

**Path aliases** (defined in `tsconfig.json` and `vitest.config.ts`):
- `@components/*` → `src/components/*`
- `@layout/*` → `src/components/layout/*`
- `@sections/*` → `src/components/main/sections/*`
- `@icons/*` → `src/components/icons/*`
- `@hooks/*` → `src/hooks/*`
- `@data/*` → `src/data/*`

**Data**: All site content is in `src/data/siteData.ts` — edit this file to update projects, personal info, certifications, or drawer text.

**Testing**:
- Unit tests in `tests/` (mirroring `src/` structure), using Vitest + @testing-library/preact
- E2E tests in `e2e/` using Playwright (headless Chromium only, fast + low resource)
- Coverage thresholds: 90% branches/functions/lines/statements
- `vitest.setup.ts` mocks `window.matchMedia` and `IntersectionObserver` globally

**ESLint** extends airbnb + prettier + jsx-a11y + @typescript-eslint. Key rules: 2-space indent, single quotes, explicit function return types required, no `console` statements.

**Responsive**: Only two breakpoints — mobile (≤767px) and desktop (≥768px).

**Hotkeys**: H (hero), A (about), P (proyects), C (contact), T (theme toggle), M (open menu), Esc (close menu).
