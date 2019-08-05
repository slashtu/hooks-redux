import {
  createStore as createReduxStore,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import { fromJS } from 'immutable';

import reducers from './modules/reducer.js';

export const createStore = (initialState = {}) => {
  const middleware = [thunk];

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createReduxStore(
    reducers,
    fromJS(initialState),
    composeEnhancers(applyMiddleware(...middleware))
  );
};
