import React from "react";
// import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ItemCount from "./ItemCount.jsx";

import { Link, Router, Switch } from "react-router-dom";

// Functional Component NAVBAR that holds shopping cart
const NavBar = () => {
  return (
    <Router>
      <div>
    <nav className="nav-container">
      <div className="logo">
        <img src="../../images/logocook.png" id="cooklogo" />
      </div>

      <div className="interactables">

        {/* <SignIn> */}
        <a>Sign In</a> {/*This WILL be a <Link> once we implement 
        the router in the parent component*/}
      </div>
    </nav>
    
        <Switch>

        </Switch>
    </div>
    </Router>
  );
};

export default NavBar;
