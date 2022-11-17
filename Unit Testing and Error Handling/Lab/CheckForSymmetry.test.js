const { expect } = require('chai');
const isSymmetric = require('./CheckForSymmetry');

describe('is array symmetric', () => {
    it('returns true for valid symmetric input', () => {
        expect(isSymmetric([1, 1])).to.equal(true);
    });
    it('returns false for valid non-symmetric input', () => {
        expect(isSymmetric([1, 2])).to.equal(false);
    });
    it('returns false for invalid arguments', () => {
        expect(isSymmetric(1)).to.equal(false);
    });
    it('returns true for odd-number symmetric valid argument', () => {
        expect(isSymmetric([1, 1, 1])).to.equal(true);
    });
    it('returns false for type-coerced elements', () => {
        expect(isSymmetric([1, '1'])).to.equal(false);
    });
    it('returns true for mixed-type of symmetric, valid argument', () => {
        expect(isSymmetric([1, 'a', 'a', 1])).to.equal(true);
    });
    it('returns false for mixed-type of non-symmetric valid argument', () => {
        expect(isSymmetric([1, 'a', 'b', 1])).to.equal(false);
    });
});