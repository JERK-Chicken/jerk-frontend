import {LOAD_CATEGORIES} from '../actions/action-types';

const categoriesLoaderReducer = (state=[], action) => {
    switch(action.type) {
        case LOAD_CATEGORIES:
            return action.categories;
        default:
            return state;
    }
}

export default categoriesLoaderReducer;