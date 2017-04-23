const request = require('supertest');
const express = require('express');
const app = express();
jest.mock('../database/client.js');
const client = require('../database/client.js');
client.mockImplementation(()=>({}));
const routes = require('./routes.js');
app.use(routes);

test('add ', () => {

  return request(app)
  .get('/test')
  .expect(200)
  .then(()=>{
    expect(1+2).toBe(3);
  });

});
