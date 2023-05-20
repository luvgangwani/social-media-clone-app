import React from 'react'
import styles from './PostCard.module.css';
import { Link } from 'react-router-dom';
import like from '../assets/like.svg';
import { PostCardProps } from '../types';

function PostCard({ name, isFeed = false, body, likeCount, timestamp, onEdit, onDelete }: PostCardProps) {
  return (
    <div className={styles.card}>
        <div className={styles.title}>
        <Link to="/profile">{ name }</Link>
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
            <span className={styles.like}>
            <img src={like} alt='like' />
            { likeCount }
            </span>
            <span className={styles.comment}>Comment</span>
        </div>
        <span className={styles.timestamp}>{ timestamp }</span>
        </div>
    </div>
  )
}

export default PostCard;
