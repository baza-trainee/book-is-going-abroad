/* eslint-disable react/prop-types */
import styles from '../../Hero.module.css';
import Button from '../../../../UI/Button.jsx';

const ContactItem = (props) => (
  <div className={styles.contactItem}>
    <h5 className={styles.contactTitle}> {props.title}</h5>
    <p className={styles.contactText}>{props.text}</p>
    <Button className={styles.contactBtn} onClick={props.onClick}>
      {props.action}
    </Button>
  </div>
);

export default ContactItem;
