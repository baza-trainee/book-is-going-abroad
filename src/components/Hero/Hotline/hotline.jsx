import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styles from '../Hero.module.css';
import CopyNotififaction from './index';
import { TranslateContext } from '../../../contexts/translate-context';

export default function Hotline() {
  const { translate } = useContext(TranslateContext);
  const [contactsArray, setContactsArray] = useState([]);

  useEffect(() => {
    axios
      .get('https://openbookhands.site/admin/api/v1/phone/')
      .then((response) => {
        setContactsArray(response.data);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('Error fetching images:', error);
      });
  }, []);

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

  const renderPhones = contactsArray.map(({ id, number }) => (
    <p
      data-phone={number}
      className={styles.hotlinePhone}
      key={id}
      onClick={() => handleCopy(number)}>
      {number}
    </p>
  ));

  return (
    <div className={styles.hotlineWrapper}>
      <h6 className={styles.hotlineTitle}>{translate('hero.hotline')}</h6>
      <div className={styles.hotlinePhonesWrapper}>{renderPhones}</div>
      {showCopyNotification && <CopyNotififaction />}
    </div>
  );
}
