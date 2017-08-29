import {combineReducers} from 'redux';

function updateId(state = {id: 0}, action) {
    switch (action.type) {
        case 'INCREMENT_ID': return Object.assign({}, state, {id: state.id + 1});
        case 'SET_ID': return Object.assign({}, state, {id: action.id});
    }
    return state;
}
const allReducers =  combineReducers({
   updateId
});

export default allReducers;

