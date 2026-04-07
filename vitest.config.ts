import { defineConfig } from 'vitest/config';
import preact from '@preact/preset-vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [preact({ include: /\.(j|t)sx?$/ })],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    exclude: ['**/node_modules/**', '**/dist/**', 'e2e/**'],
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'lcov'],
      thresholds: {
        branches: 85,
        functions: 90,
        lines: 90,
        statements: 90,
      },
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'src/main.tsx',
        'src/App.tsx',
        'src/data/siteData.ts',
        'src/data/HeroContent.tsx',
        'src/data/DrawerText.ts',
        'src/data/ListProyects.ts',
        'src/components/main/Main.tsx',
        'src/components/main/Placeholders.tsx',
        'src/components/main/WrapperSection.tsx',
        'src/components/placeholders/**',
        'src/components/utils/page404/**',
        'src/components/main/sections/about/cert/**',
        'src/components/icons/utils/loader/**',
        'src/components/utils/setPathHash.ts',
        'src/components/layout/appbar/drawer/nav/**',
        'src/hooks/useIntersectionObserver.ts',
      ],
    },
  },
  resolve: {
    alias: {
      '@components': resolve(import.meta.dirname, 'src/components'),
      '@icons': resolve(import.meta.dirname, 'src/components/icons'),
      '@layout': resolve(import.meta.dirname, 'src/components/layout'),
      '@sections': resolve(import.meta.dirname, 'src/components/main/sections'),
      '@hooks': resolve(import.meta.dirname, 'src/hooks'),
      '@data': resolve(import.meta.dirname, 'src/data'),
    },
  },
});
