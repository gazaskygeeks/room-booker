const google = require('googleapis');
const calendar = google.calendar('v3');
const {getEvent} = require('../calendarapi/event.js');

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

const listEvents = (auth,calenderId,cb)=> {
  calendar.events.list({
    auth: auth,
    calendarId: calenderId,
    timeMin: (new Date()).toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: 'startTime'
  }, (err, response)=> {
    const events = response.items;
    cb(err,events);
    // if (events.length == 0) {
    //   console.log('No upcoming events found.'); //eslint-disable-line
    // } else {
    //   console.log('Upcoming 10 events:'); //eslint-disable-line
    //   for (let i = 0; i < events.length; i++) {
    //     const event = events[i];
    //     console.log(event); //eslint-disable-line
    //     const start = event.start.dateTime || event.start.date;
    //     console.log('%s - %s', start, event.summary); //eslint-disable-line
      // }
    // }
  });
};

const createEvent = (auth,calendarID,cb)=> {
  calendar.events.insert({
    auth: auth,
    calendarId: calendarID,
    resource: getEvent,
  }, (err, res)=> {
    cb(err,res);
  });
};

module.exports = {
  deleteEvent: deleteEvent,
  listEvents: listEvents,
  createEvent: createEvent
};
