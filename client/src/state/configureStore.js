import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import * as reducers from './modules';
import { loadState } from '../localStorage';
import history from '../history';

const persistedState = loadState();
const historyMiddleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  persistedState,
  applyMiddleware(logger, thunkMiddleware, historyMiddleware)
);

export default store;
