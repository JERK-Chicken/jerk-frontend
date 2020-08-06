import React from 'react';
import RecipeBook from './recipe-book';
import UserRecipes from './user-recipes';
import UserInfo from "./user-info";

function UserApp() {
    return (
    <div className="container-fluid">
        <div className="col1">
            <div className="row justify-content-between" style={{ marginTop: 20 }}>
                <div className="col-7">
                    <UserInfo/>
                </div>
                <div className="col-5">
                    <UserRecipes/>
                </div>
            </div>
        </div>
        <div className="row" style={{ marginTop: 20 }}>
            <div className="col-7">
                <RecipeBook/>
            </div>
        </div>
    </div>
    )
}

export default UserApp;