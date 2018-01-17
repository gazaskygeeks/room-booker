const fetch = require('node-fetch');

const checkAuth = (accessToken) => {
    return fetch('https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=' + accessToken)
        .then(res => res.json())
        .then(result => {
            if (result.email) {
                return result.email;
            } else {
                return false;
            }
        });
};
const validEmail = (email) => {
    return email.includes('@gazaskygeeks.com') || email.includes('@mercycorps') || email === 'gazaskygeeks@gmail.com' || email.includes('@gmail.com');
};

const checkEventAvailability = (roomEvents, eventStartAt, eventEndAt) => {
    console.log('start time', eventStartAt.getTime(), 'end time', eventEndAt.getTime());
    if (eventStartAt.getTime() > (new Date().getTime())) {
        return roomEvents.filter(elem =>
            (eventStartAt.getTime() < elem.end_date.getTime() && eventEndAt.getTime() > elem.start_date.getTime())).map((elem) => {
            elem.end_time = elem.end_date.getTime();
            elem.start_time = elem.start_date.getTime();
            return elem;
        });
    } else {
        return [{
            summary: 'choose time in future'
        }];
    }
};
module.exports = {
    checkAuth,
    validEmail,
    checkEventAvailability
};
