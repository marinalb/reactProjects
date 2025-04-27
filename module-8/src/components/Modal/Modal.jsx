import React from 'react';
import styles from './Modal.module.css';

function Modal({ isOpen, onClose, item }) {
  if (!isOpen || !item) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <h2>Details</h2>
        <p><strong>Name:</strong> {item.name}</p>
        <p><strong>Age:</strong> {item.age}</p>
        <p><strong>Marital Status:</strong> {item.maritalStatus}</p>
        <p><strong>Gender:</strong> {item.gender}</p>
        <p><strong>Created At:</strong> {item.createdAt.toLocaleString()}</p>
      </div>
    </div>
  );
}

export default Modal;
