import React from "react";
import { connect } from "react-redux";
import CartCard from "./CartCard.jsx";

const mapStateToProps = (state) => {
  return {
    custId: state.mainReducer.custId,
    // usernameEntry: state.mainReducer.usernameEntry,
    cartArray: state.mainReducer.cartArray,
    totalItems: state.mainReducer.totalItems
  };
};


const Cart = (props) => {
  let arrayToRender = [];
  console.log("Props.cartArray from within Cart.jsx: ", props.cartArray)
  if (props.cartArray.length > 0) {
    console.log("From within the forEach in Cart.jsx: ", props.cartArray)
    props.cartArray.forEach((cartItem, i) => {
      console.log(cartItem);
      arrayToRender.push(
        <CartCard
          id = {`CartCard${i}`}
          name= {cartItem.name}
          price = {cartItem.price}
          origin = {cartItem.origin}
        />
      );
    })
  }
  // return <div className="display-container"><div>Your cart is Empty! Please Enjoy Shopping!</div></div>;
 return(
<div>
  <h1>Total Items: {props.totalItems}</h1>
    <div className="display-container">
      {arrayToRender}
    </div>
</div>
 )
  // return <div>Your cart is Empty! Please Enjoy Shopping!</div>;
};

// export default Cart;
export default connect(mapStateToProps, null)(Cart);