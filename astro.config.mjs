// @ts-check

import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	adapter: cloudflare({
		imageService: { build: 'compile', runtime: 'cloudflare-binding' },
	}),

	integrations: [sitemap(), mdx()],
	prefetch: {
		prefetchAll: true,
	},
	site: 'https://lightsaber.lorin-renodeyn.workers.dev',

	vite: {
		plugins: [tailwindcss()],
	},
});
