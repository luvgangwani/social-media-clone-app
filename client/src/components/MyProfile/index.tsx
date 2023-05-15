import React from 'react'
import withAuth from '../../hoc/withAuth';
import styles from './index.module.css';

function MyProfile() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>My profile</div>
      <form className={styles.form}>
        <input type="text" name='firstName' id='firstName' placeholder='First name' />
        <input type="text" name='lastName' id='lastName' placeholder='Last name' />
        <span className={styles.username}>Username: </span>
        <button type='submit' className={styles.update}>Update profile</button>
      </form>
    </div>
  )
}

export default withAuth(MyProfile);