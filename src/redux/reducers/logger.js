import {LOG_IN, LOG_OUT} from '../actions/action-types';
import isLoggedIn from '../../helpers/logged-in-check'

const loggerReducer = (state=isLoggedIn(), action) => {
    switch(action.type) {
        case LOG_IN:
            return true;
        case LOG_OUT:
            return false;
        default:
            return state;
    }
}

export default loggerReducer;