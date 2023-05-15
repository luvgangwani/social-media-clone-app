import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import withAuth from '../../hoc/withAuth';
import styles from './index.module.css';
import { useDispatch } from 'react-redux';
import { setShowLoader } from '../../redux/loader';
import Setting from '../../setting';
import { ProfileState } from '../../types';

function MyProfile() {

  const dispatch = useDispatch();

  const [profile, setProfile] = useState<ProfileState | null>(null);

  useEffect(() => {
    dispatch(setShowLoader(true));
    fetch(Setting.ENDPOINT_PROFILES, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
    })
    .then(response => response.json())
    .then(({ success, message, data }) => {
      if(success) {
        setProfile(data)
      } else {
        alert(message)
      }
    })
    .catch(error => {
      alert(error.message)
    })
    .finally(() => {
      dispatch(setShowLoader(false));
    });
  }, [dispatch]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (profile) {
      setProfile({
        ...profile,
        [e.target.name]: e.target.value
      })
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setShowLoader(true));
    fetch(Setting.ENDPOINT_PROFILES, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(profile)
    })
    .then(response => response.json())
    .then(({ success, message }) => {
      if (success) {
        alert(message);
      } else {
        alert(message)
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
      <div className={styles.header}>My profile</div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name='firstName'
          id='firstName'
          placeholder='First name'
          value={profile ? profile.firstName : ''}
          onChange={handleInputChange}
          />
        <input
          type="text"
          name='lastName'
          id='lastName'
          placeholder='Last name'
          value={profile ? profile.lastName : ''}
          onChange={handleInputChange}
          />
        <span className={styles.username}>Username: { profile ? profile.username : ''}</span>
        <button type='submit' className={styles.update}>Update profile</button>
      </form>
    </div>
  )
}

export default withAuth(MyProfile);
