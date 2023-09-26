let firstNumber = 0;
let operator;
let secondNumber = 0;
let secondNumberFlag = false;

function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "x":
            result = num1 * num2;
            break;
        case "÷":
            result = num1 / num2;
            break;
        default:
            alert("Please enter a number");
    }
    if (result < 0 && (operator === "x" || operator === "÷")) {
        result = Math.abs(result);
    }
    return Math.round(result * 100) / 100;
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

decimalBtn.addEventListener("click", () => addDecimal());

function addDecimal() {
    if (!isDecimalPresent) {
        if (!secondNumberFlag) {
            if (inputContent === "") {
                inputContent += "0.";
            } else {
                inputContent += "."; 
            }
        }
        if (secondNumberFlag) {
            console.log(secondNumberValue)
            if (secondNumberValue === "") {
                console.log(secondNumberValue)
                secondNumber = parseFloat(secondNumberValue += "0.");
                inputContent += "0.";
            } else {
                console.log(secondNumberValue)
                secondNumber = parseFloat(secondNumberValue += ".");
                inputContent += ".";
            }
        }
        isDecimalPresent = true;
    } 
    updateInputDisplay();
}



document.getElementById("0").addEventListener("click", () => addNumber(0));

document.getElementById("1").addEventListener("click", () => addNumber(1));

document.getElementById("2").addEventListener("click", () => addNumber(2));

document.getElementById("3").addEventListener("click", () => addNumber(3));

document.getElementById("4").addEventListener("click", () => addNumber(4));

document.getElementById("5").addEventListener("click", () => addNumber(5));

document.getElementById("6").addEventListener("click", () => addNumber(6));

document.getElementById("7").addEventListener("click", () => addNumber(7));

document.getElementById("8").addEventListener("click", () => addNumber(8));

document.getElementById("9").addEventListener("click", () => addNumber(9));

function addNumber(num) {
    if (displayValue.textContent !== "") {
        preparesNextNumber(num);
    } else if (secondNumberFlag) {
        secondNumber = parseFloat(secondNumberValue += `${num}`);
        inputContent += num;
    }
    else {
        inputContent += num;
    };
    updateInputDisplay();
}

document.getElementById("addition").addEventListener("click", () => addOperator("+"));

document.getElementById("subtraction").addEventListener("click", () => minusSymbol());

document.getElementById("multiplication").addEventListener("click", () => addOperator("x"));

document.getElementById("division").addEventListener("click", () => addOperator("÷"));

function addOperator (operatorSymbol) {
    if (secondNumberFlag) {
        isDecimalPresent = false;
        displayValue.textContent = "";
        inputResult = operate(operator, firstNumber, secondNumber);
        firstNumber = parseFloat(inputResult);
        secondNumberValue = "";
        secondNumber = 0; 
        inputContent = firstNumber + ` ${operatorSymbol} `;
        updateInputDisplay();
        operator = `${operatorSymbol}`;
    } else {
        secondNumberFlag = true;
        isDecimalPresent = false;
        firstNumber = parseFloat(inputContent);
        console.log(operatorSymbol)
        inputContent += ` ${operatorSymbol} `;
        console.log(inputContent);
        updateInputDisplay();
        operator = `${operatorSymbol}`;
    };
}

function minusSymbol () {
    if (inputContent === "" || inputContent.endsWith(" + ") || inputContent.endsWith(" x ") || inputContent.endsWith(" ÷ ")) {
        inputContent +="-";
        updateInputDisplay;
    }
    else if (inputContent.endsWith(" - ")) {
        inputContent +="-";
        addOperator("+");
        updateInputDisplay;
        }
        else {
        addOperator("-");
    }
}

document.getElementById("equal-sign").addEventListener("click", () => {
    if (firstNumber === 0 && secondNumber === 0 && operator == "÷") {
        alert("You know you can't do that smh.")
        displayValue.textContent = "You Fool..."
        updateValueDisplay;
    } else if (secondNumberFlag) {
        isDecimalPresent = true;
        inputResult = operate(operator, firstNumber, secondNumber);
        updateValueDisplay();
    }
})

document.getElementById("all-clear").addEventListener("click", () => clearAllInputs())

function clearAllInputs () {
    inputContent = "";
    inputResult = "";
    firstNumber = "";
    secondNumber = "";
    secondNumberValue = "";

    updateInputDisplay();
    updateValueDisplay();
    secondNumberFlag = false;
    isDecimalPresent = false;
}

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

document.getElementById("clear").addEventListener("click", () => clearInputs());

function clearInputs () {
    if (displayValue.textContent === "") {
        if (secondNumberFlag) {
            if (secondNumberValue === "") {
                inputContent = inputContent.substring(0, inputContent.length - 2);
                updateInputDisplay();
                secondNumberFlag = false;
            } else {
                inputContent = inputContent.substring(0, inputContent.length - 1);
                updateInputDisplay();

                secondNumberValue = secondNumberValue.substring(0, secondNumberValue.length - 1);
                secondNumber = parseFloat(secondNumberValue);

                if (!secondNumberValue.includes(".")) {
                    isDecimalPresent = false;
                }
            };
        } else {
            inputContent = inputContent.substring(0, inputContent.length - 1);
            updateInputDisplay();
            if(!inputContent.includes(".")) {
                isDecimalPresent = false;
            }
        };
    } else {
        alert("You cannot do that");
    }
}

// Allowing keyboard use


window.addEventListener("keydown", function(e) {
    if (e.key === "0") {
        addNumber(0);
    } 
    if (e.key === "1") {
        addNumber(1);
    } 
    if (e.key === "2") {
        addNumber(2);
    } 
    if (e.key === "3") {
        addNumber(3);
    } 
    if (e.key === "4") {
        addNumber(4);
    } 
    if (e.key === "5") {
        addNumber(5);
    } 
    if (e.key === "6") {
        addNumber(6);
    } 
    if (e.key === "7") {
        addNumber(7);
    } 
    if (e.key === "8") {
        addNumber(8);
    } 
    if (e.key === "9") {
        addNumber(9);
    } 
    if (e.key === ".") {
        addDecimal();
    } 
    if (e.key === "+") {
        addOperator("+");
    } 
    if (e.key === "-") {
        minusSymbol();
    } 
    if (e.key === "*") {
        addOperator("x");
    } 
    if (e.key === "/") {
        e.preventDefault();
        addOperator("÷");
    } 
    if (e.key === "=" || e.key === "Enter") {
        if (secondNumberFlag) {
            inputResult = operate(operator, firstNumber, secondNumber);
            updateValueDisplay();
        }
    }
    if (e.key === "Backspace") {
        clearInputs();
    }
    if (e.key === "Delete") {
        clearAllInputs();
    }
})