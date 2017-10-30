import { createStore, applyMiddleware } from 'redux';
import combinedReducers from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

const middlewares = [thunk, logger, promise];

const store = createStore(combinedReducers, applyMiddleware(...middlewares));

export default store;
