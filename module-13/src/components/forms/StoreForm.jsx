import React from 'react';
import { useForm } from '../hooks/useForm';
import styles from './StoreForm.module.css';


function validateStore(data) {
  const errors = {};
  if (!data.storeName) errors.storeName = 'Name is required';
  if (!data.password || data.password.length < 6)
    errors.password = 'Password MUST be up to 6 characters';
  return errors;
}

export default function StoreForm() {
  const { formData, errors, submitted, handleChange, handleSubmit } =
    useForm(validateStore);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Store Registration</h2>

      <input
        className={styles.input}
        name="storeName"
        placeholder="Store Name"
        value={formData.storeName || ''}
        onChange={handleChange}
      />
      {errors.storeName && <div className={styles.error}>{errors.storeName}</div>}

      <input
        className={styles.input}
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password || ''}
        onChange={handleChange}
      />
      {errors.password && <div className={styles.error}>{errors.password}</div>}

      <button className={styles.button} type="submit">💾 Register</button>

      {submitted && <div className={styles.success}>🎉 Store registered successfully!</div>}
    </form>
  );
}
