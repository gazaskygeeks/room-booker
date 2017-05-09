const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
const routes = require('../routes.js');
app.use(bodyParser.json());
app.use(cookieParser('secret'));
app.use(routes);
const calenderId = '1m5k20i4kuknts1fr7v7qql8v0@group.calendar.google.com';

const request = require('supertest');
const nock = require('nock');

// const data = {
//   summary : 'myTestSummary',
//   description : 'mytestDescription',
//   startDateTime : 'mytestStartDate',
//   endDateTime :'myTestEndDate',
//   email: 'mhmdrshorafa@gmail.com'
// };

nock('https://accounts.google.com')
.post('/o/oauth2/token')
.reply(200, { access_token: 'asdsadsa',
  token_type: 'Bearer',
  expiry_date: NaN,
  refresh_token: 'jwt-placeholder' });
nock('https://www.googleapis.com')
  .get(`/calendar/v3/calendars/${calenderId}/events?maxResults=100&singleEvents=true&orderBy=startTime`)
  .reply(200,{
    kind: 'calendar#events',
    etag: '"p33setcl4kr9t60g"',
    summary: 'room',
    updated: '2017-05-03T08:25:02.427Z',
    timeZone: 'UTC',
    accessRole: 'owner',
    defaultReminders: [],
    items: ['sddsds']
  });

test('/event response with events', () => {
  return request(app)
    .get('/events')
    .set('Accept', 'application/json')
    .set('content-type', 'application/json')
      .then((res)=>{
        expect(res.status).toBe(200);
        expect(res.body.kind).toBe('calendar#events');
      }).catch();
});

nock('https://accounts.google.com')
.post('/o/oauth2/token')
.reply(401, { access_token: undefined,
  token_type: '',
  expiry_date: NaN,
  refresh_token: 'jwt-placeholder' });
nock('https://www.googleapis.com')
  .get(`/calendar/v3/calendars/${calenderId}/events?maxResults=100&singleEvents=true&orderBy=startTime`)
  .reply(401);

test('/event response with events', () => {
  return request(app)
    .get('/events')
    .set('Accept', 'application/json')
    .set('content-type', 'application/json')
      .then((res)=>{
        expect(res.status).toBe(401);
      }).catch();
});


// nock('https://accounts.google.com')
// .post('/o/oauth2/token')
// .reply(200, { access_token: 'asdsasassaadsa',
//   token_type: 'Bearer',
//   expiry_date: NaN,
//   refresh_token: 'jwt-placeholder' });
// nock('https://www.googleapis.com')
//   .post(`/calendar/v3/calendars/${calenderId}/events`)
//   .reply(200,{'reply':'created event'});
//
// test('/create event response with created event', () => {
//   return request(app)
//     .post('/events')
//     .send(data)
//     .set('Accept', 'application/json')
//     .set('content-type', 'application/json')
//       .then((res)=>{
//         expect(res.status).toBe(200);
//       }).catch();
// });
