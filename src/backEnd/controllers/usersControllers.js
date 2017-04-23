const utils = require('../utils/utils.js');
const usersdb = require('../../database/user.js');

module.exports = {
  insertUser: function() {
    //do something
  },
  checkAuthThenInsert: function(req, res) {
    utils.checkAuth(req.body.accessToken,(authentication)=>{
      if(authentication){
        const valid = utils.validEmail(req.body);
        if(valid){
          usersdb.insertUser(req.body,(err,result)=>{
            console.log(result);
            usersdb.selectUser(req.body,(err,result)=>{
            console.log(result);
            });
          });
        }
        else {
          res.end(JSON.stringify({'valid':false}));
        }
      }
      else{
        res.end(JSON.stringify({'valid':false}));
      }
    });

  }
};
