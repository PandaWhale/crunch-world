import * as types from '../constants/actionTypes.js';

const initialState = {
  productsArray: [],
  cartArray: [],
  totalItems: 0,
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.RENDER_PRODUCTS:
      return {
        ...state,
        productsArray: action.payload // GET request to server
      }
    
    case types.ADD_TO_CART:
      return {
        // ...state,
        // cartArray: action.payload
      }

      case types.ADD_ITEM:
        return {
          ...state,
          totalItems: state.totalItems + action.payload, //should be hardcoded to 1
        }

    default:
      return state;
  }
};

export default mainReducer;