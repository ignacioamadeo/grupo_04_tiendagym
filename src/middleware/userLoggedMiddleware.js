const { User } = require("../models");

async function userLoggedMiddleware(req, res, next) {
  try {
    res.locals.isLogged = false;
    let emailInCookie = req.cookies.recordame;
    // let userFromCookie = await User.findByField(emailInCookie);

    // if (userFromCookie) {
    //   req.session.userLogged = userFromCookie;
    // }

    if (req.session.userLogged) {
      res.locals.isLogged = true;
      res.locals.userLogged = req.session.userLogged;
    }

    next();
  } catch (error) {
    console.log(error);
  }
}

module.exports = userLoggedMiddleware;
