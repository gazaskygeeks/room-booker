const pg = require('pg');
const nock = require('nock');
const async = require('async');
const dbConfig = require('./config.js');
const setupClient = new pg.Client(Object.assign({}, dbConfig, {
  database: 'postgres'
}));

const createTables = require('./createTable.js');

const request = require('supertest');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
const routes = require('../backEnd/routes.js');

app.use(bodyParser.json());
app.use(cookieParser('secret'));
app.use(routes);

beforeAll(done => {
  async.series([
    cb =>
      setupClient.connect(cb),
    cb =>
      setupClient.query('DROP DATABASE IF EXISTS test_room_booking', cb),
    cb =>
      setupClient.query('CREATE DATABASE test_room_booking', cb),
    cb =>
      createTables(cb)
  ],
    err => {
      if (err) throw err;
      done();
    });
});

afterAll(done => {
  require('./pool.js').end();
  setupClient.query('DROP DATABASE test_room_booking', err => {
    if (err) throw err;
    setupClient.end();
    done();
  });
});

const userLoginFixture = {
  accessToken: 'ya29.Glw1BFPcruLIrQlbGQxBECmlvUP3WtrcBa4SeF3EfiUGa9FC4hAnBLFxDym-9A4_1fp1To79Qz79CGAzTWQBQ2uY1hryzZLDhIajo_6aIvfIlR0WoM8CcSzOkbYSHA',
  email: 'mhmdrshorafa@gmail.com',
  firstName: 'Mhmd',
  lastName: 'Shorafa'
};

nock('https://www.googleapis.com')
  .get('/oauth2/v3/tokeninfo')
  .query({
    access_token: userLoginFixture.accessToken
  })
  .reply(400, {
    'error_description': 'Invalid Value'
  });

test('bad token', () => {
  return request(app)
    .post('/user')
    .send(userLoginFixture)
    .set('Accept', 'application/json')
    .set('content-type', 'application/json')
    .then(res => {
      expect(res.status).toBe(400);
      expect(res.body.error).toBe('bad email');
    })
    .catch();
});

nock('https://www.googleapis.com')
  .get('/oauth2/v3/tokeninfo')
  .query({
    access_token: userLoginFixture.accessToken
  })
  .reply(200, {
    'email': 'mhmdrshorafa@gmail.com'
  });
test('good token, bad email', () => {
  return request(app)
    .post('/user')
    .send(userLoginFixture)
    .set('Accept', 'application/json')
    .set('content-type', 'application/json')
    .then(res => {
      expect(res.status).toBe(407);
    }).catch();
});

nock('https://www.googleapis.com')
  .get('/oauth2/v3/tokeninfo')
  .query({
    access_token: userLoginFixture.accessToken
  })
  .reply(200, {
    'email' : 'shahy.93@gazaskygeeks.com'
  });
test('good token, good email', () => {
  return request(app)
    .post('/user')
    .send(userLoginFixture)
    .set('Accept', 'application/json')
    .set('content-type', 'application/json')
    .then(res => {
      expect(res.status).toBe(200);
    }).catch();
});
