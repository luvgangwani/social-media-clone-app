import React from 'react'
import styles from './LoginTemplate.module.css';
import { LoginTemplateProps } from '../types';
import { Link } from 'react-router-dom';

function LoginTemplate({ handleFormSubmit, buttonText, children }: LoginTemplateProps) {
  return (
    <div className={styles.container}>
        <div className={styles.title}>Login</div>
        <form className={styles.card} onSubmit={handleFormSubmit}>
            {children}
            <button type='submit'>{buttonText}</button>
            <Link to="/signup" className={styles.link}>Sign up</Link>
        </form>
    </div>
  )
}

export default LoginTemplate;
