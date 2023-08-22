import { useState, useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved
import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import XRegExp from 'xregexp';

import SuccessSendMessage from './successSendMessage';
import ErrorSendMessage from './errorSendMessage';
import styles from './FeedbackForm.module.css';

const FeedbackForm = () => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const [enteredMessage, setEnteredMessage] = useState('');
  const [enteredMessageTouched, setEnteredMessageTouched] = useState(false);
  const [showSuccessSendMessage, setShowSuccessSendMessage] = useState(false);
  const [showErrorSendMessage, setShowErrorSendMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const errorSendMessageHandler = (error) => {
    setErrorMessage(`Повідомлення не надіслано! Причина ${error.message}`);
    setShowErrorSendMessage(true);
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (showErrorSendMessage) {
      const timer = setTimeout(() => {
        setShowErrorSendMessage(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [showErrorSendMessage]);

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

  const nameRegex = XRegExp('^(?!.*[%^*|~{};\\"<>])[\\p{L}ʼ\\-]{2,30}$');

  const enteredNameIsValid = nameRegex.test(enteredName.trim());
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const emailRegex = /^(?=[a-zA-Z0-9])[a-zA-Z0-9.-]{1,64}@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+){1,}$/;

  const enteredEmailIsValid = emailRegex.test(enteredEmail.trim());
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  const textareaRegex = XRegExp('^[\\p{L}\\d\\s]{0,5000}$');

  const enteredMessageIsValid = textareaRegex.test(enteredMessage.trim());
  const messageInputIsInvalid = !enteredMessageIsValid && enteredMessageTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredMessageIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);
  };

  const messageInputChangeHandler = (event) => {
    setEnteredMessage(event.target.value);
  };

  const messageInputBlurHandler = () => {
    setEnteredMessageTouched(true);
  };

  const formSubmissionHandler = async (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
    setEnteredMessageTouched(true);

    if (!formIsValid) {
      return;
    }

    try {
      const response = await axios.post('url', {
        name: enteredName,
        email: enteredEmail,
        message: enteredMessage
      });

      if (response.status === 200) {
        setEnteredName('');
        setEnteredNameTouched(false);
        setEnteredEmail('');
        setEnteredEmailTouched(false);
        setEnteredMessage('');
        setEnteredMessageTouched(false);
        successSendMessageHandler();
      } else {
        console.log(response.data);
        errorSendMessageHandler(response.data);
      }
    } catch (error) {
      console.log(error);
      errorSendMessageHandler(error);
    }

    setEnteredName('');
    setEnteredNameTouched(false);
    setEnteredEmail('');
    setEnteredEmailTouched(false);
    setEnteredMessage('');
    setEnteredMessageTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid ? 'invalid' : '';

  const emailInputClasses = emailInputIsInvalid ? 'invalid' : '';

  const messageTextareaClass = messageInputIsInvalid ? 'invalid' : '';

  const invalidName = (
    <p className={styles['input-error']}>
      *Не введенe ім&apos;я або некоректно введенe ім&apos;я
    </p>
  );

  const invalidEmail = (
    <p className={styles['input-error']}>
      *Не введена або некоректно введена електронна пошта
    </p>
  );

  const invalidMessage = (
    <p className={styles['input-error']}>
      *Повідомлення не може бути довше за 5000 символів
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
      <textarea
        className={styles[messageTextareaClass]}
        type="text"
        placeholder="Повідомлення"
        value={enteredMessage}
        onChange={messageInputChangeHandler}
        onBlur={messageInputBlurHandler}
      />
      {messageInputIsInvalid && invalidMessage}
      <button
        disabled={!formIsValid}
        className={styles['feedback-button']}
        type="submit"
        // onClick={successSendMessageHandler}
      >
        Надіслати
      </button>
      {showSuccessSendMessage && !formIsValid && (
        <SuccessSendMessage message="Повідомлення надіслано!" />
      )}
      {showErrorSendMessage && <ErrorSendMessage message={errorMessage} />}
    </form>
  );
};

export default FeedbackForm;
