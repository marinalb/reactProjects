import { useState } from 'react';
import styles from './Form.module.css';

function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [gender, setGender] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !age || !maritalStatus || !gender) {
      alert('Fill out ALL required fields!');
      return;
    }

    const newData = { name, age, gender };
    setSubmittedData(newData);

    setName('');
    setAge('');
    setMaritalStatus('');
    setGender('');
  };

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

        {submittedData && (
          <div style={{ textAlign: 'center' }}>
            <h2>Response</h2>
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Age:</strong> {submittedData.age}</p>
            <p><strong>Marital Status:</strong> {submittedData.maritalStatus}</p>
            <p><strong>Gender:</strong> {submittedData.gender}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Form;
