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
    '/rewild-immersion/porsgrunn-15-november': '/#events',
    // Rewild Course was renamed Rewild Trip (2026-11-22); its past trip pages go to the calendar
    '/rewild-course': '/#events',
    '/rewild-course/larvik-8-november': '/#events',
    '/rewild-course/larvik-21-november': '/#events',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
