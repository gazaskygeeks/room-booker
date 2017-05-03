
const setEvent = (data) => {
  event.summary = data.summary;
  event.description = data.description;
  event.start.dateTime = data.dateStart;
  event.end.dateTime = data.dateEnd;
};
const event = {
  'summary': null,
  'location': 'gazaskygeeks',
  'description': null,
  'start': {
    'dateTime': null,
    'timeZone': '(GMT+03:00) Jerusalem',
  },
  'end': {
    'dateTime': null,
    'timeZone': '(GMT+03:00) Jerusalem',
  },
  'attendees': [
    {
      'email': 'mhmdrshorafa@gmail.com',
      'organizer': true
    }
  ],
  'recurrence': [
    'RRULE:FREQ=DAILY;COUNT=2'
  ],
  'sendNotifications': true,
  'reminders': {
    'useDefault': false,
    'overrides': [{
      'method': 'email',
      'minutes': 1
    },
    {
      'method': 'popup',
      'minutes': 1
    },
    ],
  },
};

module.exports = {
  setEvent: setEvent,
  getEvent: event
};
