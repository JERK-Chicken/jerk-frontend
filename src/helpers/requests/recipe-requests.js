import axios from "axios";

export async function requestRecipesContaining(setRecipes, ingredientIds) {
    try {
        const response = await axios.post("/ingredients/search", ingredientIds);
        setRecipes(response.data);
      } 
      catch (error) {
        console.error(error);
      }
}

export async function requestRecipesLimitedTo(setRecipes, ingredientIds) {
    try {
        const response = await axios.post("/ingredients/search", ingredientIds);
        setRecipes(response.data);
      } 
      catch (error) {
        console.error(error);
      }
}