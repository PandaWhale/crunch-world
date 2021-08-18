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
  return (
    <div>
      <h2>Item Count: {props.totalItems}</h2>
      <button onClick={props.addItem}>Add Item</button>
    </div>
  );
};

// export default ItemCount;
// export default connect(mapStateToProps, null)(ItemCount); 
export default connect(mapStateToProps, mapDispatchToProps)(ItemCount); 

// connect subscribed an individual component (in this case, ItemCount) to the store (single source of truth)
// connect(mapStateToProps, action)(currentComponent)