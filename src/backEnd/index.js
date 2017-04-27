const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
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
  app.listen(port, () => {
    console.log('Our app is running on http://localhost:' + port); // eslint-disable-line no-console
  });
});
