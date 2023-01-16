const checkYear = require('./task5');

test ('Check for a leap year', () => {
    expect(checkYear.checkleapYear(2012)).toBe('true');
});

test ('Check for a non leap year', () => {
    expect(checkYear.isLeapYear(2019)).toBe('false');
});

test ('Check for 0 as a year', () => {
    expect(checkYear.checkleapYear(0)).toBe('true');
});

test ('Check for a negative input for year', () => {
    expect(checkYear.isLeapYear(-2012)).toBe('Enter a Valid Year');
});