import React, { MouseEvent } from 'react'
import styles from './SearchResults.module.css';
import { SearchResultProps } from '../../types';
import Setting from '../../setting';
import { useDispatch } from 'react-redux';
import { setShowLoader } from '../../redux/loader';

function SearchResults({ searchResults }: SearchResultProps) {

    const dispatch = useDispatch();

    const handleConnectClick = (username: string) => {
        dispatch(setShowLoader(true));
        fetch(Setting.ENDPOINT_CONNECTIONS, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                toUsername: username,
            })
        })
        .then(response => response.json())
        .then(({success, message}) => {
            if (success) {
                alert(message);
            } else {
                alert(message);
            }
        })
        .catch(error => {
            alert(error.message)
        })
        .finally(() => {
            dispatch(setShowLoader(false));
        });
    };

  return (
    <div className={styles.container}>
        {
            searchResults.map(({ name, username }, index) => (
                <div className={styles.record} key={index}>
                <div className={styles.title}>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.username}>{username}</div>
                </div>
                <button className={styles.connect} onClick={() => { handleConnectClick(username) }}>Connect</button>
                </div>
            ))
        }
    </div>
  )
}

export default SearchResults;
