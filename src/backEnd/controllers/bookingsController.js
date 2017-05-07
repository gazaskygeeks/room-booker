const {auth,deleteEvent,listEvents,createEvent} = require('../utils/calendarOperations.js');
const {insertEvent,selectUserEvents} = require('../../database/events.js');
const dbuser = require('../../database/user.js');
const calenderId = '1m5k20i4kuknts1fr7v7qql8v0@group.calendar.google.com';

module.exports = {
  getAllEvents: (req, res) => {
    auth((err, jwtAuth) => {
      if (err) {
        return res.status(300).json({
          'err': 'error in autherization'
        });
      }
      listEvents(jwtAuth, (err, events) => {
        if (err) {
          return res.status(401).json({
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
        return res.status(401).end();
      else {
        return res.json(userEvent);
      }
    });
  },
  createEvent: (req, res) => {
    auth((err, jwtAuth) => {
      if (err) {
        return res.status(300).json({
          'err': 'error in autherization'
        });
      }
      const data = req.body;
      createEvent(jwtAuth,data, calenderId, (err, event) => {
        if (err) {
          return res.status(300).json({
            'err': 'error creating event'
          });
        }
        dbuser.selectUserByEmail(event.attendees[0].email, (err, user) => {
          insertEvent(event, user.id, () => {
            return res.status(200).end();
          });
        });
      });
    });
  },
  deleteEvent: (req, res) => {
    const calenderId = req.body;
    const eventId = req.body;
    auth((err, jwtAuth) => {
      if (err) {
        return res.status(300).json({
          'err': 'error in autherization'
        });
      }
      deleteEvent(jwtAuth, calenderId, eventId, (err) => {
        if (err) {
          return res.status(300).json({
            'err': 'error deleting event'
          });
        }
        selectUserEvents(req.body.email,(err,userEvent)=>{
          if (err)
            return res.status(401).end();
          else {
            return res.json(userEvent);
          }
        });
      });
    });
  }
};
