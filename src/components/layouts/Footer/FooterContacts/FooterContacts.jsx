import FooterContactsItem from './FooterContactsItem/FooterContactsItem.jsx';

import styles from './FooterContacts.module.css';
import phone from './phone-icon.svg';
import email from './email-icon.svg';

const contactsArray = [
  { id: 1, text: '+38 044 209 53 02', icon: phone },
  { id: 2, text: '+38 098 683 85 21', icon: phone },
  { id: 3, text: '+38 098 306 84 84', icon: phone },
  { id: 4, text: '+38 063 499 37 69', icon: phone }
];

const emailLink = 'child.help.book@\ngmail.com';

const FooterContacts = () => {
  const RenderContacts = contactsArray.map(({ id, text, icon }) => (
    <FooterContactsItem key={id} text={text} icon={icon} />
  ));

  return (
    <div className={styles['footer-contacts']}>
      <ul className={styles['footer-phones']}>{RenderContacts}</ul>
      <div className={styles['footer-email']}>
        <img src={email} />
        <a href="mailto:child.help.book@gmail.com">{emailLink}</a>
      </div>
    </div>
  );
};

export default FooterContacts;
