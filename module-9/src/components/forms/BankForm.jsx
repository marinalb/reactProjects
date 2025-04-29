import React from 'react';
import withFormValidation from '../hoc/FormValidation';
import styles from './BankForm.module.css';

const BankForm = ({ formData, errors, handleChange, handleSubmit, isSubmitted }) => (
  <form className={styles.form} onSubmit={handleSubmit}>
    <input 
      type="text"
      name="accountNumber"
      placeholder="Account Number"
      value={formData.accountNumber || ''}
      onChange={handleChange}
    />
    {errors.accountNumber && <span className={styles.error}>{errors.accountNumber}</span>}

    <input 
      type="number"
      name="initialDeposit"
      placeholder="Initial Deposit"
      value={formData.initialDeposit || ''}
      onChange={handleChange}
    />
    {errors.initialDeposit && <span className={styles.error}>{errors.initialDeposit}</span>}

    <button type="submit">Register Account</button>

    {isSubmitted && <div className={styles.success}>Bank account registered successfully!</div>}
  </form>
);

const validateBankForm = (data) => {
  const errors = {};
  if (!data.accountNumber) errors.accountNumber = 'Account number is required';
  if (!data.initialDeposit || Number(data.initialDeposit) <= 0) errors.initialDeposit = 'Deposit must be greater than zero';
  return errors;
};

export default withFormValidation(BankForm, validateBankForm);
