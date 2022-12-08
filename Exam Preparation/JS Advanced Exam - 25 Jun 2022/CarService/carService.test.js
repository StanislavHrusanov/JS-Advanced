const { expect } = require('chai');
const carService = require('./03. Car Service_Resources');

describe('carService', () => {
    describe('isItExpensive()', () => {
        it('check with issue == Engine and issue == Transmission', () => {
            expect(carService.isItExpensive('Engine')).to.equal(`The issue with the car is more severe and it will cost more money`);
            expect(carService.isItExpensive('Transmission')).to.equal(`The issue with the car is more severe and it will cost more money`);
        });
        it('check with random issue', () => {
            expect(carService.isItExpensive('a')).to.equal(`The overall price will be a bit cheaper`);
        });
    });

    describe('discount()', () => {
        it('throw error if first param is not a number', () => {
            expect(() => { carService.discount('a', 1) }).to.throw('Invalid input');
            expect(() => { carService.discount(true, 1) }).to.throw('Invalid input');
            expect(() => { carService.discount({}, 1) }).to.throw('Invalid input');
        });
        it('throw error if second param is not a number', () => {
            expect(() => { carService.discount(1, 'a') }).to.throw('Invalid input');
            expect(() => { carService.discount(1, true) }).to.throw('Invalid input');
            expect(() => { carService.discount(1, {}) }).to.throw('Invalid input');
        });
        it('check if first param is equal or smaller then 2', () => {
            expect(carService.discount(2, 2)).to.equal('You cannot apply a discount');
            expect(carService.discount(1, 2)).to.equal('You cannot apply a discount');
            expect(carService.discount(0, 2)).to.equal('You cannot apply a discount');
            expect(carService.discount(-1, 2)).to.equal('You cannot apply a discount');
        });
        it('check if first param is bigger than 2 and smaller or equal to 7', () => {
            expect(carService.discount(3, 100)).to.equal(`Discount applied! You saved ${15}$`);
            expect(carService.discount(4, 100)).to.equal(`Discount applied! You saved ${15}$`);
            expect(carService.discount(5, 100)).to.equal(`Discount applied! You saved ${15}$`);
            expect(carService.discount(6, 100)).to.equal(`Discount applied! You saved ${15}$`);
            expect(carService.discount(7, 100)).to.equal(`Discount applied! You saved ${15}$`);
        });
        it('check if first param is bigger than 7', () => {
            expect(carService.discount(8, 100)).to.equal(`Discount applied! You saved ${30}$`);
            expect(carService.discount(10, 100)).to.equal(`Discount applied! You saved ${30}$`);
        });
    });

    describe('partsToBuy()', () => {
        it('throw error if first param is not an array', () => {
            expect(() => { carService.partsToBuy('a', []) }).to.throw('Invalid input');
            expect(() => { carService.partsToBuy(1, []) }).to.throw('Invalid input');
            expect(() => { carService.partsToBuy(true, []) }).to.throw('Invalid input');
            expect(() => { carService.partsToBuy({}, []) }).to.throw('Invalid input');
        });
        it('throw error if second param is not an array', () => {
            expect(() => { carService.partsToBuy([], 'a') }).to.throw('Invalid input');
            expect(() => { carService.partsToBuy([], 1) }).to.throw('Invalid input');
            expect(() => { carService.partsToBuy([], true) }).to.throw('Invalid input');
            expect(() => { carService.partsToBuy([], {}) }).to.throw('Invalid input');
        });
        it('check if first array is empty', () => {
            const partsCatalog = [];
            const neededParts = ['a'];
            expect(carService.partsToBuy(partsCatalog, neededParts)).to.equal(0);
        });
        it('check standard behaviour', () => {
            const partsCatalog = [{ part: 'a', price: 1 }];
            const neededParts = ['a'];
            expect(carService.partsToBuy(partsCatalog, neededParts)).to.equal(1);
        });
        it('check with more parts', () => {
            const partsCatalog = [{ part: 'a', price: 1 }, { part: 'b', price: 2 }];
            const neededParts = ['a', 'b'];
            expect(carService.partsToBuy(partsCatalog, neededParts)).to.equal(3);
        });
    });
});