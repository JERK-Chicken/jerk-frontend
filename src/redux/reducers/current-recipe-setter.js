import {SET_CURRENT_RECIPE} from '../actions/action-types';

const currentRecipeSetterReducer = (state=-1, action) => {
    switch(action.type) {
        case SET_CURRENT_RECIPE:
            return action.recipe;
        default:
            return state;
    }
}

export default currentRecipeSetterReducer;