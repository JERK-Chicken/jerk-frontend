import React from 'react';
import NewIngredientRow from './ingredients/new-ingredient-row';

const IngredientsInput = (props) => {
	return (
		<table className="table">
			<thead>
				<tr className="required">
					<th>Ingredients</th>
				</tr>
			</thead>
			<tbody>
				{props.ingredientList.map((value, index) => {
					return <NewIngredientRow key={index} val={value} idx={index} delete={props.deleteIngredientRow} />;
				})}
			</tbody>
			<tfoot>
				<tr>
					<td colSpan="4">
						<button
							onClick={props.addNewIngredientRow}
							type="button"
							className="btn btn-success text-center"
						>
							<i className="fa fa-plus-circle" aria-hidden="true" />+
						</button>
					</td>
				</tr>
			</tfoot>
		</table>
	);
};

export default IngredientsInput;
