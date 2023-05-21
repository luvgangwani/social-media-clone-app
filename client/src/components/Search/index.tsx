import React, { ChangeEvent, useState } from 'react'
import styles from './index.module.css';
import Setting from '../../setting';
import { useDispatch } from 'react-redux';
import { setShowLoader } from '../../redux/loader';

function Search() {
    const [searchResults, setSearchResults] = useState([]);
    
    const dispatch = useDispatch();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const searchQuery = e.target.value;

        if (searchQuery && searchQuery.length >= 2) {
          dispatch(setShowLoader(true));
          fetch(Setting.ENDPOINT_SEARCH, {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ searchQuery })
          })
          .then(response => response.json())
          .then(({ success, message, data }) => {
            if (success) setSearchResults(data)
            else alert(message)
          })
          .catch(error => {
            alert(error.message)
          })
          .finally(() => {
            dispatch(setShowLoader(false))
          });
        }
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
        {
          JSON.stringify(searchResults)
        }
    </div>
  )
}

export default Search;
