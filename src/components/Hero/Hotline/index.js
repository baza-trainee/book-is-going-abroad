import React, { useEffect } from 'react';
import styles from '../Hero.module.css';

// eslint-disable-next-line react/prop-types
const CopyNotififaction = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 1500);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={styles.notification}>
      <p>{message}</p>
    </div>
  );
};

export default CopyNotififaction;
