const pg = require('pg');
var nock = require('nock');
const async = require('async');
const dbConfig = require('./config.js');
const setupClient = new pg.Client(Object.assign(dbConfig, {
  database: 'postgres'
}));

const pool = require('./pool.js');
const createTables = require('./createTable.js');

const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('../backEnd/routes.js');

app.use(bodyParser.json());
app.use(routes);


beforeAll(done => {
  async.series([
    cb =>
      setupClient.connect(cb),
    cb =>
      setupClient.query('DROP DATABASE IF EXISTS test_room_booking', cb),
    cb =>
      setupClient.query('CREATE DATABASE test_room_booking', cb)
    ],
    err => {
      if (err) throw err;
      done();
    });
});

afterAll(done => {
  setupClient.query('DROP DATABASE test_room_booking', err => {
    if (err) throw err;
    setupClient.end();
    pool.end();
    done();
  });
});


};


});
