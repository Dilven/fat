import * as z from 'zod';

export const Recipe = z.object({
  id: z.number(),
  title: z.string(),
  readyInMinutes: z.number(),
  servings: z.number(),
  sourceUrl: z.string(),
  openLicense: z.number(),
  image: z.string(),
})

export const RecipeFullInfo = Recipe.extend({
  openLicense: z.number().optional(),
  vegan: z.boolean()
})
