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
  return email.includes('@gazaskygeeks.com') || email.includes('@mercycorps') || email === 'gazaskygeeks@gmail.com';
};

const checkEventAvailability = (roomEvents,eventStartAt,eventEndAt) => {
  if(eventStartAt.getTime() > (new Date().getTime())){
    return roomEvents.filter(elem =>
    (eventStartAt.getTime() <= elem.end_date.getTime() && eventEndAt.getTime() >= elem.start_date.getTime())
  );
  }
  else {
    return [{summary:'choose time in future'}];
  }
};
module.exports = {
  checkAuth,
  validEmail,
  checkEventAvailability
};
