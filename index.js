const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let currentInput = '';
let operator = '';
let firstOperand = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        if (value === '=') {
            calculate();
        } else if (['+', '-', '*', '/'].includes(value)) {
            firstOperand = parseFloat(currentInput);
            operator = value;
            currentInput = ''; 
        } else {
            currentInput += value;
        }
        display.value = currentInput; 
    });
});

function calculate() {
    if (firstOperand !== null && operator && currentInput) {
        const secondOperand = parseFloat(currentInput);
        let result = 0;

        if (operator === '+') result = firstOperand + secondOperand;
        if (operator === '-') result = firstOperand - secondOperand;
        if (operator === '*') result = firstOperand * secondOperand;
        if (operator === '/') result = firstOperand / secondOperand;

        currentInput = result.toString();
        operator = '';
        firstOperand = null;
    }
    display.value = currentInput; 
}