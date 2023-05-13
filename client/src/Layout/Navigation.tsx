import React from 'react';
import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import Modal from '../template/Modal';
import { useDispatch } from 'react-redux';
import { setShowModal } from '../redux/modal';

function Navigation() {

  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    dispatch(setShowModal(true));
  };

  const handleNoClick = () => {
    dispatch(setShowModal(false));
  }

  const handleYesClick = () => {
    localStorage.removeItem('token');
    dispatch(setShowModal(false));
    // TODO: fix bug when navigate() doesn't remove nav links from the header
    window.location.href = '/';
  }

  return (
    <>
      <nav className={styles.container}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/account">My account</NavLink>
        <NavLink to="/profile">My profile</NavLink>
        <NavLink
          to="#"
          onClick={handleLogoutClick}
          >Logout</NavLink>
      </nav>
      <Modal
        title='Logout'
      >
        <span>Are you sure you want to logout?</span>
        <div className={styles.actions}>
          <button
            className={styles.no}
            onClick={handleNoClick}
          >No</button>
          <button
            className={styles.yes}
            onClick={handleYesClick}
            >Yes</button>
        </div>
      </Modal>
    </>
  )
}

export default Navigation;
  