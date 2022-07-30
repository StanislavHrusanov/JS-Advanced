function cookingByNumbers(number, operOne, operTwo, operThree, operFour, operFive) {

    number = cook(number, operOne);
    console.log(number);
    number = cook(number, operTwo);
    console.log(number);
    number = cook(number, operThree);
    console.log(number);
    number = cook(number, operFour);
    console.log(number);
    number = cook(number, operFive);
    console.log(number);

    function cook(number, operation) {

        number = Number(number);

        if (operation == 'chop') {
            number /= 2;
        } else if (operation == 'dice') {
            number = Math.sqrt(number);
            number = number.toFixed(0);
        } else if (operation == 'spice') {
            number += 1;
        } else if (operation == 'bake') {
            number *= 3;
        } else if (operation == 'fillet') {
            number *= 0.80;
            number = number.toFixed(1);
        }

        return number;
    }
}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');