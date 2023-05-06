import React from 'react'
import styles from './index.module.css';
import Header from './Header';
import Loader from '../components/Loader';
import { useSelector } from 'react-redux';
import { LoaderState } from '../types';

function Layout({ children }: React.PropsWithChildren) {

  const { show: showLoader } = useSelector((state: LoaderState) => state.loader);

  return (
    <div className={styles.container}>
        <Header />
        <Loader show={showLoader} />
        { children }
    </div>
  )
}

export default Layout;
