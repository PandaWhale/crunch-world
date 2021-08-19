import React from "react";
// import { Link } from "react-router-dom";
import {
  Button,
  TextField,
  Grid,
  Container,
  Paper,
  AppBar,
  Typography,
  Toolbar,
  Link,
} from "@material-ui/core";
import { StylesProvider, ThemeProvider } from "@material-ui/core/styles";

// Functional Component NAVBAR that holds shopping cart
const SignIn = () => {
  return (
    <StylesProvider injectFirst>
      <div id="login">
        <Container maxWidth="xs">
          <form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      id="lUser"
                      fullWidth
                      label="Username"
                      name="username"
                      size="small"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="lPass"
                      fullWidth
                      label="Password"
                      name="password"
                      size="small"
                      type="password"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Button color="primary" fullWidth variant="contained">
                  Log in
                </Button>
                <Button
                  color="default"
                  className="createUser"
                  fullWidth
                  variant="contained"
                >
                  Create User
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </div>
    </StylesProvider>
  );
};

export default SignIn;

/*    
<div>
  <input type="text" placeholder="Email" />
  <input type="text" placeholder="Password" />
  <button>Sign In</button>
</div> 
*/
