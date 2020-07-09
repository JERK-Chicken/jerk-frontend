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
        'x-access-token': sessionStorage.getItem("json-token")
      }};
      await axios.get(`/users/recipebook/${data}`, config)
    } 
    catch (error) {
      console.error(error);
    }
}

export async function requestRecipebook(setRecipes) {
  try {
      const config = {headers: {
        'x-access-token': sessionStorage.getItem("json-token")
      }};
      const response = await axios.get("http://3.136.11.92:8083/users/recipebook", config);
      setRecipes(response.data);
    } 
    catch (error) {
      console.error(error);
    }
}