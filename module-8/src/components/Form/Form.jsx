import React from 'react';
import { useState } from 'react';
import styles from './Form.module.css';
import Modal from '../Modal/Modal';
import { v4 as uuidv4 } from 'uuid';

function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [gender, setGender] = useState('');
  const [submittedDataList, setSubmittedDataList] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !age || !maritalStatus || !gender) {
      alert('Fill out ALL required fields!');
      return;
    }

    const newData = {
      id: uuidv4(),
      name,
      age,
      maritalStatus,
      gender,
      createdAt: new Date()
    };

    setSubmittedDataList((prevList) => [...prevList, newData]);

    setName('');
    setAge('');
    setMaritalStatus('');
    setGender('');
  };

  const handleDelete = (id) => {
    setSubmittedDataList((prevList) => prevList.filter(item => item.id !== id));
  };

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const sortedDataList = [...submittedDataList].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.createdAt - b.createdAt;
    } else {
      return b.createdAt - a.createdAt;
    }
  });

  return (
    <div className={styles.formWrapper}>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <h1>Alien Form</h1>

          <div className={styles.inputGroup}>
            <label>Name:</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              required 
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Age:</label>
            <input 
              type="number" 
              value={age} 
              onChange={(e) => setAge(e.target.value)}
              required 
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Marital Status:</label>
            <input 
              type="text" 
              value={maritalStatus} 
              onChange={(e) => setMaritalStatus(e.target.value)}
              required 
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Gender:</label>
            <div className={styles.genderOptions}>
              <label>
                <input 
                  type="radio" 
                  value="Male" 
                  checked={gender === 'Male'} 
                  onChange={(e) => setGender(e.target.value)}
                />
                Male
              </label>
              <label>
                <input 
                  type="radio" 
                  value="Female" 
                  checked={gender === 'Female'} 
                  onChange={(e) => setGender(e.target.value)}
                />
                Female
              </label>
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>

        <div className={styles.sortWrapper}>
          <label>Sort by:</label>
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="asc">Creation Ascending</option>
            <option value="desc">Creation Descending</option>
          </select>
        </div>

        <div className={styles.listWrapper}>
          <h2>Responses</h2>
          {sortedDataList.map((key) => (
            <div key={key.id} className={styles.listItem}>
              <p><strong>Name:</strong> {key.name}</p>
              <div className={styles.buttonGroup}>
                <button onClick={() => handleOpenModal(key)}>View Details</button>
                <button onClick={() => handleDelete(key.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>

        <Modal 
          isOpen={isModalOpen} 
          onClose={handleCloseModal} 
          item={selectedItem} 
        />
      </div>
    </div>
  );
}

export default Form;
