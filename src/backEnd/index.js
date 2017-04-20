const express = require('express');
const app = express();
<<<<<<< Updated upstream
const port = process.env.PORT || 8080;

app.use(express.static('public'));

app.listen(port, () => {
  console.log('Our app is running on http://localhost:' + port); // eslint-disable-line no-console
});
