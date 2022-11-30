const { expect } = require('chai');
const PaymentPackage = require('./PaymentPackage');

describe('PaymentPackage', () => {
    it('is instantiated with two params', () => {
        const payment = new PaymentPackage('a', 1);
        expect(payment.name === 'a').to.equal(true);
        expect(payment.value === 1).to.equal(true);
    });

    it('throws error with invalid first param', () => {
        expect(() => { new PaymentPackage('', 1) }).to.throw('Name must be a non-empty string');
        expect(() => { new PaymentPackage(1, 1) }).to.throw('Name must be a non-empty string');
        expect(() => { new PaymentPackage(true, 1) }).to.throw('Name must be a non-empty string');
        expect(() => { new PaymentPackage([], 1) }).to.throw('Name must be a non-empty string');
        expect(() => { new PaymentPackage({}, 1) }).to.throw('Name must be a non-empty string');
    });
    it('accessor name set value of the name with valid value of name and get it', () => {
        const payment = new PaymentPackage('a', 1);
        payment.name = 'b';
        expect(payment.name).to.equal('b');
    });
    it('throws error with invalid second param', () => {
        expect(() => { new PaymentPackage('a', -1) }).to.throw('Value must be a non-negative number');
        expect(() => { new PaymentPackage('a', '1') }).to.throw('Value must be a non-negative number');
        expect(() => { new PaymentPackage('a', true) }).to.throw('Value must be a non-negative number');
        expect(() => { new PaymentPackage('a', []) }).to.throw('Value must be a non-negative number');
        expect(() => { new PaymentPackage('a', {}) }).to.throw('Value must be a non-negative number');
    });
    it('accessor value set value of the value with valid value of value and get it', () => {
        const payment = new PaymentPackage('a', 1);
        payment.value = 2;
        expect(payment.value).to.equal(2);
    });
    it('accessor VAT get value of the VAT', () => {
        const payment = new PaymentPackage('a', 1);
        expect(payment.VAT).to.equal(20);
    });
    it('accessor VAT set value of the VAT with valid value of VAT', () => {
        const payment = new PaymentPackage('a', 1);
        payment.VAT = 2;
        expect(payment.VAT).to.equal(2);
    });
    it('accessor VAT set value of the VAT with invalid value of VAT', () => {
        const payment = new PaymentPackage('a', 1);
        expect(() => { payment.VAT = -1 }).to.throw('VAT must be a non-negative number');
        expect(() => { payment.VAT = '1' }).to.throw('VAT must be a non-negative number');
        expect(() => { payment.VAT = true }).to.throw('VAT must be a non-negative number');
        expect(() => { payment.VAT = [] }).to.throw('VAT must be a non-negative number');
        expect(() => { payment.VAT = {} }).to.throw('VAT must be a non-negative number');
    });
    it('accessor active get value of the active', () => {
        const payment = new PaymentPackage('a', 1);
        expect(payment.active).to.equal(true);
    });
    it('accessor active set value of the active with valid value of active', () => {
        const payment = new PaymentPackage('a', 1);
        payment.active = false;
        expect(payment.active).to.equal(false);
    });
    it('accessor active set value of the active with invalid value of active', () => {
        const payment = new PaymentPackage('a', 1);
        expect(() => { payment.active = '1' }).to.throw('Active status must be a boolean');
        expect(() => { payment.active = 1 }).to.throw('Active status must be a boolean');
        expect(() => { payment.active = [] }).to.throw('Active status must be a boolean');
        expect(() => { payment.active = {} }).to.throw('Active status must be a boolean');
    });

    describe('toString()', () => {
        it('test standard behavior', () => {
            const payment = new PaymentPackage('a', 100);
            const output = [
                `Package: a`,
                `- Value (excl. VAT): 100`,
                `- Value (VAT 20%): 120`
            ];
            expect(payment.toString()).to.equal(output.join('\n'));
        });
        it('test with active status === false', () => {
            const payment = new PaymentPackage('a', 100);
            payment.active = false;
            const output = [
                `Package: a (inactive)`,
                `- Value (excl. VAT): 100`,
                `- Value (VAT 20%): 120`
            ];
            expect(payment.toString()).to.equal(output.join('\n'));
        });
        it('test with changed value of VAT', () => {
            const payment = new PaymentPackage('a', 0);
            payment.VAT = 0;
            const output = [
                `Package: a`,
                `- Value (excl. VAT): 0`,
                `- Value (VAT 0%): 0`
            ];
            expect(payment.toString()).to.equal(output.join('\n'));
        });
    });
});