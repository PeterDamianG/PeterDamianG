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
      '@components': resolve(__dirname, 'src/components'),
      '@icons': resolve(__dirname, 'src/components/icons'),
      '@layout': resolve(__dirname, 'src/components/layout'),
      '@sections': resolve(__dirname, 'src/components/main/sections'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@data': resolve(__dirname, 'src/data'),
    },
  },
});
