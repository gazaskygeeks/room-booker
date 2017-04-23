var axios = require('axios');
const checkAuth = (accessToken,cb)=>{
  axios.get('https://www.googleapis.com/oauth2/v3/tokeninfo?access_token='+accessToken).then(result=>{
    cb(result.data.email_verified) ;
  });
};
const validEmail = (data)=>{
  return (data.email.includes('mhmd')||data.email.includes('@mercycorps.com'));
};

module.exports = {
  checkAuth:checkAuth,
  validEmail:validEmail
};
