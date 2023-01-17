const { filterTripleAndEven } = require('./arrayUtils');

describe('Array Utils', () => {
    describe('Unsupported type', () => {
        it('Should support only array as input', () => {
            //let values = [1,2,3,4,5,6,7]
            expect(() => filterTripleAndEven({})).toThrow('The Input type did not match the requirement');
        });
    });
});