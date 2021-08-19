const express = require('express');
const path = require('path');

//middleware for login requests
const signupController = require(path.resolve(__dirname, '../controllers/signupController'));
const cookieController = require(path.resolve(__dirname, '../controllers/cookieController'));
const signupRouter = express.Router();

// signupRouter.get('/', signupController.attemptSignup, (req, res) => {
//   return res.status(200).set('Content-Type', 'json/application').json(res.locals.signupAttempt);
// });

signupRouter.post('/', signupController.createUser, cookieController.setSSIDCookie, (req, res) => {
  return res.status(200).set('Content-Type', 'application/json').json(res.locals.signinAttempt);
})

signupRouter.get('/', )

module.exports = signupRouter;