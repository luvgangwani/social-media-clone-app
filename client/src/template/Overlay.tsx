import React from 'react';
import styles from './Overlay.module.css';

function Overlay({ children }: React.PropsWithChildren) {
  return (
    <div className={styles.overlay}>{children}</div>
  )
}

export default Overlay;
