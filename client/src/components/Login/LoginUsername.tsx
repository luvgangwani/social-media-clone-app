import React from 'react'
import styles from './LoginUsername.module.css';

function LoginUsername() {
  return (
    <div className={styles.container}>
        <div className={styles.title}>Login</div>
        <form className={styles.card}>
            <input type='text' name='username' id='username' placeholder='Username'/>
            <button type='submit'>Next</button>
            <a href="#" className={styles.link}>Sign up</a>
        </form>
    </div>
  )
}

export default LoginUsername;
