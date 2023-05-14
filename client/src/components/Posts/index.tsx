import React from 'react'
import withAuth from '../../hoc/withAuth';
import styles from './index.module.css';
import { Link } from 'react-router-dom';
import like from '../../assets/like.svg';

function Posts() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>Posts</div>
        <div className={styles.card}>
          <div className={styles.title}>
            <Link to="/account">John Doe</Link>
            <div className={styles.actions}>
              <button>Edit</button>
              <button>X</button>
            </div>
          </div>
          <div className={styles.body}>Ea reprehenderit velit qui magna aliquip exercitation dolor commodo commodo fugiat non eiusmod. Dolore irure duis commodo do eiusmod mollit quis occaecat. Aliquip fugiat dolore magna aliquip et anim eiusmod Lorem enim. Dolore exercitation ex labore cillum nostrud do qui cupidatat velit nulla consequat. In veniam sunt non tempor dolor voluptate aute cupidatat cillum eiusmod.</div>
          <div className={styles.footer}>
            <div className={styles.interactions}>
              <span className={styles.like}>
                <img src={like} alt='like' />
                10
              </span>
              <span className={styles.comment}>Comment</span>
            </div>
            <span className={styles.timestamp}>Posted 1 day ago</span>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.title}>
            <Link to="/account">John Doe</Link>
            <div className={styles.actions}>
              <button>Edit</button>
              <button>X</button>
            </div>
          </div>
          <div className={styles.body}>Ea reprehenderit velit qui magna aliquip exercitation dolor commodo commodo fugiat non eiusmod. Dolore irure duis commodo do eiusmod mollit quis occaecat. Aliquip fugiat dolore magna aliquip et anim eiusmod Lorem enim. Dolore exercitation ex labore cillum nostrud do qui cupidatat velit nulla consequat. In veniam sunt non tempor dolor voluptate aute cupidatat cillum eiusmod.</div>
          <div className={styles.footer}>
            <div className={styles.interactions}>
              <span className={styles.like}>
                <img src={like} alt='like' />
                10
              </span>
              <span className={styles.comment}>Comment</span>
            </div>
            <span className={styles.timestamp}>Posted 1 day ago</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default withAuth(Posts);
