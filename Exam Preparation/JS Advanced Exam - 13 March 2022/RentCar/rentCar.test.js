const { expect } = require('chai');
const rentCar = require('./rentCar');

describe('rentCar', () => {
    describe('searchCar()', () => {
        it('check with valid params and single match', () => {
            const actual = rentCar.searchCar(['a', 'b', 'c'], 'a');
            const expected = 'There is 1 car of model a in the catalog!';
            expect(actual).to.equal(expected);
        });
        it('check with valid params and multiple match', () => {
            const actual = rentCar.searchCar(['a', 'b', 'a'], 'a');
            const expected = 'There is 2 car of model a in the catalog!';
            expect(actual).to.equal(expected);
        });
        it('check with valid params and no match', () => {
            expect(() => { rentCar.searchCar(['a', 'b', 'c'], 'd') }).to.throw('There are no such models in the catalog!');
            expect(() => { rentCar.searchCar(['a', 1, true], 'd') }).to.throw('There are no such models in the catalog!');
            expect(() => { rentCar.searchCar([], 'd') }).to.throw('There are no such models in the catalog!');
        });
        it('trows error with invalid first param', () => {
            expect(() => { rentCar.searchCar('a', 'd') }).to.throw('Invalid input!');
            expect(() => { rentCar.searchCar(1, 'd') }).to.throw('Invalid input!');
            expect(() => { rentCar.searchCar(true, 'd') }).to.throw('Invalid input!');
            expect(() => { rentCar.searchCar({}, 'd') }).to.throw('Invalid input!');
        });
        it('trows error with invalid second param', () => {
            expect(() => { rentCar.searchCar(['a'], 1) }).to.throw('Invalid input!');
            expect(() => { rentCar.searchCar(['a'], true) }).to.throw('Invalid input!');
            expect(() => { rentCar.searchCar(['a'], {}) }).to.throw('Invalid input!');
        });
    });
    describe('calculatePriceOfCar()', () => {
        it('check with valid params and match', () => {
            expect(rentCar.calculatePriceOfCar('BMW', 1)).to.equal('You choose BMW and it will cost $45!');
            expect(rentCar.calculatePriceOfCar('Mercedes', 2)).to.equal('You choose Mercedes and it will cost $100!');
        });
        it('check with valid params and no match', () => {
            expect(() => { rentCar.calculatePriceOfCar('a', 1) }).to.throw('No such model in the catalog!');
        });
        it('trows error with invalid first param', () => {
            expect(() => { rentCar.calculatePriceOfCar(1, 1) }).to.throw('Invalid input!');
            expect(() => { rentCar.calculatePriceOfCar(true, 1) }).to.throw('Invalid input!');
            expect(() => { rentCar.calculatePriceOfCar([], 1) }).to.throw('Invalid input!');
        });
        it('trows error with invalid second param', () => {
            expect(() => { rentCar.calculatePriceOfCar('a', 'a') }).to.throw('Invalid input!');
            expect(() => { rentCar.calculatePriceOfCar('a', true) }).to.throw('Invalid input!');
            expect(() => { rentCar.calculatePriceOfCar('a', []) }).to.throw('Invalid input!');
        });
    });
    describe('checkBudget()', () => {
        it('check with valid params and enough budget', () => {
            expect(rentCar.checkBudget(1, 1, 1)).to.equal('You rent a car!');
            expect(rentCar.checkBudget(1, 1, 2)).to.equal('You rent a car!');
            expect(rentCar.checkBudget(2, 2, 6)).to.equal('You rent a car!');
        });
        it('check with valid params and not enough budget', () => {
            expect(rentCar.checkBudget(1, 2, 1)).to.equal('You need a bigger budget!');
            expect(rentCar.checkBudget(3, 3, 2)).to.equal('You need a bigger budget!');
        });
        it('throws error with invalid first param', () => {
            expect(() => { rentCar.checkBudget('1', 2, 1) }).to.throw('Invalid input!');
            expect(() => { rentCar.checkBudget(true, 2, 1) }).to.throw('Invalid input!');
            expect(() => { rentCar.checkBudget([], 2, 1) }).to.throw('Invalid input!');
        });
        it('throws error with invalid second param', () => {
            expect(() => { rentCar.checkBudget(1, 'a', 1) }).to.throw('Invalid input!');
            expect(() => { rentCar.checkBudget(1, true, 1) }).to.throw('Invalid input!');
            expect(() => { rentCar.checkBudget(1, [], 1) }).to.throw('Invalid input!');
        });
        it('throws error with invalid third param', () => {
            expect(() => { rentCar.checkBudget(1, 2, 'a') }).to.throw('Invalid input!');
            expect(() => { rentCar.checkBudget(1, 2, true) }).to.throw('Invalid input!');
            expect(() => { rentCar.checkBudget(1, 2, []) }).to.throw('Invalid input!');
        });
    });
});