/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import styles from '../Directions.module.css';
import Modal from '../Modal/Modal.jsx';

const PopupIcon = (props) => {
  const [modalActive, setModalActive] = useState(false);

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth > 767);

    if (window.innerWidth <= 767) {
      setModalActive(true);
    }
  }, []);

  const handleMouseOver = () => {
    if (!modalActive && isDesktop) {
      setModalActive(true);
    }
  };

  return (
    <div className={styles[`${'iconWrapper'}${props.row}`]}>
      <img
        src={props.icon}
        className={modalActive ? 'hideIcon' : 'showIcon'}></img>
      <div
        className={`showModal ${props.style}`}
        onMouseOver={handleMouseOver}></div>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        icon={props.icon}
        text={props.content}
        num={props.num}
        last={props.last}
        needToMove={props.needToMove}></Modal>
    </div>
  );
};

export default PopupIcon;
