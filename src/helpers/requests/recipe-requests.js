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
        const response = await axios.post("/ingredients/strict-search", ingredientIds);
        setRecipes(response.data);
      } 
      catch (error) {
        console.error(error);
      }
}

export async function requestAddNewRecipe(data) {
  try {
      console.log(data);
      const config = {headers: {
        'x-access-token': sessionStorage.getItem("token")
      }};
      const response = await axios.post("/recipes", data, config);
      console.log(response);
      // setRecipes(response.data);
    } 
    catch (error) {
      console.error(error);
    }
}

export async function requestSaveRecipe(data) {
  try {
      const config = {headers: {
        'x-access-token': sessionStorage.getItem("token")
      }};
      const response = await axios.post("/users/recipebook", data, config)
      console.log(response);
      // setRecipes(response.data);
    } 
    catch (error) {
      console.error(error);
    }
}