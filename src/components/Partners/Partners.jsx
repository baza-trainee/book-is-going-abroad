import styles from './partners.module.css';
import Container from '../layouts/Container/Container.jsx';
import logo1 from './Logo 1.svg';

const Partners = () => (
  <section className={styles.partners}>
    <Container>
      <h2 className={styles.partnersTitle}>Партнери</h2>
      <div className={styles.partnersLogoWrapper}>
        <img src={logo1} alt="Partner-1" className={styles.logo} />
        <img src={logo1} alt="Partner-2" className={styles.logo} />
        <img src={logo1} alt="Partner-3" className={styles.logo} />
        <img src={logo1} alt="Partner-4" className={styles.logo} />
      </div>
    </Container>
  </section>
);

export default Partners;
