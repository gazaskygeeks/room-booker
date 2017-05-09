const router = require('express').Router();
const bookingsControllers = require('./controllers/bookingsController.js');
const roomsControllers = require('./controllers/roomsControllers.js');
const userControllers = require('./controllers/usersControllers.js');

module.exports = router
.get('/events',bookingsControllers.getAllEvents)
.get('/events/:id',bookingsControllers.roomEvents)
.get('/rooms',roomsControllers.getRooms)
.post('/login', userControllers.checkAuthThenInsert);
