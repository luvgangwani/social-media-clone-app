import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LoginTemplate from '../../template/LoginTemplate';
import { useDispatch } from 'react-redux';
import { setShowLoader } from '../../redux/loader';
import Setting from '../../setting';

const { ENDPOINT_GET_USER_BY_USERNAME } = Setting;

function LoginUsername() {

  const [username, setUsername] = useState('');

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const validateUsername = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    dispatch(setShowLoader(true));

    fetch(ENDPOINT_GET_USER_BY_USERNAME, {
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
      dispatch(setShowLoader(false));
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
