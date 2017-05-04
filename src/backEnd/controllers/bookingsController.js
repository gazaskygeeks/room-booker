const calenderOperations = require('../utils/calenderutils.js');
const {insertEvent,selectUserEvents} = require('../../database/reservation.js');
const {auth} = require('../utils/calenderutils.js');
const dbuser = require('../../database/user.js');
const calenderId = '1m5k20i4kuknts1fr7v7qql8v0@group.calendar.google.com';

module.exports = {
  getAllEvents: (req, res) => {
    auth((err, jwtAuth) => {
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
        res.json(userEvent);
      }
    });
  },
  createEvent: (req, res) => {
    auth((err, jwtAuth) => {
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
    auth((err, jwtAuth) => {

      if (err) {
        res.status(300).json({
          'err': 'error in autherization'
        });
      }
      calenderOperations.deleteEvent(jwtAuth, calenderId, eventId, (err) => {
        if (err) {
          res.status(300).json({
            'err': 'error deleting event'
          });
        }
        selectUserEvents(req.body.email,(err,userEvent)=>{
          if (err)
            res.status(401).end();
          else {
            res.json(userEvent);
          }
        });
      });
    });
  }
};
