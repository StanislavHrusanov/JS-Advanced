const { expect } = require('chai');
const lookupChar = require('./lookupChar');

describe('check index from a passed-in string', () => {
    it('check whether first parameter type is valid', () => {
        expect(lookupChar(0, 0)).to.equal(undefined);
    });
    it('check whether second parameter is integer', () => {
        expect(lookupChar('a', 0.1)).to.equal(undefined);
    });
    it('check with index bigger than string length', () => {
        expect(lookupChar('a', 2)).to.equal('Incorrect index');
    });
    it('check with index equal to string length', () => {
        expect(lookupChar('a', 1)).to.equal('Incorrect index');
    });
    it('check with index < 0', () => {
        expect(lookupChar('a', -1)).to.equal('Incorrect index');
    });
    it('check with correct types and values', () => {
        expect(lookupChar('a', 0)).to.equal('a');
    });
    it('check with correct types ans values with bigger string', () => {
        expect(lookupChar('abc', 1)).to.equal('b');
    });
});