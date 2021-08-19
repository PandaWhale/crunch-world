import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";

const CartCard = (props) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          Product Name: {props.name}
        </Typography>
        <Typography variant="body2" component="p">
          Price: {props.price}
          <br />
          Country of Origin: {props.origin}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button
          onClick={null} //remove cart functionality goes here! | (10:35PM, 08/18/21)
        >
          REMOVE FROM CART
        </Button> */}
      </CardActions>
    </Card>
  );
};

export default CartCard;
