/* eslint-disable import/no-duplicates */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './modal.module.css';
import './hideIcon.css';
import './showButtonModal.css';

export default function Modal({ active, setActive, icon, text, num }) {
  return (
    <div className={active ? styles.modalActive : styles.modal}>
      <div className={styles.modalContent} onMouseOut={() => setActive(false)}>
        <span className={styles.spanNum}>{num}</span>
        <img src={icon} className={styles.miniIcon}></img>
        <div className={styles.modalTextWrapper}>
          <p className={styles.modalText}>{text}</p>
        </div>
      </div>
    </div>
  );
}
