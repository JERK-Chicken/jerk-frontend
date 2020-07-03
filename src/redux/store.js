import {createStore} from 'redux';
import {combineReducers} from 'redux';

import userRolesLoaderReducer from './reducers/user-roles-loader';
import usernameUpdaterReducer from './reducers/username-loader';
import loggerReducer from './reducers/logger';

const allReducers = combineReducers({
    userRoles : userRolesLoaderReducer,
    username : usernameUpdaterReducer,
    isLoggedIn : loggerReducer,
})

export const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );