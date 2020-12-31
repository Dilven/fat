import * as z from 'zod';
import { Recipe, RecipeFullInfo } from '../schemas/recipe';

const BASE_URL = "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com";

const headers = {
  "x-rapidapi-key": process.env.REACT_API_KEY || '',
  "x-rapidapi-host": BASE_URL,
  "useQueryString": "true"
}
export const searchRecipes = async (query: string) => {
  const data: unknown = (await fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=${query}&number=10`, {
    headers,
  })).json();
 
  return z.object({results: z.array(Recipe)}).parse(data);
} 

export const getRecipe = async (id: string) => {
  const data: unknown = (await fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`, {
    headers,
  })).json();
  
  return RecipeFullInfo.parse(data)
} 
