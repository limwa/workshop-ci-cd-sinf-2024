// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import mdx from '@astrojs/mdx';

const repositoryName = "workshop-ci-cd-sinf-2024";

// https://astro.build/config
export default defineConfig({
  base: import.meta.env.DEV ? '/' : `/${repositoryName}`,
  integrations: [tailwind(), mdx()]
});
