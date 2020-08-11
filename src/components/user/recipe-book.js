import React, { useState } from 'react';
import GeneralTable from '../general/general-table';
import { withRouter } from 'react-router-dom';
import { requestRecipebook, requestDeleteBookRecipe } from '../../helpers/requests/recipe-requests';
import { connect } from 'react-redux';
import { loadRecipeBook } from '../../redux/actions/recipe-book-actions';

const RecipeBook = (props) => {
	const [ recipes, setRecipes ] = useState([]);
	const [ selectedId, setSelectedId ] = useState('');

	React.useEffect(() => {
		(async () => {
			const loadRecipeBookRecipes = async function() {
				let recipeBook = await requestRecipebook();
				setRecipes(recipeBook);
				props.setRecipeBook(recipeBook);
			};

			await loadRecipeBookRecipes();
		})();
	}, []);

	const handleViewRecipesClick = (e) => {
		if (selectedId) {
			sessionStorage.setItem('selected-recipe', selectedId);
			props.history.push('/recipe-page');
		}
  };
  
  const handleRemoveRecipesClick = (e) => {
    (async _ => requestDeleteBookRecipe(selectedId))();
    setRecipes(recipes.filter(r => r.id !== selectedId));
    setSelectedId("");
  }

  const removeRecipeButton = () => {
		const text = 'Unfavorite';
		return selectedId ? (
			<button type="button" className="btn btn-danger" onClick={handleRemoveRecipesClick}>
				{text}
			</button>
		) : (
			<button type="button" className="btn btn-danger" disabled>
				{text}
			</button>
		);
	};

	const viewRecipeButton = () => {
		const text = 'View Recipe';
		return selectedId ? (
			<button type="button" className="btn btn-primary" onClick={handleViewRecipesClick}>
				{text}
			</button>
		) : (
			<button type="button" className="btn btn-primary" disabled>
				{text}
			</button>
		);
	};

	return (
		<div className="card">
			<div className="card-header">
				<h3>Favorited Recipes</h3>
			</div>
			<div className="card-body">
				<div className="limit">
					<GeneralTable records={recipes} selectedId={selectedId} setSelectedId={setSelectedId} />
				</div>
			</div>
			<div className="card-footer row">
        <div className="col justify-content-start">{removeRecipeButton()}</div>
				<div className="col justify-content-end">{viewRecipeButton()}</div>
			</div>
		</div>
	);
};

function mapDispatchToProps(dispatch) {
	return {
		setRecipeBook: (payload) => dispatch(loadRecipeBook(payload))
	};
}

export default connect(null, mapDispatchToProps)(withRouter(RecipeBook));
