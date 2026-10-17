import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(), description: z.string(),
    category: z.enum(['Lançamentos', 'Guias', 'Elétricos', 'Opinião dos donos']),
    date: z.coerce.date(), updated: z.coerce.date().optional(),
    readingTime: z.number().default(5), featured: z.boolean().default(false),
    image: z.string(), imageAlt: z.string(),
    author: z.string().default('Redação Carro Serto'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});
export const collections = { blog };
