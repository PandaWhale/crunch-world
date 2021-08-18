// //Importing React and Hooks Object
// import React, {useState, useEffect, useReducer, useContext} from 'react';
// // Importing custom Hook
// import useForm from '../hooks/useForm.jsx'

// //Importing Material UI components
// import {Avatar, Button, CssBaseline, TextField, FormControlLabel,
// Checkbox, Grid, Box, Typography, makeStyles, Container} from '@material-ui/core'
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

// //Importing React Router
// import {Link} from 'react-router-dom';




// import { AppContext } from "./App.jsx";


// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link to="/">
//         crunchWORLD
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));
// function poster(data){
//     fetch('/signup', {
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
        
//         .catch(err => console.log('Signin error:', err));
//     };
// export default function SignUp() {
//     const [values, handleChange] = useForm({email: '', password: '', firstName: '', lastName: ''});
//     const classes = useStyles();

//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//         <Avatar className={classes.avatar}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Sign up
//         </Typography>
//         <form className={classes.form} noValidate>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 autoComplete="fname"
//                 name="firstName"
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="firstName"
//                 label="First Name"
//                 autoFocus
//                 value={values.firstName} 
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="lastName"
//                 label="Last Name"
//                 name="lastName"
//                 autoComplete="lname"
//                 value={values.lastName} 
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email"
//                 name="email"
//                 autoComplete="email"
//                 value={values.email} 
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//                 value={values.password} 
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <FormControlLabel
//                 control={<Checkbox value="allowExtraEmails" color="primary" />}
//                 label="I want to receive inspiration, marketing promotions and updates via email."
//               />
//             </Grid>
//           </Grid>
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//             onClick={poster(values)}
//           >
//             Sign Up
//           </Button>
//           <Grid container justifyContent="flex-end">
//             <Grid item>
//               <Link to="/signin" variant="body1">Already have an account? Sign in</Link>
//             </Grid>
//           </Grid>
//         </form>
//       </div>
//       <Box mt={5}>
//         <Copyright />
//       </Box>
//     </Container>
//   );}