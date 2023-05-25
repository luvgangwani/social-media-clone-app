import React, { useEffect } from 'react'
import withAuth from '../../hoc/withAuth';
import { useDispatch } from 'react-redux';
import { setShowLoader } from '../../redux/loader';

function Feed() {

  const dispatch = useDispatch();

  useEffect(() => {
  }, [])
  
  return (
    <div>Feed</div>
  )
}

export default withAuth(Feed);
 