const { expect } = require('chai');
const isOddOrEven = require('./isOddOrEven');

describe('check whether length of the string is odd or even', () => {
    it('check whether passed parameter is not a string', () => {
        expect(isOddOrEven(1)).to.equal(undefined);
    });
    it('check string with odd length', () => {
        expect(isOddOrEven('a')).to.equal('odd');
    });
    it('check string with even length', () => {
        expect(isOddOrEven('aa')).to.equal('even');
    });
});