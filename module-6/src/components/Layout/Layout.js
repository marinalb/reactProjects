import styles from './Layout.module.css';
import ButtonGrid from '../ButtonGrid/ButtonGrid';

function Layout() {
  let displayValue = '0';
  let firstOperand = null;
  let operator = null;

  const updateDisplay = () => {
    const displayInput = document.getElementById('display');
    if (displayInput) {
      displayInput.value = displayValue;
    }
  };

  const onDigit = (digit) => {
    if (displayValue === '0') {
      displayValue = digit;
    } else {
      displayValue += digit;
    }
    updateDisplay();
  };

  const onOperator = (op) => {
    firstOperand = parseFloat(displayValue);
    operator = op;
    updateDisplay();
    displayValue = '0';  
  };

  const onEqual = () => {
    if (operator && firstOperand != null) {
      const secondOperand = parseFloat(displayValue);
      let result = 0;

      switch (operator) {
        case '+':
          result = firstOperand + secondOperand;
          break;
        case '-':
          result = firstOperand - secondOperand;
          break;
        case '*':
          result = firstOperand * secondOperand;
          break;
        case '/':
          result = secondOperand !== 0 ? firstOperand / secondOperand : 'Erro';
          break;
        default:
          result = secondOperand;
      }

      displayValue = String(result);
      firstOperand = null;
      operator = null;
      updateDisplay();
    }
  };

  const onClear = () => {
    displayValue = '0';
    firstOperand = null;
    operator = null;
    updateDisplay();
  };

  return (
    <div className={styles.layout}>
      <input
        id="display"
        className={styles.display}
        type="text"
        defaultValue="0"
        readOnly
      />
      <ButtonGrid
        onDigit={onDigit}
        onOperator={onOperator}
        onClear={onClear}
        onEqual={onEqual}
      />
    </div>
  );
}

export default Layout;
