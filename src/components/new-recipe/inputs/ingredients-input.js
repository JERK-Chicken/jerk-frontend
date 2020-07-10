import React from "react"
import IngredientList from "./new-ingredient";

const IngredientsInput = (props) => {
    return (
        <table className="table">
        <thead>
            <th className="required">Ingredients</th>                                                
        </thead>
        <tbody>
            <IngredientList 
                add={props.addNewIngredientRow} 
                delete={props.deleteIngredientRow} 
                ingredientList={props.ingredientList} 
            />
        </tbody>
        <tfoot>
            <tr><td colSpan="4">
                <button 
                    onClick={props.addNewIngredientRow} 
                    type="button" 
                    className="btn btn-success text-center"
                ><i className="fa fa-plus-circle" aria-hidden="true"></i>+
                </button>
            </td></tr>
        </tfoot>
    </table>
    )
}

export default IngredientsInput;