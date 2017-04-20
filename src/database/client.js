
var pg = require('pg');
module.exports = (config) => {
  var client = new pg.Client(config);
  client.connect();
  return client;
};
