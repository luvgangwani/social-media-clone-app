import React from 'react';
import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import Overlay from '../template/Overlay';
import Modal from '../template/Modal';

function Navigation() {
  return (
    <>
      <nav className={styles.container}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/account">My account</NavLink>
        <NavLink to="/profile">My profile</NavLink>
        <NavLink to="#">Logout</NavLink>
      </nav>
      <Modal
        title='Logout'
      >
        <span>Are you sure you want to logout?</span>
        <div className={styles.actions}>
          <button className={styles.no}>No</button>
          <button className={styles.yes}>Yes</button>
        </div>
      </Modal>
    </>
  )
}

export default Navigation;
  