import React from 'react';
import RecipeBook from './recipe-book';
import UserRecipe from './user-recipes';

function UserApp() {

  return (
    <div className="container-fluid">
        <div className="row justify-content-around" style={{ marginTop: 20 }}>
            <div className="col-6"></div>
            <div className="col-5">
            <div className="card">
                <div className="card-header"><h3>User Information</h3></div>
                <div className="card-body"><p>Hello Clarice</p></div>
                <div className="row card-footer justify-content-between"></div>
                </div>
            </div>
        </div>
        <div className="row justify-content-around" style={{ marginTop: 20 }}>
            <div className="col-6">
                <div className="card">
                <div className="card-header"><h3>Saved Recipes</h3></div>
                <div className="card-body">
                <RecipeBook></RecipeBook>
                </div>
                <div className="row card-footer justify-content-between"></div>
                </div>
            </div>
            <div className="col-5">
            <div className="card">
                <div className="card-header"><h3>Your Recipes</h3></div>
                <div className="card-body">
                <UserRecipe></UserRecipe>
                </div>
                <div className="row card-footer justify-content-between">
                <a className="btn btn-sm btn-success" href="/new-recipe" role="button">Add New Recipe</a>
                <button type="button" className="btn btn-info btn-sm">Modify Recipe</button>
                <button type="button" className="btn btn-danger btn-sm">Delete Recipe</button>
                </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default UserApp;