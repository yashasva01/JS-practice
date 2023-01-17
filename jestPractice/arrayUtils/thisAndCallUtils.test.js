const { division } = require('./thisAndCallUtils');


describe('Division Utility', () => {
    describe('Divided by zero', () => {
        it('Should throw an error when the denominator in 0', () => {
            expect( () => division(10, 0) ).toThrow('Denominator can not have value 0');
        });
        it('normal',()=>{
            expect(division(10,2)).toBe(5);
        });
    });
});