import React, {useState} from "react";
import { connect } from "react-redux";
import {requestRecipesContaining, requestRecipesLimitedTo} from "../../../helpers/requests/recipe-requests"
import UserRadio from "./user-limit-radio";
import NonUserRadio from "./disabled-radio";

const Basket = (props) => {
    const [containingSearch, setContainingSearch] = useState(true);
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
    
    let loggingRadio = props.isLoggedIn ?<UserRadio/> : <NonUserRadio/>;

    return (
        <div style={{ marginTop: 20 }}>
            <div className="col-4"></div>
            <div className="card">
            <div className="card-header"><h3>Your Basket</h3></div>
            <div className="card-body">
            <div  className ="limit">
            <table className="table table-hover" >
                <tbody>{tableBody()}</tbody> 
            </table>
            </div>
            </div>
            <div className="card-footer">
            <div className="row justify-content-around">
                <div className="form-check-inline">
                    <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="optradio" checked="checked" onChange={setContainingMode}/>
                    Contains these Ingredients            
                    </label>
                </div>
                <div className="form-check-inline">
                    <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="optradio" onChange={setLimitedMode}/>
                    Only these Ingredients
                    </label>
                </div> 
                <div className="form-check-inline">
                {loggingRadio}                    
                </div> 
            </div>
            <br/>
            <div className="row justify-content-around">               
                <button className="btn btn-primary mb-2" onClick={handleSubmit}>
                    Search for recipes
                </button>                
            </div>
            </div>
            </div>
        </div>
    );
};

function mapStateToProps(store) {
    return {
        isLoggedIn : store.isLoggedIn,
    };
}

export default connect(mapStateToProps)(Basket);

