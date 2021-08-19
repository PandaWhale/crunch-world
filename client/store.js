import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import reducers from "./reducers/index.js";
import { renderProductsAction } from "./actions/actions";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

//consider this as component didmount?
store.dispatch(renderProductsAction());

export default store;
//should be in the index.js below App.jsx
