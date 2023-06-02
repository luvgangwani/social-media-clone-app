import React from 'react'
import { ConnectionListProps } from '../../types';
import styles from './ConnectionList.module.css';
import { Link } from 'react-router-dom';

function ConnectionList({ connections }: ConnectionListProps) {
  return (
    <div className={styles.container}>
        {
            connections.map(({ name, username }, index) => (
                <Link to={`/connection/${username}`} className={styles.connection} key={index}>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.username}>{username}</div>
                </Link>
            ))
        }
    </div>
  )
}

export default ConnectionList;
