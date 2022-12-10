class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }
    addBook(bookName, bookAuthor) {
        if (this.books.length >= this.capacity) {
            throw new Error('Not enough space in the collection.');
        }
        this.books.push({
            bookName: bookName,
            bookAuthor: bookAuthor,
            payed: false
        });
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }
    payBook(bookName) {

        for (let i = 0; i < this.books.length; i++) {
            let book = this.books[i];
            if (book.bookName === bookName) {

                if (book.payed) {
                    throw new Error(`${bookName} has already been paid.`);
                } else {
                    book.payed = true;
                    return `${bookName} has been successfully paid.`
                }
            }
        }
        throw new Error(`${bookName} is not in the collection.`);
    }
    removeBook(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            let book = this.books[i];
            if (book.bookName === bookName) {

                if (book.payed) {
                    this.books.splice(i, 1);
                    return `${bookName} remove from the collection.`;
                } else {
                    throw new Error(`${bookName} need to be paid before removing from the collection.`);
                }
            }
        }
        throw new Error("The book, you're looking for, is not found.");
    }
    getStatistics(bookAuthor) {
        if (bookAuthor === undefined) {
            let output = `The book collection has ${this.capacity - this.books.length} empty spots left.`;
            let sorted = this.books.slice().sort((a, b) => a.bookName.localeCompare(b.bookName));
            sorted.forEach(book => {
                if (book.payed) {
                    output += `\n${book.bookName} == ${book.bookAuthor} - Has Paid.`;
                } else {
                    output += `\n${book.bookName} == ${book.bookAuthor} - Not Paid.`;
                }
            });
            return output;
        } else {
            let output = [];
            this.books.forEach(book => {
                if (book.bookAuthor === bookAuthor) {
                    if (book.payed) {
                        output.push(`${book.bookName} == ${book.bookAuthor} - Has Paid.`);
                    } else {
                        output.push(`${book.bookName} == ${book.bookAuthor} - Not Paid.`);
                    }
                }
            });
            if (output.length > 0) {
                return output.join('\n');
            } else {
                throw new Error(`${bookAuthor} is not in the collection.`);
            }
        }
    }
}