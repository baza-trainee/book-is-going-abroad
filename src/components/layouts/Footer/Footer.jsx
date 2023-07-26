import Container from '../Container/Container.jsx';
import logo from '../../../assets/img/footer/logo-footer.png';
import styles from './Footer.module.css';

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
            <div>
              {/* <img src={liqpay} alt="liqpay" />
              <img src={mastercard} alt="liqpay" />
              <img src={privat} alt="liqpay" />
              <img src={visa} alt="liqpay" /> */}
            </div>
            <div></div>
          </div>
          <div></div>
          <div></div>
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
