import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    quote:      z.string(),
    clientName: z.string(),
    jobTitle:   z.string(),
    company:    z.string(),
    order:      z.number().default(1),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title:       z.string(),
    order:       z.number(),
    description: z.string().optional(),
    bullets:     z.array(z.string()).optional(),
  }),
});

export const collections = { testimonials, services };
