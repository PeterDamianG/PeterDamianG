import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { resolve } from 'path';

export default defineConfig({
  // base './' generates relative paths — works on both peterdg.com.ar and GitHub Pages fallback URL
  base: './',
  plugins: [preact()],
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
  build: {
    outDir: 'dist',
    target: ['es2020', 'chrome80', 'firefox78', 'safari13.1', 'edge80'],
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          preact: ['preact', 'preact/hooks', 'preact/compat'],
        },
      },
    },
  },
});
