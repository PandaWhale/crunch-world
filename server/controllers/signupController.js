const path = require('path')
const db = require(path.resolve(__dirname, '../../database/pool.js'));
const bcrypt = require('bcryptjs');
const SALT = 10;

const signupController = {
  async createUser(req, res, next) {
    // hashes inputted password
    const hash = await bcrypt.hash(req.body.password, SALT)
    // Query to check if customer already exists
    const existingAcctQuery = `SELECT * FROM customers WHERE email = $1`;
    const values = [req.body.email]
    // Query to insert new customer in database
    const insertQuery = `INSERT INTO customers (firstname, lastname, email, password, salt)
                         VALUES ($1, $2, $3, $4, $5) RETURNING id, firstname`;
    const insertValues = [req.body.firstName, req.body.lastName, req.body.email, hash, SALT];

    await db.query(existingAcctQuery, values, (err, queryResponse) => {
      // console.log('response from query: ', queryResponse)
      if (err) {
        res.locals.signinAttempt = {signup: 'failure', message: 'existingAcctQuery Failure!'};
        return next();
      } 
      else if (queryResponse.rows[0]){
        res.locals.signinAttempt = {signup: 'failure', message: 'Customer already exists!'}
        return next();
      } 
      else {
        db.query(insertQuery, insertValues, (err, queryResponse) => {
          if (err) {
            res.locals.signinAttempt = {signup: 'failure', message: 'insertQuery Failure!'};
            return next();
          }
          const id = queryResponse.rows[0]['id'];
          const name = queryResponse.rows[0]['firstname'];
          res.locals.signinAttempt =  {signin: 'success', cust_id: id, cust_name: name};
          return next();
        })
      }
    });
  }
};

module.exports = signupController;