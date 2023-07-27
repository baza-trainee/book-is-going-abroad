import Container from '../Container/Container.jsx';
import FooterPayment from './FooterPayment/FooterPayment.jsx';
import FooterDocs from './FooterDocs/FooterDocs.jsx';
import FooterContacts from './FooterContacts/FooterContacts.jsx';

import styles from './Footer.module.css';
import logo from '../../../assets/img/footer/logo-footer.png';

const Footer = () => (
  <section className={styles['footer-bg']}>
    <Container>
      <div className={styles['footer-container']}>
        <div className={styles['footer-wrapper']}>
          <a href="/">
            <img className={styles['footer-logo']} src={logo} alt="logo" />
          </a>
          <p className={styles['footer-org-name']}>
            БЛАГОДІЙНА ОРГАНІЗАЦІЯ «МІЖНАРОДНИЙ БЛАГОДІЙНИЙ ФОНД «ДОПОМОГА
            ПОСТРАЖДАЛИМ ДІТЯМ З УКРАЇНИ»
          </p>
          <FooterPayment />
          <FooterDocs />
          <FooterContacts />
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
