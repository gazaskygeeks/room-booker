
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
  'attendees': [],
  'recurrence': [
    'RRULE:FREQ=DAILY;COUNT=1'
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

module.exports = (data,email)=> {

  const newData = {
    'summary': data.summary,
    'description': data.description,
    'start': {
      'dateTime': new Date(data.startDateTime),
      'timeZone': '(GMT+03:00) Jerusalem'
    },
    'end': {
      'dateTime': new Date(data.endDateTime),
      'timeZone': '(GMT+03:00) Jerusalem',
    }
    ,
    'attendees': [
      {
        'email': email,
        'organizer': true
      }
    ]
  };
  return Object.assign({}, eventDefaults, newData);
};
