import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const teamCollection = defineCollection({
  loader: glob({ pattern: ['**/*.md', '**/*.mdx'], base: 'src/data/team' }),
  schema: z.object({
    name: z.string(),
    roles: z.array(z.string()),
    skills: z.array(z.string()),
    image: z.string(),
  }),
});

export const collections = {
  team: teamCollection,
};
