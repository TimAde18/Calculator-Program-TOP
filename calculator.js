let firstNumber = 0;
let operator;
let secondNumber = 0;

function operate(operator, firstNumber, secondNumber) {
    return operator(firstNumber, secondNumber);
} 

function add(num1, num2){
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};



//console.log(operate(multiply, 2, 4))
