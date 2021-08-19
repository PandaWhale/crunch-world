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

import { connect } from "react-redux"; //importing connect to attempt and create an action for ATTEMPT_SIGN_IN(9:23PM, 08/18/21)
//will also need for UPDATE_USERNAME_ENTRY and UPDATE_PASSWORD_ENTRY | (9:42PM, 08/18/21)
import {
  updateUsernameEntryAction,
  updatePasswordEntryAction,
} from "../actions/actions";

// How does mapStateToProps work again?! (9:51PM, 08/18/21)
const mapStateToProps = (state) => {
  return {
    isSignedIn: state.mainReducer.isSignedIn,
    custId: state.mainReducer.custId,
  };
};

//creating mapDispatchToProps | (9:58PM, 08/18/21)
const mapDispatchToProps = (dispatch) => ({
  updateUsernameEntry: (entry) => {
    console.log(entry); //should console.log for every key pressed on username input | (10:13 PM, 08/18/21)
    dispatch(updateUsernameEntryAction(entry));
  },
  updatePasswordEntry: (entry) => {
    console.log(entry);
    dispatch(updatePasswordEntryAction(entry));
  },
  attemptSignIn: () => {
    console.log("Making POST request for Sign In!");
    dispatch(attemptSignInAction());
  },
});

// Functional Component NAVBAR that holds shopping cart
const SignIn = (props) => {
  //checking is
  if (!props.isSignedIn) {
    //Default UI to prompt user to SignIn
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
                        label="Email"
                        name="email"
                        size="small"
                        variant="outlined"
                        onChange={(ele) => {
                          props.updateUsernameEntry(ele.target.value);
                        }}
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
                        onChange={(ele) => {
                          props.updatePasswordEntry(ele.target.value);
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    color="primary"
                    fullWidth
                    variant="contained"
                    onClick={() => {
                      console.log("clicked signin button!");
                    }}
                  >
                    Sign In
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
    ); //End Default Render
  } else {
    return <h1>Welcome User: </h1>;
  }

  //Welcome User: Pull username from state;
};

// export default SignIn;
export default connect(mapStateToProps, mapDispatchToProps)(SignIn); //will need soon... (9:41PM, 08/18/21)
//added mapDispatchToProps | (10:03PM, 08/18/21)

/*    
<div>
  <input type="text" placeholder="Email" />
  <input type="text" placeholder="Password" />
  <button>Sign In</button>
</div> 
*/
