const {deleteEvent,listEvents,createEvent} = require('../utils/calendarOperations.js');
const {insertEvent,selectUserEvents,deleteDbEvent} = require('../../database/events.js');
const {selectRoomName} = require('../../database/room.js');
const {selectCalendarID} = require('../../database/room.js');
const {event,dayRoomEvents} = require('../utils/eventUtils.js');

module.exports = {
  getAllEvents: (req, res) => {
    listEvents(req.googleAuth, (err, events) => {
      if (err) {
        return res.status(401).json({
          'err': 'error getting events'
        });
      }
      res.json(events);
    });
  },
  userEvent: (req,res)=>{
    selectUserEvents(req.user.id,(err,userEvent)=>{
      if (err)
        return res.status(401).end();
      else {
        return res.json(userEvent);
      }
    });
  },
  createEvent: (req, res) => {
    const roomId = req.params.id;
    selectCalendarID(roomId,(err,calendarId)=>{
      if(err) {
        return res.status(500).end();
      }
      if (calendarId) {
        const email = req.user.email;
        const resource= event(req.body,email);
        createEvent(req.googleAuth,resource,calendarId, (err, event) => {
          if (err) {
            return res.status(300).json({
              'err': 'error creating event'
            });
          }
          selectRoomName(roomId,(err,roomName)=>{
            if(err){
              res.status(404).json({
                'err': 'no room with this id'
              });
            }
            insertEvent(event,req.user.id,calendarId,roomName,roomId, () => {
              return res.status(200).end();
            });
          });
        });
      } else {
        res.status(404).end();
      }
    });
  },
  roomEvents:(req,res)=>{
    const roomId = req.params.id;
    selectCalendarID(roomId,(err,calendarId)=>{
      if(err) {
        return res.status(500).end();
      }
      if (calendarId) {
        listEvents(req.googleAuth, calendarId,(err, events) => {
          if (err) {
            return res.status(401).json({
              'err': 'error getting events'
            });
          }
          const dayEvent = dayRoomEvents(events.items);
          res.json(dayEvent);
        });
      } else {
        res.status(404).end();
      }
    });
  },
  deleteEvent: (req, res) => {
    const calenderId = req.body.calendarId;
    const eventId = req.body.eventId;
    deleteEvent(req.googleAuth, calenderId, eventId, (err) => {
      if (err) {
        return res.status(300).json({
          'err': 'error deleting event'
        });
      }
      deleteDbEvent(calenderId,eventId,(err)=>{
        if(err){
          return res.status(401).json({
            'err': 'error delete event'
          });
        }
        res.status(200);
      });
    });
  }
};
