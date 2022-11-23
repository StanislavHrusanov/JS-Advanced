const { expect } = require('chai');
const mathEnforcer = require('./mathEnforcer');

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('check if parameter is not a number', () => {
            expect(mathEnforcer.addFive('a')).to.equal(undefined);
        });
        it('check with negative number', () => {
            expect(mathEnforcer.addFive(-1)).to.equal(4);
        });
        it('check with positive number', () => {
            expect(mathEnforcer.addFive(1)).to.equal(6);
        });
        it('check with floating-point', () => {
            expect(mathEnforcer.addFive(0.1)).to.be.closeTo(5.1, 0.01);
        });
    });

    describe('subtractTen', () => {
        it('check if parameter is not a number', () => {
            expect(mathEnforcer.subtractTen('a')).to.equal(undefined);
        });
        it('check with negative number', () => {
            expect(mathEnforcer.subtractTen(-1)).to.equal(-11);
        });
        it('check with positive number', () => {
            expect(mathEnforcer.subtractTen(1)).to.equal(-9);
        });
        it('check with floating-point', () => {
            expect(mathEnforcer.subtractTen(0.1)).to.be.closeTo(-9.9, 0.01);
        });
    });

    describe('sum', () => {
        it('check if first parameter is not a number', () => {
            expect(mathEnforcer.sum('a', 0)).to.equal(undefined);
        });
        it('check if second parameter is not a number', () => {
            expect(mathEnforcer.sum(0, 'a')).to.equal(undefined);
        });
        it('check with negative numbers', () => {
            expect(mathEnforcer.sum(-1, -1)).to.equal(-2);
        });
        it('check with positive numbers', () => {
            expect(mathEnforcer.sum(1, 1)).to.equal(2);
        });
        it('check with negative and positive number', () => {
            expect(mathEnforcer.sum(-1, 1)).to.equal(0);
        });
        it('check with floating-point', () => {
            expect(mathEnforcer.sum(0.1, 0.1)).to.be.closeTo(0.2, 0.01);
        });
    });
});