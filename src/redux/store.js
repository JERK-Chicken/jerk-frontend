import { createStore } from 'redux';
import { combineReducers } from 'redux';

import userRolesLoaderReducer from './reducers/user-roles-loader';
import usernameUpdaterReducer from './reducers/username-loader';
import categoriesLoaderReducer from './reducers/categories-loader';
import loggerReducer from './reducers/logger';
import unitsLoaderReducer from './reducers/units-loader';
import currentRecipeSetterReducer from './reducers/current-recipe-setter';
import recipeBookLoaderReducer from './reducers/recipe-book-loader';

const allReducers = combineReducers({
	userRoles: userRolesLoaderReducer,
	username: usernameUpdaterReducer,
	isLoggedIn: loggerReducer,
	categories: categoriesLoaderReducer,
	units: unitsLoaderReducer,
	currentRecipe: currentRecipeSetterReducer,
	recipeBook: recipeBookLoaderReducer
});

export const store = createStore(
	allReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
