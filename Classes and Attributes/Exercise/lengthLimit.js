class Stringer {
    constructor(str, length) {
        this.innerString = str;
        this.innerLength = length;
    }
    increase(length) {
        this.innerLength = this.innerLength + length;

    }
    decrease(length) {
        this.innerLength = this.innerLength - length;
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }
    toString() {
        if (this.innerString.length > this.innerLength) {
            const difference = this.innerString.length - this.innerLength;
            return this.innerString.slice(0, this.innerString.length - difference) + '...';
        }
        if (this.innerLength === 0) {
            return '...';
        }
        return this.innerString;
    }
}
let test = new Stringer("Test", 5);
console.log(test.toString());
test.decrease(3);
console.log(test.toString());
test.decrease(5);
console.log(test.toString());
test.increase(4);
console.log(test.toString());



