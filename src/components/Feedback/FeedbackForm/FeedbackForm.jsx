import { useState, useEffect } from 'react';

import SuccessSendMessage from './index';
// import Button from '../../UI/Button.jsx';
import styles from './FeedbackForm.module.css';

const FeedbackForm = () => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const [showSuccessSendMessage, setShowSuccessSendMessage] = useState(false);

  const successSendMessageHandler = () => {
    setShowSuccessSendMessage(true);
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (showSuccessSendMessage) {
      const timer = setTimeout(() => {
        setShowSuccessSendMessage(false);
      }, 1250);

      return () => clearTimeout(timer);
    }
  }, [showSuccessSendMessage]);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  // eslint-disable-next-line operator-linebreak
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const enteredEmailIsValid = emailRegex.test(enteredEmail.trim());
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;
  // eslint-disable-next-line

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  // eslint-disable-next-line no-unused-vars
  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    if (!formIsValid) {
      return;
    }

    setEnteredName('');
    setEnteredNameTouched(false);
    setEnteredEmail('');
    setEnteredEmailTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid ? 'invalid' : '';

  const emailInputClasses = emailInputIsInvalid ? 'invalid' : '';

  const invalidName = (
    <p className={styles['input-error']}>*Не введенe ім&apos;я.</p>
  );
  const invalidEmail = (
    <p className={styles['input-error']}>
      *Не введена або некоректно введена електронна пошта
    </p>
  );

  return (
    <form
      className={styles['feedback-form']}
      onSubmit={formSubmissionHandler}
      noValidate>
      <input
        className={styles[nameInputClasses]}
        type="text"
        placeholder="Ім’я*"
        value={enteredName}
        required
        onChange={nameInputChangeHandler}
        onBlur={nameInputBlurHandler}
      />
      {nameInputIsInvalid && invalidName}
      <input
        className={styles[emailInputClasses]}
        type="email"
        placeholder="Email*"
        value={enteredEmail}
        required
        onChange={emailInputChangeHandler}
        onBlur={emailInputBlurHandler}
      />
      {emailInputIsInvalid && invalidEmail}
      <textarea type="text" placeholder="Повідомлення" />
      <button
        disabled={!formIsValid}
        className={styles['feedback-button']}
        type="submit"
        onClick={successSendMessageHandler}>
        Надіслати
      </button>
      {showSuccessSendMessage && !formIsValid && <SuccessSendMessage message='Повідомлення надіслано!' />}
    </form>
  );
};

export default FeedbackForm;
