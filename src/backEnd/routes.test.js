const request = require('supertest');
const express = require('express');
const utils= require('./utils/utils.js');
const bodyParser = require('body-parser');
const app = express();
jest.mock('../database/client.js');
const client = require('../database/client.js');
client.mockImplementation(() => ({}));




const routes = require('./routes.js');
const data = {
  accessToken: 'ya29.Glw1BFPcruLIrQlbGQxBECmlvUP3WtrcBa4SeF3EfiUGa9FC4hAnBLFxDym-9A4_1fp1To79Qz79CGAzTWQBQ2uY1hryzZLDhIajo_6aIvfIlR0WoM8CcSzOkbYSHA',
  email: 'mhmdrshorafa@gmail.com',
  firstName: 'Mhmd',
  icon: 'https://lh4.googleusercontent.com/-AIZEMtjIqRg/AAAAAAAAAAI/AAAAAAAACOY/lngBbKXd_4w/s96-c/photo.jpg',
  id: '110651311797916349880',
  lastName: 'Shorafa'
};

app.use(bodyParser.json());
app.use(routes);

test('add ', () => {

  return request(app)
    .post('/user')
    .send(data)
    .set('Accept', 'application/json')
    .set('content-type', 'application/json')
    .then(() => {
      const spyiedFunction = jest.spyOn(utils, 'checkAuth')
      .mockImplementation( () => Promise.resolve('mhmdrshorafa@gmail.com') );
      spyiedFunction().then((res)=>{
        expect(res).toBe('mhmdrshorafa@gmail.com');
      });
    });
});
