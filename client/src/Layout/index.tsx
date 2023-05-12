import React from 'react'
import styles from './index.module.css';
import Header from './Header';
import Loader from '../components/Loader';
import { useSelector } from 'react-redux';
import { LoaderState } from '../types';
import { Outlet } from 'react-router-dom';

function Layout() {

  const { show: showLoader } = useSelector((state: LoaderState) => state.loader);

  return (
    <div className={styles.container}>
        <Header />
        <Loader show={showLoader} />
        <Outlet />
    </div>
  )
}

export default Layout;
