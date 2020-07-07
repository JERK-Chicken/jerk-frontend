import React, {useState} from "react";
import {requestIngredients, requestCategories} from "../../../helpers/requests/ingredient-requests";
import { connect } from "react-redux";
import {loadCategories} from "../../../redux/actions/loading-actions"

const AddToBasketForm = (props) => {
    const [selectedIngredient, setSelectedIngredient] = useState({id : "", name : ""});

    const handleIngredientChange = (e) => {
        e.preventDefault();
        setSelectedIngredient({"name" : e.target.value});
    }

    const handleCategoryChange = (e) => {
        e.preventDefault();
        (async _ => requestIngredients("Meat"))();
    };

    const handleCategoryClick = () => {
        if (props.categories && props.categories.length > 0) {
            return;
        }
        (async _ => requestCategories(props.loadCategories))();
    }

    const categoryDropList = () => {
        return props.categories.map((obj) => 
            <option key={obj.id} value={obj.category}>{obj.category}</option>
        )
    }

    const handleSubmit = () => {
        props.setBasket([...props.basket, selectedIngredient])
    }

    return (
        <div>
            <h3>This is a AddToBasketForm component...</h3>
            <form className="form-inline">
                <div className="form-group mb-2">
                    <select name="category" onClick={handleCategoryClick} onChange={handleCategoryChange}>
                        <option value="null">- Category -</option>
                        {categoryDropList()}
                    </select>
                </div>
                <div className="form-group mb-2">
                    <select name="ingredient" onChange={handleIngredientChange}>
                        <option value="null">- Ingredient -</option>
                        <option value="strawberry">Strawberry</option>
                        <option value="blueberry">Blueberry</option>
                        <option value="cranberry">Cranberry</option>
                    </select>
                </div>
            </form>
            <button className="btn btn-primary mb-2" onClick={handleSubmit}>Add Ingredient</button>
        </div>
    );
};

function mapStateToProps(store) {
    return {
        categories : store.categories,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadCategories: (payload) =>
            dispatch(loadCategories(payload)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToBasketForm);