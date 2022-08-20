function jansNotation(arr) {
    let numbers = [];
    let isEnoughOperands = true;

    for (let el of arr) {
        if (Number.isInteger(el)) {
            numbers.push((el));
        } else {
            if (el == '+' && numbers.length > 1) {
                let secondOperand = numbers.splice(-1);
                let firstOperand = numbers.splice(-1);
                numbers.push(add(firstOperand[0], secondOperand[0]));
            } else if (el == '-' && numbers.length > 1) {
                let secondOperand = numbers.splice(-1);
                let firstOperand = numbers.splice(-1);
                numbers.push(subtract(firstOperand[0], secondOperand[0]));
            } else if (el == '*' && numbers.length > 1) {
                let secondOperand = numbers.splice(-1);
                let firstOperand = numbers.splice(-1);
                numbers.push(multiply(firstOperand[0], secondOperand[0]));
            } else if (el == '/' && numbers.length > 1) {
                let secondOperand = numbers.splice(-1);
                let firstOperand = numbers.splice(-1);
                numbers.push(divide(firstOperand[0], secondOperand[0]));
            } else {
                isEnoughOperands = false;
                console.log('Error: not enough operands!');
                break;
            }
        }
    }
    if (isEnoughOperands) {
        if (numbers.length > 1) {
            console.log('Error: too many operands!');
        } else {
            console.log(numbers[0]);
        }
    }

    function add(firstOperand, secondOperand) {
        return firstOperand + secondOperand;
    }

    function subtract(firstOperand, secondOperand) {
        return firstOperand - secondOperand;
    }

    function multiply(firstOperand, secondOperand) {
        return firstOperand * secondOperand;
    }

    function divide(firstOperand, secondOperand) {
        return firstOperand / secondOperand;
    }
}
jansNotation([15,
    '/']
);