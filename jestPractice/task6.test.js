const checkString = require('./task6');

test ('Check for empty string', () => {
    expect(checkString.checkScript('')).toBe('Enter the string');
});

test ('Check for string that contains Script', () => {
    expect(checkString.haveScript('javaScript')).toBe('true');
});

test ('Check for string that does not contains Script', () => {
    expect(checkString.checkScript('HelloWorld')).toBe('false');
});

test ('Check for string that contains white space in between', () => {
    expect(checkString.checkScript('Hello There')).toBe('Enter a one word string with out spaces');
});

test ('Check for string that contains white space before or after script', () => {
    expect(checkString.haveScript('      Script')).toBe('true');
});