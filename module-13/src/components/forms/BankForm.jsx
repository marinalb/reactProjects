import React from 'react';
import { useForm } from '../hooks/useForm';
import styles from './BankForm.module.css';

function validateBank(data) {
  const errors = {};
  if (!data.accountNumber) errors.accountNumber = 'Informe o número da conta';
  if (!data.initialDeposit || Number(data.initialDeposit) <= 0)
    errors.initialDeposit = 'Depósito deve ser maior que zero';
  return errors;
}

export default function BankForm() {
  const { formData, errors, submitted, handleChange, handleSubmit } =
    useForm(validateBank);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Bank Resgistration</h2>

      <input
        className={styles.input}
        name="accountNumber"
        placeholder="Account Number"
        value={formData.accountNumber || ''}
        onChange={handleChange}
      />
      {errors.accountNumber && <div className={styles.error}>{errors.accountNumber}</div>}

      <input
        className={styles.input}
        name="initialDeposit"
        type="number"
        placeholder="Initial Deposit"
        value={formData.initialDeposit || ''}
        onChange={handleChange}
      />
      {errors.initialDeposit && <div className={styles.error}>{errors.initialDeposit}</div>}

      <button className={styles.button} type="submit">💾 Register</button>

      {submitted && <div className={styles.success}>🎉 Accout Register!</div>}
    </form>
  );
}
