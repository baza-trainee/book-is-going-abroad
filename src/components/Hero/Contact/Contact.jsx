/* eslint-disable operator-linebreak */
import styles from '../Hero.module.css';
import ContactItem from './ContactItem/ContactItem.jsx';

const Contact = () => {
  const GoogleFormInform = () => {
    const url =
      'https://docs.google.com/forms/d/e/1FAIpQLScRci2XdSHH7rjXyerkOWscKGf0EILxzSbiMSzD2Q6PEM5-3Q/viewform';
    window.open(url, '_blank');
  };

  const GoogleFormNeed = () => {
    const url =
      'https://docs.google.com/forms/d/e/1FAIpQLSersXKfIVsb6QqG6nGtAuyG8U-bluzKcabLY6rHpYsWT6va_Q/viewform';
    window.open(url, '_blank');
  };

  const GoogleFormWork = () => {
    const url =
      'https://docs.google.com/forms/d/e/1FAIpQLScQprVPJ3Ka5FRxrORQJMKPGLxnUml16T4QTqUfoVzvgOQmvA/viewform';
    window.open(url, '_blank');
  };

  return (
    <div className={styles.contactWrapper}>
      <ContactItem
        title="Повідомити"
        text="Про бажання надати гуманітарну допомогу"
        onClick={GoogleFormInform}
      />

      <ContactItem
        title="Оформити"
        text="Запит на отримання гуманітарної допомоги"
        onClick={GoogleFormNeed}
      />

      <ContactItem
        title="Хочу"
        text="До вашої волонтерської команди"
        onClick={GoogleFormWork}
      />
    </div>
  );
};

export default Contact;
