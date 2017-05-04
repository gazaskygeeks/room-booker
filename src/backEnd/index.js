const express = require('express');
const app = express();
const  {PORT}= require('../../config.js');
const routes = require('./routes.js');
const createTables = require('../database/createTable.js');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cookieParser('secret'));
app.use(routes);
createTables( err => {
  if (err) throw err;
  app.listen(PORT, () => {
    console.log('Our app is running on http://localhost:' + PORT); // eslint-disable-line no-console
  });
});
