import axios from "axios";

export async function requestIngredients(category) {
    try {
        let response;
        if (category) {
            response = await axios.get("/ingredients/basket", {'params': {'category': 'Meat'}});
        } else {
            response = await axios.get("/ingredients/basket");
        }
        
        // return response;
        console.log(response);
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