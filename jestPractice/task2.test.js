const checkDigit = require('./task2')


test ('Checking for all same digits', () => {
    expect(checkDigit.checkAlldigitSame(2222)).toBe(true)
})

test ('Check for number having only one digit', () => {
    expect(checkDigit.checkAlldigitSame(2)).toBe(false)
})

test ('Check for number having different digits', () => {
    expect(checkDigit.checkAlldigitSame(234)).toBe(false)
})


test ('Checking for negative number', () => {
    expect(checkDigit.isSameDigits(-222)).toBe('Negative Numbers Not Supported')
})

test ('Checking for Float Values', () => {
    expect(checkDigit.isSameDigits(222.222)).toBe('Float Values Not Supported')
})