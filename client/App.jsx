import React, { Component } from "react";
import ItemCount from "./components/ItemCount.jsx";
import NavBar from "./components/NavBar.jsx";
import ProductsContainer from "./components/ProductsContainer.jsx";
//REACT ROUTER imports:
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignIn from "./components/SignIn.jsx";
import Cart from "./components/Cart.jsx";

const App = () => {
  return (
    <Router>
      <div>
      <nav className="nav-container">
        <Link to="/">
          <div className="logo">
            <img src="../../images/logocook.png" id="cooklogo" />
          </div>
        </Link>

        <div className="interactables">
          {/* <SignIn> */}
          <Link to="/signin">Sign In</Link>
        </div>
      </nav>
      <Switch>
        <Route path="/signin">
          <SignIn/>
        </Route>
        <Route path="/">
          <ProductsContainer/>
        </Route>
      </Switch>
      </div>
    </Router>
  );
};



export default App;



// Step1. Surround component in <Router></Router>
//What component should someone see when they visit the page at the root route = '/'

/*
<Router>
  <div id="app"> <- APP DIV
  //START OF NAVBAR============
      <nav className="nav-container">
      <Link to="/">
        <div className="logo">
          <img src="../../images/logocook.png" id="cooklogo" />
        </div>
      </Link>
      <div className="interactables">
        <ItemCount />
        <Link to="/cart">
          <ShoppingCartIcon />
        </Link>
        <Link to="/signin">Sign in</Link>
      </div>
    </nav>
  //END OF NAVBAR==============
    <Switch>
    CONDITION 1- PRODUCT DISPLAY
    CONDITION 2- CART
    CONDITION 3- SIGN IN
    </Switch>
  </div> <- APP DIV
</Router>
*/



// if (userloggedIn) {
//   return (
//     <Router>
//       <div id="app">
//         <NavBar />
//       </div>
//       {/* UNDO POINT */}
//       {/* <Route path="/" component={ProductsContainer} /> */}
//       <Route path="/" component={SignIn} />
//       {/* <Route path="/cart" component={Cart} /> */}

//       {/* <Route path="/browse" component={ProductsContainer} /> */}
//     </Router>
//   ); //end of retun
// } else {
//   return (
//     <Router>
//       <NavBar />
//       <SignIn />
//     </Router>
//   );
// }
