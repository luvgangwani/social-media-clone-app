import React from 'react'
import withAuth from '../../hoc/withAuth';

function MyAccount() {
  return (
    <div>My Account</div>
  )
}

export default withAuth(MyAccount);
