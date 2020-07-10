import React, {useState} from 'react';
import { withRouter } from "react-router-dom";
import RecipeBook from './recipe-book';
import UserRecipe from './user-recipes';
import UserInfo from "./user-info";
import jwt from "jsonwebtoken";

function UserApp(props) {
    const info = jwt.decode(sessionStorage.getItem("json-token"));
    const [selectedBookRecipe, setSelectedBookRecipe] = useState("");
    const [selectedWrittenRecipe, setSelectedWrittenRecipe] = useState("");

    const handleBookRecipesClick = (e) => {
        (async _ => sessionStorage.setItem('selected-recipe', selectedBookRecipe))();
        props.history.push("/recipe-page");
    }

    // console.log(selectedBookRecipe, selectedWrittenRecipe);
    return (
    <div className="container-fluid">
        <div className="col1">
        <div className="row justify-content-between" style={{ marginTop: 20 }}>
            <div className="col-7">
            <div className="card">
                <div className="card-header"><h3>Welcome {info.username}!</h3></div>
                <div className="card-body"><UserInfo/></div>
                <div className="row card-footer justify-content-between"></div>
                </div>
            </div>
            <div className="col-5">
            <div className="card">
                <div className="card-header"><h3>Your Recipes</h3></div>
                <div className="card-body">
                <div className ="recipe">
                <UserRecipe selectedId={selectedWrittenRecipe} setSelectedId={setSelectedWrittenRecipe}/>
                </div>
                </div>
                <div className="row card-footer justify-content-between">
                <a className="btn btn-sm btn-success" href="/new-recipe" role="button">Add New Recipe</a>
                <a className="btn btn-info btn-sm" href="/edit-recipe" role="button">Modify Recipe</a>
                <button type="button" className="btn btn-danger btn-sm">Delete Recipe</button>
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