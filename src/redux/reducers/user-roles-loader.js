import {LOAD_USER_ROLES} from '../actions/action-types';

const userRolesLoaderReducer = (state=[], action) => {
    switch(action.type) {
        case LOAD_USER_ROLES:
            return action.roles;
        default:
            return state;
    }
}

export default userRolesLoaderReducer;