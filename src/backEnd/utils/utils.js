const fetch = require('node-fetch');

const checkAuth = (accessToken) => {
  return fetch('https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=' + accessToken)
    .then(res=>res.json())
    .then(result => {
      if (result.email && validEmail(result.email)) {
        return result.email;
      } else {
        return false;
      }
    });
};
const validEmail = (email) => {
  return email.includes('mhmd') || email.includes('@mercycorps.com');
};

module.exports = {
  checkAuth: checkAuth,
  validEmail: validEmail
};
