import * as dotenv from 'dotenv';
dotenv.config();
import { defineConfig } from 'astro/config';

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
import sanity from "astro-sanity";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), sanity({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    apiVersion: '2022-11-12',
    useCdn: true
  })],
  output: "server",
  adapter: vercel({
    includeFiles: [
      'src/pages/**/*'
    ]
  })
});