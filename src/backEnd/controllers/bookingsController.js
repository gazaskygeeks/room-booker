const calenderOperations= require('../calendarapi/calenderutils.js');
const authorize= require('../calendarapi/calenderauth.js');
const {getEvent,setEvent} = require('../calendarapi/event.js');

module.exports = {
  getAllEvents: (req,res) => {
    const calenderId = req.body;
    authorize((auth => {
      calenderOperations.listEvents(auth,calenderId,(err,events) => {
        if(err){
          res.status(300).json({'err':'error getting events'});
        }
        res.json(events);
      });
    }));
  },
  createEvent: (req,res) => {
    const calenderId = req.body;
    authorize((auth => {
      setEvent(req.body);
      const event = getEvent;
      calenderOperations.createEvent(auth,calenderId,event,(err,events) => {
        if(err){
          res.status(301).json({'err':'error creating event'});
        }
        res.json(events);
      });
    }));
  },
  deleteEvent: (req,res) => {
    const calenderId = req.body;
    const eventId = req.body;
    authorize((auth => {
      setEvent(req.body);
      const event = getEvent;
      calenderOperations.createEvent(auth,calenderId,eventId,event,(err,events) => {
        if(err){
          res.status(302).json({'err':'error deleting event'});
        }
        res.json(events);
      });
    }));
  }
};
