const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) => {
  if (res.locals.signinAttempt.cust_id) {
    res.cookie("ssid", res.locals.signinAttempt.cust_id, {
      httpOnly: true,
      expires: new Date(Date.now() + 900000),
    })
  }
  return next();
}

module.exports = cookieController;