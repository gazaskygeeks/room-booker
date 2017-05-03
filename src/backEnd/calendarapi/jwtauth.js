const google = require('googleapis');
const key = require('../../../key.json');
const {PRIVATE_KEY,CLIENT_EMAIL} = require('../../../config.js').API_GOOGLE;
module.exports = (cb) => {
  var jwtClient = new google.auth.JWT(CLIENT_EMAIL,
    null,
    PRIVATE_KEY,
    ['https://www.googleapis.com/auth/calendar'],
    null
  );
  jwtClient.authorize((err)=>{
    cb(err,jwtClient);
  });
};
