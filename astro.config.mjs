// astro.config.mjs
import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';
import vercel from '@astrojs/vercel';

dotenv.config();

export default defineConfig({
  output: 'server',
  adapter: vercel(),
});
