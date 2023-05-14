import React from 'react'
import withAuth from '../../hoc/withAuth';
import styles from './index.module.css';
import PostCard from '../../template/PostCard';

function Posts() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>Posts</div>
        <PostCard
          name="John Doe"
          body='Ea reprehenderit velit qui magna aliquip exercitation dolor commodo commodo fugiat non eiusmod. Dolore irure duis commodo do eiusmod mollit quis occaecat. Aliquip fugiat dolore magna aliquip et anim eiusmod Lorem enim. Dolore exercitation ex labore cillum nostrud do qui cupidatat velit nulla consequat. In veniam sunt non tempor dolor voluptate aute cupidatat cillum eiusmod.'
          likeCount={10}
          timestamp='Posted 1 day ago'
        />

        <PostCard
          name="John Doe"
          body='Ea reprehenderit velit qui magna aliquip exercitation dolor commodo commodo fugiat non eiusmod. Dolore irure duis commodo do eiusmod mollit quis occaecat. Aliquip fugiat dolore magna aliquip et anim eiusmod Lorem enim. Dolore exercitation ex labore cillum nostrud do qui cupidatat velit nulla consequat. In veniam sunt non tempor dolor voluptate aute cupidatat cillum eiusmod.'
          likeCount={10}
          timestamp='Posted 1 day ago'
        />

        <PostCard
          name="John Doe"
          body='Ea reprehenderit velit qui magna aliquip exercitation dolor commodo commodo fugiat non eiusmod. Dolore irure duis commodo do eiusmod mollit quis occaecat. Aliquip fugiat dolore magna aliquip et anim eiusmod Lorem enim. Dolore exercitation ex labore cillum nostrud do qui cupidatat velit nulla consequat. In veniam sunt non tempor dolor voluptate aute cupidatat cillum eiusmod.'
          likeCount={10}
          timestamp='Posted 1 day ago'
        />
      </div>
    </>
  )
}

export default withAuth(Posts);
