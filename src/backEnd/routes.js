const router = require('express').Router();
const userControllers = require('./controllers/usersControllers.js');

router
.get('/test', (req, res) => res.end() )
.post('/insertuser', userControllers.checkAuthThenInsert);

module.exports = router;
