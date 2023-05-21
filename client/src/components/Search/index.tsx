import React, { ChangeEvent } from 'react'
import styles from './index.module.css';

function Search() {
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };
  return (
    <div className={styles.container}>
        <div className={styles.header}>Search</div>
        <input
            type="text"
            name="search"
            id="search"
            className={styles.search}
            autoFocus
            placeholder='Search'
            onChange={handleInputChange} />
    </div>
  )
}

export default Search;
