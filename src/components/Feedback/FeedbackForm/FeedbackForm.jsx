import { useState, useEffect, useContext } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved
import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import XRegExp from 'xregexp';
import { TranslateContext } from '../../../contexts/translate-context';

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

  const { translate } = useContext(TranslateContext);

  const errorSendMessageHandler = (error) => {
    const errorMes = `${translate('feedback.errorSend')} ${error.message}`;
    setErrorMessage(errorMes);
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
      const response = await axios.post('https://openbookhands.site/admin/api/contact/', {
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
        // console.log(response.data);
        errorSendMessageHandler(response.data);
      }
    } catch (error) {
      // console.log(error);
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
      {translate('feedback.errorName')}
    </p>
  );

  const invalidEmail = (
    <p className={styles['input-error']}>
      {translate('feedback.errorEmail')}
    </p>
  );

  const invalidMessage = (
    <p className={styles['input-error']}>
      {translate('feedback.errorMessage')}
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
        placeholder={translate('feedback.name')}
        value={enteredName}
        required
        onChange={nameInputChangeHandler}
        onBlur={nameInputBlurHandler}
      />
      {nameInputIsInvalid && invalidName}
      <input
        className={styles[emailInputClasses]}
        type="email"
        placeholder={translate('feedback.email')}
        value={enteredEmail}
        required
        onChange={emailInputChangeHandler}
        onBlur={emailInputBlurHandler}
      />
      {emailInputIsInvalid && invalidEmail}
      <textarea
        className={styles[messageTextareaClass]}
        type="text"
        placeholder={translate('feedback.message')}
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
        {translate('feedback.send')}
      </button>
      {showSuccessSendMessage && !formIsValid && (
        <SuccessSendMessage message={translate('feedback.successSend')} />
      )}
      {showErrorSendMessage && <ErrorSendMessage message={errorMessage} />}
    </form>
  );
};

export default FeedbackForm;
