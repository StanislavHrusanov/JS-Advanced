const { expect } = require('chai');
const StringBuilder = require('./StringBuilder');

describe('StringBuilder', () => {
    it('throws error if passed in arguments !== string', () => {
        expect(() => { new StringBuilder(1) }).to.throw('Argument must be a string');
        expect(() => { new StringBuilder(true) }).to.throw('Argument must be a string');
        expect(() => { new StringBuilder({}) }).to.throw('Argument must be a string');
    });
    it('if instantiated with string', () => {
        expect(new StringBuilder('a').toString()).to.equal('a');
    });
    it('if instantiated without argument', () => {
        expect(new StringBuilder().toString()).to.equal('');
    });

    describe('append()', () => {
        it('passed in argument is string', () => {
            const obj = new StringBuilder('a');
            obj.append('b');
            expect(obj.toString()).to.equal('ab');
        });
        it('tests without passed in argument', () => {
            const obj = new StringBuilder();
            obj.append('b');
            expect(obj.toString()).to.equal('b');
        });
        it('passed in argument is undefined', () => {
            const obj = new StringBuilder(undefined);
            obj.append('a');
            expect(obj.toString()).to.equal('a');
        });
        it('throws error if passed in arguments !== string', () => {
            const obj = new StringBuilder('a');

            expect(() => { obj.append(1) }).to.throw('Argument must be a string');
            expect(() => { obj.append(true) }).to.throw('Argument must be a string');
            expect(() => { obj.append({}) }).to.throw('Argument must be a string');
        });
    });

    describe('prepend()', () => {
        it('passed in argument is string', () => {
            const obj = new StringBuilder('a');
            obj.prepend('b');
            expect(obj.toString()).to.equal('ba');
        });
        it('throws error if passed in arguments !== string', () => {
            const obj = new StringBuilder('a');

            expect(() => { obj.prepend(1) }).to.throw('Argument must be a string');
            expect(() => { obj.prepend(true) }).to.throw('Argument must be a string');
            expect(() => { obj.prepend({}) }).to.throw('Argument must be a string');
        });
        it('do append(), prepend() work in combination', () => {
            const obj = new StringBuilder('abc');
            obj.append('de');
            obj.prepend('ab');
            expect(obj.toString()).to.equal('ababcde');
        });
    });

    describe('insertAt()', () => {
        it('passed in argument is string', () => {
            const obj = new StringBuilder('ac');
            obj.insertAt('b', 1);
            expect(obj.toString()).to.equal('abc');
        });
        it('throws error if passed in arguments !== string', () => {
            const obj = new StringBuilder('ac');

            expect(() => { obj.insertAt(1, 1) }).to.throw('Argument must be a string');
            expect(() => { obj.insertAt(true, 1) }).to.throw('Argument must be a string');
            expect(() => { obj.insertAt({}, 1) }).to.throw('Argument must be a string');
        });
        it('do append(), prepend(), insertAt() work in combination', () => {
            const obj = new StringBuilder('abc');
            obj.append('de');
            obj.prepend('ab');
            obj.insertAt('ab', 2);
            expect(obj.toString()).to.equal('abababcde');
        });
    });

    describe('remove()', () => {
        it('passed in argument is string', () => {
            const obj = new StringBuilder('ab');
            obj.remove(1, 1);
            expect(obj.toString()).to.equal('a');
        });
        it('do append(), prepend(), insertAt(), remove() work in combination', () => {
            const obj = new StringBuilder('abc');
            obj.append('de');
            obj.prepend('ab');
            obj.insertAt('ab', 2);
            obj.remove(4, 2);
            expect(obj.toString()).to.equal('ababcde');
        });
    });
});