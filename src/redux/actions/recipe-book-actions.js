import * as types from './action-types';

export const loadRecipeBook = (recipes) => {
	return {
		type: types.LOAD_RECIPE_BOOK,
		recipes
	};
};
