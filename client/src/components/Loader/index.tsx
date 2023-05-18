import React from 'react'
import { LoaderProps } from '../../types'
import styles from './index.module.css';
import Overlay from '../../template/Overlay';

function Loader({show}: LoaderProps) {
  return (
    show
    ?
    <>
      <Overlay></Overlay>
      <div className={styles.loader}></div>
    </>
    :
    <></>
  )
}

export default Loader;
