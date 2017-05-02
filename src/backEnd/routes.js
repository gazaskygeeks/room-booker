const router = require('express').Router();
const userControllers = require('./controllers/usersControllers.js');
const bookingsControllers = require('./controllers/bookingsController.js');


router
.get('/profile', userControllers.getProfile )
.post('/user', userControllers.checkAuthThenInsert)
.get('/event',bookingsControllers.getAllEvents)
.get('/events',bookingsControllers.createEvent)
.delete('/event',bookingsControllers.deleteEvent)
;

module.exports = router;
