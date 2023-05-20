import React from 'react'
import withAuth from '../../hoc/withAuth';
import styles from './index.module.css';

function MyAccount() {
  return (
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
          <button>Logout</button>
        </div>
        <div className={styles.item}>
          <button>Delete account</button>
        </div>
      </div>
    </div>
  )
}

export default withAuth(MyAccount);
