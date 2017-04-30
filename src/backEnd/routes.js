const router = require('express').Router();
const userControllers = require('./controllers/usersControllers.js');
const bookingsControllers = require('./controllers/bookingsController.js');
const roomControllers = require('./controllers/roomsControllers.js');

router
.get('/getprofile', userControllers.getProfile )
.get('/rooms',roomControllers)
.post('/user', userControllers.checkAuthThenInsert)
.get('/event',bookingsControllers.getAllEvents)
.get('/events',bookingsControllers.createEvent)
.delete('/event',bookingsControllers.deleteEvent)
;

module.exports = router;
