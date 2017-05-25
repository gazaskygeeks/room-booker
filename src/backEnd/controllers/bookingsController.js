const {deleteEvent,listEvents,createEvent} = require('../utils/calendarOperations.js');
const {insertEvent,selectUserEvents,deleteDbEvent,selectRoomEvents} = require('../../database/events.js');
const {selectRoomName} = require('../../database/room.js');
const {selectCalendarID} = require('../../database/room.js');
const event = require('../utils/eventUtils.js');
const {checkEventAvailability} = require('../utils/utils.js');

module.exports = {
  userEvent: (req,res)=>{
    selectUserEvents(req.user.id,(err,userEvent)=>{
      if (err)
        return res.status(500).end();
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
          if(err) throw err;
          const conflict = checkEventAvailability(roomEvent,resource.start.dateTime,resource.end.dateTime);
          if(conflict.length > 0){
            return res.status(500).json({
              'err': 'conflict with'+ conflict.summary
            });
          }
          else{
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
            console.log(err); // eslint_disable_
            return res.status(500).json({
              'err': 'error getting events'
            });
          }
          res.json(events.items);
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
