import * as types from "../constants/actionTypes.js";

const initialState = {
  productsArray: [],
  gotLatestProducts: false,
  usernameEntry: "", //username and password should update with each keystroke within the entry! (9:32PM, 08/18/21)
  passwordEntry: "",
  isSignedIn: true,
  custId: null, //should be populated on sign-in! (9:18PM, 08/18/21)
  cartArray: [],
  totalItems: 0,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.RENDER_PRODUCTS:
      return {
        ...state,
        gotLatestProducts: true,
        productsArray: action.payload, // GET request to server
      };

    case types.ADD_TO_CART:
      return {
        // ...state,
        // cartArray: action.payload
      };

    case types.UPDATE_USERNAME_ENTRY:
      return {
        ...state,
        usernameEntry: action.payload, //update on keystroke in text input from SignIn.jsx | (9:41PM, 08/18/21)
      };

    case types.UPDATE_PASSWORD_ENTRY:
      return {
        ...state,
        passwordEntry: action.payload, //update on keystroke in text input from SignIn.jsx | (9:41PM, 08/18/21)
      };

    case types.ATTEMPT_SIGN_IN:
      return {
        ...state,
        custId: action.payload, //POST request to server | (9:28PM, 08/18/21)
      };

    case types.REMOVE_FROM_CART:
      return {
        ...state,
        cartArray: action.payload, //will be a matching cartArray save for one product removed
      };

    case types.ADD_ITEM:
      return {
        ...state,
        totalItems: state.totalItems + action.payload, //should be hardcoded to 1
      };

    default:
      return state;
  }
};

export default mainReducer;
