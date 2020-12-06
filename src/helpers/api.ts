import * as z from 'zod';
import { Recipe, RecipeFullInfo } from '../schemas/recipe';

export function searchRecipes(query: string) {
  return fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=${query}&number=10`, {
    headers: {
      "x-rapidapi-key": "cee42c4284msh6234a9b5d070531p13529djsn38776083e9a4",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "useQueryString": "true"
    },
  })
  .then(response => response.json())
  .then((data: unknown) => {
    const parsedResponse = z.object({results: z.array(Recipe)}).parse(data)

    return parsedResponse.results;
  })

} 

export function getRecipe(id: string) {
  return fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`, {
    headers: {
      "x-rapidapi-key": "cee42c4284msh6234a9b5d070531p13529djsn38776083e9a4",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "useQueryString": "true"
    },
  })
  .then(response => response.json()) 
  .then((data: unknown) => {
    const parsedResponse = RecipeFullInfo.parse(data)

    return parsedResponse;
  })

} 


// var req = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/videos/search");

// req.query({
// 	"query": "chicken soup",
// 	"excludeingredients": "mustard",
// 	"includeingredients": "chicken",
// 	"minLength": "0",
// 	"maxLength": "999",
// 	"offset": "0",
// 	"number": "10"
// });
