// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://chitamoor.github.io',
  base: '/interview-prep',
  vite: {
    plugins: [tailwindcss()],
  },
});
