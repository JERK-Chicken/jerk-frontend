import React from "react"

const IngredientList = (props) => {
  return (
    props.taskList.map((val, idx) => {
      let quantity = `quantity-${idx}`, unit = `unit-${idx}`, category = `category-${idx}`, ingredient = `ingredient-${idx}`, description = `unit-${idx}`
      return (
        <tr key={val.index}>
          <td>
            <input type="int"  name="quantity" data-id={idx} id={quantity} className="form-control" placeholder="Quantity" />
          </td>
          <td>
          <select name="unit" id={unit} data-id={idx} className="form-control" >
              <option value="">-Unit-</option>
              <option value="teaspoon">Tsp.</option>
              <option value="tablespoon">Tbsp.</option>
              <option value="fluid-ounce">Fl. Oz</option>
              <option value="cup">Cup</option>
              <option value="fluid ounce">Pint</option>
              <option value="fluid ounce">Gallon</option>
              <option value="fluid ounce">Ounce</option>
              <option value="fluid ounce">Gram</option>
              <option value="pound">Pound</option>
            </select>
          </td>
          <td>
          <select name="category" id={category} data-id={idx} className="form-control" >
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
            <select name="ingredient" id={ingredient} data-id={idx} className="form-control" >
              <option value="">-Ingredient-</option>
              <option value="pending">Chicken</option>
              <option value="In Progress">Milk</option>
              <option value="Completed">Beef</option>
              <option value="Hold">Bread</option>
            </select>
          </td>
          <td>
          <select name="description" id={description} data-id={idx} className="form-control" >
              <option value="">-Description-</option>
              <option value="pending">Soup</option>
              <option value="In Progress">Diced</option>
              <option value="Completed">Fried</option>
              <option value="Hold">Shredded</option>
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
export default IngredientList