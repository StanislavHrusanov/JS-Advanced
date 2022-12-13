const { expect } = require('chai');
const companyAdministration = require('./companyAdministration');

describe('companyAdministration', () => {
    describe('hiringEmployee()', () => {
        it('check with valid params and third param equal or greather than 3', () => {
            expect(companyAdministration.hiringEmployee('Stan', 'Programmer', 3)).to.equal('Stan was successfully hired for the position Programmer.');
            expect(companyAdministration.hiringEmployee('Stan', 'Programmer', 4)).to.equal('Stan was successfully hired for the position Programmer.');
        });
        it('check with valid params and third param smaller than 3', () => {
            expect(companyAdministration.hiringEmployee('Stan', 'Programmer', 2)).to.equal('Stan is not approved for this position.');
        });
        it('throws error if second param is not Programmer', () => {
            expect(() => { companyAdministration.hiringEmployee('Stan', 'Driver', 1) }).to.throw('We are not looking for workers for this position.');
        });
    });

    describe('calculateSalary()', () => {
        it('check with valid param and value of param is equal or smaller than 160', () => {
            expect(companyAdministration.calculateSalary(1)).to.equal(15);
            expect(companyAdministration.calculateSalary(160)).to.equal(2400);
            expect(companyAdministration.calculateSalary(0)).to.equal(0);
        });
        it('check with valid param and value of param is greater than 160', () => {
            expect(companyAdministration.calculateSalary(161)).to.equal(3415);
        });
        it('throws error with invalid typeof param', () => {
            expect(() => { companyAdministration.calculateSalary('a') }).to.throw('Invalid hours');
            expect(() => { companyAdministration.calculateSalary(true) }).to.throw('Invalid hours');
            expect(() => { companyAdministration.calculateSalary([]) }).to.throw('Invalid hours');
        });
        it('throws error with negative value of param', () => {
            expect(() => { companyAdministration.calculateSalary(-1) }).to.throw('Invalid hours');
        });

        describe('firedEmployee()', () => {
            it('check with valid params', () => {
                expect(companyAdministration.firedEmployee(['a'], 0)).to.equal('');
                expect(companyAdministration.firedEmployee(['a', 'b'], 0)).to.equal('b');
                expect(companyAdministration.firedEmployee(['a', 'b', 'c'], 1)).to.equal('a, c');
            });
            it('throws error with invalid typeof first param', () => {
                expect(() => { companyAdministration.firedEmployee('a', 0) }).to.throw('Invalid input');
                expect(() => { companyAdministration.firedEmployee(1, 0) }).to.throw('Invalid input');
                expect(() => { companyAdministration.firedEmployee(true, 0) }).to.throw('Invalid input');
            });
            it('throws error with invalid typeof second param', () => {
                expect(() => { companyAdministration.firedEmployee(['a'], 'a') }).to.throw('Invalid input');
                expect(() => { companyAdministration.firedEmployee(['a'], true) }).to.throw('Invalid input');
                expect(() => { companyAdministration.firedEmployee(['a'], []) }).to.throw('Invalid input');
            });
            it('throws error if second param is out of range', () => {
                expect(() => { companyAdministration.firedEmployee([], 0) }).to.throw('Invalid input');
                expect(() => { companyAdministration.firedEmployee(['a'], 1) }).to.throw('Invalid input');
                expect(() => { companyAdministration.firedEmployee(['a'], -1) }).to.throw('Invalid input');
            });
        });
    });
});