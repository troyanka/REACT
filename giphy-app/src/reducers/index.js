import { combineReducers } from 'redux';
import gihpyReducer from './gihpyReducer';

export default combineReducers({
    gihpyState: gihpyReducer,
})

