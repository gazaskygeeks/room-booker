
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

const formatGoogleDate = time =>
  time.replace(' ','T')+'-07:00';


const event = (data,email)=> {
  const newData = {
    'summary': data.summary,
    'description': data.description,
    'start': {
      'dateTime': new Date(data.startDateTime),
      'timeZone': '(GMT+03:00) Jerusalem',
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
const dayRoomEvents = (events)=>{
  const toDay = new Date().getDate();
  const todayEvents = events.filter((elem)=>{
    return new Date(elem.start.dateTime).getDate() === toDay;
  });
  return todayEvents;
};

module.exports = {event,dayRoomEvents};
