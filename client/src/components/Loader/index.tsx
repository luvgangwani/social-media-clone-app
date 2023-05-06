import React from 'react'
import { LoaderProps } from '../../types'
import styles from './index.module.css';

function Loader({show}: LoaderProps) {
  return (
    show
    ?
    <div className={styles.overlay}>
      <div className={styles.loader}></div>
    </div>
    :
    <></>
  )
}

export default Loader