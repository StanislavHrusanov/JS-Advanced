function rectangle(width, height, color) {
    return {
        width,
        height,
        color: changeFirstLetter(color),
        calcArea: function () {
            return this.width * this.height;
        }
    }
    function changeFirstLetter(word) {
        let firstLetter = word.slice(0, 1);
        let otherLetters = word.slice(1);
        return firstLetter.toUpperCase() + otherLetters;
    }
}
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
