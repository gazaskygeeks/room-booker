const router = require('express').Router();
const userControllers = require('./controllers/usersControllers.js');
const bookingsControllers = require('./controllers/bookingsController.js');
const roomsControllers = require('./controllers/roomsControllers.js');

router
.get('/profile', userControllers.getProfile )
.post('/user', userControllers.checkAuthThenInsert)
.get('/events',bookingsControllers.getAllEvents)
.post('/event',bookingsControllers.createEvent)
.get('/userevents',bookingsControllers.UserEvent)
.get('/rooms',roomsControllers.getRooms)
.get('/logout',userControllers.logout)
.delete('/event',bookingsControllers.deleteEvent)
;

module.exports = router;
