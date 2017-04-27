const utils = require('../utils/utils.js');
const usersdb = require('../../database/user.js');

const respondWithUser = (res, user) => {
  res.cookie('remember', user.id, {
    expires: new Date(Date.now() + 900000000000),
    signed: true
  });
  res.json(user);
};

module.exports = {
  checkAuthThenInsert: (req, res) => {
    const { firstName, lastName, accessToken } = req.body;
    utils.checkAuth(accessToken)
      .then(email => {
        if (email && utils.validEmail(email)) {
          usersdb.selectUser(email, (err, user) => {
            if (err) throw err;
            if (user) {
              respondWithUser(res, user);
            } else {
              usersdb.insertUser(email, firstName, lastName, (err, user) => {
                if (err) throw err;
                respondWithUser(res, user);
              });
            }
          });
        } else {
          res.status(401).json({
            'error': 'unauthorized'
          });
        }
      });
  }
};
