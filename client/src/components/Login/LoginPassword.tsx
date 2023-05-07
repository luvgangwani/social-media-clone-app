import React, { ChangeEvent, FormEvent, useState } from 'react'
import styles from './LoginPassword.module.css';
import { useLocation } from 'react-router-dom';
import LoginTemplate from '../../template/LoginTemplate';
import { useDispatch } from 'react-redux';
import { setShowLoader } from '../../redux/loader';
import Setting from '../../setting';
import { setToken } from '../../redux/auth';

const { ENDPOINT_LOGIN } = Setting;

function LoginPassword() {

  const [password, setPassword] = useState('');

  const location = useLocation();

  const username = location.state.username;

  const dispatch = useDispatch();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(setShowLoader(true));

    fetch(ENDPOINT_LOGIN ,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      })
    })
    .then(response => response.json())
    .then(data => {
      const { success, token } = data;
      if (success) {
        // set the local storage
        localStorage.setItem('token', token);
        // update the store with the token so it redirects to the home page
        dispatch(setToken(token));
      }
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      dispatch(setShowLoader(false));
    })
    
  };

  return (
    <LoginTemplate
      buttonText='Login'
      handleFormSubmit={handleLogin}>
      <span className={styles.username}>Username: {username}</span>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        onChange={handleInputChange}
        value={password}
      />
    </LoginTemplate>
  )
}

export default LoginPassword;
