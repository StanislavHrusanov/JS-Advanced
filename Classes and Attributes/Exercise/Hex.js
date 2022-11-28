class Hex {
    constructor(value) {
        this._value = value;
    }
    valueOf() {
        return this._value;
    }
    toString() {
        return '0x' + this._value.toString(16).toUpperCase();
    }
    plus(number) {
        return new Hex(this._value + Number(number.valueOf()));
    }
    minus(number) {
        return new Hex(this._value - Number(number.valueOf()));
    }
    parse(string) {
        return parseInt(string, 16);
    }
}
let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(FF.parse('AAA'));

