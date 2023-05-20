import React from 'react'
import withAuth from '../../hoc/withAuth';
import styles from './index.module.css';
import Modal from '../../template/Modal';
import { useDispatch } from 'react-redux';
import { setShowModal } from '../../redux/modal';

function MyAccount() {

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
      <div className={styles.container}>
        <div className={styles.header}>
          <span>My account</span>
        </div>
        <div className={styles.items}>
          <div className={styles.item}>
            <span>Posts you've liked</span>
            <span>00</span>
          </div>
          <div className={styles.item}>
            <span>Comments</span>
            <span>00</span>
          </div>
          <div className={styles.item}>
            <span>Friends</span>
            <span>00</span>
          </div>
          <div className={styles.item}>
            <button onClick={handleLogoutClick}>Logout</button>
          </div>
          <div className={styles.item}>
            <button>Delete account</button>
          </div>
        </div>
      </div>
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

export default withAuth(MyAccount);
