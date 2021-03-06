const router = require('express').Router();
const userControllers = require('./controllers/usersControllers.js');
const bookingsControllers = require('./controllers/bookingsController.js');

module.exports = router
.delete('/event',bookingsControllers.deleteEvent)
.get('/profile', userControllers.getProfile )
.get('/userevents',bookingsControllers.userEvent)
.post('/event/:id',bookingsControllers.createEvent)
.put('/event/:id',bookingsControllers.updateEvent)
.post('/logout',userControllers.logout);
