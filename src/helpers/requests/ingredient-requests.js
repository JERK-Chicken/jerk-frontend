import axios from "axios";

export async function requestIngredients(setIngredients, category) {
    try {
        let response;
        if (category) {
            response = await axios.get("/ingredients/basket", {'params': {'category': category}});
        } else {
            response = await axios.get("/ingredients/basket");
        }
        setIngredients(response.data);
      } 
      catch (error) {
        console.error(error);
        // console.error(error.response);
      }
}

export async function requestCategories(setCategories) {
    try {
        const response = await axios.get("/categories");
        setCategories(response.data);
      } 
      catch (error) {
        console.error(error);
      }
}