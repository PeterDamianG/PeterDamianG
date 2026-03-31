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
      provider: 'v8',
      reporter: ['text', 'lcov'],
      thresholds: {
        branches: 90,
        functions: 90,
        lines: 90,
        statements: 90,
      },
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'src/main.tsx',
        'src/data/siteData.ts',
        'src/data/HeroContent.tsx',
        'src/data/DrawerText.ts',
        'src/data/ListProyects.ts',
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
