const event = require('./event.js');
const data = {
  summary : 'myTestSummary',
  description : 'mytestDescription',
  dateStart : 'mytestStartDate',
  dateEnd :'myTestEndDate',
  organizerEmail:'myTestOrganizerEmail',
  organizerName : 'myTestOrganizerName'
};

test('test set event',() => {
  event.setEvent(data);
  expect(event.getEvent.summary).toBe(data.summary);
  expect(event.getEvent.description).toBe(data.description);
  expect(event.getEvent.start.dateTime).toBe(data.dateStart);
  expect(event.getEvent.end.dateTime).toBe(data.dateEnd);
  expect(event.getEvent.organizer.email).toBe(data.organizerEmail);
  expect(event.getEvent.organizer.displayName).toBe(data.organizerName);
});
