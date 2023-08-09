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

  // const nameInputClasses = nameInputIsInvalid ? 'invalid' : 'success';

  // const emailInputClasses = emailInputIsInvalid ? 'invalid' : 'success';

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

// const FeedbackForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [nameDirty, setNameDirty] = useState(false);
//   const [emailDirty, setEmailDirty] = useState(false);
//   const [nameError, setNameError] = useState("*Не введено ім'я");
//   const [emailError, setEmailError] = useState('*Не введена електронна пошта');
//   const [formValid, setFormValid] = useState(false);

//   useEffect(() => {
//     if (nameError || emailError) {
//       setFormValid(false);
//     } else {
//       setFormValid(true);
//     }
//   }, [nameError, emailError]);

//   const nameHandler = (e) => {
//     setName(e.target.value);
//     // eslint-disable-next-line no-useless-escape
//     const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ \'-]+$/;
//     if (!nameRegex.test(String(e.target.value).toLowerCase())) {
//       setNameError("*Не правильнo введенe ім'я");
//       if (!e.target.value) {
//         setNameError("*Не введено ім'я");
//       }
//     } else {
//       setNameError('');
//     }
//   };

//   const emailHandler = (e) => {
//     setEmail(e.target.value);

//     const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if (!emailRegex.test(String(e.target.value).toLowerCase())) {
//       setEmailError('*Не правильна електронна пошта');
//       if (!e.target.value) {
//         setEmailError('*Не введена електронна пошта');
//       }
//     } else {
//       setEmailError('');
//     }
//   };

//   const blurHandler = (e) => {
//     // eslint-disable-next-line default-case
//     switch (e.target.name) {
//       case 'text':
//         setNameDirty(true);
//         break;
//       case 'email':
//         setEmailDirty(true);
//         break;
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <form className={styles['feedback-form']} onSubmit={handleSubmit} noValidate>
//       <input
//         onChange={(e) => nameHandler(e)}
//         value={name}
//         onBlur={(e) => blurHandler(e)}
//         type="text"
//         name="text"
//         placeholder="Ім’я*"
//         required
//       />
//       {nameDirty && nameError && (
//         <p className={styles['input-error']}>{nameError}</p>
//       )}
//       <input
//         onChange={(e) => emailHandler(e)}
//         value={email}
//         onBlur={(e) => blurHandler(e)}
//         type="email"
//         name="email"
//         placeholder="Email*"
//         pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
//         required
//       />
//       {emailDirty && emailError && (
//         <p className={styles['input-error']}>{emailError}</p>
//       )}
//       <textarea type="text" placeholder="Повідомлення" />
//       <Button disabled={!formValid} className={styles['feedback-button']} type="submit">
//         Надіслати
//       </Button>
//     </form>
//   );
// };

// export default FeedbackForm;
