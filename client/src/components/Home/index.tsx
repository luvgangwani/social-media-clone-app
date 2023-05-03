import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();
    useEffect(() => {
      if (!localStorage.getItem('token')) {
        navigate('/auth/username')
      }
    }, [])
    
  return (
    <></>
  )
}

export default Home;
