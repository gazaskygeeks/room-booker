const utils = require('../utils/utils.js');
const usersdb = require('../../database/user.js');
module.exports = {
  checkAuthThenInsert: function(req, res) {
    utils.checkAuth(req.body.accessToken)
      .then(email => {
        if (email) {
          const validEmail = utils.validEmail(email);
          if (validEmail) {
            usersdb.selectUser(validEmail, (err, result) => {
              if (err) throw err;
              if (result.rowCount === 0) {
                usersdb.insertUser(req.body, () => {
                  usersdb.selectUser(req.body.email, (err, result) => {
                    res.cookie('remember', result.rows[0].id, {
                      expires: new Date(Date.now() + 900000000000),
                      signed: true
                    });
                    res.status(200).end(JSON.stringify(result.rows));
                    if (err) res.status(404).end();
                    res.status(200).end();
                  });
                });
              } else {
                res.json(result.rows);
              }
            });
          } else {
            res.status(407).json({
              'error': 'unauthorized email'
            });
          }
        } else {
          res.status(400).json({
            'error': 'bad email'
          });
        }
      });

  }
};
