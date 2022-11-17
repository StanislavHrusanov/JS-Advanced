const { expect } = require('chai');
const createCalculator = require('./AddSubtract');

describe('Add ,subtract, get', () => {
    it('is returned object contains method add', () => {
        expect(typeof createCalculator().add).to.equal('function');
    });
    it('is returned object contains method subtract', () => {
        expect(typeof createCalculator().subtract).to.equal('function');
    });
    it('is returned object contains method get', () => {
        expect(typeof createCalculator().get).to.equal('function');
    });
    it('can value modify from outside', () => {
        expect(createCalculator().value).to.equal(undefined);
    });
    it('is function add add to internal sum', () => {
        const calculator = createCalculator();
        calculator.add('1');
        expect(calculator.get()).to.equal(1);
    });
    it('is function subtract subtract from internal sum', () => {
        const calculator = createCalculator();
        calculator.subtract('1');
        expect(calculator.get()).to.equal(-1);
    });
});