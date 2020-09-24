import {
    SET_PROP,
} from './actionTypes';

import initialState from './initialState';

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_PROP: 
            return { ...state, prop: action.data }; 
        default:
            return state;
    }
}
