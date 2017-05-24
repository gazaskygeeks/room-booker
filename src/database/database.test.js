const pg = require('pg');
const nock = require('nock');
const async = require('async');
const dbConfig = require('../../config.js').DB_CONFIG;
const setupClient = new pg.Client(Object.assign({}, dbConfig, {
  database: 'postgres'
}));
const createTables = require('./createTable.js');
const openRoutes = require('../backEnd/openRoutes.js');
const authCheck = require('../backEnd/authedCheck.js');
const authenticatedRoutes = require('../backEnd/authenticatedRoutes.js');
const request = require('supertest');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(cookieParser('secret'));
app.use(openRoutes);
app.use(authCheck);
app.use(authenticatedRoutes);

beforeAll(done => {
  async.series([
    cb =>
      setupClient.connect(cb),
    cb =>
      setupClient.query(`DROP DATABASE IF EXISTS ${dbConfig.database}`, cb),
    cb =>
      setupClient.query(`CREATE DATABASE ${dbConfig.database}`, cb),
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
  setupClient.query(`DROP DATABASE ${dbConfig.database}`, err => {
    if (err) throw err;
    setupClient.end();
    done();
  });
});

const userLoginFixture = {
  accessToken: 'ya29.Glw1BFPcruLIrQlbGQxBECmlvUP3WtrcBa4SeF3EfiUGa9FC4hAnBLFxDym-9A4_1fp1To79Qz79CGAzTWQBQ2uY1hryzZLDhIajo_6aIvfIlR0WoM8CcSzOkbYSHA',
  email: 'roombooking@gazaskygeeks.com',
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
    .post('/login')
    .send(userLoginFixture)
    .set('Accept', 'application/json')
    .set('content-type', 'application/json')
    .then(res => {
      expect(res.status).toBe(401);
      expect(res.body.error).toBe('unauthorized');
    })
    .catch();
});

nock('https://www.googleapis.com')
  .get('/oauth2/v3/tokeninfo')
  .query({
    access_token: userLoginFixture.accessToken
  })
  .reply(200, {
    'email': 'mhmdrshorafa@hotmail.com'
  });
test('good token, bad email', () => {
  return request(app)
    .post('/login')
    .send(userLoginFixture)
    .set('Accept', 'application/json')
    .set('content-type', 'application/json')
    .then(res => {
      expect(res.status).toBe(401);
      expect(res.body.error).toBe('unauthorized');
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
    .post('/login')
    .send(userLoginFixture)
    .set('Accept', 'application/json')
    .set('content-type', 'application/json')
    .then(res => {
      expect(res.status).toBe(200);
    }).catch();
});
