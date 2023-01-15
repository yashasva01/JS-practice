const checkStr = require('./task4')

test('Checking for an empty array', () => {
    let values = []
    expect(checkStr.longestStr(values)).toBe('')
})

test('Checking for array with values', () => {
    let values = ['we', 'love', 'code', 'academy']
    expect(checkStr.longestStr(values)).toBe('academy')
})

