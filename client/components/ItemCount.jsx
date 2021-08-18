import React from 'react';
import { connect } from 'react-redux';
//we're only importing one action from actions.js
//If multiple actions, below changes to:
//import * as actions from '../actions/actions.js'
import { addItemAction } from '../actions/actions.js';

//this maps properties to props
const mapStateToProps = (state) => {
  return {
    totalItems: state.mainReducer.totalItems,
    productsArray: state.mainReducer.productsArray,
  }
}

//this maps 'methods' to props
//dispatch is an action from Redux
const mapDispatchToProps = (dispatch) => {
  return {
    addItem: () => {
      dispatch(addItemAction())
    },
  }
}

const ItemCount = (props) => {
  console.log("HERE: ", props.productsArray)
  return (
    <span>
      <h5>Items: {props.totalItems}</h5>
      <button onClick={props.addItem}>Add Item</button>
    </span>
  );
};

// export default ItemCount;
//  export default connect(mapStateToProps, null)(ItemCount); 
export default connect(mapStateToProps, mapDispatchToProps)(ItemCount); 

// connect subscribed an individual component (in this case, ItemCount) to the store (single source of truth)
// connect(mapStateToProps, action)(currentComponent)