import React from 'react'
import Overlay from './Overlay';
import styles from './Modal.module.css';
import { ModalProps } from '../types';

function Modal({ title, children }: ModalProps) {
  return (
    <Overlay>
        <div className={styles.container}>
            <button className={styles.close}>Close</button>
            <div className={styles.title}>{ title }</div>
            <div className={styles.body}>{ children }</div>
        </div>
    </Overlay>
  )
}

export default Modal;
