function mathOperation(operandOne, operandTwo, operator) {
    let result;

    if (operator == '+') {
        result = operandOne + operandTwo;
    } else if (operator == '-') {
        result = operandOne - operandTwo;
    } else if (operator == '*') {
        result = operandOne * operandTwo;
    } else if (operator == '/') {
        result = operandOne / operandTwo;
    } else if (operator == '%') {
        result = operandOne % operandTwo;
    } else if (operator == '**') {
        result = operandOne ** operandTwo;
    }
    console.log(result)

}
mathOperation(3, 5.5, '*');