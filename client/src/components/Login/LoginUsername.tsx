import React from 'react'
import styles from './LoginUsername.module.css';
import { Link } from 'react-router-dom';

function LoginUsername() {
  return (
    <div className={styles.container}>
        <div className={styles.title}>Login</div>
        <form className={styles.card}>
            <input type='text' name='username' id='username' placeholder='Username'/>
            <button type='submit'>Next</button>
            <Link to="/signup" className={styles.link}>Sign up</Link>
        </form>
    </div>
  )
}

export default LoginUsername;
