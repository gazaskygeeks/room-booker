const google = require('googleapis');
const calendar = google.calendar('v3');

const deleteEvent =(auth,calendarId,eventId,cb)=> {
  calendar.events.delete({
    auth: auth,
    calendarId: calendarId,
    eventId: eventId,
    sendNotifications: true
  },cb);
};
const updateCalendarEvent =(auth,calendarId,eventId,resource,cb)=> {
  calendar.events.update({
    auth: auth,
    calendarId: calendarId,
    eventId: eventId,
    resource: resource
  },cb);
};

const listEvents = (auth,calendarId,cb)=> {
  calendar.events.list({
    auth: auth,
    calendarId: calendarId,
    maxResults: 250,
    singleEvents: true,
    orderBy: 'startTime',
    timeMin: (new Date()).toISOString()
  }, cb);
};

const createEvent = (auth,resource,calendarId,cb)=> {
  calendar.events.insert({
    auth: auth,
    calendarId: calendarId,
    resource: resource,
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

module.exports = {deleteEvent,listEvents,createEvent,updateCalendarEvent,auth};
