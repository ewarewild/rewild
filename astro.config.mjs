import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://re-wild.no',
  // Old event pages: each trip now has its own page, reached from the homepage calendar
  redirects: {
    '/evening-reset': '/#events',
    '/day-course': '/#events',
    '/weekend-course': '/#events',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
