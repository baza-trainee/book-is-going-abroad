import Button from '../../../UI/Button.jsx';
import styles from './FooterPayment.module.css';
import liqpay from './liqpay-icon.svg';
import mastercard from './mastercard-icon.svg';
import privat from './privat-24-icon.svg';
import visa from './visa-icon.svg';

const FooterPayment = () => (
    <div className={styles['footer-payment']}>
      <div className={styles['payment-items']}>
        <img
          className={styles['payment-liqpay-img']}
          src={liqpay}
          alt="liqpay"
        />
        <img
          className={styles['payment-mastercard-img']}
          src={mastercard}
          alt="mastercard"
        />
        <img
          className={styles['payment-privat-img']}
          src={privat}
          alt="privat"
        />
        <img className={styles['payment-visa-img']} src={visa} alt="visa" />
      </div>
      <Button className={styles['footer-button']}>Фондувати</Button>
    </div>
);

export default FooterPayment;
