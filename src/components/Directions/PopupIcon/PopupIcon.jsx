/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from '../Directions.module.css';
import Modal from '../Modal/Modal.jsx';

const PopupIcon = (props) => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className={styles[`${'iconWrapper'}${props.row}`]}>
      <img
        src={props.icon}
        className={modalActive ? 'hideIcon' : 'showIcon'}></img>
      <div
        className={`showModal ${props.style}`}
        onMouseOver={() => setModalActive(true)}></div>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        icon={props.icon}
        text={props.content}
        num={props.num}
        last={props.last}></Modal>
    </div>
  );
};

export default PopupIcon;
