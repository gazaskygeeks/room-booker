const { USER_COOKIE } = require('../../config.js');
const usersdb = require('../database/user.js');

module.exports = (req, res, next) => {
  const userId = req.signedCookies[USER_COOKIE];
  if(userId){
    usersdb.selectUserById(userId, (err, user) => {
      if (err) {
        res.status(500).end();
      }
      else {
        req.user = user;
        next();
      }
    });
  }
  else {
    res.status(401).end();
  }
};
