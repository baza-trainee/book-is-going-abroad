import Container from '../Container/Container.jsx';
import Button from '../../UI/Button.jsx';

import styles from './Footer.module.css';
import logo from '../../../assets/img/footer/logo-footer.png';
import liqpay from './liqpay-icon.svg';
import mastercard from './mastercard-icon.svg';
import privat from './privat-24-icon.svg';
import visa from './visa-icon.svg';
import phone from './phone-icon.svg';
import email from './email-icon.svg';

const Footer = () => (
  <section className={styles['footer-bg']}>
    <Container>
      <div className={styles['footer-container']}>
        <div className={styles['footer-wrapper']}>
          <div className={styles['footer-logo-wrap']}>
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <p className={styles['footer-org-name']}>
            БЛАГОДІЙНА ОРГАНІЗАЦІЯ «МІЖНАРОДНИЙ БЛАГОДІЙНИЙ ФОНД «ДОПОМОГА
            ПОСТРАЖДАЛИМ ДІТЯМ З УКРАЇНИ»
          </p>
          <div className={styles['footer-payment']}>
            <div className={styles['payment-items']}>
              <img src={liqpay} alt="liqpay" />
              <img src={mastercard} alt="liqpay" />
              <img src={privat} alt="liqpay" />
              <img src={visa} alt="liqpay" />
            </div>
            <Button>Фондувати</Button>
          </div>
          <ul>
            <li>
              <a href="/" download>
                Статут
              </a>
            </li>
            <li>
              <a href="/" download>
                Адреси
              </a>
            </li>
            <li>
              <a href="/" download>
                Звітність
              </a>
            </li>
            <li>
              <a href="/" download>
                Політика Конфіденційності
              </a>
            </li>
            <li>
              <a href="/" download>
                Умови Використання Сайту
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <img src={phone} />
              <a href="tel:+380442095302">+38 044 209 53 02</a>
            </li>
            <li>
              <img src={phone} />
              <a href="tel:+380986838521">+38 098 683 85 21</a>
            </li>
            <li>
              <img src={phone} />
              <a href="tel:+380983068484">+38 098 306 84 84</a>
            </li>
            <li>
              <img src={phone} />
              <a href="tel:+380634993769">+38 063 499 37 69</a>
            </li>
            <li>
              <img src={email} />
              <a href="mailto:child.help.book@gmail.com">
                child.help.book@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className={styles['footer-copywriter']}>
            Розробка BazaTraineeUkraine © 2023 Всі права захищені
          </p>
        </div>
      </div>
    </Container>
  </section>
);

export default Footer;
