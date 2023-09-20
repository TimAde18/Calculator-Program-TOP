let firstNumber = 0;
let operator;
let secondNumber = 0;
let secondNumberFlag = false;

function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            return Math.round((num1 + num2) * 100) / 100;
        case "-":
            return Math.round((num1 - num2) * 100) / 100;
        case "x":
            return Math.round((num1 * num2) * 100) / 100;
        case "÷":
            return Math.round((num1 / num2) * 100) / 100;
        default:
            alert("Please enter a number");
    };
} ;

let inputContent = "";
let inputResult = 0;
let secondNumberValue = "";
let isDecimalPresent = false;

const displayInputs = document.getElementById("display-inputs");

function updateInputDisplay() {
    displayInputs.textContent = inputContent;
};

const displayValue = document.getElementById("display-value");

function updateValueDisplay() {
    displayValue.textContent = inputResult;
};

const decimalBtn = document.getElementById("decimal");

decimalBtn.addEventListener("click", () => {
    if (!isDecimalPresent) {
        inputContent += ".";
        if (secondNumberFlag) {
            secondNumber = parseFloat(secondNumberValue += ".")
        } 
        if (displayValue.textContent === "")
        isDecimalPresent = true;
    } 
    updateInputDisplay();
});

document.getElementById("0").addEventListener("click", () => {
    if (displayValue.textContent !== "") {
        preparesNextNumber(0);
    } else if (secondNumberFlag) {
        secondNumber = parseFloat(secondNumberValue += "0");
        inputContent += 0;
    }
    else {
        inputContent += 0;
    };
    updateInputDisplay();
});

document.getElementById("1").addEventListener("click", () => {
    if (displayValue.textContent !== "") {
        preparesNextNumber(1);
    } else if (secondNumberFlag) {
        secondNumber = parseFloat(secondNumberValue += "1");
        inputContent += 1;
    }
    else {
        inputContent += 1;
    };
    updateInputDisplay();
});

document.getElementById("2").addEventListener("click", () => {
    if (displayValue.textContent !== "") {
        preparesNextNumber(2);
    } else if (secondNumberFlag) {
        secondNumber = parseFloat(secondNumberValue += "2");
        inputContent += 2;
    }
    else {
        inputContent += 2;
    };
    updateInputDisplay();
});

document.getElementById("3").addEventListener("click", () => {
    if (displayValue.textContent !== "") {
        preparesNextNumber(3);
    } else if (secondNumberFlag) {
        secondNumber = parseFloat(secondNumberValue += "3");
        inputContent += 3;
    }
    else {
        inputContent += 3;
    };
    updateInputDisplay();
});

document.getElementById("4").addEventListener("click", () => {
    if (displayValue.textContent !== "") {
        preparesNextNumber(4);
    } else if (secondNumberFlag) {
        secondNumber = parseFloat(secondNumberValue += "4");
        inputContent += 4;
    }
    else {
        inputContent += 4;
    };
    updateInputDisplay();
});

document.getElementById("5").addEventListener("click", () => {
    if (displayValue.textContent !== "") {
        preparesNextNumber(5);
    } else if (secondNumberFlag) {
        secondNumber = parseFloat(secondNumberValue += "5");
        inputContent += 5;
    }
    else {
        inputContent += 5;
    };
    updateInputDisplay();
});

document.getElementById("6").addEventListener("click", () => {
    if (displayValue.textContent !== "") {
        preparesNextNumber(6);
    } else if (secondNumberFlag) {
        secondNumber = parseFloat(secondNumberValue += "6");
        inputContent += 6;
    }
    else {
        inputContent += 6;
    };
    updateInputDisplay();
});

document.getElementById("7").addEventListener("click", () => {
    if (displayValue.textContent !== "") {
        preparesNextNumber(7);
    } else if (secondNumberFlag) {
        secondNumber = parseFloat(secondNumberValue += "7");
        inputContent += 7;
    }
    else {
        inputContent += 7;
    };
    updateInputDisplay();
});

document.getElementById("8").addEventListener("click", () => {
    if (displayValue.textContent !== "") {
        preparesNextNumber(8);
    } else if (secondNumberFlag) {
        secondNumber = parseFloat(secondNumberValue += "8");
        inputContent += 8;
    }
    else {
        inputContent += 8;
    };
    updateInputDisplay();
});

