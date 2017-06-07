const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
const openRoutes = require('../openRoutes.js');
const authCheck = require('../authedCheck.js');
const authenticatedRoutes = require('../authenticatedRoutes.js');

app.use(bodyParser.json());
app.use(cookieParser('secret'));
app.use(openRoutes);
app.use(authCheck);
app.use(authenticatedRoutes);
const calenderId = '1m5k20i4kuknts1fr7v7qql8v0@group.calendar.google.com';
//const { USER_COOKIE } = require('../../../config.js');


const request = require('supertest');
//const agent = request.agent(app);
const nock = require('nock');

const data = {
  summary : 'myTestSummary',
  description : 'mytestDescription',
  startDateTime : new Date(),
  endDateTime :'Fri May 12 2017 12:30:00 GMT+0300 (EEST)'
};


nock('https://accounts.google.com')
.post('/o/oauth2/token')
.reply(401, { access_token: undefined,
  token_type: '',
  expiry_date: NaN,
  refresh_token: 'jwt-placeholder' });
nock('https://www.googleapis.com')
  .get(`/calendar/v3/calendars/${calenderId}/events?maxResults=100&singleEvents=true&orderBy=startTime`)
  .reply(401);

test('/userevents response with events', () => {
  return request(app)
    .get('/userevents')
    .set('Accept', 'application/json')
    .set('content-type', 'application/json')
      .then((res)=>{
        expect(res.status).toBe(401);
      }).catch();
});


nock('https://accounts.google.com')
.post('/o/oauth2/token')
.reply(200, { access_token: 'asdsadsa',
  token_type: 'Bearer',
  expiry_date: NaN,
  refresh_token: 'jwt-placeholder' });
nock('https://www.googleapis.com')
  .get(`/calendar/v3/calendars/${calenderId}/events?maxResults=100&singleEvents=true&orderBy=startTime`)
  .reply(200,{
   // USER_COOKIE: true,
    kind: 'calendar#events',
    etag: '"p33setcl4kr9t60g"',
    summary: 'room',
    updated: '2017-05-03T08:25:02.427Z',
    timeZone: 'UTC',
    accessRole: 'owner',
    defaultReminders: [],
    items: ['sddsds']
  });
//
// test('/userevents response with events for user', () => {
//   return agent
//     .get('/userevents')
//   //  .expect('set-cookie', 'cookie=USER_COOKIE; Path=/')
//     .set('Accept', 'application/json')
//     .set('content-type', 'application/json')
//       .then((res)=>{
//         expect(res.status).toBe(200);
//         expect(res.body.kind).toBe('calendar#events');
//       }).catch();
// });
//


nock('https://accounts.google.com')
.post('/o/oauth2/token')
.reply(200, { access_token: 'asdsasassaadsa',
  token_type: 'Bearer',
  expiry_date: NaN,
  refresh_token: 'jwt-placeholder' });
nock('https://www.googleapis.com')
  .post(`/calendar/v3/calendars/${calenderId}/events`)
  .reply(200,{'reply':'created event'});

test('/create event response with created event', () => {
  return request(app)
    .post('/event')
    .send(data)
    .set('Accept', 'application/json')
    .set('content-type', 'application/json')
      .then((res)=>{
        expect(res.status).toBe(401);
      }).catch();
});
