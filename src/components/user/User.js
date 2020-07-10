import React from 'react';
import RecipeBook from './recipe-book';
import UserRecipe from './user-recipes';
import UserInfo from "./user-info";
import jwt from "jsonwebtoken";

function UserApp() {
    const info = jwt.decode(sessionStorage.getItem("json-token"));

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
                <UserRecipe></UserRecipe>
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
                <div className="card-header"><h3>Saved Recipes</h3></div>
                <div className="card-body">
                <div  className ="limit">
                <RecipeBook></RecipeBook>
                </div>
                </div>
                <div className="card-footer">
                <div className="row justify-content-end">
                <a className="btn btn-primary" href="/recipe-page" role="button">Select Recipes</a>
            </div>
            </div>
                
                </div>
            </div>
        </div>
    </div>
    )
}

export default UserApp;