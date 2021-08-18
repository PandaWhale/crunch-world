import { createStore, applyMiddleware } from 'redux';
// import thunk from 'thunk';

import reducers from './reducers/index.js';
// import { loadMarkets } from './actions/actions';

const store = createStore(
  reducers,
  // applyMiddleware(thunk)
);

//consider this as component didmount?
store.dispatch(renderProductsAction());

export default store;
//should be in the index.js below App.jsx