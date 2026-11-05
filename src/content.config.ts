import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

const posture = defineCollection({
	loader: glob({ base: './src/content/postures', pattern: '**/*.{md,mdx}' }),
	schema: (context) => {
		return z.object({
			title: z.string(),
		});
	},
});

export const collections = { posture };
