function calculator() {

    let firstNum;
    let secondNum;
    let output;

    return {
        init: (num1, num2, result) => {
            firstNum = document.querySelector(num1);
            secondNum = document.querySelector(num2);
            output = document.querySelector(result);
        },
        add: () => {
            output.value = Number(firstNum.value) + Number(secondNum.value);
        },
        subtract: () => {
            output.value = Number(firstNum.value) - Number(secondNum.value);
        }
    }
}
const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 
