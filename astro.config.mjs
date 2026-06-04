import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // TODO: Replace with the actual live domain before deploying
  site: 'https://www.brandel.co.il',
  integrations: [sitemap()],
  output: 'static',
});
