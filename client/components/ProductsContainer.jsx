//This will be the component that contains all the product cards
import React from "react";
import ProductCard from "./ProductCard.jsx";
import { connect } from "react-redux";
/*
  for () {
    array.push(<ProductCard
      imageFileName = xyz.png,
      productName = pocky
      />)
  }
*/
//mapstate to props here, then
const mapStateToProps = (state) => {
  return {
    // totalItems: state.mainReducer.totalItems,
    productsArray: state.mainReducer.productsArray,
    gotLatestProducts: state.mainReducer.gotLatestProducts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return;
};

const ProductsContainer = (props) => {
  let arrayToRender = []; //array of ProductCards (components)
  if (props.gotLatestProducts) {
    props.productsArray.forEach((product, i) => {
      arrayToRender.push(
        <ProductCard
          className="grid-item"
          name={product.name}
          price={product.price}
          origin={product.origin}
          id={`ProductCard${i}`}
          image={"../../images/" + product.img_url}
          //image = {'../../images' + product.img_url}  {`../../images/${product.img_url}`}
        />
      );
    });
  }
  return <div className="display-container">{arrayToRender}</div>;
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
