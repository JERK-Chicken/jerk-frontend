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

export async function requestDescriptions(setDescription, ingredient) {
  console.log(ingredient);
  try {
    let response;
    if (ingredient) {
        response = await axios.get("/descriptions", {'params': {'ingredient': ingredient}});
    } else {
        response = await axios.get("/descriptions");
    }
    setDescription(response.data);
  } 
  catch (error) {
    console.error(error);
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

export async function requestUnits(setUnits) {
  try {
    const response = await axios.get("/units");
    setUnits(response.data);
  } 
  catch (error) {
    console.error(error);
  }
}

