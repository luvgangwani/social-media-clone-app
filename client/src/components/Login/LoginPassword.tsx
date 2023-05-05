import React, { ChangeEvent, FormEvent, useState } from 'react'
import styles from './LoginPassword.module.css';
import { useLocation } from 'react-router-dom';
import LoginTemplate from '../../template/LoginTemplate';

function LoginPassword() {

  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  const username = location.state.username;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    fetch('http://localhost:5122/api/v1/users/login',{
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
      console.log(data);
      const { success, token } = data;
      if (success) {
        localStorage.setItem('token', token);
      }
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      setIsLoading(false);
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
