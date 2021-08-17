//Importing React and Hooks
import React, { useState, useEffect, createContext, useReducer } from "react";
import ProductDisplay from "./display_comps/ProductDisplay.jsx";
import Cart from "./Cart.jsx";
import SignIn from "./SignIn.jsx";
import NavBar from "./NavBar.jsx";
//Import React Router
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
      <AppContext.Provider value={[state, dispatch]}> {/*THIS IS WHERE REDUX STARTS*/}
        <div className="app-container">
          {/* NAVBAR component */}
          <NavBar />
          <Switch>
            <Route exact path="/">
              {/* Route 1: ProductDisplay Component: holds the MaterialCards components */}
              <ProductDisplay /> 
            </Route>
            <Route exact path="/cart">
              {/* Route 2: Cart Component Display: products within cart */}
              <Cart />
            </Route>
            <Route exact path="/signin">
              {/* Route 3: Sign InPage */}
              <SignIn />
            </Route>
             {/* Route 3.1: This is to sign up/Create User...Subroute is in the componenet */}
            <Route exact path="/signup">
              <SignUp />
            </Route>
          </Switch>
        </div>
      </AppContext.Provider> {/* THIS IS WHERE REDUX STARTS*/}
    </Router>//End Router Wrapping- Enables switching of displayed components
  );
};

export default App;
