import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posture = defineCollection({
	loader: glob({ base: './src/content/postures', pattern: '**/*.{md,mdx}' }),
	schema: (context) => {
		return z.object({
			title: z.string(),
		});
	},
});

const stance = defineCollection({
	loader: glob({ base: './src/content/stances', pattern: '**/*.{md,mdx}' }),
	schema: (context) => {
		return z.object({
			imageSlug: z.string(),
			title: z.string(),
		});
	},
});

const coreConcept = defineCollection({
	loader: glob({
		base: './src/content/core-concepts',
		pattern: '**/*.{md,mdx}',
	}),
	schema: (context) => {
		return z.object({
			summary: z.string(),
			title: z.string(),
		});
	},
});

export const collections = { coreConcept, posture, stance };
