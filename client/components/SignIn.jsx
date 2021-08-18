// Importing React Hooks
import React, {useState, useEffect, useReducer, useContext} from 'react';
//Custom Hook
import useForm from '../hooks/useForm.jsx'

//Importing React Router
import {Link} from 'react-router-dom';

// Importing Material UI
import {Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, 
Grid, Box, Typography, Container} from '@material-ui/core/'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';

// Importing from component
import { AppContext } from "./App.jsx";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link to="/">
        crunchWORLD
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
// function poster(data){
//     fetch('/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'Application/JSON'
//         },
//         body: JSON.stringify(data)
//       })
//         .then(resp => resp.json())
//         .then((data) => {
//           console.log(data);
//         })
        
//         .catch(err => console.log('Login error:', err));
//     };

function poster(data) {
    fetch(`/login?email=${data.email}&password=${data.password}`)
    .then(data => data.json())
    .then(res => console.log(res))
    .catch(err => console.log('Login error:', err));
}


export default function Login() {
    const [values, handleChange] = useForm({email: '', password: ''});
    // useEffect(()=>{
    //     console.log(values)
    // }, [values]);
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={values.email} 
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={values.password} 
                onChange={handleChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={poster(values)}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
             
            </Grid>
            
            <Grid item>
              <Link to="/signup" variant="body1">
                "Don't have an account? Sign Up"
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

