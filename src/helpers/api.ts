import * as z from 'zod';
import { Recipe, RecipeFullInfo } from '../schemas/recipe';

export const searchRecipes = async (query: string) => {
  const data: unknown = (await fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=${query}&number=10`, {
    headers: {
      "x-rapidapi-key": "cee42c4284msh6234a9b5d070531p13529djsn38776083e9a4",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "useQueryString": "true"
    },
  })).json();
 
  return z.object({results: z.array(Recipe)}).parse(data);
} 

export const getRecipe = async (id: string) => {
  const data: unknown = (await fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`, {
    headers: {
      "x-rapidapi-key": "cee42c4284msh6234a9b5d070531p13529djsn38776083e9a4",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "useQueryString": "true"
    },
  })).json();
  
  return RecipeFullInfo.parse(data)
} 
