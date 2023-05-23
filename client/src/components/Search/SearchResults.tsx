import React, { useEffect, useState } from 'react'
import styles from './SearchResults.module.css';
import { SearchResultProps } from '../../types';
import Setting from '../../setting';
import { useDispatch } from 'react-redux';
import { setShowLoader } from '../../redux/loader';

function SearchResults({ searchResults }: SearchResultProps) {

    const [connectionList, setConnectionList] = useState<string[]>([]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setShowLoader(true));
        fetch(Setting.ENDPOINT_GET_CONNECTION_LIST_BY_USERNAME, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
        })
        .then(response => response.json())
        .then(({ success, message, data }) => {
            if (success) {
                setConnectionList(data);
            } else {
                alert(message);
            }
        })
        .catch(error => {
            alert(error.message);
        })
        .finally(() => {
            dispatch(setShowLoader(false));
        })
    }, [dispatch])
    

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
                setConnectionList([
                    ...connectionList,
                    username,
                ])
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

    const handleDisconnectClick = (username: string) => {
        dispatch(setShowLoader(true));
        fetch(Setting.ENDPOINT_CONNECTIONS, {
            method: 'DELETE',
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
                setConnectionList(
                    connectionList.filter(u => u !== username)
                )
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
                {
                    connectionList.includes(username) ?
                    <button className={styles.connect} onClick={() => { handleDisconnectClick(username) }}>Disconnect</button>
                    :
                    <button className={styles.connect} onClick={() => { handleConnectClick(username) }}>Connect</button>
                }
                </div>
            ))
        }
    </div>
  )
}

export default SearchResults;
