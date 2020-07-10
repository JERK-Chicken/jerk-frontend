import React, {useState} from "react";
import { connect } from "react-redux";
import {withRouter} from "react-router-dom";
import RecipeRow from "./recipe-row";
import {setCurrentRecipe} from '../../../redux/actions/storing-actions';

const RecipeResults = (props) => {
    const [selectedRecipe, setSelectedRecipe] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        sessionStorage.setItem('selected-recipe', selectedRecipe);
        props.history.push("/recipe-page");
    }

    function searchResults() {
        if (!props.recipes || props.recipes.length === 0) {
            return "No results to show"
        } 
        return (            
            <table className="table table-hover">
            <tbody>
                {props.recipes.map((recipe) => {
                    let isActive = (selectedRecipe === recipe.id);
                    return <RecipeRow key={recipe.name} data={recipe} isActive={isActive} setSelectedRecipe={setSelectedRecipe}/>;
                })} 
            </tbody>
            </table>
        );
    }

    return (
        <div className="col1">
        <div style={{ marginTop: 20 }}>
        <div className="card">
            <div className="card-header"><h3>Recipe Results</h3></div>
            <div className="results">
                <div className="card-body">
                    {searchResults()}
                </div>
                </div>
            <div className="card-footer">
                <div className="row justify-content-end">
                <div className="btn btn-primary" onClick={handleSubmit}>Select Recipes</div>
            </div>
            </div>
        </div>
        </div>
        </div>
    );
};

function mapDispatchToProps(dispatch) {
    return {
        setRecipePage: (payload) => dispatch(setCurrentRecipe(payload))
    };
  }
  
export default connect(null, mapDispatchToProps)(withRouter(RecipeResults));