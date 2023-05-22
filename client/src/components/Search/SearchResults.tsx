import React from 'react'
import styles from './SearchResults.module.css';
import { SearchResultProps } from '../../types';

function SearchResults({ searchResults }: SearchResultProps) {
  return (
    <div className={styles.container}>
        {
            searchResults.map(({ name, username }, index) => (
                <div className={styles.record} key={index}>
                <div className={styles.title}>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.username}>{username}</div>
                </div>
                <button className={styles.connect}>Connect</button>
                </div>
            ))
        }
    </div>
  )
}

export default SearchResults;
