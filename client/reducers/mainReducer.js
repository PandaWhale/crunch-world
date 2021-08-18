import * as types from '../constants/actionTypes.js';

const initialState = {
  productsArray: [],
  cartArray:[]
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.RENDER_PRODUCTS:
      return{
        ...state,
        productsArray: action.payload
      }
    
    case types.ADD_TO_CART:
      return {
        // ...state,
        // cartArray: action.payload
      }

    default:
      return state;
  }
};

export default mainReducer;