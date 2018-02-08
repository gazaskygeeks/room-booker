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
  const date = new Date();
  let endDate = new Date();
  endDate.setMonth(endDate.getMonth()+6);
  var startDate = new Date(date.getTime() - (7 * 24 * 60 * 60 * 1000));
  calendar.events.list({
    auth: auth,
    calendarId: calendarId,
    maxResults: 2500,
    singleEvents: true,
    orderBy: 'startTime',
    timeMin: startDate.toISOString(),
    timeMax: endDate.toISOString(),
    showHiddenInvitations: true
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
