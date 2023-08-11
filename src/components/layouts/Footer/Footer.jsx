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
            <Link to="/" onClick={handleLogoClick}>
              <img className={styles['footer-logo']} src={logo} alt="logo" />
            </Link>
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
};

export default Footer;
