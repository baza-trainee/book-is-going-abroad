import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import CopyNotification from './index';
import { TranslateContext } from '../../../contexts/translate-context';

import styles from './FeedbackPhones.module.css';
import phoneNum from './feedback-phone-icon.svg';

const FeedbackPhones = () => {
  const { translate } = useContext(TranslateContext);
  const [showCopyNotification, setShowCopyNotification] = useState(false);
  const [contactsArray, setContactsArray] = useState([]);

  useEffect(() => {
    // Make the API request to fetch text
    axios.get('https://openbookhands.site/admin/api/v1/phone/')
      .then((response) => {
        setContactsArray(response.data);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('Error fetching images:', error);
      });
  }, []);

  const icon = phoneNum;

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

  const RenderContacts = contactsArray.map(({ id, number }) => (
    <li key={id} icon={icon} onClick={() => handleCopy(number)}>
      <img src={icon} />
      <p>{number}</p>
    </li>
  ));

  return (
    <ul className={styles['phones-list']}>
      {showCopyNotification && <CopyNotification message={translate('copyMessage')} />}
      {RenderContacts}
    </ul>
  );
};

export default FeedbackPhones;
