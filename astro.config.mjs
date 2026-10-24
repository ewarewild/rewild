import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://re-wild.no',
  // Old event pages: each trip now has its own page, reached from the homepage calendar
  redirects: {
    '/evening-reset': '/#events',
    '/day-course': '/#events',
    '/weekend-course': '/#events',
    '/rewild-immersion': '/#events',
    '/rewild-immersion/porsgrunn-15-november': '/rewild-course/porsgrunn-15-november',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
