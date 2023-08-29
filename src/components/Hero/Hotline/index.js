import React, { useEffect, useContext } from 'react';
import styles from '../Hero.module.css';
import { TranslateContext } from '../../../contexts/translate-context';

// eslint-disable-next-line react/prop-types
const CopyNotififaction = ({ onClose }) => {
  const { translate } = useContext(TranslateContext);
  useEffect(() => {
    const timer = setTimeout(onClose, 1500);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={styles.notification}>
      <p>{translate('copyMessage')}</p>
    </div>
  );
};

export default CopyNotififaction;
