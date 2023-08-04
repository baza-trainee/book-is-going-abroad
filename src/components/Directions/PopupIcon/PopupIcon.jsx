/* eslint-disable react/prop-types */
import React from 'react';

import styles from '../Directions.module.css';

const PopupIcon = (props) => (
  <div className={styles[`${'iconWrapper'}${props.row}`]}></div>
);

export default PopupIcon;
