import React from 'react'
import withAuth from '../../hoc/withAuth';

function MyProfile() {
  return (
    <div>My Profile</div>
  )
}

export default withAuth(MyProfile);
