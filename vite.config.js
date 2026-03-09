import { defineConfig } from 'vite';

export default defineConfig({
  root: 'site',
  server: {
    open: true,
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});
