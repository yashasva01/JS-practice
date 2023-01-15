const checkChar = require('./task9')

test ('Check for an Empty String', () => {
    expect(checkChar.changeChar('')).toBe('Do not enter empty string')
}) 

test ('Check for a normal string', () => {
    expect(checkChar.replaceChar('codeacademy')).toBe('dpefbdbefnz')
}) 

test ('Check for a string with upper case', () => {
    expect(checkChar.changeChar('CodEAcademy')).toBe('DpeFBdbefnz')
})

test ('Check for a string with white space in between', () => {
    expect(checkChar.changeChar('CodEAcademy is so good')).toBe('Do not include spaces')
})