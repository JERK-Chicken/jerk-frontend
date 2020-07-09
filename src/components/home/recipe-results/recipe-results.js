import React, {useState} from "react";
import RecipeRow from "./recipe-row";

const RecipeResults = (props) => {
    const [selectedRecipe, setSelectedRecipe] = useState("");

    function searchResults() {
        if (!props.recipes || props.recipes.length === 0) {
            return "No results to show"
        } 
        return (
            <table className="table table-hover">
            <tbody>
                {props.recipes.map((recipe) => 
                    <RecipeRow key={recipe.name} data={recipe} setSelectedRecipe={setSelectedRecipe}/>)}
            </tbody>
            </table>
        );
    }

    console.log(selectedRecipe);
    return (
        <div style={{ marginTop: 20 }}>
        <div className="card">
            <div className="card-header"><h3>Recipe Results</h3></div>
                <div className="card-body">
                    {searchResults()}
                </div>
            <div className="card-footer">
                <div className="row justify-content-end">
                <a className="btn btn-primary" href="/recipe-page" role="button">Select Recipes</a>
            </div>
            </div>
        </div>
        </div>
    );
};

export default RecipeResults;