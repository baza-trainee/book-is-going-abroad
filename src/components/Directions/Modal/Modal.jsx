/* eslint-disable comma-dangle */
/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-duplicates */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './modal.module.css';
import './hideIcon.css';
import './showButtonModal.css';

export default function Modal({
  active,
  setActive,
  icon,
  text,
  num,
  last,
  needToMove,
}) {
  const modalClassName = `${active ? styles.modalActive : styles.modal} ${
    last && active ? styles.modalLast : ''
  }`;
  const modalContentClassName = `${
    last ? styles.modalContentLast : styles.modalContent
  }`;
  const spanClassName = `${last ? styles.spanNumLast : styles.spanNum}`;
  const miniIconClassName = `${last ? styles.miniIconLast : styles.miniIcon} ${
    needToMove ? styles.miniIconMove : ''
  }`;
  const modalTextWrapperClassName = `${
    last ? styles.modalTextWrapperLast : styles.modalTextWrapper
  }`;
  const modalTextClassName = `${
    last ? styles.modalTextLast : styles.modalText
  }`;

  return (
    <div className={modalClassName}>
      <div
        className={modalContentClassName}
        onMouseOut={() => setActive(false)}>
        <span className={spanClassName}>{num}</span>
        <img src={icon} className={miniIconClassName}></img>
        {/* <div className={modalTextWrapperClassName}> */}
        <p className={modalTextClassName}>{text}</p>
        {/* </div> */}
      </div>
    </div>
  );
}
