const checkNumber = require('./isPrime');

test('153 is prime', () => {
  expect(checkNumber.isPrime(153)).toBe(true);
});


test('153 is Amstrong Number', () => {
    expect(checkNumber.isAmstrongNumber(153)).toBe(true);
  });