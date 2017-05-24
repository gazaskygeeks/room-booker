const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const google = require('googleapis');

const app = express();
const {PORT, API_GOOGLE: {PRIVATE_KEY,CLIENT_EMAIL} }= require('../../config.js');
const openRoutes = require('./openRoutes.js');
const authCheck = require('./authedCheck.js');
const authenticatedRoutes = require('./authenticatedRoutes.js');
const createTables = require('../database/createTable.js');

let googleAuth;

const updateAuth = () => {
  const jwtClient = new google.auth.JWT(CLIENT_EMAIL,
    null,
    PRIVATE_KEY,
    ['https://www.googleapis.com/auth/calendar'],
    null
  );
  jwtClient.authorize((err)=> {
    if (err) {
      console.log(err); //eslint-disable-line
    }
    googleAuth = jwtClient;
  });
};

updateAuth();
setInterval(updateAuth, 1800000); // 1,800,000 === 30mins

if(process.env.NODE_ENV === 'production'){
  app.use (function (req, res, next) {
    if (req.secure) {
      next();
    } else {
      res.redirect('https://' + req.headers.host + req.url);
    }
  });
}

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cookieParser('secret'));
app.use((req, res, next) => {
  req.googleAuth = googleAuth;
  next();
});

app.use(openRoutes);
app.use(authCheck);
app.use(authenticatedRoutes);

createTables( err => {
  if (err) throw err;
  app.listen(PORT, () => {
    console.log('Our app is running on http://localhost:' + PORT); // eslint-disable-line no-console
  });
});
