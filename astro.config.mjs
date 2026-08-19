import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://re-wild.no',
  vite: {
    plugins: [tailwindcss()],
  },
});
