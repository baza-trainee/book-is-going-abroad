/* eslint-disable react/prop-types */
/* eslint-disable comma-dangle */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Popup } from 'semantic-ui-react';
// import icon1 from './Group 1.png';
import styles from '../Directions.module.css';

const PopupIcon = (props) => {
  const style = {
    position: 'absolute',
    top: '-40px',
    left: '125px',
    minWidth: '385px',
    borderRadius: '14px',
    fontSize: '16px',
    lineHeight: '24px',
    padding: '20px',
  };

  return (
    <div className={styles[`${'iconWrapper'}${props.row}`]}>
      <Popup
        trigger={<img src={props.trigger} />}
        content={props.content}
        style={style}
        className={styles.popUp}
        hoverable
      />
    </div>
  );
};

export default PopupIcon;
