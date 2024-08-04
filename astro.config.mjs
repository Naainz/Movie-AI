// astro.config.mjs
import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';
import vercel from '@astrojs/vercel/serverless';

dotenv.config();

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  vite: {
    css: {
      preprocessorOptions: {
        css: {
          additionalData: `@import "./src/styles/global.css";`,
        },
      },
    },
  },
});
