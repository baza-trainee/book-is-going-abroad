/* eslint-disable react/prop-types */
import { useContext } from 'react';
import styles from '../../Hero.module.css';
import Button from '../../../UI/Button.jsx';
import { TranslateContext } from '../../../../contexts/translate-context';

const ContactItem = (props) => {
  const { translate } = useContext(TranslateContext);

  return (
    <div className={styles.contactItem}>
      <h5 className={styles.contactTitle}> {props.title}</h5>
      <p className={styles.contactText}>{props.text}</p>
      <Button className={styles.contactBtn} onClick={props.onClick}>
        {translate('hero.completeForm')}
      </Button>
    </div>
  );
};

export default ContactItem;
