import styles from '../Hero.module.css';
import ContactItem from './ContactItem/ContactItem.jsx';

const Contact = () => {
  const GoogleFormInform = () => {
    const url = 'https://www.google.com';
    window.open(url, '_blank');
  };

  const GoogleFormNeed = () => {
    const url = 'https://www.google.com';
    window.open(url, '_blank');
  };

  const GoogleFormWork = () => {
    const url = 'https://www.google.com';
    window.open(url, '_blank');
  };

  return (
    <div className={styles.contactWrapper}>
      <ContactItem
        title="Повідомити"
        text="Про бажання надати гуманітарну допомогу"
        action="ЗАПОВНИТИ ФОРМУ"
        onClick={GoogleFormInform}
      />

      <ContactItem
        title="Оформити"
        text="Запит на отримання гуманітарної допомоги"
        action="ЗАПОВНИТИ ФОРМУ"
        onClick={GoogleFormNeed}
      />

      <ContactItem
        title="Хочу"
        text="До вашої волонтерської команди"
        action="ЗАПОВНИТИ ФОРМУ"
        onClick={GoogleFormWork}
      />
    </div>
  );
};

export default Contact;
