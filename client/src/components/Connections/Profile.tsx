import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styles from './Profile.module.css';
import { useDispatch } from 'react-redux';
import Setting from '../../setting';
import { setShowLoader } from '../../redux/loader';

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
        setProfile({
          ...profile,
          name: data[0].name,
          username: data[0].username
        })
      } else {
        alert(message)
      }
    })
    .catch(error => {
      alert(error.message)
    })
    .finally(() => {
      dispatch(setShowLoader(false))
    });
  }, [dispatch]);
  
  return (
    <div>{params.username}</div>
  )
}

export default ConnectionProfile;
