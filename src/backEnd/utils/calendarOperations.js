const google = require('googleapis');
const calendar = google.calendar('v3');
const userEvent = require('../utils/eventUtils.js');

const deleteEvent =(auth,calendarId,eventId,cb)=> {
  calendar.events.delete({
    auth: auth,
    calendarId: calendarId,
    eventId: eventId,
    sendNotifications: true
  }, (err, response)=> {
    cb(err,response);
  });
};

const listEvents = (auth,cb)=> {
  calendar.events.list({
    auth: auth,
    calendarId: '1m5k20i4kuknts1fr7v7qql8v0@group.calendar.google.com',
    maxResults: 100,
    singleEvents: true,
    orderBy: 'startTime'
  }, cb);
};

const createEvent = (auth,data,calendarID,cb)=> {
  calendar.events.insert({
    auth: auth,
    calendarId: calendarID,
    resource: userEvent(data),
  }, cb);
};
const {PRIVATE_KEY,CLIENT_EMAIL} = require('../../../config.js').API_GOOGLE;
const auth = (cb) => {
  const jwtClient = new google.auth.JWT(CLIENT_EMAIL,
    null,
    PRIVATE_KEY,
    ['https://www.googleapis.com/auth/calendar'],
    null
  );
  jwtClient.authorize((err=>{
    cb(err,jwtClient);
  })
);
};


module.exports = {
  deleteEvent: deleteEvent,
  listEvents: listEvents,
  createEvent: createEvent,
  auth: auth
};
