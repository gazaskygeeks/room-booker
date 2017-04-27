const async = require('async');
const pool = require('./pool.js');

module.exports = (cb) => {
  pool.connect((err, client, done) => {
    if (err) {
      return cb(err);
    }
    async.series([
      (callback) => {
        client.query(`CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          email varchar(255) UNIQUE,
          privileges Integer,
          first_name varchar(50),
          last_name varchar(50)
        )`,callback);
      },
      (callback) => {
        client.query(`CREATE TABLE IF NOT EXISTS bookings (
          id SERIAL PRIMARY KEY,
          event_id varchar(255),
          users_id integer REFERENCES users(id),
          summary varchar(255),
          location varchar(255),
          start_date timeStamp,
          end_date timeStamp
        )`,callback);
      }
    ], (err) => {
      done(err);
      return cb(err);
    });
  });
};
