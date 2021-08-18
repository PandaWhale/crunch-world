const path = require('path')
const db = require(path.resolve(__dirname, '../../database/pool.js'));
const bcrypt = require('bcryptjs');

const signinController = {};

signinController.verifyUser = async (req, res, next) => {
  const query = `SELECT password FROM customers WHERE email = $1`;
  const values = [req.body.email];
  await db.query(query, values)
    .then((queryResponse) => {
      console.log('This is the hashed pass from query: ', queryResponse.rows[0].password)
      const match = bcrypt.compare(req.body.password, queryResponse.rows[0]['password'])
      return match;
    })
    .then((result) => {
      if (!result) {
        res.locals.signinAttempt = {signin: 'failure', message: 'Invalid email or password.'}
        return next()
      } else {
        res.locals.signinAttempt = {signin: 'success', message: 'You have successfully logged in!'}
        return next()
      }
    })
    .catch((err) => {
      return next(err)
    })
}

// const signinController = {

//   async attemptSignin(req, res, next) {
//     // const hash = await bcrypt.hash(req.body.password, SALT)
//     const query = `SELECT password FROM customers WHERE email = $1`;
//     const values = [req.body.email];
 
//     let hashedPass = await db.query(query, values, (err, hash) => {
//       if (err) {
//         res.locals.signinAttempt = {signin: 'failure', message: 'Query Failure!'};
//         return next();
//       }
//       // console.log('hash: ', hash)
//       let result = hash.rows[0]['password']
//       // console.log('this is the result from the db query: ', typeof result)
//       // console.log('this is the password from req.body.password:', typeof req.body.password)
//       // if (queryRes.rows.length === 0) {
//       //   res.locals.signinAttempt = {signin: 'failure', message: 'Signin Credentials Invalid!'};
//       //   return next();
//       // }
//       // console.log(queryRes.rows[0]);
//       res.locals.signinAttempt =  {signin: 'success', cust_id : hash};
//       return result;
//     });
//     // console.log('this is the result from db.query: ', result)
//     // const isValid = await comparePassword(req.body.password, hashedPass)
//   // const isValid = await comparePassword(req.body.password, result)
//   }
// };

module.exports = signinController;