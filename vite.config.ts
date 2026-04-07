import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { resolve } from 'path';

export default defineConfig({
  // base './' generates relative paths — works on both peterdg.com.ar and GitHub Pages fallback URL
  base: './',
  plugins: [preact()],
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
  build: {
    outDir: 'dist',
    target: ['es2022', 'chrome105', 'firefox104', 'safari16', 'edge105'],
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks(id: string): string | undefined {
          if (id.includes('node_modules/preact')) {
            return 'preact';
          }
          return undefined;
        },
      },
    },
  },
});
