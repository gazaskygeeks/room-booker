const router = require('express').Router();
const userControllers = require('./controllers/usersControllers.js');
const bookingsControllers = require('./controllers/bookingsController.js');

router
.get('/test', (req, res) => {
  console.log(req.signedCookies['remember']);//eslint-disable-line no-console
  res.send('ok');
})
.post('/user', userControllers.checkAuthThenInsert)
.get('/event',bookingsControllers.getAllEvents)
.post('/event',bookingsControllers.createEvent)
.delete('/event',bookingsControllers.deleteEvent)
;

module.exports = router;
