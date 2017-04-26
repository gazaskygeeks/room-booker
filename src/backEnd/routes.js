const router = require('express').Router();
const userControllers = require('./controllers/usersControllers.js');

router
.get('/test', (req, res) => {
  console.log(req.signedCookies['remember']);//eslint-disable-line no-console
  res.send('ok');
})
.post('/user', userControllers.checkAuthThenInsert);

module.exports = router;
