const router = require('express').Router();
const userControllers = require('./controllers/usersControllers.js');
const bookingsControllers = require('./controllers/bookingsController.js');

module.exports = router
.delete('/event',bookingsControllers.deleteEvent)
.get('/profile', userControllers.getProfile )
.get('/userevents',bookingsControllers.userEvent)
.post('/events',bookingsControllers.createEvent)
.post('/user', userControllers.checkAuthThenInsert)
.get('/logout',userControllers.logout);
