import React, { useEffect, useState } from 'react'
import withAuth from '../../hoc/withAuth';
import styles from './index.module.css';
import PostCard from '../../template/PostCard';
import { PostsState } from '../../types';
import { useDispatch } from 'react-redux';
import { setShowLoader } from '../../redux/loader';
import Setting from '../../setting';
import { setShowModal } from '../../redux/modal';

function Posts() {

  const [posts, setPosts] = useState<PostsState[] | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setShowLoader(true));
    fetch(Setting.ENDPOINT_POSTS, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(response => response.json())
    .then(({success, data, message, error }) => {
      if (success) {
        setPosts(data)
      } else {
        alert(message)
        if (error.name === 'TokenExpiredError') {
          localStorage.removeItem('token');
          dispatch(setShowModal(false));
          // TODO: fix bug when navigate() doesn't remove nav links from the header
          window.location.href = '/';
        }
      }
    })
    .catch(error => {
      alert(error.message)
    })
    .finally(() => {
      dispatch(setShowLoader(false));
    });
  }, [dispatch])
  

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>Posts</div>
        {
          posts?.map(({ id, name, body, likesCount, updated }, index) => (
            <PostCard
              key={index}
              id={id}
              name={name}
              body={body}
              likeCount={likesCount}
              timestamp={updated}
            />
          ))
        }
      </div>
    </>
  )
}

export default withAuth(Posts);
