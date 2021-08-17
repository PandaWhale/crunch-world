import React, { useState, useEffect, createContext, useReducer } from "react";
import ProductDisplay from "./display_comps/ProductDisplay.jsx";
import Cart from "./Cart.jsx";
import Login from "./Login.jsx";
import Nav from "./NavBar.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./SignUp.jsx";

const appReducer = (state, action) => {
  switch (action.type) {
    case "CHECKOUT_CART":
      return [];
    case "ADD_CART":
      return [action.payload, ...state];
    default:
      return state;
  }
};
export const AppContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(appReducer, []);

  return (
    <Router>{/* Enables react-dom-router to switch components*/}
      <AppContext.Provider value={[state, dispatch]}>
        <div className="app-container">
          <Nav />
          <Switch>
            <Route exact path="/">
              {/* Product/Display [;ayComponents/Display: holds the MaterialCards components */}
              <ProductDisplay /> 
            </Route>
            <Route exact path="/cart">
              {/* Display: holds */}
              <Cart />
            </Route>
            <Route exact path="/signin">
              <Login />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
          </Switch>
        </div>
      </AppContext.Provider>
    </Router>//End Router Wrapping- Enables switching of displayed components
  );
};

export default App;
