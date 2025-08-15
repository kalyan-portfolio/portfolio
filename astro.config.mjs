import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  base: '/portfolio/',  // Must match repo name
  integrations: [react()],
});
