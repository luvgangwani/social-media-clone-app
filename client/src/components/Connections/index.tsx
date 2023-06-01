import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { ConnectionsListState } from '../../types';
import styles from './index.module.css';

function Connections() {

    const [connections, setConnections] = useState([]);

    const connectionsList = useSelector((state: ConnectionsListState) => state.connections.list);

    useEffect(() => {
        
    }, [])
    


  return (
    <div className={styles.container}>
        <div className={styles.header}>Connections</div>
        {
            connections.length > 0
            ?
            <div>{JSON.stringify(connections)}</div>
            :
            <div>No connections.</div>
        }
    </div>
  )
}

export default Connections;
