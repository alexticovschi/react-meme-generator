import { combineReducers } from 'redux';
import { RECEIVE_MEMES } from '../actions';

// reducer to handle the RECEIVE_MEMES action type that returns
// the memes it finds from the action object
function memes(state = [], action) {
    switch(action.type) {
        case RECEIVE_MEMES:
            return action.memes;
        default:
            return state;
    }
}

const rootReducer = combineReducers( { memes });

export default rootReducer;