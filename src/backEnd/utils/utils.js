const fetch = require('node-fetch');

const checkAuth = (accessToken) => {
  return fetch('https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=' + accessToken)
    .then(res=>res.json())
    .then(result => {
      if (result.email) {
        return result.email;
      } else {
        return false;
      }
    });
};
const validEmail = (email) => {
  return email.includes('@gazaskygeeks.com') || email.includes('@mercycorps.com');
};

const checkEventAvailability = (roomEvents,eventStartAt,eventEndAt) => {
  return roomEvents.filter(elem =>
    (eventStartAt.valueOf() <= elem.end_date.valueOf() && eventEndAt.valueOf() >= elem.start_date.valueOf())
  );
};
module.exports = {
  checkAuth,
  validEmail,
  checkEventAvailability
};
