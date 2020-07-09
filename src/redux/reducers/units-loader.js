import {LOAD_UNITS} from '../actions/action-types';

const unitsLoaderReducer = (state=[], action) => {
    switch(action.type) {
        case LOAD_UNITS:
            return action.units;
        default:
            return state;
    }
}

export default unitsLoaderReducer;