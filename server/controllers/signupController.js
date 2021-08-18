const path = require('path')
const db = require(path.resolve(__dirname, '../../database/pool.js'));
const bcrypt = require('bcryptjs');
const SALT = 10;

const signupController = {
  async createUser(req, res, next) {
    const hash = await bcrypt.hash(req.body.password, SALT)
    const query = `INSERT INTO customers (firstname, lastname, email, password, salt)
    VALUES ($1, $2, $3, $4, $5)`;
    const values = [req.body.firstName, req.body.lastName, req.body.email, hash, SALT];
    await db.query(query, values, (err, queryRes) => {
      if (err) {
        res.locals.signinAttempt = {signup: 'failure', message: 'Query Failure!'};
        return next();
      }
      res.locals.signinAttempt =  {signin: 'success', message: 'Successfully signed up!'};
      return next();
    });
  }
};

module.exports = signupController;