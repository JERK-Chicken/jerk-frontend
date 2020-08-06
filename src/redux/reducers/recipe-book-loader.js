import { LOAD_RECIPE_BOOK } from '../actions/action-types';

const recipeBookLoaderReducer = (state = [], action) => {
	switch (action.type) {
		case LOAD_RECIPE_BOOK:
			return action.recipes;
		default:
			return state;
	}
};

export default recipeBookLoaderReducer;
