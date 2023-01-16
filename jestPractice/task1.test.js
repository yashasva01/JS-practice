const greatEvenNumber = require('./task1');

test('Verification of greatest even element in Normal input array', () => {
    let values = [1,2,3,4,5,6];
    expect(greatEvenNumber.findGreatestEven(values)).toBe(6);
});

test('Verification of greatest even element in array of zeros', () => {
    let values = [0,0,0,0,0,0];
    expect(greatEvenNumber.findGreatestEven(values)).toBe(0);
});

test('Verification of greatest even element in array of zeros', () => {
    let values = [];
    expect(greatEvenNumber.findGreatestEven(values)).toBe('Array Empty');
});


// For arrow function
test('Verification of greatest even element in array having float valuess', () => {
    let values = [1.6,2.5,3,4,5,6];
    expect(greatEvenNumber.biggestEvenNumber(values)).toBe('Float Value Found Check Input');
});

test('Verification of greatest even element in array of zeros', () => {
    let values = [0,0,0,0,0,0];
    expect(greatEvenNumber.biggestEvenNumber(values)).toBe(0);
});

test('Verification of greatest even element in array of zeros', () => {
    let values = [];
    expect(greatEvenNumber.biggestEvenNumber(values)).toBe('Array Empty');
});


// Array of zeros
// Array of normal numbers
// Array of only even numbers
// Array of float
