const express = require('express');
const app = express();
const  {PORT}= require('../../config.js');
const openRoutes = require('./openRoutes.js');
const authCheck = require('./authedCheck.js');
const authenticatedRoutes = require('./authenticatedRoutes.js');
const createTables = require('../database/createTable.js');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cookieParser('secret'));
app.use(openRoutes);
app.use(authCheck);
app.use(authenticatedRoutes);
createTables( err => {
  if (err) throw err;
  app.listen(PORT, () => {
    console.log('Our app is running on http://localhost:' + PORT); // eslint-disable-line no-console
  });
});
