import React from 'react';
import withFormValidation from '../hoc/FormValidation';
import styles from './StoreForm.module.css';

const StoreForm = ({ formData, errors, handleChange, handleSubmit, isSubmitted }) => (
  <form className={styles.form} onSubmit={handleSubmit}>
    <input 
      type="text"
      name="storeName"
      placeholder="Store Name"
      value={formData.storeName || ''}
      onChange={handleChange}
    />
    {errors.storeName && <span className={styles.error}>{errors.storeName}</span>}

    <input 
      type="password"
      name="password"
      placeholder="Password"
      value={formData.password || ''}
      onChange={handleChange}
    />
    {errors.password && <span className={styles.error}>{errors.password}</span>}

    <button type="submit">Register Store</button>

    {isSubmitted && <div className={styles.success}>Store registered successfully!</div>}
  </form>
);

const validateStoreForm = (data) => {
  const errors = {};
  if (!data.storeName) errors.storeName = 'Store name is required';
  if (!data.password || data.password.length < 6) errors.password = 'Password must be at least 6 characters';
  return errors;
};

export default withFormValidation(StoreForm, validateStoreForm);
