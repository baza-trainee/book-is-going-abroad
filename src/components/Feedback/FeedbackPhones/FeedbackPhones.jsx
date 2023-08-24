import React, { useState, useEffect, useContext } from 'react';
import CopyNotification from './index';
import { TranslateContext } from '../../../contexts/translate-context';

import styles from './FeedbackPhones.module.css';
import phoneNum from './feedback-phone-icon.svg';

const contactsArray = [
  { id: 1, phone: '+38 044 209 53 02', icon: phoneNum },
  { id: 2, phone: '+38 098 306 84 84', icon: phoneNum },
  { id: 3, phone: '+38 098 683 85 21', icon: phoneNum },
  { id: 4, phone: '+38 063 499 37 69', icon: phoneNum }
];

const FeedbackPhones = () => {
  const { translate } = useContext(TranslateContext);
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
    <ul className={styles['phones-list']}>
      {showCopyNotification && <CopyNotification message={translate('copyMessage')} />}
      {RenderContacts}
    </ul>
  );
};

export default FeedbackPhones;
