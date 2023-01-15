const checkString = require('./task7')

test ('Check for array with regular strings', () => {
    let values = ['this', 'is', 'an', 'array']
    expect(checkString.concatArray(values)).toBe('hissnrray')
}) 

test ('Check for array with empty values', () => {
    let values = ['','','']
    expect(checkString.joinArray(values)).toBe('')
}) 
    
test ('Check for empty Array', () => {
    let values = []
    expect(checkString.concatArray(values)).toBe('')
})