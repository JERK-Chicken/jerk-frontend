import * as types from './action-types';

export const loadUserRoles = (roles) => {
    return {
        type: types.LOAD_USER_ROLES,
        roles
    };
}

export const loadUsername = (username) => {
    return {
        type: types.LOAD_USERNAME,
        username
    };
}

export const loadCategories = (categories) => {
    return {
        type: types.LOAD_CATEGORIES,
        categories
    };
}

export const loadUnits = (units) => {
    return {
        type: types.LOAD_UNITS,
        units
    };
}