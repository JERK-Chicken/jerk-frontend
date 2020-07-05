import * as types from './action-types';

export const logIn = (token) => {
    return {
        type: types.LOG_IN,
        token
    };
}

export const logOut = () => {
    return {
        type: types.LOG_OUT,
    };
}