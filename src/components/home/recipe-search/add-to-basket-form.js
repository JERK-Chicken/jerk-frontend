import React, {useState} from "react";

const AddToBasketForm = (props) => {
    const [selectedIngredient, setSelectedIngredient] = useState({id : "", name : ""});

    const handleIngredientChange = (e) => {
        setSelectedIngredient({"name":e.target.value});
    }

    const handleSubmit = () => {
        props.setBasket([...props.basket, selectedIngredient])
    }

    return (
        <div>
            <h3>This is a AddToBasketForm component...</h3>
            <form className="form-inline">
                <div className="form-group mb-2">
                    <select name="category">
                        <option value="Meat">Meat</option>
                        <option value="Produce">Produce</option>
                        <option value="Dairy">Dairy</option>
                    </select>
                </div>
                <div className="form-group mb-2">
                    <select onChange={handleIngredientChange} name="ingredient">
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

export default AddToBasketForm;