import React, {useState} from 'react';
import { withRouter } from "react-router-dom";
import RecipeBook from './recipe-book';
import UserRecipe from './user-recipes';
import UserInfo from "./user-info";
import { requestDeleteRecipe } from "../../helpers/requests/recipe-requests";

function UserApp(props) {
    const [selectedBookRecipe, setSelectedBookRecipe] = useState("");
    const [writtenRecipes, setWrittenRecipes] = React.useState("");
    const [selectedWrittenRecipe, setSelectedWrittenRecipe] = useState("");

    const handleBookRecipesClick = (e) => {
        if (selectedBookRecipe) {
            sessionStorage.setItem('selected-recipe', selectedBookRecipe);
            props.history.push("/recipe-page");
        }
    }

    const deleteRecipe = (e) => {
        e.preventDefault();
        if (selectedWrittenRecipe) {
            (async _ => requestDeleteRecipe(selectedWrittenRecipe))();
            setWrittenRecipes(
                writtenRecipes.filter(r => r.id !== selectedWrittenRecipe)
            );
        }   
    }

    return (
    <div className="container-fluid">
        <div className="col1">
        <div className="row justify-content-between" style={{ marginTop: 20 }}>
            <div className="col-7">
            <div className="card">
                <UserInfo/>
            </div>
            </div>
            <div className="col-5">
            <div className="card">
                <div className="card-header"><h3>Your Recipes</h3></div>
                <div className="card-body">
                    <UserRecipe 
                        selectedId={selectedWrittenRecipe} 
                        setSelectedId={setSelectedWrittenRecipe}
                        recipes={writtenRecipes}
                        setRecipes={setWrittenRecipes}
                    />
                </div>
                <div className="row card-footer justify-content-between">
                    <a className="btn btn-sm btn-success" href="/new-recipe" role="button">Add New Recipe</a>
                    <a className="btn btn-info btn-sm" href="/edit-recipe" role="button">Modify Recipe</a>
                    <button type="button" className="btn btn-danger btn-sm" onClick={deleteRecipe}>Delete Recipe</button>
                </div>
                </div>
            </div>
        </div>
        </div>
        <div className="row" style={{ marginTop: 20 }}>
            <div className="col-7">
            <div className="card">
            <div className="card-header"><h3>Favorited Recipes</h3></div>
            <div className="card-body">
                <div  className ="limit">
                <RecipeBook selectedId={selectedBookRecipe} setSelectedId={setSelectedBookRecipe}/>
                </div>
            </div>
            <div className="card-footer">
            <div className="row justify-content-end">
                <div className="btn btn-primary" role="button" onClick={handleBookRecipesClick}>
                    Select Recipes
                </div>
            </div>
            </div>
                
            </div>
            </div>
        </div>
    </div>
    )
}

export default withRouter(UserApp);