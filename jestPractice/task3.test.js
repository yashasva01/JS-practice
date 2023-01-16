const checkString = require('./task3');


test('Checking for a string input', () => {
    expect(checkString.changeCase('MeRRy hAD a LITTle lAMp')).toBe('mErrY Had A littLE LamP');
});

test('Checking for Empty string', () => {
    expect(checkString.changeCase('')).toBe('Can not enter empty string');
});

test('Checking for number as a string', () => {
    expect(checkString.convertCase('1234')).toBe('The input is a number cant change the case of the number');
});

test('Checking for number instead of a string', () => {
    expect(checkString.convertCase(12324)).toBe('The input type is not string check the input again');
});