//this will provide each product a card component to populate with information
import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { connect } from "react-redux";
import { addToCartAction } from "../actions/actions";


const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => {
      dispatch(addToCartAction(item));
    }
  }
}

const ProductCard = (props) => {
  // <div className="product-container">
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          style={{ height: 0, paddingTop: "56%" }}
          ////////////
          image={props.image}
          title="TEST GDI"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`\$${props.price}`} <br></br>
            {props.origin}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button 
          size="small" 
          color="primary" 
          onClick={()=>{
            console.log(props.name, "|||", props.price, "|||", props.origin);
            props.addToCart({name: props.name, price: props.price, origin: props.origin})
          }}
        >
          ADD TO CART
        </Button>
      </CardActions>
    </Card>
  );
};

// export default ProductCard;
export default connect(null, mapDispatchToProps)(ProductCard);
