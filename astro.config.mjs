// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import mdx from '@astrojs/mdx';

const repositoryName = "workshop-sinf-2024-ci-cd";

// https://astro.build/config
export default defineConfig({
  base: import.meta.env.DEV ? '/' : `/${repositoryName}`,
  integrations: [tailwind(), mdx()]
});
