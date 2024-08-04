// astro.config.mjs
import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  output: 'server',
});
