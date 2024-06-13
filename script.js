const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector("#equals");
const clear = document.querySelector("#ac");

let currentValue = "";
let previousValue = null;
let currentOperator = null;
let lastOperator = null;

numbers.forEach((button) => {
    button.addEventListener("click", () => {
        currentValue += button.textContent;
        updateDisplay(currentValue);
    });
});

operators.forEach((button) => {
    button.addEventListener("click", () => {
        if (currentOperator === null) {
            currentOperator = button.textContent;
            previousValue = currentValue;
            currentValue = "";
        } else {
            calculate();
            currentOperator = button.textContent;
        }
        updateDisplay(previousValue + currentOperator);
    });
});

equal.addEventListener("click", () => {
    if (currentOperator !== null) {
        calculate();
        currentOperator = null;
        updateDisplay(previousValue);
        currentValue = previousValue;
        previousValue = null;
    }
});

clear.addEventListener("click", resetCalculator);

function updateDisplay(content) {
    display.textContent = content;
}

function calculate() {
    if (previousValue !== null && currentValue !== "") {
        const operand1 = parseFloat(previousValue);
        const operand2 = parseFloat(currentValue);
        switch (currentOperator) {
            case "+":
                previousValue = (operand1 + operand2).toString();
                break;
            case "-":
                previousValue = (operand1 - operand2).toString();
                break;
            case "*":
                previousValue = (operand1 * operand2).toString();
                break;
            case "/":
                previousValue = (operand1 / operand2).toString();
                break;
        }
        currentValue = "";
    }
}

function resetCalculator() {
    currentValue = "";
    previousValue = null;
    currentOperator = null;
    lastOperator = null;
    updateDisplay("");
}
