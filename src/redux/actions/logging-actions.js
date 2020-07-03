import * as types from './action-types';

export const logIn = () => {
    return {
        type: types.LOG_IN,
    };
}

export const logOut = () => {
    return {
        type: types.LOG_OUT,
    };
}