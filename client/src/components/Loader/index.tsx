import React from 'react'
import { LoaderProps } from '../../types'
import styles from './index.module.css';
import Overlay from '../../template/Overlay';

function Loader({show}: LoaderProps) {
  return (
    show
    ?
    <Overlay>
      <div className={styles.loader}></div>
    </Overlay>
    :
    <></>
  )
}

export default Loader;
