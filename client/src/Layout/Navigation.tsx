import React from 'react';
import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

function Navigation() {

  return (
    <>
      <nav className={styles.container}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/account">My account</NavLink>
        <NavLink to="/profile">My profile</NavLink>
      </nav>
    </>
  )
}

export default Navigation;
  