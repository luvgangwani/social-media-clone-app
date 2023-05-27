import jwtDecode from 'jwt-decode';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { Token } from '../types';

const withAuth = (Component: React.FC) => {
  const AuthRoute = () => {
    const token = localStorage.getItem('token');
    if (token && (Date.now() < (jwtDecode<Token>(token).exp * 1000))) {
        return <Component />;
    } else {
        localStorage.removeItem('token');
        return <Navigate to={'/auth/username'} />
    }
  }
  return AuthRoute;
}

export default withAuth;
