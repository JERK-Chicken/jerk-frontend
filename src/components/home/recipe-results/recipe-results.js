import React from "react";

const RecipeResults = () => {
    return (
        <div style={{ marginTop: 20 }}>
            <div className="card">
            <div className="card-header"><h3>Recipe Results</h3></div>
            <div className="card-body">
            <table className="table table-hover">
                <tbody>
                    <tr>
                        <td>Strawberry Pie</td>
                    </tr>
                </tbody>
            </table>
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