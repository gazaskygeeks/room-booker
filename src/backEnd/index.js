const express = require('express');
const app = express();
<<<<<<< Updated upstream
const port = process.env.PORT || 8080;

=======
const config = require('../database/config.js');
const cl = require('../database/client.js');
const client = cl(config);
const createtable = require('../database/createTable.js');
createtable(client);
>>>>>>> Stashed changes
app.use(express.static('public'));
createtable(client);



app.listen(port, () => {
  console.log('Our app is running on http://localhost:' + port); // eslint-disable-line no-console
});
