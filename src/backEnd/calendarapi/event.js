
const setEvent = (data) => {
  event.summary = data.summary;
  event.description = data.description;
  event.start.dateTime = data.dateStart;
  event.end.dateTime = data.dateEnd;
  event.organizer.email = data.organizerEmail;
  event.organizer.displayName = data.organizerName;
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
  'recurrence': [
    'RRULE:FREQ=DAILY;COUNT=2'
  ],
  'organizer': {
    'email': null,
    'displayName': null,
    'self': true
  },
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
