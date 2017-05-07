const userEvent = require('./eventUtils.js');

const data = {
  summary : 'myTestSummary',
  description : 'mytestDescription',
  startDateTime : 'mytestStartDate',
  endDateTime :'myTestEndDate',
  email: 'mhmdrshorafa@gmail.com'
};

test('test set event',() => {
  const event = userEvent(data);
  expect(event.summary).toBe(data.summary);
  expect(event.description).toBe(data.description);
  expect(event.start.dateTime).toBe(data.startDateTime);
  expect(event.end.dateTime).toBe(data.endDateTime);
  expect(event.attendees[0].email).toBe(data.email);
});
