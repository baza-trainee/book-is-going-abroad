import { Link } from 'react-router-dom';
import Container from '../Container/Container.jsx';
import FooterPayment from './FooterPayment/FooterPayment.jsx';
import FooterDocs from './FooterDocs/FooterDocs.jsx';
import FooterContacts from './FooterContacts/FooterContacts.jsx';

import styles from './Footer.module.css';
import logo from '../../../assets/img/footer/logo-footer.png';

const Footer = () => {
  function handleLogoClick() {
    if (window.location.pathname === '/') {
      window.location.href = '/#top';
    } else {
      window.location.href = '/';
    }
  }
  return (
    <section className={styles['footer-bg']}>
      <Container>
        <div className={styles['footer-container']}>
          <div className={styles['footer-wrapper']}>
            <div className={styles['footer-wrapper-organization']}>
              <Link
                to="/"
                onClick={handleLogoClick}
                className={styles['footer-logo']}>
                <img src={logo} alt="logo" />
              </Link>
              <p className={styles['footer-org-name']}>
                БЛАГОДІЙНА ОРГАНІЗАЦІЯ «МІЖНАРОДНИЙ БЛАГОДІЙНИЙ ФОНД «ДОПОМОГА
                ПОСТРАЖДАЛИМ ДІТЯМ З УКРАЇНИ»
              </p>
            </div>
            <div className={styles['footer-wrapper-content']}>
              <FooterPayment />
              <FooterDocs />
              <FooterContacts />
            </div>
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
};

export default Footer;
