import React from 'react'
import { useParams } from 'react-router-dom';
import styles from './Profile.module.css';

function ConnectionProfile() {
    const params = useParams();
  return (
    <div>{params.username}</div>
  )
}

export default ConnectionProfile;
