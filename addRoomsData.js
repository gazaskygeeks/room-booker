process.env.NODE_ENV = 'development';

const async = require('async');
const pg = require('pg');
const { DB_CONFIG } = require('./config.js');

const client = new pg.Client(DB_CONFIG);
client.connect( err => { if (err) throw err; }),

async.series([
  (callback) => {
    client.query(`INSERT INTO rooms
      (calendar_id,
      room_name,
      room_capacity,
      room_image,
      location)
     VALUES ('fflniem7n09tud0k7ocvvsk810@group.calendar.google.com',
     'GSG Converance Room',
     '50',
     'images/mercymeetingroom.jpg',
     'Mercy corps')`,callback);
  },
  (callback) => {
    client.query(`INSERT INTO rooms
      (calendar_id,
      room_name,
      room_capacity,
      room_image,
      location)
     VALUES ('ss1qchu7kvmkgbek3r6gl9d7ss@group.calendar.google.com',
     'GSG Converance Room',
     '20',
     'images/gsgconveranceroom.jpg',
     'Gaza Sky Geeks')`,callback);
  }
], (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Success!');
  }
  return client.end();
});
