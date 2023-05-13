import React, { ChangeEvent, FormEvent, useState } from 'react'
import { SignupState } from '../../types';
import Setting from '../../setting';
import { useNavigate } from 'react-router-dom';
import AuthTemplate from '../../template/AuthTemplate';


function Signup() {

  const [user, setUser] = useState<SignupState>({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  };

  const handleSignUp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user.firstName || !user.lastName || !user.username || !user.password || !user.confirmPassword) {
      alert('Field is missing!');
    } else if (user.password !== user.confirmPassword) {
      alert('Passwords do not match!');
    } else {
      // remove confirm password
      delete user.confirmPassword;
      fetch(Setting.ENDPOINT_SIGNUP, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(user)
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert(data.message);
          navigate('/auth/username');
        }
      })
      .catch(error => {
        alert(error.message)
      })
    }
  };

  return (
    <AuthTemplate
      buttonText='Sign up'
      pageTitle='Sign up'
      isSignUp={true}
      handleFormSubmit={handleSignUp}
      >
        <input
          type='text'
          name="firstName"
          id='firstName'
          placeholder='First name'
          value={user.firstName}
          onChange={handleInputChange}
        />
        <input
          type='text'
          name="lastName"
          id='lastName'
          placeholder='Last name'
          value={user.lastName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="username"
          id="username"
          placeholder='Username'
          value={user.username}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder='Password'
          value={user.password}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder='Confirm password'
          value={user.confirmPassword}
          onChange={handleInputChange}
        />
      </AuthTemplate>
  )
}

export default Signup;
