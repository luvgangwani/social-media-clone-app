import React from 'react'
import styles from './PostCard.module.css';
import { Link } from 'react-router-dom';
import { LikedPostsState, PostCardProps } from '../types';
import { useSelector } from 'react-redux';
import Setting from '../setting';
import { useDispatch } from 'react-redux';
import { setShowLoader } from '../redux/loader';
import { setLikedPosts } from '../redux/likes';

function PostCard({ id, name, username, isFeed = false, body, likeCount, timestamp, onEdit, onDelete }: PostCardProps) {

  const postsLiked = useSelector((state: LikedPostsState) => state.liked.posts);

  const dispatch = useDispatch();

  const handleLikeClick = () => {
    dispatch(setShowLoader(true));
    fetch(Setting.ENDPOINT_LIKES, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        postId: id
      })
    })
    .then(response => response.json())
    .then(({ success, message }) => {
      if (success) {
        dispatch(setLikedPosts([
          ...postsLiked,
          id
        ]));
        alert(message)
      }
      else alert(message);
    })
    .catch((error) => {
      alert(error.message);
    })
    .finally(() => {
      dispatch(setShowLoader(false));
    });
  }

  const handleUnlikeClick = () => {
    dispatch(setShowLoader(true));
    fetch(Setting.ENDPOINT_LIKES, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        postId: id
      })
    })
    .then(response => response.json())
    .then(({ success, message }) => {
      if (success) {
        dispatch(setLikedPosts([
          ...postsLiked.filter(pId => pId !== id)
        ]));
        alert(message)
      }
      else alert(message);
    })
    .catch((error) => {
      alert(error.message);
    })
    .finally(() => {
      dispatch(setShowLoader(false));
    });
  }

  return (
    <div className={styles.card}>
        <div className={styles.title}>
        <Link to={`/connection/${username}`}>{ name }</Link>
        {
            isFeed
            ?
            <></>
            :
            <div className={styles.actions}>
                <button onClick={onEdit}>Edit</button>
                <button onClick={onDelete}>X</button>
            </div>
        }
        </div>
        <div className={styles.body}>{ body }</div>
        <div className={styles.footer}>
        <div className={styles.interactions}>
            <button
              className={ `${styles.like} ${(postsLiked.includes(id)) ? styles.liked : '' }` }
              onClick={postsLiked.includes(id) ? handleUnlikeClick : handleLikeClick}
            >
            <svg width="15" height="20" viewBox="0 0 31 33" fill={(postsLiked.includes(id)) ? "#f1f0f0" : "#2F5A60"} xmlns="http://www.w3.org/2000/svg">
              <path d="M15.7917 2.51089L29.0782 17.5713L15.5 33L2.21351 17.9396L15.7917 2.51089Z"/>
              <path d="M19.345 10.9091C19.345 16.934 15.0144 21.8182 9.67248 21.8182C4.33052 21.8182 0 16.934 0 10.9091C0 4.88417 4.33052 0 9.67248 0C15.0144 0 19.345 4.88417 19.345 10.9091Z"/>
              <path d="M31 10.9091C31 16.934 26.6695 21.8182 21.3275 21.8182C15.9856 21.8182 11.655 16.934 11.655 10.9091C11.655 4.88417 15.9856 0 21.3275 0C26.6695 0 31 4.88417 31 10.9091Z"/>
            </svg>
              { likeCount }
            </button>
            <span className={styles.comment}>Comment</span>
        </div>
        <span className={styles.timestamp}>{ timestamp }</span>
        </div>
    </div>
  )
}

export default PostCard;
