import React, {useState, useEffect} from "react";
import {requestIngredients, requestCategories} from "../../../helpers/requests/ingredient-requests";
// import { connect } from "react-redux";
// import {loadCategories} from "../../../redux/actions/loading-actions"

const AddToBasketForm = (props) => {
    const [categories, setCategories] = useState([]);
    const [selectedIngredient, setSelectedIngredient] = useState({});
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        (async _ => requestCategories(setCategories))();
        (async _ => requestIngredients(setIngredients))();
    }, []);


    function ingredientId(name) {
        for (let ing of ingredients) {
            if (ing.name === name) {
                return ing.id;
            }
        }
    }

    const handleIngredientChange = (e) => {
        e.preventDefault();
        setSelectedIngredient({"name" : e.target.value, "id" : ingredientId(e.target.value)});
    }

    const handleCategoryChange = (e) => {
        const category = e.target.value === "null" ? "" : e.target.value;
        (async _ => requestIngredients(setIngredients, category))();
    };

    const handleCategoryClick = () => {
        if (props.categories && props.categories.length > 0) {
            return;
        }
        (async _ => requestCategories(setCategories))();
    }

    const handleSubmit = () => {
        console.log(selectedIngredient);
        if(selectedIngredient.id){
            if(!props.basket.includes(selectedIngredient))
                props.setBasket([...props.basket, selectedIngredient])
        }
    }

    const categoryDropList = () => {
        // return props.categories.map((obj) => 
        //     <option key={obj.id} value={obj.category}>{obj.category}</option>
        // )
        return categories.map((obj) => 
            <option key={obj.id} value={obj.category}>{obj.category}</option>
        )
    }

    const ingredientDropList = () => {
        return ingredients.map((obj) => 
            <option key={`ingredient_drop_${obj.id}`} value={obj.name}>{obj.name}</option>
        )
    }

    return (
        <div style={{ marginTop: 20 }}>            
            <div className="card">
            <div className="card-header"><h3>Add to Your Basket</h3></div>
            <div className="card-body">
            <form className="row justify-content-around">
                <div>
                    <select className="form-control" name="category" onClick={handleCategoryClick} onChange={handleCategoryChange}>
                        <option value="null">- Category -</option>
                        {categoryDropList()}
                    </select>
                </div>
                <div>
                    <select className="form-control" name="ingredient" onChange={handleIngredientChange}>
                        <option value="null">- Ingredient -</option>
                        {ingredientDropList()}
                    </select>
                </div>               
            </form>
            </div>
            <div className="card-footer">
                <div className="row justify-content-end">
            <button className="btn btn-primary mb-2" onClick={handleSubmit}>Add Ingredient</button>
            </div>
            </div>
            </div>
        </div>
    );
};

// function mapStateToProps(store) {
//     return {
//         categories : store.categories,
//     };
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         loadCategories: (payload) =>
//             dispatch(loadCategories(payload)),
//     };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(AddToBasketForm);

export default AddToBasketForm;