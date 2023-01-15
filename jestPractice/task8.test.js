const checkVowel = require('./task8.js')

test ('Check for String having lower case vowel', () => {
    expect(checkVowel.countVowels('codeacademy')).toBe(5)
}) 

test ('Check for String having upper case vowel', () => {
    expect(checkVowel.numOfVowels('CODEacademy')).toBe(5)
})

test ('Check for an empty string', () => {
    expect(checkVowel.countVowels('')).toBe(0)
}) 

test ('Check for string having no vowels', () => {
    expect(checkVowel.numOfVowels('hhhggttrr')).toBe(0)
}) 
