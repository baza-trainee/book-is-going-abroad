import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import CopyNotification from './index';
import { TranslateContext } from '../../../../contexts/translate-context';

import styles from './FooterContacts.module.css';
import phoneNum from './phone-icon.svg';
import emailImg from './email-icon.svg';

const FooterContacts = () => {
  const [showCopyNotification, setShowCopyNotification] = useState(false);
  const [contactsArray, setContactsArray] = useState([]);
  const [emailData, setEmailData] = useState([]);

  const { translate } = useContext(TranslateContext);

  useEffect(() => {
    // Make the API request to fetch text
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

  useEffect(() => {
    // Make the API request to fetch text
    axios
      .get('https://openbookhands.site/admin/api/v1/email/')
      .then((response) => {
        setEmailData(response.data);
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

  const RenderEmail = emailData.map(({ id, email }) => (
      <div className={styles['footer-email']} onClick={() => handleCopy(email)} key={id}>
        <img src={emailImg} />
        <p className={styles['footer-email-text']}>
          {email}
        </p>
      </div>
  ));

  return (
    <div className={styles['footer-contacts']}>
      {showCopyNotification && (
        <CopyNotification message={translate('copyMessage')} />
      )}
      <ul className={styles['footer-phones']}>{RenderContacts}</ul>
      {RenderEmail}
    </div>
  );
};

export default FooterContacts;
