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
          room_id varchar(255),
          calendar_id varchar(255),
          event_id varchar(255),
          users_id integer REFERENCES users(id),
          summary varchar(255),
          location varchar(255),
          start_date timeStamp,
          end_date timeStamp
        )`,callback);
      },
      (callback) => {
        client.query(`CREATE TABLE IF NOT EXISTS rooms (
          id SERIAL PRIMARY KEY,
          room_name varchar(255),
          room_capacity varchar(255),
          room_image varchar(255),
          location varchar(255)
        )`,callback);
      }
    ], (err) => {
      done(err);
      return cb(err);
    });
  });
};
