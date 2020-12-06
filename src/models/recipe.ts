import * as z from 'zod';

import { Recipe, RecipeFullInfo } from "../schemas/recipe";

export type Recipe = z.infer<typeof Recipe>; 

export type RecipeFullInfo = z.infer<typeof RecipeFullInfo>; 