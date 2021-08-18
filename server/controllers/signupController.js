const path = require('path')
const db = require(path.resolve(__dirname, '../../database/pool.js'));

const signupController = {
  async attemptSignup(req, res, next) {
  //   const query = `SELECT id FROM customers
  //   WHERE email = $1 AND password = $2`;

  //   const values = [req.query.email, req.query.password];

  //   await db.query(query, values, (err, queryRes) => {
  //     if (err) {
  //       // we don't want a login failure to break our app--respond explaining that the query failed
  //       res.locals.signinAttempt = {signin: 'failure', message: 'Query Failure!'};
  //       return next();
  //     }

  //     if (queryRes.rows.length === 0) {
  //       res.locals.signinAttempt = {signin: 'failure', message: 'Signin Credentials Invalid!'};
  //       return next();
  //     }

  //     // console.log(queryRes.rows[0]);

  //     res.locals.signinAttempt =  {signin: 'success', cust_id : queryRes.rows[0].id};
  //     return next();
  //   });
  }
};

module.exports = signupController;