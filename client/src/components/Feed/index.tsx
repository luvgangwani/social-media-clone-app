import React, { useEffect, useState } from 'react'
import withAuth from '../../hoc/withAuth';
import { useDispatch } from 'react-redux';
import { setShowLoader } from '../../redux/loader';
import Setting from '../../setting';
import { useSelector } from 'react-redux';
import { ConnectionsListState } from '../../types';
import { PostsState } from '../../types';
import PostCard from '../../template/PostCard';
import styles from './index.module.css';

function Feed() {

  const [feed, setFeed] = useState<PostsState[]>([]);

  const dispatch = useDispatch();

  const connectionList = useSelector((state: ConnectionsListState) => state.connections.list)

  useEffect(() => {
    if (connectionList.length > 0) {
      dispatch(setShowLoader(true));
      fetch(Setting.ENDPOINT_FEED, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          connectionList
        })
      })
      .then(response => response.json())
      .then(({ success, message, data }) => {
        if (success) setFeed(data)
        else alert(message)
      })
      .catch(error => {
        alert(error.message)
      })
      .finally(() => {
        dispatch(setShowLoader(false));
      });
    }
  }, [connectionList, dispatch])
  
  return (
    <div className={styles.container}>
      <div className={styles.header}>Feed</div>
      {
        (feed.length > 0)
        ?
        feed.map(({ id, body, username, name, likesCount, updated }, index) => (
          <PostCard
            id={id}
            key={index}
            name={name}
            username={username}
            body={body}
            likeCount={likesCount}
            timestamp={updated}
            isFeed={true}
          />
        ))
        :
        <div>Nothing to show on feed.</div>
      }
    </div>
  )
}

export default withAuth(Feed);
 