const { expect } = require('chai');
const library = require('./library');

describe('library', () => {
    describe('calcPriceOfBook()', () => {
        it('check with valid params and second param <=1980', () => {
            expect(library.calcPriceOfBook('a', 1980)).to.equal(`Price of a is 10.00`);
            expect(library.calcPriceOfBook('a', 1979)).to.equal(`Price of a is 10.00`);
        });
        it('check with valid params and second param >1980', () => {
            expect(library.calcPriceOfBook('a', 1981)).to.equal(`Price of a is 20.00`);
        });
        it('throws error if first param is not a string', () => {
            expect(() => { library.calcPriceOfBook(1, 1980) }).to.throw("Invalid input");
            expect(() => { library.calcPriceOfBook(true, 1980) }).to.throw("Invalid input");
            expect(() => { library.calcPriceOfBook([], 1980) }).to.throw("Invalid input");
        });
        it('throws error if second param is not an integer', () => {
            expect(() => { library.calcPriceOfBook('a', 'a') }).to.throw("Invalid input");
            expect(() => { library.calcPriceOfBook('a', true) }).to.throw("Invalid input");
            expect(() => { library.calcPriceOfBook('a', []) }).to.throw("Invalid input");
            expect(() => { library.calcPriceOfBook('a', 1.1) }).to.throw("Invalid input");
        });
    });

    describe('findBook()', () => {
        it('check with valid params and second param is included in first param', () => {
            expect(library.findBook(['a'], 'a')).to.equal('We found the book you want.');
            expect(library.findBook(['a', 'b', 'c'], 'b')).to.equal('We found the book you want.');
        });
        it('check with valid params and second param is not included in first param', () => {
            expect(library.findBook(['a'], 'b')).to.equal('The book you are looking for is not here!');
            expect(library.findBook(['a', 'b', 'c'], 'd')).to.equal('The book you are looking for is not here!');
        });
        it('throws error if first param is empty Array', () => {
            expect(() => { library.findBook([], 'a') }).to.throw('No books currently available');
        });
    });

    describe('arrangeTheBooks()', () => {
        it('check with valid param and param <= available space', () => {
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(39)).to.equal('Great job, the books are arranged.');
        });
        it('check with valid param and param > available space', () => {
            expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
        });
        it('throws error with invalid params', () => {
            expect(() => { library.arrangeTheBooks('a') }).to.throw('Invalid input');
            expect(() => { library.arrangeTheBooks(true) }).to.throw('Invalid input');
            expect(() => { library.arrangeTheBooks([]) }).to.throw('Invalid input');
            expect(() => { library.arrangeTheBooks(-1) }).to.throw('Invalid input');
            expect(() => { library.arrangeTheBooks(1.1) }).to.throw('Invalid input');
        });
    });
});