import React from "react";

const AddToBasketForm = () => {
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
                    <select onChange={()=>console.log("!!!")} name="ingredient">
                        <option value="Strawberry">Strawberry</option>
                        <option value="Blueberry">Blueberry</option>
                        <option value="Cranberry">Cranberry</option>
                    </select>
                </div>
            </form>
            <button className="btn btn-primary mb-2">Add Ingredient</button>
        </div>
    );
};

export default AddToBasketForm;