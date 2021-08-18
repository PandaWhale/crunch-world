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

const ProductCard = (props) => {
  // <div className="product-container">
  return (
    <Card className="grid-item">
      <CardActionArea>
        <CardMedia image={props.image} />
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
        <Button size="small" color="primary">
          ADD TO CART
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
