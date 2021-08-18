import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers/index.js';
// import { loadMarkets } from './actions/actions';

const store = createStore(
  reducers
);

// store.dispatch(loadProducts());

export default store;