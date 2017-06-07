const {deleteEvent,listEvents,createEvent,updateCalendarEvent} = require('../utils/calendarOperations.js');
const {insertEvent,selectUserEvents,deleteDbEvent,selectRoomEvents,updateDBEvent} = require('../../database/events.js');
const {selectRoomName} = require('../../database/room.js');
const {selectCalendarID} = require('../../database/room.js');
const event = require('../utils/eventUtils.js');
const {checkEventAvailability} = require('../utils/utils.js');

module.exports = {
  userEvent: (req,res)=>{
    selectUserEvents(req.user.id,(err,userEvent)=>{
      if (err){
        return res.status(500).end();
      }

      else {
        return res.status(200).json(userEvent);
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
        selectRoomEvents(calendarId,(err,roomEvent)=>{
          const eventAvailability = checkEventAvailability(roomEvent,resource.start.dateTime,resource.end.dateTime);
          if(eventAvailability.length > 0){
            return res.status(500).json({
              'err': 'conflict with'+ eventAvailability.summary
            });
          }
          else{
            createEvent(req.googleAuth,resource,calendarId, (err, event) => {
              if (err) {
                console.log('create event',err);
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
          }
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
            return res.status(500).json({
              'err': 'error getting events',
              'details': err
            });
          }
          res.json(events.items);
        });
      } else {
        res.status(404).end();
      }
    });
  },
  updateEvent: (req,res) => {
    const roomId = req.params.id;
    selectCalendarID(roomId,(err,calendarId) => {
      if(err) {
        return res.status(500).end();
      }
      if (calendarId) {
        const eventId = req.body.eventId;
        const resource = event(req.body.event, req.user.email);
        updateCalendarEvent(req.googleAuth,calendarId,eventId,resource,(err) => {
          if (err) {
            return res.status(300).json({
              'err': 'error updating event'
            });
          }
          updateDBEvent(resource,eventId,(err,updateStatus) => {
            if(err)
              selectRoomEvents(calendarId,(err,events) => {
                if(err)
                
                  return res.json(events);
              });
          });
        });
      }}
    );
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
          return res.status(500).json({
            'err': 'error delete event'
          });
        }
        selectUserEvents(req.user.id,(err,userEvent)=>{
          if (err)
            return res.status(500).end();
          else {
            return res.json(userEvent);
          }
        });
      });
    });
  }
};
