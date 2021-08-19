import * as types from "../constants/actionTypes.js";

//Below are our Action Creators that get exported to where?
//the get sent to our components via mapDispatchToProps - this links component action to reducer

export const addItemAction = () => {
  return {
    type: types.ADD_ITEM,
    payload: 1,
  };
};

export const updateUsernameEntryAction = (entry) => {
  return {
    type: types.UPDATE_USERNAME_ENTRY,
    payload: entry,
  };
};

// (10:19PM, 08/18/21)
export const updatePasswordEntryAction = (entry) => {
  return {
    type: types.UPDATE_PASSWORD_ENTRY,
    payload: entry,
  };
};

// (10:22PM, 08/18/21)
// export const attemptSignInAction = (dispatch) => {
//   fetch("/signin", {
//     method: "POST",
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({email:'jorge@codesmith.io', password: 'password'}),
//   })
//     .then((res) => res.json())
//     .then((signInRes) => {
//       dispatch({
//         type: types.ATTEMPT_SIGN_IN,
//         payload: signInRes,
//       });
//     })
// }

//loadProducts()
//this function takes in an anonymous arrow  function
export const renderProductsAction = () => (dispatch) => {
  //make your fetch request,
  //when it resolves, take the data and send a dispatch
  fetch("/api/products")
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: types.RENDER_PRODUCTS,
        payload: data,
      });
    })
    .catch(console.error);
};

// (10:35PM, 08/18/21)
// export const removeFromCartAction = (dispatch) => {

// }

//////////////////////////////////////////////////////////////////////////////////////////

// export const addItemAction = () => {
//   return {
//     type: types.ADD_ITEM,
//     payload: 1,
//   }
// }
