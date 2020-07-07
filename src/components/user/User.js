import React from 'react';
import RecipeBook from './recipe-book';
import UserRecipe from './user-recipes';

function UserApp() {

  return (
    <div class="container">
        <div className="row justify-content-end" style={{ marginTop: 20 }}>
            <div class="card col-5">
                User Information
            </div>
        </div>
        <div className="row justify-content-between" style={{ marginTop: 20 }}>
            <div class="card col-6">
                <h3>Saved Recipes</h3>
                <RecipeBook></RecipeBook>
            </div>
            <div class="card col-5">
                <h3>Your Recipes</h3>
                <UserRecipe></UserRecipe>
                <div className="row justify-content-around align-items-end">
                <a class="btn btn-sm btn-success" href="/new-recipe" role="button">Add</a>
                <button type="button" class="btn btn-info btn-sm">Modify</button>
                <button type="button" class="btn btn-danger btn-sm">Delete</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default UserApp;