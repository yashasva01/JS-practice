const { calculateDouble } = require('./doubleNumber');

describe('Array Utils', () => {
    describe('Unsupported type', () => {
        it('Should support only array of integer as input', () => {
            expect(()=> calculateDouble({})).toThrow('The Input type did not match the requirement');
        });
        it('Should return an array of integer with double the value', () => {
            let values = [1, 2, 3, 4];
            expect(calculateDouble(values)).toEqual([ 2, 4, 6, 8 ]);
        });
    });
}); 