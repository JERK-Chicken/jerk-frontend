import React from "react";
import AddToBasketForm from "./basket/add-to-basket-form";
import Basket from "./basket/basket";
import RecipeResults from "./recipe-results/recipe-results";

const RecipeFinder = () => {
    return (
        <div>
            <h1>This is a RecipeSearch component...</h1>
            <AddToBasketForm/>
            <Basket/>
            <RecipeResults/>
        </div>
    );
};

export default RecipeFinder;