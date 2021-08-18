const express = require('express');
const path = require('path');

//middleware for login requests
const signinController = require(path.resolve(__dirname, '../controllers/signinController'));

const signinRouter = express.Router();

signinRouter.post('/', signinController.verifyUser, (req, res) => {
  return res.status(200).set('Content-Type', 'json/application').json(res.locals.signinAttempt)
});


module.exports = signinRouter;