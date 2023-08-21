import React, { useEffect } from 'react';
import styles from './FeedbackForm.module.css';

// eslint-disable-next-line react/prop-types
const ErrorSendMessage = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 1500);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={styles.notification2}>
      <p>{message}</p>
    </div>
  );
};

export default ErrorSendMessage;
