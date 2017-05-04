const calenderOperations = require('../calendarapi/calenderutils.js');
const {insertEvent,selectUserEvents} = require('../../database/reservation.js');
const {setEvent} = require('../calendarapi/event.js');
const jwt = require('../calendarapi/jwtauth.js');
const dbuser = require('../../database/user.js');
const calenderId = '1m5k20i4kuknts1fr7v7qql8v0@group.calendar.google.com';
const dataInfo = {
  summary: 'myTestSummary',
  description: 'mytestDescription',
  dateStart: '2017-05-02T20:30:00Z',
  dateEnd: '2017-05-02T20:30:00Z',
  organizerEmail: 'shahy.m.93@gmail.com',
  organizerName: 'myTestOrganizerName'
};

module.exports = {
  getAllEvents: (req, res) => {
    jwt((err, jwtAuth) => {
      if (err) {
        res.status(300).json({
          'err': 'error in autherization'
        });
      }
      calenderOperations.listEvents(jwtAuth, calenderId, (err, events) => {
        if (err) {
          res.status(300).json({
            'err': 'error getting events'
          });
        }
        res.json(events);
      });
    });

  },
  UserEvent: (req,res)=>{
    selectUserEvents(req.body.email,(err,userEvent)=>{
      if (err)
        res.status(401).end();
      else {
        res.status(200).json(userEvent).end();
      }

    });
  },
  createEvent: (req, res) => {
    setEvent(dataInfo);
    jwt((err, jwtAuth) => {
      if (err) {
        res.status(300).json({
          'err': 'error in autherization'
        });
      }
      calenderOperations.createEvent(jwtAuth, calenderId, (err, events) => {
        if (err) {
          res.status(300).json({
            'err': 'error creating event'
          });
        }
        dbuser.selectUserByEmail(events.attendees[0].email, (err, user) => {
          insertEvent(events, user.id, () => {
            res.status(200).end();
          });
        });
        res.json(events);
      });
    });
  },
  deleteEvent: (req, res) => {
    const calenderId = req.body;
    const eventId = req.body;
    jwt((err, jwtAuth) => {
      if (err) {
        res.status(300).json({
          'err': 'error in autherization'
        });
      }
      calenderOperations.deleteEvent(jwtAuth, calenderId, eventId, (err, events) => {
        if (err) {
          res.status(300).json({
            'err': 'error deleting event'
          });
        }
        res.json(events);
      });
    });
  }
};
