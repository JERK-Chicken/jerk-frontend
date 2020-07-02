import {LOAD_USERNAME} from '../actions/action-types';

const usernameLoaderReducer = (state="", action) => {
    switch(action.type) {
        case LOAD_USERNAME:
            return action.username;
        default:
            return state;
    }
}

export default usernameLoaderReducer;