import * as types from './action-types';

export const loadUserRoles = (roles) => {
    return {
        type: types.LOAD_USER_ROLE,
        roles
    };
}

export const loadUsername = (username) => {
    return {
        type: types.LOAD_USERNAME,
        username
    };
}