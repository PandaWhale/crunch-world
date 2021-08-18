import React from "react";
// import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ItemCount from "./ItemCount.jsx";

import { Link } from "react-router-dom";

// Functional Component NAVBAR that holds shopping cart
const NavBar = () => {
  return (
    <nav className="nav-container">
      <div className="logo">
        <img src="../../images/logocook.png" id="cooklogo" />
      </div>
      <div className="interactables">
        <ItemCount />
        <ShoppingCartIcon />
        <Link to="/signin">Sign in</Link>
      </div>
    </nav>

  );
};

export default NavBar;
