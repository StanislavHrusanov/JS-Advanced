const { expect } = require('chai');
const bookSelection = require('./bookSelection');

describe('bookSelection', () => {
    describe('isGenreSuitable()', () => {

        it('check if first param is Thriller or Horror and second is <=12', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 11)).to.equal('Books with Thriller genre are not suitable for kids at 11 age');
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal('Books with Thriller genre are not suitable for kids at 12 age');
            expect(bookSelection.isGenreSuitable('Horror', 11)).to.equal('Books with Horror genre are not suitable for kids at 11 age');
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal('Books with Horror genre are not suitable for kids at 12 age');
        });
        it('check if first param is Thriller or Horror and second is >12', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 13)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Horror', 13)).to.equal('Those books are suitable');
        });
        it('check if first param is not Thriller or Horror and second is <=12', () => {
            expect(bookSelection.isGenreSuitable('a', 11)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('a', 12)).to.equal('Those books are suitable');
        });
        it('check if first param is not Thriller or Horror and second is >12', () => {
            expect(bookSelection.isGenreSuitable('a', 13)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('b', 14)).to.equal('Those books are suitable');
        });
    });
    describe('isItAffordable()', () => {
        it('check with valid params and not enough budget', () => {
            expect(bookSelection.isItAffordable(2, 1)).to.equal("You don't have enough money");
        });
        it('check with valid params and budget >= price', () => {
            expect(bookSelection.isItAffordable(1, 2)).to.equal(`Book bought. You have 1$ left`);
            expect(bookSelection.isItAffordable(1, 1)).to.equal(`Book bought. You have 0$ left`);
        });
        it('throws error with invalid first param', () => {
            expect(() => { bookSelection.isItAffordable('a', 1) }).to.throw('Invalid input');
            expect(() => { bookSelection.isItAffordable('1', 1) }).to.throw('Invalid input');
            expect(() => { bookSelection.isItAffordable(true, 1) }).to.throw('Invalid input');
            expect(() => { bookSelection.isItAffordable([], 1) }).to.throw('Invalid input');
        });
        it('throws error with invalid second param', () => {
            expect(() => { bookSelection.isItAffordable(1, 'a') }).to.throw('Invalid input');
            expect(() => { bookSelection.isItAffordable(1, '1') }).to.throw('Invalid input');
            expect(() => { bookSelection.isItAffordable(1, true) }).to.throw('Invalid input');
            expect(() => { bookSelection.isItAffordable(1, []) }).to.throw('Invalid input');
        });
    });
    describe('suitableTitles()', () => {
        it('check if wantedTitles are suitable', () => {
            const actual = bookSelection.suitableTitles([{ title: 'a', genre: 'b' }], 'b');
            const expected = ['a'];
            expect(actual).to.deep.equal(expected);
        });
        it('check if wantedTitles are not suitable', () => {
            const actual = bookSelection.suitableTitles([{ title: 'a', genre: 'b' }], 'a');
            const expected = [];
            expect(actual).to.deep.equal(expected);
        });
        it('check if first param is empty array', () => {
            const actual = bookSelection.suitableTitles([], 'a');
            const expected = [];
            expect(actual).to.deep.equal(expected);
        });
        it('check with invalid first param', () => {
            expect(() => { bookSelection.suitableTitles('a', 'a') }).to.throw('Invalid input');
            expect(() => { bookSelection.suitableTitles(1, 'a') }).to.throw('Invalid input');
            expect(() => { bookSelection.suitableTitles(true, 'a') }).to.throw('Invalid input');
        });
        it('check with invalid second param', () => {
            expect(() => { bookSelection.suitableTitles([{ title: 'a', genre: 'b' }], 1) }).to.throw('Invalid input');
            expect(() => { bookSelection.suitableTitles([{ title: 'a', genre: 'b' }], true) }).to.throw('Invalid input');
            expect(() => { bookSelection.suitableTitles([{ title: 'a', genre: 'b' }], []) }).to.throw('Invalid input');
        });
    });
});