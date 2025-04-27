import styles from './ButtonGrid.module.css';
import Button from '../Button/Button';

function ButtonGrid({ onDigit, onOperator, onEqual, onClear }) {
  const buttonLabels = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '+', '=',
    'CLEAR'
  ];

  const handleClick = (label) => {
    if (label === 'CLEAR') return onClear();
    if (label === '=') return onEqual();
    if (['+', '-', '*', '/'].includes(label)) return onOperator(label);
    return onDigit(label);
  };

  return (
    <div className={styles.grid}>
      {buttonLabels.map((label) => (
        <Button key={label} label={label} onClick={() => handleClick(label)} />
      ))}
    </div>
  );
}

export default ButtonGrid;