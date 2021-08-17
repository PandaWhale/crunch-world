import React, {useState, useEffect, useReducer, useContext} from 'react';
import { AppContext } from "./App.jsx";
import {Link} from 'react-router-dom';
const Nav = () =>{

    return (
<nav className="nav-container">
   <div className="logo">
<Link to="/">logo</Link>

   </div>
   <div className="interactables">
      <Link to="/cart">Cart</Link>
   <br></br>  <Link to="/signin">Login</Link>
      
   </div>
    
</nav>
    )
} 


export default Nav;