import React, {useState, useEffect} from "react";
import {requestIngredients, requestCategories} from "../../../helpers/requests/ingredient-requests";
import { connect } from "react-redux";
import {loadCategories} from "../../../redux/actions/loading-actions"

const AddToBasketForm = (props) => {
    const [selectedIngredient, setSelectedIngredient] = useState({id : "", name : ""});
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        (async _ => requestIngredients(setIngredients))();
    }, []);

    const handleIngredientChange = (e) => {
        e.preventDefault();
        setSelectedIngredient({"name" : e.target.value});
    }

    const handleCategoryChange = (e) => {
        const category = e.target.value === "null" ? "" : e.target.value;
        (async _ => requestIngredients(setIngredients, category))();
    };

    const handleCategoryClick = () => {
        if (props.categories && props.categories.length > 0) {
            return;
        }
        (async _ => requestCategories(props.loadCategories))();
    }

    const handleSubmit = () => {
        props.setBasket([...props.basket, selectedIngredient])
    }

    const categoryDropList = () => {
        return props.categories.map((obj) => 
            <option key={obj.id} value={obj.category}>{obj.category}</option>
        )
    }

    const ingredientDropList = () => {
        return ingredients.map((obj) => 
            <option key={`ingredient_drop_${obj.id}`} value={obj.name}>{obj.name}</option>
        )
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
                        {ingredientDropList()}
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