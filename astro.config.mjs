import { defineConfig } from 'astro/config';
import decapCmsOauth from 'astro-decap-cms-oauth';

export default defineConfig({
  output: 'hybrid',
  site: 'http://localhost:4321',
  integrations: [
    decapCmsOauth({
      decapCMSSrcUrl: 'https://unpkg.com/@sveltia/cms/dist/sveltia-cms.js',
    }),
  ],
});
