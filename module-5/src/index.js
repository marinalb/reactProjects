import './App.css';

const body = document.body;

const calculator = document.createElement('div');
calculator.className = 'calculator';

const display = document.createElement('input');
display.id = 'display'; //styling .css
display.type = 'text';
display.value = '0'; 
calculator.appendChild(display);

const buttonsContainer = document.createElement('div');
buttonsContainer.className = 'buttons'; //stylyng .css

const buttonDigit = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '+', '=',
    'CLEAR' ];

buttonDigit.forEach(digit => {
    const button = document.createElement('button');
    button.innerText = digit;
    buttonsContainer.appendChild(button);
});

calculator.appendChild(buttonsContainer);
body.appendChild(calculator);

let currentInput = '';
let operador = '';
let firstOperand = null;

function render() {
    display.value = currentInput || firstOperand || '0';
}

buttonsContainer.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        if (value === 'CLEAR') {
            currentInput = '';
            operador = '';
            firstOperand = null;
        } else if (value === '=') {
            if (firstOperand !== null && operador && currentInput) {
                const secondOperand = parseFloat(currentInput);
                if (operador === '+') firstOperand += secondOperand;
                if (operador === '-') firstOperand -= secondOperand;
                if (operador === '*') firstOperand *= secondOperand;
                if (operador === '/') firstOperand /= secondOperand;

                currentInput = '';
                operador = '';
            }
        } else if (['+', '-', '*', '/'].includes(value)) {

            if (currentInput) {
                firstOperand = parseFloat(currentInput);
                operador = value;
                currentInput = '';
            }
        } else {
            currentInput += value;
        }
        render(); 
    });
});

render();
export default calculator;