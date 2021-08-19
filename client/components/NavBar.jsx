import React from "react";
// import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ItemCount from "./ItemCount.jsx";

import { Link, Router, Switch } from "react-router-dom";
import ProductsContainer from "./ProductsContainer.jsx";

// Functional Component NAVBAR that asks User to SignIn
const NavBar = () => {
  return (
    <div>
      <nav className="nav-container">
        <div className="logo">
          <img src="../../images/logocook.png" id="cooklogo" />
        </div>

        <div className="interactables">
          {/*This WILL be a <Link> once we implement 
        the router in the parent component*/}
          <Link to="/signin">Sign In</Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
