const greatEvenNumber = require('./task1')

test('Verification of greatest even element in Array', () => {
    let values = [1,2,3,4,5,6]
    expect(greatEvenNumber(values)).toBe(6)
})