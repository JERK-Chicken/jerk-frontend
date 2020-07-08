import React, {useState} from "react";
import {requestRecipesContaining, requestRecipesLimitedTo} from "../../../helpers/requests/recipe-requests"

const Basket = (props) => {
    const [containingSearch, setContainingSearch] = useState(false);
    const [limitedToSearch, setLimitedToSearch] = useState(false);

    function tableBody() {
        return props.basket.map((ingredient) => 
            <tr key={`basket-ingred-${ingredient.name}`}><td>{ingredient.name}</td></tr>
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const ingredientIds = props.basket.map((val) => val.id);
        if (containingSearch) {
            requestRecipesContaining(props.setRecipes, ingredientIds);
        } 
        else if (limitedToSearch) {
            requestRecipesLimitedTo(props.setRecipes, ingredientIds);
        }
        else {
            console.log("pick a mode you loser");
        }
        
    }

    const setContainingMode = (e) => {
        setLimitedToSearch(false);
        setContainingSearch(true);
    }

    const setLimitedMode = (e) => {
        setContainingSearch(false);
        setLimitedToSearch(true);
    }

    return (
        <div style={{ marginTop: 20 }}>
            <div className="col-4"></div>
            <div className="card">
            <div className="card-header"><h3>Your Basket</h3></div>
            <div className="card-body">
            <table className="table table-hover">
                <tbody>{tableBody()}</tbody> 
            </table>
            </div>
            <div className="card-footer">
            <div className="row justify-content-between">
                <div className="form-check-inline">
                    <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="optradio" onChange={setContainingMode}/>
                    Any Recipe            
                    </label>
                </div>
                <div className="form-check-inline">
                    <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="optradio" onChange={setLimitedMode}/>
                    Only these Ingredients
                    </label>
                </div>
                <button className="btn btn-primary mb-2" onClick={handleSubmit}>
                    Search for recipes
                </button>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Basket;

