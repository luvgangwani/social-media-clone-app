import React from 'react'
import styles from './AuthTemplate.module.css';
import { AuthTemplateProps } from '../types';
import { Link } from 'react-router-dom';

function AuthTemplate({ handleFormSubmit, buttonText, pageTitle, isSignUp, children }: AuthTemplateProps) {
  return (
    <div className={styles.container}>
        <div className={styles.title}>{pageTitle}</div>
        <form className={styles.card} onSubmit={handleFormSubmit}>
            {children}
            <button type='submit'>{buttonText}</button>
            {
              isSignUp
              ?
              <Link to="/auth/username" className={styles.link}>Already have an account?</Link>
              :
              <Link to="/signup" className={styles.link}>Sign up</Link>
            }
        </form>
    </div>
  )
}

export default AuthTemplate;
