import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'
import rootReducer from '../rootReducer'
import {composeWithDevTools} from 'redux-devtools-extension';
import toDoListReducer from './reducers/toDoListReducer';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))

export default store;