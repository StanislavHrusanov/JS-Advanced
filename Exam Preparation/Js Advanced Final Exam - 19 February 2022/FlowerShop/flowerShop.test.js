const { expect } = require('chai');
const flowerShop = require('./flowerShop');

describe('flowerShop', () => {
    describe('calcPriceOfFlowers()', () => {
        it('check with valid params', () => {
            expect(flowerShop.calcPriceOfFlowers('a', 1, 2)).to.equal(`You need $2.00 to buy a!`);
        });
        it('throws error if first param is invalid', () => {
            expect(() => { flowerShop.calcPriceOfFlowers(1, 1, 2) }).to.throw('Invalid input!');
            expect(() => { flowerShop.calcPriceOfFlowers(true, 1, 2) }).to.throw('Invalid input!');
            expect(() => { flowerShop.calcPriceOfFlowers([], 1, 2) }).to.throw('Invalid input!');
        });
        it('throws error if second param is invalid', () => {
            expect(() => { flowerShop.calcPriceOfFlowers('a', 'a', 2) }).to.throw('Invalid input!');
            expect(() => { flowerShop.calcPriceOfFlowers('a', true, 2) }).to.throw('Invalid input!');
            expect(() => { flowerShop.calcPriceOfFlowers('a', [], 2) }).to.throw('Invalid input!');
        });
        it('throws error if third param is invalid', () => {
            expect(() => { flowerShop.calcPriceOfFlowers('a', 1, 'a') }).to.throw('Invalid input!');
            expect(() => { flowerShop.calcPriceOfFlowers('a', 1, true) }).to.throw('Invalid input!');
            expect(() => { flowerShop.calcPriceOfFlowers('a', 1, []) }).to.throw('Invalid input!');
        });
    });
    describe('checkFlowersAvailable()', () => {
        it('check with valid params and available', () => {
            expect(flowerShop.checkFlowersAvailable('a', ['a'])).to.equal('The a are available!');
            expect(flowerShop.checkFlowersAvailable('a', ['b', 'a', 'c'])).to.equal('The a are available!');
        });
        it('check when flowers are unavailable', () => {
            expect(flowerShop.checkFlowersAvailable('a', ['b'])).to.equal('The a are sold! You need to purchase more!');
            expect(flowerShop.checkFlowersAvailable('a', [1, true, {}])).to.equal('The a are sold! You need to purchase more!');
            expect(flowerShop.checkFlowersAvailable('a', [])).to.equal('The a are sold! You need to purchase more!');
        });
    });
    describe('sellFlowers()', () => {
        it('check with valid params', () => {
            expect(flowerShop.sellFlowers(['a'], 0)).to.equal('');
            expect(flowerShop.sellFlowers(['a', 'b', 'c'], 1)).to.equal('a / c');
        });
        it('throws error if first param is invalid typeof', () => {
            expect(() => { flowerShop.sellFlowers('a', 0) }).to.throw('Invalid input!');
            expect(() => { flowerShop.sellFlowers(1, 0) }).to.throw('Invalid input!');
            expect(() => { flowerShop.sellFlowers(true, 0) }).to.throw('Invalid input!');
        });
        it('throws error if second param is invalid typeof', () => {
            expect(() => { flowerShop.sellFlowers(['a'], 'a') }).to.throw('Invalid input!');
            expect(() => { flowerShop.sellFlowers(['a'], true) }).to.throw('Invalid input!');
            expect(() => { flowerShop.sellFlowers(['a'], []) }).to.throw('Invalid input!');
        });
        it('throws error if second input is out of range', () => {
            expect(() => { flowerShop.sellFlowers(['a'], 1) }).to.throw('Invalid input!');
            expect(() => { flowerShop.sellFlowers(['a'], -1) }).to.throw('Invalid input!');
            expect(() => { flowerShop.sellFlowers([], 0) }).to.throw('Invalid input!');
        });
    });
});