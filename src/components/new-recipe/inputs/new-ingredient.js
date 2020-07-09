import React, {useState, useEffect} from "react"
// import { connect } from "react-redux";
// import {loadCategories, loadUnits} from "../../../redux/actions/loading-actions";
import {requestIngredients, requestCategories, requestUnits, requestDescriptions} from "../../../helpers/requests/ingredient-requests";

const IngredientList = (props) => {
  const [ingredients, setIngredients] = useState([]);
  const [descriptions, setDescriptions] = useState([]);
  const [units, setUnits] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async _ => requestIngredients(setIngredients))();
    (async _ => requestDescriptions(setDescriptions))();
    (async _ => requestUnits(setUnits))();
    (async _ => requestCategories(setCategories))();
  }, []);

  const handleCategoryChange = (e) => {
    const category = e.target.value === "" ? "" : e.target.value.split("_")[0];
    (async _ => requestIngredients(setIngredients, category))();
  };

  const handleIngredientChange = (e) => {
    (async _ => requestDescriptions(setDescriptions, e.target.value))();
  };

  const categoryDropList = () => {
    return categories.map((obj) => 
        <option key={obj.id} value={`${obj.category}_${obj.id}`}>{obj.category}</option>
    )
  }

  const unitDropList = () => {
    return units.map((obj) => 
        <option key={obj.id} value={obj.id}>{obj.longType}</option>
    )
  }

  const ingredientDropList = () => {
    return ingredients.map((obj) => 
        <option key={`ingredient_drop_${obj.id}`} value={obj.id}>{obj.name}</option>
    )
  }

  const descriptionDropList = () => {
    return descriptions.map((obj) => 
        <option key={`description_drop_${obj.id}`} value={obj.id}>{obj.description}</option>
    )
  }

  return (
    props.ingredientList.map((val, idx) => {
      let quantity = `quantity-${idx}`, unit = `unit-${idx}`, category = `category-${idx}`, ingredient = `ingredient-${idx}`, description = `description-${idx}`
      return (
        <tr key={val.index}>
          <td>
            <input type="number"  name="quantity" data-id={idx} id={quantity} className="form-control col-sm-5" placeholder="Quantity"/>
          </td>
          <td>
          <select name="unit" id={unit} data-id={idx} className="form-control" /*onClick={handleUnitClick}*/>
              <option value="">-Unit-</option>
              {unitDropList()}
            </select>
          </td>
          <td>
          <select 
            name="category" id={category} data-id={idx} className="form-control" /*onClick={handleCategoryClick}*/ onChange={handleCategoryChange}>
              <option value="">-Category-</option>
              {categoryDropList()}
            </select>
          </td>
          <td>
            <select name="ingredient" id={ingredient} data-id={idx} className="form-control" onChange={handleIngredientChange}>
              <option value="">-Ingredient-</option>
              {ingredientDropList()}
            </select>
          </td>
          <td>
          <select name="description" id={description} data-id={idx} className="form-control">
              <option value="">-Description-</option>
              {descriptionDropList()}
            </select>
          </td>
          <td>
            {
             <button className="btn btn-danger" onClick={(() => props.delete(val))} ><i className="fa fa-minus" aria-hidden="true"></i></button>
            }
          </td>
        </tr >
      )
    })
  )
}

export default IngredientList;