const async = require('async');
module.exports = (client,cb) => {
  async.series([
    function(callback) {
      client.query(`CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email UNIQUE varchar(255),
        privileges Integer,
        first_name varchar(50),
        last_name varchar(50)
      )`,callback);
    },
    function(callback) {
      client.query(`CREATE TABLE IF NOT EXISTS bookings (
        id SERIAL PRIMARY KEY,
        event_id varchar(255),
        users_id integer REFERENCES users(id)
      )`,callback);
    }
  ],cb);
};
