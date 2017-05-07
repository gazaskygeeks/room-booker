
const eventDefaults = {
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
      'email': 'shahy.m.93@gmail.com',
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


module.exports = (data)=> {
  const newData = {
    'summary': data.summary,
    'description': data.description,
    'start': {
      'dateTime': data.startDateTime,
      'timeZone': '(GMT+03:00) Jerusalem',
    },
    'end': {
      'dateTime': data.endDateTime,
      'timeZone': '(GMT+03:00) Jerusalem',
    }
    ,
    'attendees': [
      {
        'email': data.email,
        'organizer': true
      }
    ]
  };
  return Object.assign({}, eventDefaults, newData);
};
