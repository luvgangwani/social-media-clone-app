import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styles from './Profile.module.css';
import { useDispatch } from 'react-redux';
import Setting from '../../setting';
import { setShowLoader } from '../../redux/loader';
import PostCard from '../../template/PostCard';

function ConnectionProfile() {

  const [profile, setProfile] = useState({
    name: '',
    username: '',
    posts: [],
  });

  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setShowLoader(true));
    fetch(Setting.ENDPOINT_GET_USERS_BY_USERNAMES, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        usernames: [params.username],
      })
    })
    .then(response => response.json())
    .then(({ success, message, data }) => {
      if (success) {
        setProfile(p => ({
          ...p,
          name: data[0].name,
          username: data[0].username
        }))
      } else {
        alert(message)
      }
    })
    .then(() => {
      fetch(`${Setting.ENDPOINT_POSTS}/${params.username}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      })
      .then(response => response.json())
      .then(({ success, message, data }) => {
        if (success) {
          setProfile(p => ({
            ...p,
            posts: data
          }))
        } else {
          alert(message)
        }
      })
      .catch(error => {
        alert(error.message)
      })
    })
    .catch(error => {
      alert(error.message)
    })
    .finally(() => {
      dispatch(setShowLoader(false))
    });
  }, [dispatch, params.username]);
  
  return (
    <div>
      <div>{profile.name ? profile.name : ''}</div>
      <div>{profile.username ? profile.username : ''}</div>
      <div>Posts</div>
      <div>{
      profile.posts.length > 0
      ?
      profile.posts.map(({ body, name, likesCount, updated }, index) => (
        <PostCard
          key={index}
          name={name}
          body={body}
          likeCount={likesCount}
          timestamp={updated}
          isFeed={true}
        />
      ))
      :
      `${profile.name} hasn't posted anything.`}</div>
    </div>
  )
}

export default ConnectionProfile;
