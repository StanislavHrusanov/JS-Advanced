class Textbox {
    constructor(selector, regex) {
        this._value = '';
        this._elements = document.querySelectorAll(selector);
        this._invalidSymbols = regex;

    }
    get value() {
        return this._value;
    }
    set value(value) {
        Array.from(this._elements).forEach(el => el.value = value);
        this._value = value;
    }
    get elements() {
        return this._elements;
    }
    isValid() {
        if (this._invalidSymbols.test(this.value)) {
            return false;
        } else {
            return true;
        }
    }
}

let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('textbox');

Array.from(inputs).forEach(i => i.addEventListener('input', function () { console.log(i.value) }));
