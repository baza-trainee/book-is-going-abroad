import React, { useState, useEffect } from 'react';
import styles from '../Hero.module.css';
import CopyNotififaction from './index';

export default function Hotline() {
  const phones = [
    { id: 1, number: '+38 044 209 53 02' },
    { id: 2, number: '+38 098 683 85 21' },
    { id: 3, number: '+38 098 306 84 84' },
    // eslint-disable-next-line comma-dangle
    { id: 4, number: '+38 063 499 37 69' },
  ];

  const [showCopyNotification, setShowCopyNotification] = useState(false);

  const handleCopy = (phone) => {
    navigator.clipboard.writeText(phone);
    return setShowCopyNotification(true);
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (showCopyNotification) {
      const timer = setTimeout(() => {
        setShowCopyNotification(false);
      }, 1250);

      return () => clearTimeout(timer);
    }
  }, [showCopyNotification]);

  const renderPhones = phones.map((phone) => (
    <p
      data-phone={phone.number}
      className={styles.hotlinePhone}
      key={phone.id}
      onClick={() => handleCopy(phone.number)}>
      {phone.number}
    </p>
  ));

  return (
    <div className={styles.hotlineWrapper}>
      <h5 className={styles.hotlineTitle}>Гаряча лінія</h5>
      <div className={styles.hotlinePhonesWrapper}>{renderPhones}</div>
      {showCopyNotification && (
        <CopyNotififaction message="Номер скопійовано!" />
      )}
    </div>
  );
}
