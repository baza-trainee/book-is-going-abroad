/* eslint-disable operator-linebreak */
import { useContext } from 'react';
import styles from '../Hero.module.css';
import ContactItem from './ContactItem/ContactItem.jsx';
import { TranslateContext } from '../../../contexts/translate-context';

const Contact = () => {
  const { translate } = useContext(TranslateContext);
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
        title={translate('hero.inform')}
        text={translate('hero.willingness')}
        onClick={GoogleFormInform}
      />

      <ContactItem
        title={translate('hero.make')}
        text={translate('hero.request')}
        onClick={GoogleFormNeed}
      />

      <ContactItem
        title={translate('hero.want')}
        text={translate('hero.join')}
        onClick={GoogleFormWork}
      />
    </div>
  );
};

export default Contact;
