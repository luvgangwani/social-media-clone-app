import React from "react";
import Overlay from "./Overlay";
import styles from "./Modal.module.css";
import { ModalProps, ModalState } from "../types";
import { useSelector } from "react-redux";
import { setShowModal } from "../redux/modal";
import { useDispatch } from "react-redux";

function Modal({ title, children }: ModalProps) {
  const { show } = useSelector((state: ModalState) => state.modal);

  const dispatch = useDispatch();

  const handleCloseClick = () => {
    dispatch(setShowModal(false));
  };
  return show ? (
    <Overlay>
      <div className={styles.container}>
        <button className={styles.close} onClick={handleCloseClick}>Close</button>
        <div className={styles.title}>{title}</div>
        <div className={styles.body}>{children}</div>
      </div>
    </Overlay>
  ) : (
    <></>
  );
}

export default Modal;
