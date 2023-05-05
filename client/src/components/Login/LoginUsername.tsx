import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LoginTemplate from '../../template/LoginTemplate';

function LoginUsername() {

  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const validateUsername = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setIsLoading(true);

    fetch('http://localhost:5122/api/v1/users/getUserByUsername', {
      method: 'POST',
      body: JSON.stringify({
        username,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => {
      if (data.userExists) {
        navigate('/auth/login', {
          state: {
            username,
          }
        })
      } else {
        alert('User does not exist!');
      }
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      setIsLoading(false);
    });
  }

  return (
    <LoginTemplate
      buttonText='Next'
      handleFormSubmit={validateUsername}>
      <input type='text' name='username' id='username' placeholder='Username' onChange={handleInputChange} value={username}/>
    </LoginTemplate>
  )
}

export default LoginUsername;
