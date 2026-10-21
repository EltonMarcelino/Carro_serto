import { defineConfig } from 'astro/config';
import process from 'node:process';
import sitemap from '@astrojs/sitemap';

// Atualize SITE_URL antes de publicar em um domínio definitivo.
export default defineConfig({
  site: process.env.SITE_URL || 'https://carro-serto.pages.dev',
  integrations: [sitemap()],
  output: 'static'
});
