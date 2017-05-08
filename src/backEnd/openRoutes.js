const router = require('express').Router();
const bookingsControllers = require('./controllers/bookingsController.js');
const roomsControllers = require('./controllers/roomsControllers.js');

module.exports = router
.get('/events',bookingsControllers.getAllEvents)
.get('/rooms',roomsControllers.getRooms);
