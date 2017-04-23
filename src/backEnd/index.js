const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const config = require('../database/config.js');
const cl = require('../database/client.js');
const client = cl(config);
const routes = require('./routes.js');
const runMigrations = require('../database/createTable.js');
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(routes);
runMigrations(client,(err)=>{
  if(err)throw err;
  app.listen(port, () => {
    console.log('Our app is running on http://localhost:' + port); // eslint-disable-line no-console
  });
});
