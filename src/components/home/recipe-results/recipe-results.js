import React from "react";

const RecipeResults = (props) => {
    function searchResults() {
        if (!props.recipes || props.recipes.length === 0) {
            return "No results to show"
        } 
        return (
            <table className="table table-hover">
            <tbody>
                {props.recipes.map((obj) => <tr key={`${obj.name}-row`}><td>{obj.name}</td></tr>)}
            </tbody>
            </table>
        );
    }

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