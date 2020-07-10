import * as types from './action-types';

export const setCurrentRecipe = (recipe) => {
    return {
        type: types.SET_CURRENT_RECIPE,
        recipe
    };
}