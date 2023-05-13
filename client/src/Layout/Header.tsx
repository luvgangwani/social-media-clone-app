import React from 'react'
import styles from './Header.module.css';
import Navigation from './Navigation';

function Header() {
  console.log(localStorage.getItem('token'));
  return (
    <header className={styles.header}>
        <span>Social Media Clone App</span>
        {
          localStorage.getItem('token')
          ?
          <Navigation />
          :
          <></>
        }
    </header>
  )
}

export default Header;
