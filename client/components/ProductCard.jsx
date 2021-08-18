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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 450,
  },
  media: {
    height: 280,
  },
});

const classes = useStyles();

const ProductCard = (props) => {
  // <div className="product-container">
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia 
          className = {classes.media}
          image={props.image} 
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
        <Button size="small" color="primary">
          ADD TO CART
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
