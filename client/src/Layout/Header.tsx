import React from 'react'
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
        <span style={{ border: '1px solid yellow'}}>Social Media Clone App</span>
    </header>
  )
}

export default Header;
