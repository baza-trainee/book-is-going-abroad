import { useContext } from 'react';
import styles from './partners.module.css';
import Container from '../layouts/Container/Container.jsx';
import logo1 from './Logo 1.svg';
import { TranslateContext } from '../../contexts/translate-context';

const Partners = () => {
  const { translate } = useContext(TranslateContext);
  return (
    <section className={styles.partners}>
      <Container>
        <h2 className={styles.partnersTitle}>{translate('partners.title')}</h2>
        <div className={styles.partnersLogoWrapper}>
          <img src={logo1} alt="Partner-1" className={styles.logo} />
          <img src={logo1} alt="Partner-2" className={styles.logo} />
          <img src={logo1} alt="Partner-3" className={styles.logo} />
          <img src={logo1} alt="Partner-4" className={styles.logo} />
        </div>
      </Container>
    </section>
  );
};

export default Partners;
