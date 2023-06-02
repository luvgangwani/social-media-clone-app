import React from 'react'
import { ConnectionListProps } from '../../types';
import styles from './ConnectionList.module.css';

function ConnectionList({ connections }: ConnectionListProps) {
  return (
    <div className={styles.container}>
        {
            connections.map(({ name, username }, index) => (
                <div className={styles.connection} key={index}>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.username}>{username}</div>
                </div>
            ))
        }
    </div>
  )
}

export default ConnectionList;