document.getElementById("9").addEventListener("click", () => {
    if (displayValue.textContent !== "") {
        preparesNextNumber(9);
    } else if (secondNumberFlag) {
        secondNumber = parseFloat(secondNumberValue += "9");
        inputContent += 9;
    }
    else {
        inputContent += 9;
    };
    updateInputDisplay();
});

document.getElementById("addition").addEventListener("click", () => {
    if (secondNumberFlag) {
        isDecimalPresent = false;
        displayValue.textContent = "";
        inputResult = operate(operator, firstNumber, secondNumber);
        firstNumber = inputResult;
        secondNumberValue = "";
        inputContent = firstNumber + " + "
        updateInputDisplay();
        operator = "+"
    } else {
        secondNumberFlag = true;
        isDecimalPresent = false;
        firstNumber = parseFloat(inputContent);
        inputContent += " + ";
        updateInputDisplay();
        operator = "+";
    };
});

document.getElementById("subtraction").addEventListener("click", () => {
    if (secondNumberFlag) {
        isDecimalPresent = false;
        displayValue.textContent = "";
        inputResult = operate(operator, firstNumber, secondNumber);
        firstNumber = inputResult;
        secondNumberValue = "";
        inputContent = firstNumber + " - ";
        updateInputDisplay();
        console.log(firstNumber)
        console.log(secondNumber)
        operator = "-";
    } else {
        secondNumberFlag = true;
        isDecimalPresent = false;
        firstNumber = parseFloat(inputContent);
        inputContent += " - ";
        updateInputDisplay();
        operator = "-";
    };
});

document.getElementById("multiplication").addEventListener("click", () => {
    if (secondNumberFlag) {
        isDecimalPresent = false;
        displayValue.textContent = "";
        inputResult = operate(operator, firstNumber, secondNumber);
        firstNumber = inputResult;
        secondNumberValue = "";
        inputContent = firstNumber + " x ";
        updateInputDisplay();
        operator = "x";
    } else {
        secondNumberFlag = true;
        isDecimalPresent = false;
        firstNumber = parseFloat(inputContent);
        inputContent += " x ";
        updateInputDisplay();
        operator = "x";
    };
});

document.getElementById("division").addEventListener("click", () => {
    if (secondNumberFlag) {
        isDecimalPresent = false;
        displayValue.textContent = "";
        inputResult = operate(operator, firstNumber, secondNumber);
        firstNumber = inputResult;
        secondNumberValue = "";
        inputContent = firstNumber + " ÷ ";
        updateInputDisplay();
        operator = "÷";
    }  else {
        secondNumberFlag = true;
        isDecimalPresent = false;
        firstNumber = inputContent;
        inputContent += " ÷ ";
        updateInputDisplay();
        operator = "÷";
    };
});

document.getElementById("equal-sign").addEventListener("click", () => {
    if (secondNumberFlag) {
        console.log(firstNumber)
        console.log(secondNumber)
        inputResult = operate(operator, firstNumber, secondNumber);
        console.log(inputResult);
        updateValueDisplay();
    }
})

document.getElementById("all-clear").addEventListener("click", () => {
    inputContent = "";
    inputResult = "";
    firstNumber = "";
    secondNumber = "";
    secondNumberValue = "";

    updateInputDisplay();
    updateValueDisplay();
    secondNumberFlag = false;
    isDecimalPresent = false;
})

function preparesNextNumber (num) {
    inputContent = "";
    inputResult = "";
    firstNumber = "";
    secondNumber = "";
    secondNumberValue = "";

    updateInputDisplay();
    updateValueDisplay();
    secondNumberFlag = false;
    isDecimalPresent = false;

    inputContent += num;
    updateInputDisplay();
}

document.getElementById("clear").addEventListener("click", () => {
    console.log(displayValue);
    if (displayValue.textContent === "") {
        if (secondNumberFlag) {
            if (secondNumberValue === "") {
                inputContent = inputContent.substring(0, inputContent.length - 2);
                console.log(inputContent);
                updateInputDisplay();
                secondNumberFlag = false;
            } else {
                inputContent = inputContent.substring(0, inputContent.length - 1);
                updateInputDisplay();

                secondNumberValue = secondNumberValue.substring(0, secondNumberValue.length - 1);
                secondNumber = parseFloat(secondNumberValue);
                isDecimalPresent = false;
            };
        } else {
            inputContent = inputContent.substring(0, inputContent.length - 1);
            updateInputDisplay();
            isDecimalPresent = false;
        };
    } else {
        alert("You cannot do that");
    }
});