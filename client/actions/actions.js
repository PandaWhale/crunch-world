import * as types from '../constants/actionTypes.js';

//Below are our Action Creators that get exported to where? 
//the get sent to our components via mapDispatchToProps - this links component action to reducer


export const addItemAction = () => {
  return {
    type: types.ADD_ITEM,
    payload: 1,
  }
}

// export const loadProducts=()=>{
//   return {
//     type: types.RENDER_PRODUCTS,
//     payload: fetch,
//   }
// }


//loadProducts()
//this function takes in an anonymous arrow  function
export const renderProductsAction = () => (dispatch) => {
    //make your fetch request,
    //when it resolves, take the data and send a dispatch
    fetch('/api/products')
    .then(res => res.json())
    .then(data => {
      console.log("From Fetch Request: ")
      dispatch({
        type: types.RENDER_PRODUCTS,
        payload: data,
      });
    })
    .catch(console.error);
} 