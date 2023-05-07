import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { AuthState } from '../../types';
import { useDispatch } from 'react-redux';
import { setToken } from '../../redux/auth';

function Home() {
    const navigate = useNavigate();
    const { token } = useSelector((state: AuthState) => state.auth);
    const dispatch = useDispatch();
    const savedToken = localStorage.getItem('token');

    console.log(`Saved token is ${savedToken}`);
    console.log(`Store token is ${token}`);
    

    useEffect(() => {
      // token is not present in local storage
      if (!savedToken) {
        navigate('/auth/username')
      }
      // token is saved but not present in the state
      else if(savedToken && !token) {
        dispatch(setToken(savedToken));
      }
      // both token is saved and present in the state
      else {
        navigate('/feed');
      }
    }, [navigate, token, dispatch, savedToken])
    
  return (
    <></>
  )
}

export default Home;
