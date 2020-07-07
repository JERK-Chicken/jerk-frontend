import React from "react";
import RecipeSearch from "./recipe-search/recipe-search";
import RecipeResults from "./recipe-results/recipe-results";

const RecipeFinder = () => {
    return (
        <div>
            <h1>This is a RecipeSearch component...</h1>
            <RecipeSearch/>
            <RecipeResults/>
            <button className="btn btn-primary mb-2">Select recipes</button>
        </div>
    );
};

export default RecipeFinder;