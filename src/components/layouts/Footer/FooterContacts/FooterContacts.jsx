import React, { useState, useEffect } from 'react';

import CopyNotification from './index';

import styles from './FooterContacts.module.css';
import phoneNum from './phone-icon.svg';
import email from './email-icon.svg';

const contactsArray = [
  { id: 1, phone: '+38 044 209 53 02', icon: phoneNum },
  { id: 2, phone: '+38 098 683 85 21', icon: phoneNum },
  { id: 3, phone: '+38 098 306 84 84', icon: phoneNum },
  { id: 4, phone: '+38 063 499 37 69', icon: phoneNum }
];

const emailLink = 'child.help.book@\ngmail.com';

const FooterContacts = () => {
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

  const RenderContacts = contactsArray.map(({ id, phone, icon }) => (
    <li key={id} icon={icon} onClick={() => handleCopy(phone)}>
      <img src={icon} />
      <p>{phone}</p>
    </li>
  ));

  return (
    <div className={styles['footer-contacts']}>
      {showCopyNotification && (
        <CopyNotification message="Скопійовано!" />
      )}
      <ul className={styles['footer-phones']}>{RenderContacts}</ul>
      <div className={styles['footer-email']} onClick={() => handleCopy(emailLink)}>
        <img src={email} />
        <a className={styles['footer-email-link']} href="mailto:child.help.book@gmail.com">{emailLink}</a>
      </div>
    </div>
  );
};

export default FooterContacts;
