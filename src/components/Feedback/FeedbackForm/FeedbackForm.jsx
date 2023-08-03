import { useState, useEffect } from 'react';

import Button from '../../UI/Button.jsx';
import styles from './FeedbackForm.module.css';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [nameError, setNameError] = useState("*Не введено ім'я");
  const [emailError, setEmailError] = useState('*Не введена електронна пошта');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (nameError || emailError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, emailError]);

  const nameHandler = (e) => {
    setName(e.target.value);
    // eslint-disable-next-line no-useless-escape
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ \'-]+$/;
    if (!nameRegex.test(String(e.target.value).toLowerCase())) {
      setNameError("*Не правильнo введенe ім'я");
      if (!e.target.value) {
        setNameError("*Не введено ім'я");
      }
    } else {
      setNameError('');
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    // eslint-disable-next-line max-len
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(String(e.target.value).toLowerCase())) {
      setEmailError('*Не правильна електронна пошта');
      if (!e.target.value) {
        setEmailError('*Не введена електронна пошта');
      }
    } else {
      setEmailError('');
    }
  };

  const blurHandler = (e) => {
    // eslint-disable-next-line default-case
    switch (e.target.name) {
      case 'text':
        setNameDirty(true);
        break;
      case 'email':
        setEmailDirty(true);
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('preventDefault');
  };

  return (
    <form className={styles['feedback-form']} onSubmit={handleSubmit} noValidate>
      <input
        onChange={(e) => nameHandler(e)}
        value={name}
        onBlur={(e) => blurHandler(e)}
        type="text"
        name="text"
        placeholder="Ім’я*"
        required
      />
      {nameDirty && nameError && (
        <p className={styles['input-error']}>{nameError}</p>
      )}
      <input
        onChange={(e) => emailHandler(e)}
        value={email}
        onBlur={(e) => blurHandler(e)}
        type="email"
        name="email"
        placeholder="Email*"
        pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
        required
      />
      {emailDirty && emailError && (
        <p className={styles['input-error']}>{emailError}</p>
      )}
      <textarea type="text" placeholder="Повідомлення" />
      <Button disable={!formValid} className={styles['feedback-button']} type="submit">
        Надіслати
      </Button>
    </form>
  );
};

export default FeedbackForm;
