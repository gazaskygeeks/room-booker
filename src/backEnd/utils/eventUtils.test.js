const userEvent = require('./eventUtils.js');

const data = {
  summary : 'myTestSummary',
  description : 'mytestDescription',
  startDateTime : 'Fri May 12 2017 10:00:00 GMT+0300 (EEST)',
  endDateTime :'Fri May 12 2017 12:30:00 GMT+0300 (EEST)'
};

test('test set event',() => {
  const event = userEvent(data);
  expect(event.summary).toBe(data.summary);
  expect(event.description).toBe(data.description);
  expect(new Date(event.start.dateTime).valueOf()).toBe(new Date(data.startDateTime).valueOf());
  expect(new Date(event.end.dateTime).valueOf()).toBe(new Date(data.endDateTime).valueOf());
});
