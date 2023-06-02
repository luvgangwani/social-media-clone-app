import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { ConnectionsListState } from '../../types';
import styles from './index.module.css';
import Setting from '../../setting';
import { useDispatch } from 'react-redux';
import { setShowLoader } from '../../redux/loader';
import withAuth from '../../hoc/withAuth';
import ConnectionList from './ConnectionList';

function Connections() {

    const [connections, setConnections] = useState([]);

    const connectionsList = useSelector((state: ConnectionsListState) => state.connections.list);
    const dispatch = useDispatch();

    useEffect(() => {
        if (connectionsList.length > 0) {
            dispatch(setShowLoader(true));
            fetch(Setting.ENDPOINT_GET_USERS_BY_USERNAMES, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    usernames: connectionsList
                })
            })
            .then(response => response.json())
            .then(({ success, message, data }) => {
                if (success) {
                    setConnections(data)
                } else {
                    alert(message)
                }
            })
            .catch((error) => {
                alert(error.message)
            })
            .finally(() => {
                dispatch(setShowLoader(false));
            });
        }
    }, [connectionsList, dispatch])
    


  return (
    <div className={styles.container}>
        <div className={styles.header}>Connections</div>
        {
            connections.length > 0
            ?
            <ConnectionList connections={connections}/>
            :
            <div>No connections.</div>
        }
    </div>
  )
}

export default withAuth(Connections);
