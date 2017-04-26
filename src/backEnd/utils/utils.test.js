const { validEmail } = require('./utils.js');

test('email validator', () =>
  expect(validEmail('ok@mercycorps.com')).toBe(true)
);
