import React from "react";
import AddToBasketForm from "./add-to-basket-form";
import Basket from "./basket";

const RecipeSearch = () => {
    return (
        <div>
            <h2>This is a RecipeSearch component...</h2>
            <AddToBasketForm/>
            <Basket/>
            <button className="btn btn-primary mb-2">Search for recipes</button>
        </div>
    );
};

export default RecipeSearch;