import React from "react"

const IngredientList = (props) => {
  return (
    props.ingredientList.map((val, idx) => {
      let quantity = `quantity-${idx}`, unit = `unit-${idx}`, category = `category-${idx}`, ingredient = `ingredient-${idx}`, description = `description-${idx}`
      return (
        <tr key={val.index}>
          <td>
            <input type="number"  name="quantity" data-id={idx} id={quantity} className="form-control col-sm-5" placeholder="Quantity"/>
          </td>
          <td>
          <select name="unit" id={unit} data-id={idx} className="form-control">
              <option value="">-Unit-</option>
              <option value="teaspoon">Tsp.</option>
              <option value="tablespoon">Tbsp.</option>
              <option value="fluid-ounce">Fl. Oz</option>
              <option value="cup">Cup</option>
              <option value="pint">Pint</option>
              <option value="gallon">Gallon</option>
              <option value="ounce">Ounce</option>
              <option value="gram">Gram</option>
              <option value="pound">Pound</option>
            </select>
          </td>
          <td>
          <select name="category" id={category} data-id={idx} className="form-control">
              <option value="">-Category-</option>
              <option value="drinks">Drinks</option>
              <option value="carbs">Carbs</option>
              <option value="fruits">Fruits/Vegetables</option>
              <option value="dairy">Dairy</option>
              <option value="protein">Meat, Fish or Eggs</option>
              <option value="fats">Fats</option>
              <option value="sugar">High-Sugar Foods</option>
            </select>
          </td>
          <td>
            <select name="ingredient" id={ingredient} data-id={idx} className="form-control">
              <option value="">-Ingredient-</option>
              <option value="Chicken">Chicken</option>
              <option value="Milk">Milk</option>
              <option value="Beef">Beef</option>
              <option value="Bread">Bread</option>
            </select>
          </td>
          <td>
          <select name="description" id={description} data-id={idx} className="form-control">
              <option value="">-Description-</option>
              <option value="Soup">Soup</option>
              <option value="Diced">Diced</option>
              <option value="Fried">Fried</option>
              <option value="Shredded">Shredded</option>
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