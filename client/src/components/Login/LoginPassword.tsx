import React from 'react'
import styles from './LoginPassword.module.css';
import { useLocation } from 'react-router-dom';

function LoginPassword() {

  const location = useLocation();

  return (
    <div className={styles.container}>
      <div className={styles.title}>Login</div>
      <form className={styles.card}>
        <span className={styles.username}>Username: {location.state.username}</span>
        <input type="password" name="password" id="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginPassword;
