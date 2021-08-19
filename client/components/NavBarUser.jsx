import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { connect } from "react-redux";
import { Link, Router, Switch } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    custName: state.mainReducer.custName,
  };
};

//Function Component, only Displayed if User is Logged In
const NavBarUser = (props) => {
  return (
    <div>
      <nav className="nav-container">
        <Link to="/">
          <div className="logo">
            <img src="../../images/logocook.png" id="cooklogo" />
          </div>
        </Link>

        <div className="interactables">
          {/*This WILL be a <Link> once we implement 
          the router in the parent component*/}
          <Link to="/cart">
            <ShoppingCartIcon />
          </Link>
          <span>Welcome: {props.custName}</span>
        </div>
      </nav>
    </div>
  );
};

// export default NavBarUser;
export default connect(mapStateToProps, null)(NavBarUser);
