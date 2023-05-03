import React, { ChangeEvent, FormEvent, useState } from 'react'
import styles from './LoginUsername.module.css';
import { Link } from 'react-router-dom';

function LoginUsername() {

  const [username, setUsername] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const validateUsername = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch('http://localhost:5122/api/v1/users/getUserByUsername', {
      method: 'POST',
      body: JSON.stringify({
        username,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    })
  }

  return (
    <div className={styles.container}>
        <div className={styles.title}>Login</div>
        <form className={styles.card} onSubmit={validateUsername}>
            <input type='text' name='username' id='username' placeholder='Username' onChange={handleInputChange} value={username}/>
            <button type='submit'>Next</button>
            <Link to="/signup" className={styles.link}>Sign up</Link>
        </form>
    </div>
  )
}

export default LoginUsername;
