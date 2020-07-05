import {LOG_IN, LOG_OUT} from '../actions/action-types';
import isLoggedIn from '../../helpers/logged-in-check'

const loggerReducer = (state=isLoggedIn(), action) => {
    switch(action.type) {
        case LOG_IN:
            sessionStorage.setItem("json-token", action.token);
            return true;
        case LOG_OUT:
            sessionStorage.removeItem("json-token");
            return false;
        default:
            return state;
    }
}

export default loggerReducer;