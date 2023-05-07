import React from 'react';
import { Navigate, redirect } from 'react-router-dom';

const withAuth = (Component: React.FC) => {
  const AuthRoute = () => {
    if (localStorage.getItem('token')) {
        return <Component />;
    } else {
        return <Navigate to={'/auth/username'} />
    }
  }
  return AuthRoute;
}

export default withAuth;
