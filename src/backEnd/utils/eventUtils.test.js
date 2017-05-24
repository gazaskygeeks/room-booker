const userEvent = require('./eventUtils.js');

const data = {
  summary : 'myTestSummary',
  description : 'mytestDescription',
  startDateTime : new Date(),
  endDateTime :new Date(),
  email: 'roombooking@gazaskygeeks.com'
};

test('test set event',() => {
  const event = userEvent(data);
  expect(event.summary).toBe(data.summary);
  expect(event.description).toBe(data.description);
  expect(event.start.dateTime.toString()).toBe(data.startDateTime.toString());
  expect(event.end.dateTime.toString()).toBe(data.endDateTime.toString());

});
