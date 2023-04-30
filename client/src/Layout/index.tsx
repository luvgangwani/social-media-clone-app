import React from 'react'
import styles from './index.module.css';
import Header from './Header';

function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className={styles.container}>
        <Header />
        { children }
    </div>
  )
}

export default Layout;
