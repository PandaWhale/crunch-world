import * as types from '../constants/actionTypes.js';

//Below are our Action Creators that get exported to where? 
//the get sent to our components via mapDispatchToProps - this links component action to reducer


export const addItemAction = () => {
  return {
    type: types.ADD_ITEM,
    payload: 1,
  }
}

//loadProducts()