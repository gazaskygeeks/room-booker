const utils = require('../utils/utils.js');
const usersdb = require('../../database/user.js');

module.exports = {
  checkAuthThenInsert: function(req, res) {
    utils.checkAuth(req.body.accessToken)
      .then(validEmail => {
        if (validEmail) {
          usersdb.selectUser(validEmail, (err, result) => {
            if (result.rowCount === 0) {
              usersdb.insertUser(req.body,()=>{
                usersdb.selectUser(req.body.email,(err,result)=>{
                  res.cookie('remember',result.rows[0].id, { expires: new Date(Date.now() + 900000000000),signed: true });
                  if(err) res.status(404).end();
                  res.status(200).end();
                });
              });
            }
          });
        } else {
          res.json({
            'status': 'bad email'
          });
        }
      });
  }
};
