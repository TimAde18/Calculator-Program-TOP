let firstNumber = 0;
let operator;
let secondNumber = 0;
let secondNumberFlag = false

function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "x":
            return num1 * num2;
        case "÷":
            return num1 / num2;
        default:
            alert("Please enter a number");
    }
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
let displayInputsContent = "";
let inputResult = 0;
let secondNumberCount = "";
let decimalPresent = false;

const displayInputs = document.getElementById("display-inputs");

function updateInput() {
    displayInputs.textContent = displayInputsContent;
}

const displayValue = document.getElementById("display-value");

function updateValue() {
    displayValue.textContent = inputResult;
}

const decimalBtn = document.getElementById("decimal")

decimalBtn.addEventListener("click", () => {
    if (!decimalPresent) {
        if (secondNumberFlag) {
            secondNumber = parseFloat(secondNumberCount += ".")
        }
        decimalPresent = true;
    } else {
        decimalBtn.disabled = true;
    }
    updateInput();
})

document.getElementById("0").addEventListener("click", () => {
    if (secondNumberFlag) {
        secondNumber = parseFloat(secondNumberCount += 0);
        displayInputsContent += 0;
    } else {
        displayInputsContent += 0;
    }
    updateInput();
})

document.getElementById("1").addEventListener("click", () => {
    if (secondNumberFlag) {
        secondNumber = parseFloat(secondNumberCount += 1);
        displayInputsContent += 1;
    } else {
        displayInputsContent += 1;
    }
    updateInput();
})

document.getElementById("2").addEventListener("click", () => {
    if (secondNumberFlag) {
        secondNumber = parseFloat(secondNumberCount += 2);
        displayInputsContent += 2;
    } else {
        displayInputsContent += 2;
    }
    updateInput();
})

document.getElementById("3").addEventListener("click", () => {
    if (secondNumberFlag) {
        secondNumber = parseFloat(secondNumberCount += 3);
        displayInputsContent += 3;
    } else {
        displayInputsContent += 3;
    }
    updateInput();
})

document.getElementById("4").addEventListener("click", () => {
    if (secondNumberFlag) {
        secondNumber = parseFloat(secondNumberCount += 4);
        displayInputsContent += 4;
    } else {
        displayInputsContent += 4;
    }
    updateInput();
})

document.getElementById("5").addEventListener("click", () => {
    if (secondNumberFlag) {
        secondNumber = parseFloat(secondNumberCount += 5);
        displayInputsContent += 5;
    } else {
        displayInputsContent += 5;
    }
    updateInput();
})

document.getElementById("6").addEventListener("click", () => {
    if (secondNumberFlag) {
        secondNumber = parseFloat(secondNumberCount += 6);
        displayInputsContent += 6;
    } else {
        displayInputsContent += 6;
    }
    updateInput();
})

document.getElementById("7").addEventListener("click", () => {
    if (secondNumberFlag) {
        secondNumber = parseFloat(secondNumberCount += 7);
        displayInputsContent += 7;
    } else {
        displayInputsContent += 7;
    }
    updateInput();
})

document.getElementById("8").addEventListener("click", () => {
    if (secondNumberFlag) {
        secondNumber = parseFloat(secondNumberCount += 8);
        displayInputsContent += 8;
    } else {
        displayInputsContent += 8;
    }
    updateInput();
})

document.getElementById("9").addEventListener("click", () => {
    if (secondNumberFlag) {
        secondNumber = parseFloat(secondNumberCount += 9);
        displayInputsContent += 9;
    } else {
        displayInputsContent += 9;
    }
    updateInput();
})

document.getElementById("addition").addEventListener("click", () => {
    if (!secondNumberFlag) {
        secondNumberFlag = true;
        firstNumber = parseFloat(displayInputsContent);
        displayInputsContent += " + ";
        updateInput();
        operator = "+";
    }
})

document.getElementById("subtraction").addEventListener("click", () => {
    if (!secondNumberFlag) {
        secondNumberFlag = true;
        firstNumber = parseFloat(displayInputsContent);
        displayInputsContent += " - ";
        updateInput();
        operator = "-";
    }
})

document.getElementById("multiplication").addEventListener("click", () => {
    if (!secondNumberFlag) {
        secondNumberFlag = true;
        firstNumber = parseFloat(displayInputsContent);
        displayInputsContent += " x ";
        updateInput();
        operator = "x";
    }
})

document.getElementById("division").addEventListener("click", () => {
    if (!secondNumberFlag) {
        secondNumberFlag = true;
        firstNumber = parseFloat(displayInputsContent);
        displayInputsContent += " ÷ ";
        updateInput();
        operator = "÷";
    }
})

document.getElementById("equal-sign").addEventListener("click", () => {
    if (secondNumberFlag) {
        inputResult = operate(operator, firstNumber, secondNumber);
        updateValue();
        secondNumberFlag = false;
        decimalPresent = false;
        console.log(firstNumber)
        console.log(secondNumber)
        console.log(inputResult)
    }
})

document.getElementById("all-clear").addEventListener("click", () => {
    displayInputsContent = "";
    inputResult = "";
    secondNumberCount = "";
    console.log(inputResult)
    updateInput();
    updateValue();
    secondNumberFlag = false;
    decimalPresent = false;
})

document.getElementById("clear").addEventListener("click", () => {

})