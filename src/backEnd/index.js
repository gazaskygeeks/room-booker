const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

const config = require('../database/config.js');
const cl = require('../database/client.js');
const client = cl(config);
const createtable = require('../database/createTable.js');
createtable(client);
app.use(express.static('public'));
createtable(client);



app.listen(port, () => {
  console.log('Our app is running on http://localhost:' + port); // eslint-disable-line no-console
});
